import { GraphQLEnumType } from "graphql";

export const MerchantCategoryFilterEnum = new GraphQLEnumType({
    name: "MerchantCategoryFilterEnum",
    description: "Possible values for filtering by Merchant Category. To ignore this filter, set to 'Any",
    values: {
        Any: { value: { } },
        MobilePhone: { value: { merchant_category: "Mobile Phone" } },
        SIMCard: { value: { merchant_category: "SIM Card" } },
        Tablet: { value: { merchant_category: "Tablet" } },
        USBModem: { value: { merchant_category: "USB Modem" } },
        Laptop: { value: { merchant_category: "Laptop" } },
        MobileWiFi: { value: { merchant_category: "Mobile Wi-Fi" } },
        GameConsole: { value: { merchant_category: "Game Console" } },
        Smartwatch: { value: { merchant_category: "Smartwatch" } },
        Television: { value: { merchant_category: "Television" } },
        Wearable: { value: { merchant_category: "Wearable" } },
        Case: { value: { merchant_category: "Case" } },
        Headphones: { value: { merchant_category: "Headphones" } },
        Software: { value: { merchant_category: "Software" } },
        Camera: { value: { merchant_category: "Camera" } },
        MediaStreamersPlayers: { value: { merchant_category: "Media Streamers & Players" } },
        ChargingDocksStands: { value: { merchant_category: "Charging, Docks & Stands" } },
        PersonalGrooming: { value: { merchant_category: "Personal Grooming" } },
        InputDevices: { value: { merchant_category: "Input Devices" } },
        ToysGadgets: { value: { merchant_category: "Toys & Gadgets" } },
        Speakers: { value: { merchant_category: "Speakers" } },
        VRHeadsets: { value: { merchant_category: "VR Headsets" } }
    }
});

export const OperatingSystemFilterEnum = new GraphQLEnumType({
    name: "OperatingSystemFilterEnum",
    description: "Possible values for filtering by Operating System. To ignore this filter, set to 'Any' or don't specify it",
    values: {
        Any: { value: { } },
        Android: { value: { Telcos_operating_system: "Android" } },
        iOS: { value: { Telcos_operating_system: "Apple iOS" } },
        NA: { value: { Telcos_operating_system: "N/A" } },
        Proprietary: { value: { Telcos_operating_system: "Proprietary" } },
        Windows: { value: { Telcos_operating_system: "Windows" } },
        BlackBerry: { value: { Telcos_operating_system: "BlackBerry" } },
        Non: { value: { Telcos_operating_system: "None" } }
    }
});

export const ContractTypeFilterEnum = new GraphQLEnumType({
    name: "ContractTypeFilterEnum",
    description: "Possible values for filtering by Contract Type. To ignore this filter, set to 'Any' or don't specify it",
    values: {
        Any: { value: { } },
        Contract: { value: {  Telcos_contract_type :  "Phone Contract" } },
        SIMFree: { value: {  Telcos_contract_type :  "SIM/Contract Free" } },
        BroadBandContract: { value: {  Telcos_contract_type :  "Mobile Broadband Contract" } },
        PAYG: { value: {  Telcos_contract_type :  "Phone Pre-pay" } },
        BroadBandPAYG: { value: {  Telcos_contract_type :  "Mobile Broadband Pre-pay" } }
    }
});

// db.runCommand ( { distinct: "deals", key: "Telcos_device_product_version_json.product_version_name", query: { } } )
// this current list only contains iPhone versions but the field itself contains MANY more and hence is not applied to the types
export const ProductVersionNameFilterEnum = new GraphQLEnumType({
    name: "ProductVersionNameFilterEnum",
    description: "Possible values for filtering by Product Version. To ignore this filter, set to 'Any' or don't specify it",
    values: {
        Any: { value: { } },
        iPhoneX: { value: { "Telcos_device_product_version_json.product_version_name": "X" } },
        iPhone8Plus: { value: { "Telcos_device_product_version_json.product_version_name":  "8 Plus" } },
        iPhone8: { value: { "Telcos_device_product_version_json.product_version_name": "8" } },
        iPhone7Plus: { value: { "Telcos_device_product_version_json.product_version_name":  "7 Plus" } },
        iPhone7: { value: { "Telcos_device_product_version_json.product_version_name": "7" } },
        iPhoneSE: { value: { "Telcos_device_product_version_json.product_version_name":"SE" } },
        iPhone6sPlus: { value: { "Telcos_device_product_version_json.product_version_name":  "6s Plus" } },
        iPhone6s: { value: { "Telcos_device_product_version_json.product_version_name":"6s" } },
        iPhone6Plus: { value: { "Telcos_device_product_version_json.product_version_name":  "6 Plus" } },
        iPhone6: { value: { "Telcos_device_product_version_json.product_version_name": "6" } },
        iPhone5s: { value: { "Telcos_device_product_version_json.product_version_name":"5s" } },
        iPhone5c: { value: { "Telcos_device_product_version_json.product_version_name":"5c" } },
        iPhone5: { value: { "Telcos_device_product_version_json.product_version_name": "5" } },
        iPhone4s: { value: { "Telcos_device_product_version_json.product_version_name": "4s" } },
        iPhone4: { value: { "Telcos_device_product_version_json.product_version_name": "4" } },
        Xcover4DualSIM :{ value: { "Telcos_device_product_version_json.product_version_name":  "Xcover 4 Dual SIM" } },
        S8Plus:{ value: { "Telcos_device_product_version_json.product_version_name":  "S8 Plus" } },
        S8:{ value: { "Telcos_device_product_version_json.product_version_name":  "S8" } },
        S7Edge:{ value: { "Telcos_device_product_version_json.product_version_name":  "S7 Edge" } },
        S7:{ value: { "Telcos_device_product_version_json.product_version_name":  "S7" } },
        S6EdgePlus:{ value: { "Telcos_device_product_version_json.product_version_name":  "S6 Edge Plus" } },
        S6Edge:{ value: { "Telcos_device_product_version_json.product_version_name":  "S6 Edge" } },
        S6:{ value: { "Telcos_device_product_version_json.product_version_name":  "S6" } },
        S5Mini:{ value: { "Telcos_device_product_version_json.product_version_name":  "S5 Mini" } },
        S3Mini:{ value: { "Telcos_device_product_version_json.product_version_name":  "S3 Mini" } },
        Note8:{ value: { "Telcos_device_product_version_json.product_version_name":  "Note 8" } },
        J5:{ value: { "Telcos_device_product_version_json.product_version_name":  "J5" } },
        J5_2017:{ value: { "Telcos_device_product_version_json.product_version_name":  "J5 (2017)" } },
        J5_2016:{ value: { "Telcos_device_product_version_json.product_version_name":  "J5 (2016)" } },
        J3_2017:{ value: { "Telcos_device_product_version_json.product_version_name":  "J3 (2017)" } },
        J3_2016:{ value: { "Telcos_device_product_version_json.product_version_name":  "J3 (2016)" } },
        A5_2017:{ value: { "Telcos_device_product_version_json.product_version_name":  "A5 2017" } },
        A5_2016:{ value: { "Telcos_device_product_version_json.product_version_name":  "A5 2016" } },
        A3_2017:{ value: { "Telcos_device_product_version_json.product_version_name":  "A3 2017" } },
        A3_2016:{ value: { "Telcos_device_product_version_json.product_version_name":  "A3 2016" } }
    }
});
// db.runCommand ( { distinct: "deals", key: "Telcos_device_product_json.product_brand", query: { } } )
export const ManufacturerFilterEnum = new GraphQLEnumType({
    name: "ManufacturerFilterEnum",
    description: "Possible values for filtering by Manufacturer. To ignore this filter, set to 'Any' or don't specify it",
    values: {
        Any: { value: {} },
        Microsoft: { value: { "Telcos_device_product_json.product_brand": "Microsoft" } },
        HTC: { value: { "Telcos_device_product_json.product_brand": "HTC" } },
        Doro: { value: { "Telcos_device_product_json.product_brand": "Doro" } },
        Apple: { value: { "Telcos_device_product_json.product_brand": "Apple" } },
        Sony: { value: { "Telcos_device_product_json.product_brand": "Sony" } },
        CAT: { value: { "Telcos_device_product_json.product_brand": "CAT®" } },
        Alcatel: { value: { "Telcos_device_product_json.product_brand": "Alcatel" } },
        Samsung: { value: { "Telcos_device_product_json.product_brand": "Samsung" } },
        DeWalt: { value: { "Telcos_device_product_json.product_brand": "DeWalt" } },
        Nokia: { value: { "Telcos_device_product_json.product_brand": "Nokia" } },
        BlackBerry: { value: { "Telcos_device_product_json.product_brand": "BlackBerry" } },
        LG: { value: { "Telcos_device_product_json.product_brand": "LG" } },
        ZTE: { value: { "Telcos_device_product_json.product_brand": "ZTE" } },
        Moto: { value: { "Telcos_device_product_json.product_brand": "Moto" } },
        Archos: { value: { "Telcos_device_product_json.product_brand": "Archos" } },
        SIM: { value: { "Telcos_device_product_json.product_brand": "SIM Card" } },
        Huawei: { value: { "Telcos_device_product_json.product_brand": "Huawei" } },
        Lenovo: { value: { "Telcos_device_product_json.product_brand": "Lenovo" } },
        EE: { value: { "Telcos_device_product_json.product_brand": "EE" } },
        MobiWire: { value: { "Telcos_device_product_json.product_brand": "MobiWire" } },
        Netgear: { value: { "Telcos_device_product_json.product_brand": "Netgear" } },
        Google: { value: { "Telcos_device_product_json.product_brand": "Google" } },
        OnePlus: { value: { "Telcos_device_product_json.product_brand": "OnePlus" } },
        BQ: { value: { "Telcos_device_product_json.product_brand": "BQ" } },
        Fitbit: { value: { "Telcos_device_product_json.product_brand": "Fitbit" } },
        Pebble: { value: { "Telcos_device_product_json.product_brand": "Pebble" } },
        Bragi: { value: { "Telcos_device_product_json.product_brand": "Bragi" } },
        Vodafone: { value: { "Telcos_device_product_json.product_brand": "Vodafone" } },
        Honor: { value: { "Telcos_device_product_json.product_brand": "Honor" } },
        Monqi: { value: { "Telcos_device_product_json.product_brand": "Monqi"  } }
    }
});

export const SortByEnum = new GraphQLEnumType({
    name: "SortByEnum",
    description: "Possible values for Sorting",
    values: {
        "TCO_ASC": { value: { "Telcos_deal_cost_json.tco_inc_vat": 1 }, description: "Sort by Total Cost of Ownership Cheapest First" },
        "TCO_DESC": { value: { "Telcos_deal_cost_json.tco_inc_vat": -1 }, description: "Sort by Total Cost of Ownership Expensive First" }
    }
});


