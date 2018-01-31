import monk from "monk";
import debug from "monk-middleware-debug";
import config from "./config/config";

const db = monk(config.get("MONGODB_URI"));

db.addMiddleware(debug);
db.deals = db.get("deals");
db.deals.createIndex("aw_deep_link", { sparse: true, unique: true });

export default db;
