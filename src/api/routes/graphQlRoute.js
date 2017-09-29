import express from "express";
import graphqlHTTP from "express-graphql";

import schema from "../../shared/graphql/schema";
import db from "../../shared/db";

const app = express.Router();

app.use("/graphql", graphqlHTTP({
    schema: schema,
    graphiql: true,
    context: { deals: db.deals }
}));

export default app;