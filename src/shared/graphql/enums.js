import { GraphQLEnumType } from "graphql";

export const MerchantCategoryEnum = new GraphQLEnumType({
    name: "MerchantCategoryEnum",
    description: "Possible values for Merchant Category. Can set to Any if using in a query and the field should not be filtered by",
    values: {
        MobilePhone: { value: "Mobile Phone" },
        SIMCard: { value: "SIM Card" },
        Tablet: { value: "Tablet" },
        USBModem: { value: "USB Modem" },
        Laptop: { value: "Laptop" },
        MobileWiFi: { value: "Mobile Wi-Fi" },
        GameConsole: { value: "Game Console" },
        Smartwatch: { value: "Smartwatch" },
        Television: { value: "Television" },
        Wearable: { value: "Wearable" },
        Case: { value: "Case" },
        Headphones: { value: "Headphones" },
        Software: { value: "Software" },
        Camera: { value: "Camera" },
        MediaStreamersPlayers: { value: "Media Streamers & Players" },
        ChargingDocksStands: { value: "Charging, Docks & Stands" },
        PersonalGrooming: { value: "Personal Grooming" },
        InputDevices: { value: "Input Devices" },
        ToysGadgets: { value: "Toys & Gadgets" },
        Speakers: { value: "Speakers" },
        VRHeadsets: { value: "VR Headsets" },
        Any: { value: "Any" }
    }
});

export const OperatingSystemEnum = new GraphQLEnumType({
    name: "OperatingSystemEnum",
    description: "Possible values for Operating System. Can set to Any if using in a query and the field should not be filtered by",
    values: {
        Android: { value: "Android" },
        iOS: { value: "Apple iOS" },
        NA: { value: "N/A" },
        Proprietary: { value: "Proprietary" },
        Windows: { value: "Windows" },
        BlackBerry: { value: "BlackBerry" },
        Non: { value: "None" },
        Any: { value: "Any" }
    }
});

export const ContractTypeEnum = new GraphQLEnumType({
    name: "ContractTypeEnum",
    description: "Possible values for Contract Type. Can set to Any if using in a query and the field should not be filtered by",
    values: {
        Contract: { value: "Phone Contract" },
        SIMFree: { value: "SIM/Contract Free" },
        BroadBandContract: { value: "Mobile Broadband Contract" },
        PAYG: { value: "Phone Pre-pay" },
        BroadBandPAYG: { value: "Mobile Broadband Pre-pay" },
        Any: { value: "Any" }
    }
});

// db.runCommand ( { distinct: "deals", key: "Telcos_device_product_version_json.product_version_name", query: { } } )
// this current list only contains iPhone versions but the field itself contains MANY more and hence is not applied to the types
export const ProductVersionNameEnum = new GraphQLEnumType({
    name: "ProductVersionNameEnum",
    description: "Possible values for Product Version. Can set to Any if using in a query and the field should not be filtered by",
    values: {
        "iPhone7Plus": { value: "7 Plus" },
        "iPhone6s": { value:     "6s" },
        "iPhone7": { value:      "7" },
        "iPhoneSE": { value:     "SE" },
        "iPhone6": { value:      "6" },
        "iPhone6sPlus": { value: "6s Plus" },
        "iPhone8": { value:      "8" },
        "iPhone8Plus": { value: "8 Plus" },
        "iPhone5s": { value:     "5s" },
        "iPhoneX": { value:      "X" },
        "iPhone6Plus": { value: "6 Plus" },
        "iPhone5c": { value:     "5c" },
        "iPhone5": { value:      "5" },
        "iPhone4": { value:      "4" },
        "iPhone4s": { value:      "4s" },
        "S6":{ value: "S6" },
        "A3_2017":{ value: "A3 2017" },
        "S7Edge":{ value: "S7 Edge" },
        "A5_2017":{ value: "A5 2017" },
        "J5_2016":{ value: "J5 (2016)" },
        "J3_2016":{ value: "J3 (2016)" },
        "S7":{ value: "S7" },
        "S8Plus":{ value: "S8 Plus" },
        "S5Mini":{ value: "S5 Mini" },
        "S8":{ value: "S8" },
        "J5":{ value: "J5" },
        "A3_2016":{ value: "A3 2016" },
        "Note8":{ value: "Note 8" },
        "S6Edge":{ value: "S6 Edge" },
        "S6EdgePlus":{ value: "S6 Edge Plus" },
        "J5_2017":{ value: "J5 (2017)" },
        "S3Mini":{ value: "S3 Mini" },
        "A5_2016":{ value: "A5 2016" },
        "J3_2017":{ value: "J3 (2017)" },
        "Xcover4DualSIM" :{ value: "Xcover 4 Dual SIM" },
        Any: { value: "Any" }
    }
});

// db.runCommand ( { distinct: "deals", key: "Telcos_device_product_json.product_brand", query: { } } )
export const ManufacturerEnum = new GraphQLEnumType({
    name: "ManufacturerEnum",
    description: "Possible values for Manufacturer. Can set to Any if using in a query and the field should not be filtered by",
    values: {
        "Microsoft": { value: "Microsoft" },
        "HTC": { value: "HTC" },
        "Doro": { value: "Doro" },
        "Apple": { value: "Apple" },
        "Sony": { value: "Sony" },
        "CAT": { value: "CAT®" },
        "Alcatel": { value: "Alcatel" },
        "Samsung": { value: "Samsung" },
        "DeWalt": { value: "DeWalt" },
        "Nokia": { value: "Nokia" },
        "BlackBerry": { value: "BlackBerry" },
        "LG": { value: "LG" },
        "ZTE": { value: "ZTE" },
        "Moto": { value: "Moto" },
        "Archos": { value: "Archos" },
        "SIM": { value: "SIM Card" },
        "Huawei": { value: "Huawei" },
        "Lenovo": { value: "Lenovo" },
        "EE": { value: "EE" },
        "MobiWire": { value: "MobiWire" },
        "Netgear": { value: "Netgear" },
        "Google": { value: "Google" },
        "OnePlus": { value: "OnePlus" },
        "BQ": { value: "BQ" },
        "Fitbit": { value: "Fitbit" },
        "Pebble": { value: "Pebble" },
        "Bragi": { value: "Bragi" },
        "Vodafone": { value: "Vodafone" },
        "Honor": { value: "Honor" },
        "Monqi": { value: "Monqi" }
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


