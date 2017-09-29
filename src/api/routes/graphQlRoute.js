import express from "express";
import graphqlHTTP from "express-graphql";

import schema from "../../shared/graphql/schema";
import db from "../../shared/db";

const app = express.Router();

const root = { 
    allDeals: async (obj, { page = 1 }) => {
        const pageSize = 3;
        const dealsOut = await db.deals.find({}, { skip: pageSize * (page - 1), limit: pageSize });
        return dealsOut;
    }
};

app.use("/graphql", graphqlHTTP({
    schema: schema,
    graphiql: true,
    rootValue: root
}));

export default app;