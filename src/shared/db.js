import monk from "monk";
import config from "./config/config";

const db = monk(config.get("MONGODB_URI"));

db.deals = db.get("deals");
db.deals.createIndex("aw_deep_link", { sparse: true, unique: true, background: true, name: "idx_dealLink" });
db.deals.createIndex("Telcos_deal_cost_json.tco_inc_vat", { background: true, name: "idx_mainSort" });
db.deals.createIndex("Telcos_device_product_version_json.product_version_name", { background: true, name: "idx_productVersionQry" });
db.deals.createIndex("Telcos_inc_data", { background: true, name: "idx_mobileDataQry" });

export default db;
