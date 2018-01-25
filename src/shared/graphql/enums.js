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
        Any: { value: "Any" }
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



