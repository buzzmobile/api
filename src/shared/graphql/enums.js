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
        iPhone8Any: { value: { 
            "$or" : [
                { "Telcos_device_product_version_json.product_version_name": "8 Plus" }, 
                { "Telcos_device_product_version_json.product_version_name": "8" }
            ]     
        } }, 
        iPhone7Plus: { value: { "Telcos_device_product_version_json.product_version_name":  "7 Plus" } },
        iPhone7: { value: { "Telcos_device_product_version_json.product_version_name": "7" } },
        iPhoneSE: { value: { "Telcos_device_product_version_json.product_version_name":"SE" } },
        iPhone6sPlus: { value: { "Telcos_device_product_version_json.product_version_name":  "6s Plus" } },
        iPhone6s: { value: { "Telcos_device_product_version_json.product_version_name":"6s" } },
        iPhone6: { value: { "Telcos_device_product_version_json.product_version_name": "6" } },
        iPhone5s: { value: { "Telcos_device_product_version_json.product_version_name":"5s" } },
        iPhone5c: { value: { "Telcos_device_product_version_json.product_version_name":"5c" } },
        iPhone5: { value: { "Telcos_device_product_version_json.product_version_name": "5" } },
        iPhone4s: { value: { "Telcos_device_product_version_json.product_version_name": "4s" } },
        iPhone4: { value: { "Telcos_device_product_version_json.product_version_name": "4" } },
        Xcover4DualSIM :{ value: { "Telcos_device_product_version_json.product_version_name":  "Xcover 4 Dual SIM" } },
        S8Plus:{ value: { "Telcos_device_product_version_json.product_version_name":  "S8 Plus" } },
        S8:{ value: { "Telcos_device_product_version_json.product_version_name":  "S8" } },
        S9:{ value: { "Telcos_device_product_version_json.product_version_name":  "S9" } },
        S9Plus:{ value: { "Telcos_device_product_version_json.product_version_name":  "S9 Plus" } },
        S9Any: { value: { 
            "$or" : [
                { "Telcos_device_product_version_json.product_version_name": "S9 Plus" }, 
                { "Telcos_device_product_version_json.product_version_name": "S9" }
            ]     
        } },
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

export const TalkMinutesFilterEnum = new GraphQLEnumType({
    name: "MobileDataFilterEnum",
    description: "Possible values for filtering by Talk Minutes. To ignore this filter, set to 'Any' or don't specify it",
    values: {
        Any: { value: { } },
        Unlimited: { value: {  Telcos_inc_minutes :  "UNLIMITED" } }
    }
});

export const NumberOfTextsFilterEnum = new GraphQLEnumType({
    name: "NumberOfTextsFilterEnum",
    description: "Possible values for filtering by Texts. To ignore this filter, set to 'Any' or don't specify it",
    values: {
        Any: { value: { } },
        Unlimited: { value: {  Telcos_inc_texts :  "UNLIMITED" } }
    }
});

// db.runCommand ( { distinct: "deals", key: "Telcos_network", query: { } } )
export const NetworkFilterEnum = new GraphQLEnumType({
    name: "NetworkFilterEnum",
    description: "Possible values for filtering by Network. To ignore this filter, set to 'Any' or don't specify it",
    values: {
        Any: { value: { } },
        O2: { value: { Telcos_network: "O2" } },
        NoNetwork: { value: { Telcos_network: "No Network" } },
        VirginMobile: { value: { Telcos_network: "Virgin Mobile" } },
        EE: { value: { Telcos_network: "EE" } },
        Vodafone: { value: { Telcos_network: "Vodafone" } },
        iD: { value: { Telcos_network: "iD" } },
        Giffgaff: { value: { Telcos_network: "giffgaff" } },
        Three: { value: { Telcos_network: "Three" } },
        BT: { value: { Telcos_network: "BT" } }
    }
});

// db.runCommand ( { distinct: "deals", key: "merchant_name", query: { } } )
export const MerchantFilterEnum = new GraphQLEnumType({
    name: "MerchantFilterEnum",
    description: "Possible values for filtering by Merchant. To ignore this filter, set to 'Any' or don't specify it",
    values: {
        Any: { value: { } },
        O2: { value: { merchant_name: "O2 Mobiles" } },
        BuyMobilesNet: { value: { merchant_name: "buymobiles.net" } },
        MobilesCoUk: { value: { merchant_name: "Mobiles.co.uk" } },
        EE: { value: { merchant_name: "EE Mobile" } },
        e2save: { value: { merchant_name: "e2save" } },
        e2saveNot: { value: { merchant_name: { $ne: "e2save" } } },
        iD: { value: { merchant_name: "ID Mobile" } },
        Giffgaff: { value: { merchant_name: "giffgaff" } },
        Vodafone: { value: { merchant_name: "Vodafone Ltd" } }
    }
});

// db.runCommand ( { distinct: "deals", key: "Telcos_storage_size", query: { } } )
export const StorageSizeFilterEnum = new GraphQLEnumType({
    name: "StorageSizeFilterEnum",
    description: "Possible values for filtering by Storage Size. To ignore this filter, set to 'Any' or don't specify it",
    values: {
        Any: { value: { } },
        GB0: { value: { 
            "$or" : [
                { "Telcos_storage_size": "0" }, 
                { "Telcos_storage_size": "0GB" }
            ]     
        } },
        GB1: { value: { Telcos_storage_size: "1GB" } },
        GB3: { value: { Telcos_storage_size: "3GB" } },
        GB4: { value: { Telcos_storage_size: "4GB" } },
        GB8: { value: { Telcos_storage_size: "8GB" } },
        GB16: { value: { Telcos_storage_size: "16GB" } },
        GB32: { value: { Telcos_storage_size: "32GB" } },
        GB64: { value: { Telcos_storage_size: "64GB" } },
        GB128: { value: { Telcos_storage_size: "128GB" } },
        GB256: { value: { Telcos_storage_size: "256GB" } },
        GB512: { value: { Telcos_storage_size: "512GB" } }
    }
});

// db.runCommand ( { distinct: "deals", key: "Telcos_device_features_json.colour", query: { } } )
export const ColourFilterEnum = new GraphQLEnumType({
    name: "ColourFilterEnum",
    description: "Possible values for filtering by Colour. To ignore this filter, set to 'Any' or don't specify it",
    values: {
        Any: { value: { } },
        Aluminium_Silver: { value: { "Telcos_device_features_json.colour": "Aluminium Silver" } },
        Aluminium: { value: { "Telcos_device_features_json.colour": "Aluminium" } },
        Amazing_Silver: { value: { "Telcos_device_features_json.colour": "Amazing Silver" } },
        Arctic_Blue: { value: { "Telcos_device_features_json.colour": "Arctic Blue" } },
        Arctic_Silver: { value: { "Telcos_device_features_json.colour": "Arctic Silver" } },
        Ash_Grey: { value: { "Telcos_device_features_json.colour": "Ash Grey" } },
        Astro_Black: { value: { "Telcos_device_features_json.colour": "Astro Black" } },
        Azure_Blue: { value: { "Telcos_device_features_json.colour": "Azure Blue" } },
        Black_and_Silver: { value: { "Telcos_device_features_json.colour": "Black & Silver" } },
        Black_and_White: { value: { "Telcos_device_features_json.colour": "Black & White" } },
        Black_Onyx: { value: { "Telcos_device_features_json.colour": "Black Onyx" } },
        Black_Sapphire: { value: { "Telcos_device_features_json.colour": "Black Sapphire" } },
        Black_Sky: { value: { "Telcos_device_features_json.colour": "Black Sky" } },
        Black: { value: { "Telcos_device_features_json.colour": "Black" } },
        Blue_Lagoon: { value: { "Telcos_device_features_json.colour": "Blue Lagoon" } },
        Blue_Mist: { value: { "Telcos_device_features_json.colour": "Blue Mist" } },
        Blue_Topaz: { value: { "Telcos_device_features_json.colour": "Blue Topaz" } },
        Blue: { value: { "Telcos_device_features_json.colour": "Blue" } },
        Blush_Gold: { value: { "Telcos_device_features_json.colour": "Blush Gold" } },
        Brilliant_Black: { value: { "Telcos_device_features_json.colour": "Brilliant Black" } },
        Bronze: { value: { "Telcos_device_features_json.colour": "Bronze" } },
        Brown: { value: { "Telcos_device_features_json.colour": "Brown" } },
        Brushed_Stainless: { value: { "Telcos_device_features_json.colour": "Brushed Stainless" } },
        Carbon_Black: { value: { "Telcos_device_features_json.colour": "Carbon Black" } },
        Carbon_Grey: { value: { "Telcos_device_features_json.colour": "Carbon Grey" } },
        Champagne_Gold: { value: { "Telcos_device_features_json.colour": "Champagne Gold" } },
        Charcoal_Grey: { value: { "Telcos_device_features_json.colour": "Charcoal Grey" } },
        Chocolate: { value: { "Telcos_device_features_json.colour": "Chocolate" } },
        Chrome: { value: { "Telcos_device_features_json.colour": "Chrome" } },
        Clearly_White: { value: { "Telcos_device_features_json.colour": "Clearly White" } },
        Cloud_Silver: { value: { "Telcos_device_features_json.colour": "Cloud Silver" } },
        Coco_Grey: { value: { "Telcos_device_features_json.colour": "Coco Grey" } },
        Cool_Metal: { value: { "Telcos_device_features_json.colour": "Cool Metal" } },
        Copper_White: { value: { "Telcos_device_features_json.colour": "Copper White" } },
        Copper: { value: { "Telcos_device_features_json.colour": "Copper" } },
        Coral_Blue: { value: { "Telcos_device_features_json.colour": "Coral Blue" } },
        Cosmetic_Pink: { value: { "Telcos_device_features_json.colour": "Cosmetic Pink" } },
        Dark_Blue: { value: { "Telcos_device_features_json.colour": "Dark Blue" } },
        Dark_Grey: { value: { "Telcos_device_features_json.colour": "Dark Grey" } },
        Dazzling_Blue: { value: { "Telcos_device_features_json.colour": "Dazzling Blue" } },
        Dazzling_Gold: { value: { "Telcos_device_features_json.colour": "Dazzling Gold" } },
        Deep_Pink: { value: { "Telcos_device_features_json.colour": "Deep Pink" } },
        Fine_Gold: { value: { "Telcos_device_features_json.colour": "Fine Gold" } },
        Forest_Blue: { value: { "Telcos_device_features_json.colour": "Forest Blue" } },
        Glacial_Silver: { value: { "Telcos_device_features_json.colour": "Glacial Silver" } },
        Glacier_Grey: { value: { "Telcos_device_features_json.colour": "Glacier Grey" } },
        Glossy_Blue: { value: { "Telcos_device_features_json.colour": "Glossy Blue" } },
        Gold_Platinum: { value: { "Telcos_device_features_json.colour": "Gold Platinum" } },
        Gold: { value: { "Telcos_device_features_json.colour": "Gold" } },
        Golden_Sand: { value: { "Telcos_device_features_json.colour": "Golden Sand" } },
        Graphite_Black: { value: { "Telcos_device_features_json.colour": "Graphite Black" } },
        Graphite: { value: { "Telcos_device_features_json.colour": "Graphite" } },
        Green: { value: { "Telcos_device_features_json.colour": "Green" } },
        Grey: { value: { "Telcos_device_features_json.colour": "Grey" } },
        Gunmetal_Grey: { value: { "Telcos_device_features_json.colour": "Gunmetal Grey" } },
        Horizon_Blue: { value: { "Telcos_device_features_json.colour": "Horizon Blue" } },
        Ice_Blue: { value: { "Telcos_device_features_json.colour": "Ice Blue" } },
        Ice_White: { value: { "Telcos_device_features_json.colour": "Ice White" } },
        Indigo_Black: { value: { "Telcos_device_features_json.colour": "Indigo Black" } },
        Indigo_Blue: { value: { "Telcos_device_features_json.colour": "Indigo Blue" } },
        Iron_Grey: { value: { "Telcos_device_features_json.colour": "Iron Grey" } },
        Jet_Black: { value: { "Telcos_device_features_json.colour": "Jet Black" } },
        Just_Black: { value: { "Telcos_device_features_json.colour": "Just Black" } },
        Kinda_Blue: { value: { "Telcos_device_features_json.colour": "Kinda Blue" } },
        Leather_Brown: { value: { "Telcos_device_features_json.colour": "Leather Brown" } },
        Lilac_Purple: { value: { "Telcos_device_features_json.colour": "Lilac Purple" } },
        Lime_Gold: { value: { "Telcos_device_features_json.colour": "Lime Gold" } },
        Lunar_Grey: { value: { "Telcos_device_features_json.colour": "Lunar Grey" } },
        Maple_Gold: { value: { "Telcos_device_features_json.colour": "Maple Gold" } },
        Matte_Black: { value: { "Telcos_device_features_json.colour": "Matte Black" } },
        Metal_Grey: { value: { "Telcos_device_features_json.colour": "Metal Grey" } },
        Metallic_Black: { value: { "Telcos_device_features_json.colour": "Metallic Black" } },
        Metallic_Cherry: { value: { "Telcos_device_features_json.colour": "Metallic Cherry" } },
        Midnight_Black: { value: { "Telcos_device_features_json.colour": "Midnight Black" } },
        Midnight_Blue: { value: { "Telcos_device_features_json.colour": "Midnight Blue" } },
        Mineral_Black: { value: { "Telcos_device_features_json.colour": "Mineral Black" } },
        Mist_Blue: { value: { "Telcos_device_features_json.colour": "Mist Blue" } },
        Moonlight_Silver: { value: { "Telcos_device_features_json.colour": "Moonlight Silver" } },
        Moonlit_Blue: { value: { "Telcos_device_features_json.colour": "Moonlit Blue" } },
        Moroccan_Blue: { value: { "Telcos_device_features_json.colour": "Moroccan Blue" } },
        Mystic_Silver: { value: { "Telcos_device_features_json.colour": "Mystic Silver" } },
        Nimbus_Sterling_Blue: { value: { "Telcos_device_features_json.colour": "Nimbus (Sterling Blue)" } },
        Opal_Silver: { value: { "Telcos_device_features_json.colour": "Opal Silver" } },
        Orange: { value: { "Telcos_device_features_json.colour": "Orange" } },
        Orchid_Grey: { value: { "Telcos_device_features_json.colour": "Orchid Grey" } },
        Peach_Cloud: { value: { "Telcos_device_features_json.colour": "Peach Cloud" } },
        Pebble_Blue: { value: { "Telcos_device_features_json.colour": "Pebble Blue" } },
        Persian_Blue: { value: { "Telcos_device_features_json.colour": "Persian Blue" } },
        Pink_Gold: { value: { "Telcos_device_features_json.colour": "Pink Gold" } },
        Pink: { value: { "Telcos_device_features_json.colour": "Pink" } },
        Platinum_Gold: { value: { "Telcos_device_features_json.colour": "Platinum Gold" } },
        Platinum_Silver: { value: { "Telcos_device_features_json.colour": "Platinum Silver" } },
        Platinum: { value: { "Telcos_device_features_json.colour": "Platinum" } },
        Prestige_Gold: { value: { "Telcos_device_features_json.colour": "Prestige Gold" } },
        PRODUCT_RED: { value: { "Telcos_device_features_json.colour": "(PRODUCT) RED" } },
        Purple: { value: { "Telcos_device_features_json.colour": "Purple" } },
        Quartz_White: { value: { "Telcos_device_features_json.colour": "Quartz White" } },
        Quite_Black: { value: { "Telcos_device_features_json.colour": "Quite Black" } },
        Really_Blue: { value: { "Telcos_device_features_json.colour": "Really Blue" } },
        Red: { value: { "Telcos_device_features_json.colour": "Red" } },
        Rose_Gold: { value: { "Telcos_device_features_json.colour": "Rose Gold" } },
        Rose_Pink: { value: { "Telcos_device_features_json.colour": "Rose Pink" } },
        Saffron_Grey: { value: { "Telcos_device_features_json.colour": "Saffron Grey" } },
        Sandstone_Black: { value: { "Telcos_device_features_json.colour": "Sandstone Black" } },
        Sapphire_Blue: { value: { "Telcos_device_features_json.colour": "Sapphire Blue" } },
        Satin_Gold: { value: { "Telcos_device_features_json.colour": "Satin Gold" } },
        Silver_White: { value: { "Telcos_device_features_json.colour": "Silver White" } },
        Silver: { value: { "Telcos_device_features_json.colour": "Silver" } },
        Slate_Blue: { value: { "Telcos_device_features_json.colour": "Slate Blue" } },
        Slate_Grey: { value: { "Telcos_device_features_json.colour": "Slate Grey" } },
        Snow_Silver: { value: { "Telcos_device_features_json.colour": "Snow Silver" } },
        Soft_Gold: { value: { "Telcos_device_features_json.colour": "Soft Gold" } },
        Space_Black: { value: { "Telcos_device_features_json.colour": "Space Black" } },
        Space_Grey: { value: { "Telcos_device_features_json.colour": "Space Grey" } },
        Starry_Black: { value: { "Telcos_device_features_json.colour": "Starry Black" } },
        Steel: { value: { "Telcos_device_features_json.colour": "Steel" } },
        Super_Black: { value: { "Telcos_device_features_json.colour": "Super Black" } },
        Tech_White: { value: { "Telcos_device_features_json.colour": "Tech White" } },
        Tempered_Blue: { value: { "Telcos_device_features_json.colour": "Tempered Blue" } },
        Titan_Grey: { value: { "Telcos_device_features_json.colour": "Titan Grey" } },
        Titan: { value: { "Telcos_device_features_json.colour": "Titan" } },
        Titanium_Green: { value: { "Telcos_device_features_json.colour": "Titanium Green" } },
        Titanium_Grey: { value: { "Telcos_device_features_json.colour": "Titanium Grey" } },
        Topaz_Gold: { value: { "Telcos_device_features_json.colour": "Topaz Gold" } },
        Twilight_Pink: { value: { "Telcos_device_features_json.colour": "Twilight Pink" } },
        Universe_Black: { value: { "Telcos_device_features_json.colour": "Universe Black" } },
        Venus_Pink: { value: { "Telcos_device_features_json.colour": "Venus Pink" } },
        Very_Silver: { value: { "Telcos_device_features_json.colour": "Very Silver" } },
        Volcano_Black_with_Cocoa_Grey: { value: { "Telcos_device_features_json.colour": "Volcano Black with Cocoa Grey" } },
        Volcano_Black: { value: { "Telcos_device_features_json.colour": "Volcano Black" } },
        Warm_Red: { value: { "Telcos_device_features_json.colour": "Warm Red" } },
        Warm_Silver: { value: { "Telcos_device_features_json.colour": "Warm Silver" } },
        White_and_Blue: { value: { "Telcos_device_features_json.colour": "White & Blue" } },
        White_Pearl: { value: { "Telcos_device_features_json.colour": "White Pearl" } },
        Yellow: { value: { "Telcos_device_features_json.colour": "Yellow" } },
        White: { value: { "Telcos_device_features_json.colour": "White" } }
    }
});

export const SortByEnum = new GraphQLEnumType({
    name: "SortByEnum",
    description: "Possible values for Sorting",
    values: {
        TCO_ASC: { value: { "Telcos_deal_cost_json.tco_inc_vat": 1 }, description: "Sort by Total Cost of Ownership Cheapest First" },
        TCO_DESC: { value: { "Telcos_deal_cost_json.tco_inc_vat": -1 }, description: "Sort by Total Cost of Ownership Expensive First" }
    }
});