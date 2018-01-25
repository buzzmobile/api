import {
    GraphQLString,
    GraphQLFloat,
    GraphQLObjectType,
    GraphQLNonNull
} from "graphql";

import { MerchantCategoryEnum, OperatingSystemEnum, ContractTypeEnum } from "./enums";

export const TelcosDeviceProductJsonType = new GraphQLObjectType({
    name: "Telcos_device_product_json",
    fields: {
        product_id: {
            description: "self explanatory (hopefully!)",
            type: new GraphQLNonNull(GraphQLString),
        },
        product_name: {
            description: "self explanatory (hopefully!)",
            type: new GraphQLNonNull(GraphQLString),
        },
        product_brand: {
            description: "self explanatory (hopefully!)",
            type: new GraphQLNonNull(GraphQLString),
        },
        product_brand_id: {
            description: "self explanatory (hopefully!)",
            type: new GraphQLNonNull(GraphQLString),
        },
        product_type: {
            description: "self explanatory (hopefully!)",
            type: new GraphQLNonNull(GraphQLString),
        },
        product_type_id: {
            description: "self explanatory (hopefully!)",
            type: new GraphQLNonNull(GraphQLString),
        }
    },
});

export const TelcosDeviceProductVersionJsonType = new GraphQLObjectType({
    name: "Telcos_device_product_version_json",
    fields: {
        product_version_id: {
            description: "self explanatory (hopefully!)",
            type: new GraphQLNonNull(GraphQLString),
        },
        product_version_name: {
            description: "self explanatory (hopefully!)",
            type: new GraphQLNonNull(GraphQLString),
        }
    },
});

export const TelcosDeviceProductEditionJsonType = new GraphQLObjectType({
    name: "Telcos_device_product_edition_json",
    fields: {
        product_edition_id: {
            description: "self explanatory (hopefully!)",
            type: new GraphQLNonNull(GraphQLString),
        },
        product_edition_name: {
            description: "self explanatory (hopefully!)",
            type: new GraphQLNonNull(GraphQLString),
        },
        reseller_product_edition_id: {
            description: "self explanatory (hopefully!)",
            type: new GraphQLNonNull(GraphQLString),
        }
    },
});

export const TelcosDeviceImagesJsonType = new GraphQLObjectType({
    name: "Telcos_device_images_json",
    fields: {
        primary_thumb: {
            description: "self explanatory (hopefully!)",
            type: new GraphQLNonNull(GraphQLString),
        },
        primary_large: {
            description: "self explanatory (hopefully!)",
            type: new GraphQLNonNull(GraphQLString),
        }
    },
});

export const TelcosDeviceFeaturesJsonType = new GraphQLObjectType({
    name: "Telcos_device_features_json",
    fields: {
        colour: {
            description: "self explanatory (hopefully!)",
            type: new GraphQLNonNull(GraphQLString),
        },
        colour_group: {
            description: "self explanatory (hopefully!)",
            type: new GraphQLNonNull(GraphQLString),
        },
        max_data_standard: {
            description: "self explanatory (hopefully!)",
            type: new GraphQLNonNull(GraphQLString),
        },
        condition: {
            description: "self explanatory (hopefully!)",
            type: new GraphQLNonNull(GraphQLString),
        },
        condition_friendly: {
            description: "self explanatory (hopefully!)",
            type: new GraphQLNonNull(GraphQLString),
        },
        _sim_type: {
            description: "self explanatory (hopefully!)",
            type: new GraphQLNonNull(GraphQLString),
        },
        capacity: {
            description: "self explanatory (hopefully!)",
            type: new GraphQLNonNull(GraphQLString),
        },
        os: {
            description: "self explanatory (hopefully!)",
            type: OperatingSystemEnum,
        },
        megapixels: {
            description: "self explanatory (hopefully!)",
            type: new GraphQLNonNull(GraphQLString),
        }
    },
});

export const TelcosDeviceSpecificationsJsonType = new GraphQLObjectType({
    name: "Telcos_device_specifications_json",
    fields: {
        display_resolution: {
            description: "self explanatory (hopefully!)",
            type: new GraphQLNonNull(GraphQLString),
        },
        display_size: {
            description: "self explanatory (hopefully!)",
            type: new GraphQLNonNull(GraphQLString),
        },
        display_type: {
            description: "self explanatory (hopefully!)",
            type: new GraphQLNonNull(GraphQLString),
        },
        primary_camera_flash: {
            description: "self explanatory (hopefully!)",
            type: new GraphQLNonNull(GraphQLString),
        },
        primary_camera_resolution: {
            description: "self explanatory (hopefully!)",
            type: new GraphQLNonNull(GraphQLString),
        },
        internal_memory: {
            description: "self explanatory (hopefully!)",
            type: new GraphQLNonNull(GraphQLString),
        },
        memory_card_slot: {
            description: "self explanatory (hopefully!)",
            type: new GraphQLNonNull(GraphQLString),
        },
        processor: {
            description: "self explanatory (hopefully!)",
            type: new GraphQLNonNull(GraphQLString),
        },
        _2g: {
            description: "self explanatory (hopefully!)",
            type: new GraphQLNonNull(GraphQLString),
        },
        _3g: {
            description: "self explanatory (hopefully!)",
            type: new GraphQLNonNull(GraphQLString),
        },
        _4g: {
            description: "self explanatory (hopefully!)",
            type: new GraphQLNonNull(GraphQLString),
        },
        bluetooth: {
            description: "self explanatory (hopefully!)",
            type: new GraphQLNonNull(GraphQLString),
        },
        gps: {
            description: "self explanatory (hopefully!)",
            type: new GraphQLNonNull(GraphQLString),
        },
        wifi: {
            description: "self explanatory (hopefully!)",
            type: new GraphQLNonNull(GraphQLString),
        },
        talk_time: {
            description: "self explanatory (hopefully!)",
            type: new GraphQLNonNull(GraphQLString),
        },
        _secondary_camera: {
            description: "self explanatory (hopefully!)",
            type: new GraphQLNonNull(GraphQLString),
        },
        weight_grams: {
            description: "self explanatory (hopefully!)",
            type: new GraphQLNonNull(GraphQLString),
        },
        dimensions: {
            description: "self explanatory (hopefully!)",
            type: new GraphQLNonNull(GraphQLString),
        },
        chipset: {
            description: "self explanatory (hopefully!)",
            type: new GraphQLNonNull(GraphQLString),
        },
        battery_type: {
            description: "self explanatory (hopefully!)",
            type: new GraphQLNonNull(GraphQLString),
        },
        ip_rating: {
            description: "self explanatory (hopefully!)",
            type: new GraphQLNonNull(GraphQLString),
        }
    },
});


export const TelcosNetworkDetailsJsonType = new GraphQLObjectType({
    name: "Telcos_network_details_json",
    fields: {
        name: {
            description: "self explanatory (hopefully!)",
            type: new GraphQLNonNull(GraphQLString),
        },
        company_id: {
            description: "self explanatory (hopefully!)",
            type: new GraphQLNonNull(GraphQLString),
        },
        logo_url: {
            description: "self explanatory (hopefully!)",
            type: new GraphQLNonNull(GraphQLString),
        },
        coverage_url: {
            description: "self explanatory (hopefully!)",
            type: new GraphQLNonNull(GraphQLString),
        },
        terms_url: {
            description: "self explanatory (hopefully!)",
            type: new GraphQLNonNull(GraphQLString),
        },
        description: {
            description: "self explanatory (hopefully!)",
            type: new GraphQLNonNull(GraphQLString),
        }
    },
});


export const TelcosTariffGroupDetailsJsonType = new GraphQLObjectType({
    name: "Telcos_tariff_group_details_json",
    fields: {
        tariff_group_id: {
            description: "self explanatory (hopefully!)",
            type: new GraphQLNonNull(GraphQLString),
        },
        tariff_group_description: {
            description: "self explanatory (hopefully!)",
            type: new GraphQLNonNull(GraphQLString),
        },
        tariff_group_promo_info: {
            description: "self explanatory (hopefully!)",
            type: new GraphQLNonNull(GraphQLString),
        }
    },
});


export const TelcosTariffDetailsJsonType = new GraphQLObjectType({
    name: "Telcos_tariff_details_json",
    fields: {
        tariff_id: {
            description: "self explanatory (hopefully!)",
            type: new GraphQLNonNull(GraphQLString),
        },
        tariff_name: {
            description: "self explanatory (hopefully!)",
            type: new GraphQLNonNull(GraphQLString),
        },
        tariff_type_id: {
            description: "self explanatory (hopefully!)",
            type: new GraphQLNonNull(GraphQLString),
        },
        tariff_type: {
            description: "self explanatory (hopefully!)",
            type: new GraphQLNonNull(GraphQLString),
        },
        tariff_term: {
            description: "self explanatory (hopefully!)",
            type: new GraphQLNonNull(GraphQLString),
        },
        tariff_term_friendly: {
            description: "self explanatory (hopefully!)",
            type: new GraphQLNonNull(GraphQLString),
        },
        tariff_promo_info: {
            description: "self explanatory (hopefully!)",
            type: GraphQLString,
        }
    },
});


export const Telcos_tariff_allowances_jsonMinsDetailsType = new GraphQLObjectType({
    name: "mins_details",
    fields: {
        cross_net_anytime: {
            description: "self explanatory (hopefully!)",
            type: new GraphQLNonNull(GraphQLString),
        },
        cross_net_anytime_qualifier: {
            description: "self explanatory (hopefully!)",
            type: new GraphQLNonNull(GraphQLString),
        },
        _same_net_anytime: {
            description: "self explanatory (hopefully!)",
            type: GraphQLString,
        },
        _special_numbers_see_terms: {
            description: "self explanatory (hopefully!)",
            type: GraphQLString,
        },
        landline: {
            description: "self explanatory (hopefully!)",
            type: GraphQLString,
        }
    },
});


export const Telcos_tariff_allowances_jsonTextsDetailsType = new GraphQLObjectType({
    name: "texts_details",
    fields: {
        cross_net_anytime: {
            description: "self explanatory (hopefully!)",
            type: new GraphQLNonNull(GraphQLString),
        },
        _same_net_anytime: {
            description: "self explanatory (hopefully!)",
            type: GraphQLString,
        }
    },
});


export const Telcos_tariff_allowances_jsonDataDetailsType = new GraphQLObjectType({
    name: "data_details",
    fields: {
        wifi_mb: {
            description: "self explanatory (hopefully!)",
            type: GraphQLString,
        },
        cellular_mb: {
            description: "self explanatory (hopefully!)",
            type: new GraphQLNonNull(GraphQLString),
        },
        cellular_speed: {
            description: "self explanatory (hopefully!)",
            type: new GraphQLNonNull(GraphQLString),
        }
    },
});

export const TelcosTariffAllowancesJsonType = new GraphQLObjectType({
    name: "Telcos_tariff_allowances_json",
    fields: {
        mins_details: {
            description: "self explanatory (hopefully!)",
            type: new GraphQLNonNull(Telcos_tariff_allowances_jsonMinsDetailsType),
        },
        texts_details: {
            description: "self explanatory (hopefully!)",
            type: new GraphQLNonNull(Telcos_tariff_allowances_jsonTextsDetailsType),
        },
        data_details: {
            description: "self explanatory (hopefully!)",
            type: new GraphQLNonNull(Telcos_tariff_allowances_jsonDataDetailsType),
        }
    },
});


export const TelcosTariffOutOfPlanChargesJsonType = new GraphQLObjectType({
    name: "Telcos_tariff_out_of_plan_charges_json",
    fields: {
        pence_per_cross_net_min: {
            description: "self explanatory (hopefully!)",
            type: new GraphQLNonNull(GraphQLString),
        },
        pence_per_cross_net_text: {
            description: "self explanatory (hopefully!)",
            type: new GraphQLNonNull(GraphQLString),
        },
        pence_per_mb: {
            description: "self explanatory (hopefully!)",
            type: GraphQLString,
        },
        data_charge_text: {
            description: "self explanatory (hopefully!)",
            type: GraphQLString,
        },
        pence_per_voicemail_min: {
            description: "self explanatory (hopefully!)",
            type: new GraphQLNonNull(GraphQLString),
        }
    },
});


export const TelcosDealTypeJsonType = new GraphQLObjectType({
    name: "Telcos_deal_type_json",
    fields: {
        deal_type_id: {
            description: "self explanatory (hopefully!)",
            type: new GraphQLNonNull(GraphQLString),
        },
        deal_type_name: {
            description: "self explanatory (hopefully!)",
            type: new GraphQLNonNull(GraphQLString),
        }
    },
});


export const TelcosDealRetailerJsonType = new GraphQLObjectType({
    name: "Telcos_deal_retailer_json",
    fields: {
        name: {
            description: "self explanatory (hopefully!)",
            type: new GraphQLNonNull(GraphQLString),
        },
        company_id: {
            description: "self explanatory (hopefully!)",
            type: new GraphQLNonNull(GraphQLString),
        },
        logo_url: {
            description: "self explanatory (hopefully!)",
            type: new GraphQLNonNull(GraphQLString),
        },
        terms_url: {
            description: "self explanatory (hopefully!)",
            type: new GraphQLNonNull(GraphQLString),
        }
    },
});


export const TelcosDealCostJsonType = new GraphQLObjectType({
    name: "Telcos_deal_cost_json",
    fields: {
        upfront_inc_vat: {
            description: "The deal's total upfront cost including VAT",
            type: new GraphQLNonNull(GraphQLFloat),
        },
        upfront_exc_vat: {
            description: "The deal's total upfront cost excluding VAT (for business-customer deals)",
            type: new GraphQLNonNull(GraphQLFloat),
        },
        upfront_previous_inc_vat: {
            description: "Where this deal has previously been sold at another price, that price will be listed here",
            type: GraphQLFloat,
        },
        upfront_previous_exc_vat: {
            description: "Where this deal has previously been sold at another price, that price will be listed here excluding VAT (for business-customer deals)",
            type: GraphQLFloat,
        },
        monthly_total_inc_vat: {
            description: "The deal's monthly total cost (note this field will contain the sum of the phone monthly cost and contract monthly cost where these are expressed separately, as is the case with O2 Refresh products)",
            type: new GraphQLNonNull(GraphQLFloat),
        },
        monthly_total_exc_vat: {
            description: "As above, but excluding VAT (for business-customer deals)",
            type: new GraphQLNonNull(GraphQLFloat),
        },
        monthly_total_previous_inc_vat: {
            description: "Where this deal has previously been sold at another monthly price, that price will be listed here",
            type: GraphQLFloat,
        },
        monthly_total_previous_exc_vat: {
            description: "Where this deal has previously been sold at another monthly price, that price will be listed here excluding VAT (for business-customer deals)",
            type: GraphQLFloat,
        },
        monthly_device_inc_vat: {
            description: "the monthly price of the device portion of the monthly cost. This will be populated only where the device is being sold separately from the tariff (e.g. Giffgaff handsets, Tesco Mobile, O2 Refresh)",
            type: GraphQLFloat,
        },
        monthly_device_exc_vat: {
            description: "the monthly price of the device portion of the monthly cost. This will be populated only where the device is being sold separately from the tariff (e.g. Giffgaff handsets, Tesco Mobile, O2 Refresh) excluding VAT (for business-customer deals)",
            type: GraphQLFloat,
        },
        monthly_device_term_months: {
            description: "in most cases the contract term for the device will be the same as for the contract, but not in all cases. In the case of giffgaff it is possible to purchase the handset over a different term from the contract (all giffgaff deals are in fact Pay-as-you-go). In all cases, this field should be checked to ensure the customer is given the correct information.",
            type: GraphQLString,
        },
        monthly_device_final_term_inc_vat: {
            description: "the monthly price of the final term of the device finance contract. Currently only used by Sky Mobile, and tends to be a reduced line rental for the final few months of the device contract",
            type: GraphQLFloat,
        },
        monthly_device_final_term_exc_vat: {
            description: "the monthly price of the final term of the device finance contract. Currently only used by Sky Mobile, and tends to be a reduced line rental for the final few months of the device contract excluding VAT (for business-customer deals)",
            type: GraphQLFloat,
        },
        monthly_device_final_term_months: {
            description: "this is the number of months that the 'final term' lasts. If populated, this 'final term' will often feature a reduced line rental or some other changes to the way the device is financed",
            type: GraphQLString,
        },
        monthly_contract_inc_vat: {
            description: "the monthly price of the tariff portion of the monthly cost. This will be populated only where the device is being sold separately from the tariff",
            type: GraphQLFloat,
        },
        monthly_contract_exc_vat: {
            description: "the monthly price of the tariff portion of the monthly cost. This will be populated only where the device is being sold separately from the tariff excluding VAT (for business-customer deals)",
            type: GraphQLFloat,
        },
        monthly_contract_term_months: {
            description: "the contract term for the tariff",
            type: new GraphQLNonNull(GraphQLString),
        },
        ecpm_inc_vat: {
            description: "effective cost per month - the effective total monthly cost after taking into account all payments over the course of the contract and any upfront cost. Note that discounts and free gifts are not included in this calculation",
            type: new GraphQLNonNull(GraphQLFloat),
        },
        ecpm_exc_vat: {
            description: "effective cost per month - the effective total monthly cost after taking into account all payments over the course of the contract and any upfront cost. Note that discounts and free gifts are not included in this calculation excluding VAT (for business-customer deals)",
            type: new GraphQLNonNull(GraphQLFloat),
        },
        tco_inc_vat: {
            description: "total cost of ownership - the total cost over the course of the contract including any upfront cost. Note that discounts and free gifts are not included in this calculation",
            type: new GraphQLNonNull(GraphQLFloat),
        },
        tco_exc_vat: {
            description: "total cost of ownership - the total cost over the course of the contract including any upfront cost. Note that discounts and free gifts are not included in this calculation excluding VAT (for business-customer deals)",
            type: new GraphQLNonNull(GraphQLFloat),
        }
    },
});

export const DealType = new GraphQLObjectType({
    name: "DealType",
    fields: () => ({
        aw_deep_link: {
            description: "self explanatory (hopefully!)",
            type: new GraphQLNonNull(GraphQLString),
        },
        product_name: {
            description: "self explanatory (hopefully!)",
            type: new GraphQLNonNull(GraphQLString),
        },
        aw_product_id: {
            description: "self explanatory (hopefully!)",
            type: new GraphQLNonNull(GraphQLString),
        },
        merchant_product_id: {
            description: "self explanatory (hopefully!)",
            type: new GraphQLNonNull(GraphQLString),
        },
        merchant_image_url: {
            description: "self explanatory (hopefully!)",
            type: new GraphQLNonNull(GraphQLString),
        },
        description: {
            description: "self explanatory (hopefully!)",
            type: new GraphQLNonNull(GraphQLString),
        },
        merchant_category: {
            description: "self explanatory (hopefully!)",
            type: new GraphQLNonNull(MerchantCategoryEnum),
        },
        search_price: {
            description: "self explanatory (hopefully!)",
            type: new GraphQLNonNull(GraphQLString),
        },
        merchant_name: {
            description: "self explanatory (hopefully!)",
            type: new GraphQLNonNull(GraphQLString),
        },
        merchant_id: {
            description: "self explanatory (hopefully!)",
            type: new GraphQLNonNull(GraphQLString),
        },
        category_name: {
            description: "self explanatory (hopefully!)",
            type: new GraphQLNonNull(GraphQLString),
        },
        category_id: {
            description: "self explanatory (hopefully!)",
            type: new GraphQLNonNull(GraphQLString),
        },
        aw_image_url: {
            description: "self explanatory (hopefully!)",
            type: new GraphQLNonNull(GraphQLString),
        },
        currency: {
            description: "self explanatory (hopefully!)",
            type: new GraphQLNonNull(GraphQLString),
        },
        store_price: {
            description: "self explanatory (hopefully!)",
            type: new GraphQLNonNull(GraphQLString),
        },
        merchant_deep_link: {
            description: "self explanatory (hopefully!)",
            type: new GraphQLNonNull(GraphQLString),
        },
        language: {
            description: "self explanatory (hopefully!)",
            type: new GraphQLNonNull(GraphQLString),
        },
        last_updated: {
            description: "self explanatory (hopefully!)",
            type: new GraphQLNonNull(GraphQLString),
        },
        display_price: {
            description: "self explanatory (hopefully!)",
            type: new GraphQLNonNull(GraphQLString),
        },
        data_feed_id: {
            description: "self explanatory (hopefully!)",
            type: new GraphQLNonNull(GraphQLString),
        },
        Telcos_contract_type: {
            description: "self explanatory (hopefully!)",
            type: ContractTypeEnum,
        },
        Telcos_term: {
            description: "self explanatory (hopefully!)",
            type: new GraphQLNonNull(GraphQLString),
        },
        Telcos_initial_cost: {
            description: "self explanatory (hopefully!)",
            type: new GraphQLNonNull(GraphQLFloat),
        },
        Telcos_month_cost: {
            description: "self explanatory (hopefully!)",
            type: new GraphQLNonNull(GraphQLFloat),
        },
        Telcos_inc_minutes: {
            description: "self explanatory (hopefully!)",
            type: new GraphQLNonNull(GraphQLString),
        },
        Telcos_inc_data: {
            description: "self explanatory (hopefully!)",
            type: new GraphQLNonNull(GraphQLString),
        },
        Telcos_connectivity: {
            description: "self explanatory (hopefully!)",
            type: new GraphQLNonNull(GraphQLString),
        },
        Telcos_inc_texts: {
            description: "self explanatory (hopefully!)",
            type: new GraphQLNonNull(GraphQLString),
        },
        Telcos_tariff: {
            description: "self explanatory (hopefully!)",
            type: new GraphQLNonNull(GraphQLString),
        },
        Telcos_storage_size: {
            description: "self explanatory (hopefully!)",
            type: new GraphQLNonNull(GraphQLString),
        },
        Telcos_special_offer: {
            description: "self explanatory (hopefully!)",
            type: GraphQLString,
        },
        Telcos_network: {
            description: "self explanatory (hopefully!)",
            type: new GraphQLNonNull(GraphQLString),
        },
        Telcos_operating_system: {
            description: "self explanatory (hopefully!)",
            type: new GraphQLNonNull(GraphQLString),
        },
        Telcos_device_product_json: {
            description: "self explanatory (hopefully!)",
            type: new GraphQLNonNull(TelcosDeviceProductJsonType),
        },
        Telcos_device_product_version_json: {
            description: "self explanatory (hopefully!)",
            type: new GraphQLNonNull(TelcosDeviceProductVersionJsonType),
        },
        Telcos_device_product_edition_json: {
            description: "self explanatory (hopefully!)",
            type: new GraphQLNonNull(TelcosDeviceProductEditionJsonType),
        },
        Telcos_device_full_name: {
            description: "self explanatory (hopefully!)",
            type: new GraphQLNonNull(GraphQLString),
        },
        Telcos_device_description: {
            description: "self explanatory (hopefully!)",
            type: new GraphQLNonNull(GraphQLString),
        },
        Telcos_device_images_json: {
            description: "self explanatory (hopefully!)",
            type: new GraphQLNonNull(TelcosDeviceImagesJsonType),
        },
        Telcos_device_features_json: {
            description: "self explanatory (hopefully!)",
            type: new GraphQLNonNull(TelcosDeviceFeaturesJsonType),
        },
        Telcos_device_specifications_json: {
            description: "self explanatory (hopefully!)",
            type: new GraphQLNonNull(TelcosDeviceSpecificationsJsonType),
        },
        Telcos_network_details_json: {
            description: "self explanatory (hopefully!)",
            type: new GraphQLNonNull(TelcosNetworkDetailsJsonType),
        },
        Telcos_tariff_group_details_json: {
            description: "self explanatory (hopefully!)",
            type: new GraphQLNonNull(TelcosTariffGroupDetailsJsonType),
        },
        Telcos_tariff_details_json: {
            description: "self explanatory (hopefully!)",
            type: new GraphQLNonNull(TelcosTariffDetailsJsonType),
        },
        Telcos_tariff_allowances_json: {
            description: "self explanatory (hopefully!)",
            type: new GraphQLNonNull(TelcosTariffAllowancesJsonType),
        },
        Telcos_tariff_out_of_plan_charges_json: {
            description: "self explanatory (hopefully!)",
            type: new GraphQLNonNull(TelcosTariffOutOfPlanChargesJsonType),
        },
        Telcos_deal_type_json: {
            description: "self explanatory (hopefully!)",
            type: new GraphQLNonNull(TelcosDealTypeJsonType),
        },
        Telcos_deal_retailer_json: {
            description: "self explanatory (hopefully!)",
            type: new GraphQLNonNull(TelcosDealRetailerJsonType),
        },
        Telcos_deal_cost_json: {
            description: "self explanatory (hopefully!)",
            type: new GraphQLNonNull(TelcosDealCostJsonType),
        },
    })
});