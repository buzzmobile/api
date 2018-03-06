import express from "express";
import graphqlHTTP from "express-graphql";
import Hashids from "hashids";

const hashids = new Hashids();

import schema from "../../shared/graphql/schema";
import db from "../../shared/db";

const app = express.Router();

async function find(page, qry = {}, sort = {}) {
    log({ qry, sort });
    const pageSize = 10;
    const dbDeals = await db.deals.find(qry, { skip: pageSize * (page - 1), limit: pageSize, sort });
    return addExternalId(dbDeals);
}

async function findbyId(id) {
    const qry = { _id: hashids.decodeHex(id) };
    return db.deals.findOne(qry);
}

async function addExternalId(dbDeals) {
    return dbDeals.map(d => Object.assign({ id: hashids.encodeHex(d._id) }, d));
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
        merchant,
        storageSize,
        colour,
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
        addFilter(qry, merchant);
        addFilter(qry, storageSize);
        addFilter(qry, colour);
        return find(page, qry, sortBy);
    },
    getDealById: async({ id }) => findbyId(id)
};

app.use("/graphql", graphqlHTTP({
    schema: schema,
    graphiql: true,
    rootValue: root
}));

export default app;