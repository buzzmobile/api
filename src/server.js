import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import express from "express";
import helmet from "helmet";
import morgan from "morgan";
import apiRouter from "./api/apiRouter";
import config from "./shared/config/config";

const server = express();

server.set("layout", "shared/layout");
server.set("trust proxy", true);

server.use(bodyParser.json({ strict: false }));
server.use(bodyParser.urlencoded({ extended: false }));
server.use(cookieParser());
server.use(helmet());
server.use(morgan("dev"));
server.use("/api", apiRouter);

export const run = () => {
    const port = config.get("PORT");
    server.listen(port);
    console.log(`listening on port ${port}`); //eslint-disable-line no-console
};

export default server;
