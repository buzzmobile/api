import express from "express";
import graphqlHTTP from "express-graphql";

import schema from "../../shared/graphql/schema";
import db from "../../shared/db";

const app = express.Router();

async function find(page, qry = {}) {
    const pageSize = 10;
    return db.deals.find(qry, { skip: pageSize * (page - 1), limit: pageSize });
}

const addFilter = (qry, filterValue, filterAttribute) => {
    if (filterValue !== "Any") {
        qry[filterAttribute] = filterValue;
    }
};

const root = {
    allDeals: async({ page = 1 }) => find(page),
    allDealsFiltered: async({ page = 1, merchantCategory = "Any", operatingSystem = "Any" }) => {
        const qry = {};
        addFilter(qry, merchantCategory, "merchant_category");
        addFilter(qry, operatingSystem, "Telcos_device_features_json.os");
        return find(page, qry);
    }
};

app.use("/graphql", graphqlHTTP({
    schema: schema,
    graphiql: true,
    rootValue: root
}));

export default app;