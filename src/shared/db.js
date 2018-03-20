import monk from "monk";
import config from "./config/config";

const db = monk(config.get("MONGODB_URI"));

db.deals = db.get("deals");
db.deals.createIndex("aw_deep_link", { sparse: true, unique: true, background: true });
db.deals.createIndex({ 
    "merchant_category": 1,
    "Telcos_operating_system": 1,
    "Telcos_contract_type": 1,
    "Telcos_device_product_version_json.product_version_name": 1,
    "Telcos_device_product_json.product_brand": 1,
    "Telcos_inc_minutes": 1,
    "Telcos_inc_texts": 1,
    "Telcos_network": 1,
    "merchant_name": 1,
    "Telcos_storage_size": 1,
    "Telcos_inc_data": 1,
    "Telcos_device_features_json.colour" : 1,
}, 
{ sparse: true, background: true, name: "mainQry" });

db.deals.createIndex("Telcos_deal_cost_json.tco_inc_vat", { background: true });

export default db;
