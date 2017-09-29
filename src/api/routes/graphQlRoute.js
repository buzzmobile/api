import express from "express";
import graphqlHTTP from "express-graphql";

import schema from "../../shared/graphql/schema";
import db from "../../shared/db";

const app = express.Router();

async function find(page, qry={} ){
    const pageSize = 10;
    return db.deals.find(qry, { skip: pageSize * (page - 1), limit: pageSize });    
}

const root = { 
    allDeals: async ({ page = 1 }) => find(page),
    allDealsByMerchantCategory: async ({ page = 1, merchantCategory }) => {
        return find(page, { merchant_category: merchantCategory });
    }
};

app.use("/graphql", graphqlHTTP({
    schema: schema,
    graphiql: true,
    rootValue: root
}));

export default app;