import converter from "json-2-csv";

const csvToJson = csv => new Promise((resolve, reject) => {
    converter.csv2json(csv, (err, json) => {
        if (err) return reject(err);
        resolve(json);
    }, { delimiter: { wrap: "\"" } });
});

export default csvToJson;