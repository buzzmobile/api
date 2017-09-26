import monk from "monk";
import config from "./config/config";

const db = monk(config.get("MONGODB_URI"));

db.deals = db.get("deals");
db.deals.createIndex("aw_deep_link", { sparse: true, unique: true });

export default db;
