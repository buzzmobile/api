import unzip from "unzipper";
import axios from "axios";
// import fs from "fs";
import es from "event-stream";

import config from "../shared/config/config";
import csvToJson from "../shared/csvToJson";
import db from "../shared/db";

async function importDataFeed(useSmallFile) {
    const smallFileUrl = "https://www.dropbox.com/s/zt02avx43j3q0wz/datafeed_218297-20-rows.csv.zip?dl=0&raw=1";
    const dataFeedFileUrlToUse = useSmallFile ? smallFileUrl : config.get("dataFeedFileUrl");
    console.log("Downloading the following url:", dataFeedFileUrlToUse); //eslint-disable-line no-console

    let lineNr = 0;
    let header = "";
    let chunk = "";
    const chunkSize = 5;

    const response = await axios({ method: "get", url: dataFeedFileUrlToUse, responseType: "stream" });
    response.data
        .pipe(unzip.ParseOne())
        // .pipe(fs.createWriteStream("./express.csv"))
        .pipe(es.split())
        .pipe(es.mapSync(line => {
            const isheaderRow = lineNr === 0 && line.includes("aw_deep_link");
            if (isheaderRow) {
                header = line;
                chunk = header;
            } else {
                if (!isheaderRow && lineNr % chunkSize === 0) {
                    chunk += "\n" + line;
                    saveChunk(chunk);
                    chunk = header;
                } else {
                    chunk += "\n" + line;
                }
            }
            lineNr += 1;
            //TODO: this will miss the last set of rows
        })
        .on("error", e => { throw new Error(e); })
        .on("end", () => { return Promise.resolve(); })
        );
    return;
}

async function saveChunk(csvChunk) {
    const deals = await csvToJson(csvChunk.replace(/(")[?=^"]/g, "'"));
    deals.map(deal => {
        console.log(deal.aw_deep_link); //eslint-disable-line no-console
        db.deals.update({ aw_deep_link: deal.aw_deep_link }, deal, { upsert: true });
    });
}
export default importDataFeed;