/*eslint-disable no-console*/

import unzip from "unzipper";
import axios from "axios";
import es from "event-stream";

import config from "../shared/config/config";
import csvToJson from "../shared/csvToJson";
import db from "../shared/db";

async function importDataFeed(useSmallFile) {
    const smallFileUrl = "https://www.dropbox.com/s/7th59xx1iigau82/datafeed_218297-17-rows.csv.zip?dl=0&raw=1";
    const dataFeedFileUrlToUse = useSmallFile === "true" ? smallFileUrl : config.get("dataFeedFileUrl");
    console.log("Downloading the following url:", dataFeedFileUrlToUse); 

    let lineNr = 0;
    let header = "";
    let dealCsv = "";

    const response = await axios({ method: "get", url: dataFeedFileUrlToUse, responseType: "stream" });
    response.data
        .pipe(unzip.ParseOne())
        .pipe(es.split())
        .pipe(es.mapSync(line => {
            const isheaderRow = lineNr === 0 && line.includes("aw_deep_link");
            if (isheaderRow) {
                header = line;
                dealCsv = header;
            } else {
                dealCsv += "\n" + line;
                saveDeal(dealCsv);
                dealCsv = header;
            }
            lineNr += 1;
            logProgress(lineNr);
        })
        .on("error", e => { throw new Error(e); })
        .on("end", () => { 
            console.log("processing completed. Including the header and empty rows, the total number of rows processed was:", lineNr); 
            return Promise.resolve(); 
        })
    );
}

async function saveDeal(dealCsv) {
    const deals = await csvToJson(dealCsv.replace(/(")[?=^"]/g, "'"));
    const deal = deals[0];
    if (deal) {
        Object.keys(deal).map(k => {
            if (k.includes("_json")) {
                if (deal[k]){
                    deal[k] = JSON.parse(deal[k].replace(/'/g, `\"`)); //eslint-disable-line quotes
                }
            }
        });
        return db.deals.update({ aw_deep_link: deal.aw_deep_link }, deal, { upsert: true });
    }
    return Promise.resolve();
}

const logProgress = lineNr => {
    if (lineNr % 10000 === 0) {
        console.log("processing line:", lineNr); 
    }
};


export default importDataFeed;