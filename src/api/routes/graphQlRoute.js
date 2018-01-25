import express from "express";
import graphqlHTTP from "express-graphql";

import schema from "../../shared/graphql/schema";
import db from "../../shared/db";

const app = express.Router();

async function find(page, qry = {}, sort = {}) {
    const pageSize = 10;
    return db.deals.find(qry, { skip: pageSize * (page - 1), limit: pageSize, sort });
}

const addFilter = (qry, filterValue, filterAttribute) => {
    if (filterValue !== "Any") {
        qry[filterAttribute] = filterValue;
    }
};

const root = {
    allDeals: async({ page = 1 }) => find(page),
    allDealsFiltered: async({ 
        page = 1, 
        merchantCategory = "Any", 
        operatingSystem = "Any", 
        contractType = "Any",
        productVersionName = "Any",
        onlyIncludeUnlimitedMinutesAndTexts = true,
        manufacturer = "Any",
        sortBy = "TCO-Asc"
    }) => {
        const qry = {};
        addFilter(qry, merchantCategory, "merchant_category");
        addFilter(qry, operatingSystem, "Telcos_operating_system");
        addFilter(qry, contractType, "Telcos_contract_type");
        addFilter(qry, productVersionName, "Telcos_device_product_version_json.product_version_name");
        addFilter(qry, manufacturer, "Telcos_device_product_json.product_brand");
        if (onlyIncludeUnlimitedMinutesAndTexts) {
            addFilter(qry, "UNLIMITED", "Telcos_inc_minutes");
            addFilter(qry, "UNLIMITED", "Telcos_inc_texts");
        }
        return find(page, qry, sortBy);
    }
};

app.use("/graphql", graphqlHTTP({
    schema: schema,
    graphiql: true,
    rootValue: root
}));

export default app;