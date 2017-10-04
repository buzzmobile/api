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