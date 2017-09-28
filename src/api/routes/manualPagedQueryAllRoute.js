import express from "express";

import asyncMiddleware from "../middleware/asyncMiddleware";
import qryAllPaged from "../../handlers/qryAllPaged";

let app = express.Router();

app.get("/deals", asyncMiddleware(async (req, res) => {
    const data = await qryAllPaged(req.query);
    res.json(data);
}));

export default app;