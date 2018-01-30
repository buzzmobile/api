import express from "express";
import graphqlHTTP from "express-graphql";

import schema from "../../shared/graphql/schema";
import db from "../../shared/db";

const app = express.Router();

async function find(page, qry = {}, sort = {}) {
    log(qry);
    const pageSize = 5;
    return db.deals.find(qry, { skip: pageSize * (page - 1), limit: pageSize, sort });
}

const log = console.log; //eslint-disable-line no-console

const addFilter = (qry, filterQry) => Object.assign(qry, filterQry);

const root = {
    allDeals: async({ page = 1 }) => find(page),
    allDealsFiltered: async({ 
        page = 1, 
        merchantCategory, 
        operatingSystem, 
        contractType,
        productVersionName,
        manufacturer,
        talkMinutes,
        numberOfTexts,
        network,
        sortBy = "TCO-Asc"
    }) => {
        const qry = {};
        addFilter(qry, merchantCategory);
        addFilter(qry, operatingSystem);
        addFilter(qry, contractType);
        addFilter(qry, manufacturer);
        addFilter(qry, productVersionName);
        addFilter(qry, talkMinutes);
        addFilter(qry, numberOfTexts);
        addFilter(qry, network);
        return find(page, qry, sortBy);
    }
};

app.use("/graphql", graphqlHTTP({
    schema: schema,
    graphiql: true,
    rootValue: root
}));

export default app;