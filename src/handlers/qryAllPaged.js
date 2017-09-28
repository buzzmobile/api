import db from "../shared/db";

async function qryAllPaged({ page = 1 }) {
    const pageSize = 10;
    return db.deals.find({}, { skip: pageSize * (page - 1), limit: pageSize });
}

export default qryAllPaged;