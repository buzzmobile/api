import express from "express";
// import R from "ramda";
// import Joi from "joi";
// import createError from "http-errors";

// import validate from "../../middleware/validate";
// import * as commonValidations from "../validations";
// import getAddresses from "../../data/utilitiesdirect/getAddresses";
// import getMeterType from "../../data/utilitiesdirect/getMeterType";
// import getAddressesWithAllInformation from "../../data/utilitiesdirect/composite/getAddressesWithAllInformation";
import asyncMiddleware from "../middleware/asyncMiddleware";
import importDataFeed from "../../handlers/importDataFeed";

let app = express.Router();

// app.get("/addresses", validate(schema), (req, res, next) => {
//     getAddresses(req.query.postCode, req.query.elec)
//         .then(data => {
//             const getMeterTypeCalls = R.pipe(R.map(ad => getMeterType(ad.id)))(data.data);
//             Promise.all(getMeterTypeCalls)
//                 .then(all => {
//                     const addressesWithMeterTypes = R.reduce((memo, obj) => {
//                         let meterTypeAddressId = obj.meta.addressId;
//                         let matchingAddress =
//                             memo.data.find(address => {
//                                 if (address.id === meterTypeAddressId) {
//                                     return address;
//                                 }
//                             });
//                         memo.newData.push(R.assoc("meterTypes", obj.data, matchingAddress));
//                         return memo;
//                     }, { meta: data.meta, data: data.data, newData: [] }, all);

//                     res.json({ meta: addressesWithMeterTypes.meta, data: addressesWithMeterTypes.newData });
//                 })
//                 .catch(e => next(e));
//         })
//         .catch(e => next(e));
// });

app.get("/import", asyncMiddleware(async (req, res) => {
    await importDataFeed(req.query.useSmallFile);
    res.sendStatus(200);
}));

export default app;