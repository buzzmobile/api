import express from "express";

import asyncMiddleware from "../middleware/asyncMiddleware";
import importDataFeed from "../../handlers/importDataFeed";

let app = express.Router();

app.get("/import", asyncMiddleware(async (req, res) => {
    await importDataFeed(req.query.useSmallFile);
    res.sendStatus(200);
}));

export default app;