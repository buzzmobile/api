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
                header = line.replace(/Telcos:/g, "Telcos_");
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
            console.log("Note that only relevant deals have been imported", lineNr); 
            return Promise.resolve(); 
        })
    );
}

async function saveDeal(dealCsv) {
    const cleansedCsv = cleanCsv(dealCsv);
    const deals = await csvToJson(cleansedCsv);
    const deal = deals[0];
    if (deal) {
        unwrapEmbeddedJsonFields(deal); 
        convertMobileData(deal);
        if (shouldImport(deal)){
            return db.deals.update({ aw_deep_link: deal.aw_deep_link }, deal, { upsert: true });
        }
    }
    return Promise.resolve();
}

const shouldImport = deal => {
    const modelsToImport = ["X", "S9", "S9 Plus"];
    return modelsToImport.includes(deal.Telcos_device_product_version_json.product_version_name);
};

const logProgress = lineNr => {
    if (lineNr % 10000 === 0) {
        console.log("processing line:", lineNr); 
    }
};

const cleanCsv = dealCsv => {
    return dealCsv
        .replace(/\\""/g, " inches")
        .replace(/''/g, " inches")
        .replace(/\""(\dg)""/g, '""_$1""') //eslint-disable-line quotes
        .replace(/""(\d+\.\d+)""/g, "$1")
        .replace(/(")[?=^"]/g, "'")
        .replace(/\0/g, "")
        ;
};

const unwrapEmbeddedJsonFields = deal => {
    Object.keys(deal).map(k => {
        if (k.includes("_json")) {
            if (deal[k]){
                let cleanerJsonString;
                try {
                    cleanerJsonString = deal[k]
                    .replace(/,'s/g, ",'_s")
                    .replace(/'(?=[^s])/g, `\"`) //eslint-disable-line quotes
                    .replace(/",_s"/g, ",s")
                    .replace(/:""/g, ":null")
                    .replace(/""/g, '"') //eslint-disable-line quotes
                    .replace(/you\"re/g, "you're")
                    .replace(/don\"t/g, "don't")
                    .replace(/you\"ll/g, "you'll")
                    .replace(/you\"ve/g, "you've")
                    ;
                    deal[k] = JSON.parse(cleanerJsonString); 
                }
                catch(e) {
                    console.error(`error parsing deal aw_deep_link:${deal.aw_deep_link} field ${k}`, e);
                    console.error("Printing out deal[k]:");
                    console.error(deal[k]);
                    console.error("Printing out cleanerJsonString:");
                    console.error(cleanerJsonString);
                }
            }
        }
    });
};

const convertMobileData = deal => {
    if (!isNaN(+deal.Telcos_inc_data)) {
        deal.Telcos_inc_data = +deal.Telcos_inc_data;
    }
    return deal;
};

export const saveDealAsync = saveDeal;
export default importDataFeed;