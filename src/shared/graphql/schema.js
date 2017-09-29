/* eslint-disable quotes */
/* eslint-disable no-unused-vars */

const {
    GraphQLBoolean,
    GraphQLString,
    GraphQLInt,
    GraphQLFloat,
    GraphQLObjectType,
    GraphQLSchema,
    GraphQLID,
    GraphQLNonNull,
    GraphQLList,
} = require('graphql');


const TelcosDeviceProductJsonType = new GraphQLObjectType({
    name: 'Telcos_device_product_json',
    fields: {
        product_id: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
        },
        product_name: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
        },
        product_brand: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
        },
        product_brand_id: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
        },
        product_type: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
        },
        product_type_id: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
        }
    },
});


const TelcosDeviceProductVersionJsonType = new GraphQLObjectType({
    name: 'Telcos_device_product_version_json',
    fields: {
        product_version_id: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
        },
        product_version_name: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
        }
    },
});


const TelcosDeviceProductEditionJsonType = new GraphQLObjectType({
    name: 'Telcos_device_product_edition_json',
    fields: {
        product_edition_id: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
        },
        product_edition_name: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
        },
        reseller_product_edition_id: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
        }
    },
});


const TelcosDeviceImagesJsonType = new GraphQLObjectType({
    name: 'Telcos_device_images_json',
    fields: {
        primary_thumb: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
        },
        primary_large: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
        }
    },
});


const TelcosDeviceFeaturesJsonType = new GraphQLObjectType({
    name: 'Telcos_device_features_json',
    fields: {
        colour: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
        },
        colour_group: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
        },
        max_data_standard: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
        },
        condition: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
        },
        condition_friendly: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
        },
        _sim_type: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
        },
        capacity: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
        },
        os: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
        },
        megapixels: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
        }
    },
});


const TelcosDeviceSpecificationsJsonType = new GraphQLObjectType({
    name: 'Telcos_device_specifications_json',
    fields: {
        display_resolution: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
        },
        display_size: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
        },
        display_type: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
        },
        primary_camera_flash: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
        },
        primary_camera_resolution: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
        },
        internal_memory: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
        },
        memory_card_slot: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
        },
        processor: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
        },
        _2g: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
        },
        _3g: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
        },
        _4g: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
        },
        bluetooth: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
        },
        gps: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
        },
        wifi: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
        },
        talk_time: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
        },
        _secondary_camera: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
        },
        weight_grams: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
        },
        dimensions: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
        },
        chipset: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
        },
        battery_type: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
        },
        ip_rating: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
        }
    },
});


const TelcosNetworkDetailsJsonType = new GraphQLObjectType({
    name: 'Telcos_network_details_json',
    fields: {
        name: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
        },
        company_id: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
        },
        logo_url: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
        },
        coverage_url: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
        },
        terms_url: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
        },
        description: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
        }
    },
});


const TelcosTariffGroupDetailsJsonType = new GraphQLObjectType({
    name: 'Telcos_tariff_group_details_json',
    fields: {
        tariff_group_id: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
        },
        tariff_group_description: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
        },
        tariff_group_promo_info: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
        }
    },
});


const TelcosTariffDetailsJsonType = new GraphQLObjectType({
    name: 'Telcos_tariff_details_json',
    fields: {
        tariff_id: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
        },
        tariff_name: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
        },
        tariff_type_id: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
        },
        tariff_type: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
        },
        tariff_term: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
        },
        tariff_term_friendly: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
        },
        // tariff_promo_info: {
        //     description: 'enter your description',
        //     type: null,
        // }
    },
});


const Telcos_tariff_allowances_jsonMinsDetailsType = new GraphQLObjectType({
    name: 'mins_details',
    fields: {
        cross_net_anytime: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
        },
        cross_net_anytime_qualifier: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
        },
        // _same_net_anytime: {
        //     description: 'enter your description',
        //     type: null,
        // },
        // _special_numbers_see_terms: {
        //     description: 'enter your description',
        //     type: null,
        // },
        // landline: {
        //     description: 'enter your description',
        //     type: null,
        // }
    },
});


const Telcos_tariff_allowances_jsonTextsDetailsType = new GraphQLObjectType({
    name: 'texts_details',
    fields: {
        cross_net_anytime: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
        },
        // _same_net_anytime: {
        //     description: 'enter your description',
        //     type: null,
        // }
    },
});


const Telcos_tariff_allowances_jsonDataDetailsType = new GraphQLObjectType({
    name: 'data_details',
    fields: {
        // wifi_mb: {
        //     description: 'enter your description',
        //     type: null,
        // },
        cellular_mb: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
        },
        cellular_speed: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
        }
    },
});

const TelcosTariffAllowancesJsonType = new GraphQLObjectType({
    name: 'Telcos_tariff_allowances_json',
    fields: {
        mins_details: {
            description: 'enter your description',
            type: new GraphQLNonNull(Telcos_tariff_allowances_jsonMinsDetailsType),
        },
        texts_details: {
            description: 'enter your description',
            type: new GraphQLNonNull(Telcos_tariff_allowances_jsonTextsDetailsType),
        },
        data_details: {
            description: 'enter your description',
            type: new GraphQLNonNull(Telcos_tariff_allowances_jsonDataDetailsType),
        }
    },
});


const TelcosTariffOutOfPlanChargesJsonType = new GraphQLObjectType({
    name: 'Telcos_tariff_out_of_plan_charges_json',
    fields: {
        pence_per_cross_net_min: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
        },
        pence_per_cross_net_text: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
        },
        // pence_per_mb: {
        //     description: 'enter your description',
        //     type: null,
        // },
        // data_charge_text: {
        //     description: 'enter your description',
        //     type: null,
        // },
        pence_per_voicemail_min: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
        }
    },
});


const TelcosDealTypeJsonType = new GraphQLObjectType({
    name: 'Telcos_deal_type_json',
    fields: {
        deal_type_id: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
        },
        deal_type_name: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
        }
    },
});


const TelcosDealRetailerJsonType = new GraphQLObjectType({
    name: 'Telcos_deal_retailer_json',
    fields: {
        name: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
        },
        company_id: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
        },
        logo_url: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
        },
        terms_url: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
        }
    },
});


const TelcosDealCostJsonType = new GraphQLObjectType({
    name: 'Telcos_deal_cost_json',
    fields: {
        upfront_inc_vat: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
        },
        upfront_exc_vat: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
        },
        // upfront_previous_inc_vat: {
        //     description: 'enter your description',
        //     type: null,
        // },
        // upfront_previous_exc_vat: {
        //     description: 'enter your description',
        //     type: null,
        // },
        monthly_total_inc_vat: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
        },
        monthly_total_exc_vat: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
        },
        // monthly_total_previous_inc_vat: {
        //     description: 'enter your description',
        //     type: null,
        // },
        // monthly_total_previous_exc_vat: {
        //     description: 'enter your description',
        //     type: null,
        // },
        // monthly_device_inc_vat: {
        //     description: 'enter your description',
        //     type: null,
        // },
        // monthly_device_exc_vat: {
        //     description: 'enter your description',
        //     type: null,
        // },
        // monthly_device_term_months: {
        //     description: 'enter your description',
        //     type: null,
        // },
        // monthly_device_final_term_inc_vat: {
        //     description: 'enter your description',
        //     type: null,
        // },
        // monthly_device_final_term_exc_vat: {
        //     description: 'enter your description',
        //     type: null,
        // },
        // monthly_device_final_term_months: {
        //     description: 'enter your description',
        //     type: null,
        // },
        // monthly_contract_inc_vat: {
        //     description: 'enter your description',
        //     type: null,
        // },
        // monthly_contract_exc_vat: {
        //     description: 'enter your description',
        //     type: null,
        // },
        monthly_contract_term_months: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
        },
        ecpm_inc_vat: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
        },
        ecpm_exc_vat: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
        },
        tco_inc_vat: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
        },
        tco_exc_vat: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
        }
    },
});

const DealType = new GraphQLObjectType({
    name: 'DealType',
    fields: () => ({
        _id: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
        },
        aw_deep_link: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
        },
        product_name: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
        },
        aw_product_id: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
        },
        merchant_product_id: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
        },
        merchant_image_url: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
        },
        description: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
        },
        merchant_category: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
        },
        search_price: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
        },
        merchant_name: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
        },
        merchant_id: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
        },
        category_name: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
        },
        category_id: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
        },
        aw_image_url: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
        },
        currency: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
        },
        store_price: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
        },
        // delivery_cost: {
        //     description: 'enter your description',
        //     type: null,
        // },
        merchant_deep_link: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
        },
        language: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
        },
        last_updated: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
        },
        display_price: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
        },
        data_feed_id: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
        },
        Telcos_contract_type: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
        },
        Telcos_term: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
        },
        Telcos_initial_cost: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
        },
        Telcos_month_cost: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
        },
        // Telcos_gift: {
        //     description: 'enter your description',
        //     type: null,
        // },
        Telcos_inc_minutes: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
        },
        Telcos_inc_data: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
        },
        Telcos_connectivity: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
        },
        Telcos_inc_texts: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
        },
        Telcos_tariff: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
        },
        Telcos_storage_size: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
        },
        Telcos_special_offer: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
        },
        Telcos_network: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
        },
        Telcos_operating_system: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
        },
        product_id: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
        },
        product_brand: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
        },
        product_brand_id: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
        },
        product_type: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
        },
        product_type_id: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
        },
        Telcos_device_product_json: {
            description: 'enter your description',
            type: new GraphQLNonNull(TelcosDeviceProductJsonType),
        },
        product_version_id: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
        },
        product_version_name: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
        },
        Telcos_device_product_version_json: {
            description: 'enter your description',
            type: new GraphQLNonNull(TelcosDeviceProductVersionJsonType),
        },
        product_edition_id: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
        },
        product_edition_name: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
        },
        reseller_product_edition_id: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
        },
        Telcos_device_product_edition_json: {
            description: 'enter your description',
            type: new GraphQLNonNull(TelcosDeviceProductEditionJsonType),
        },
        Telcos_device_full_name: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
        },
        Telcos_device_description: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
        },
        primary_thumb: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
        },
        primary_large: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
        },
        Telcos_device_images_json: {
            description: 'enter your description',
            type: new GraphQLNonNull(TelcosDeviceImagesJsonType),
        },
        colour: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
        },
        colour_group: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
        },
        max_data_standard: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
        },
        condition: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
        },
        condition_friendly: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
        },
        _sim_type: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
        },
        capacity: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
        },
        os: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
        },
        megapixels: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
        },
        Telcos_device_features_json: {
            description: 'enter your description',
            type: new GraphQLNonNull(TelcosDeviceFeaturesJsonType),
        },
        display_resolution: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
        },
        display_size: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
        },
        display_type: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
        },
        primary_camera_flash: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
        },
        primary_camera_resolution: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
        },
        internal_memory: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
        },
        memory_card_slot: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
        },
        processor: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
        },
        _2g: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
        },
        _3g: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
        },
        _4g: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
        },
        bluetooth: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
        },
        gps: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
        },
        wifi: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
        },
        talk_time: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
        },
        _secondary_camera: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
        },
        weight_grams: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
        },
        dimensions: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
        },
        chipset: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
        },
        battery_type: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
        },
        ip_rating: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
        },
        Telcos_device_specifications_json: {
            description: 'enter your description',
            type: new GraphQLNonNull(TelcosDeviceSpecificationsJsonType),
        },
        name: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
        },
        company_id: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
        },
        logo_url: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
        },
        coverage_url: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
        },
        terms_url: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
        },
        Telcos_network_details_json: {
            description: 'enter your description',
            type: new GraphQLNonNull(TelcosNetworkDetailsJsonType),
        },
        tariff_group_id: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
        },
        tariff_group_description: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
        },
        tariff_group_promo_info: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
        },
        Telcos_tariff_group_details_json: {
            description: 'enter your description',
            type: new GraphQLNonNull(TelcosTariffGroupDetailsJsonType),
        },
        tariff_id: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
        },
        tariff_name: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
        },
        tariff_type_id: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
        },
        tariff_type: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
        },
        tariff_term: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
        },
        tariff_term_friendly: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
        },
        // tariff_promo_info: {
        //     description: 'enter your description',
        //     type: null,
        // },
        Telcos_tariff_details_json: {
            description: 'enter your description',
            type: new GraphQLNonNull(TelcosTariffDetailsJsonType),
        },
        cross_net_anytime: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
        },
        cross_net_anytime_qualifier: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
        },
        // _same_net_anytime: {
        //     description: 'enter your description',
        //     type: null,
        // },
        // _special_numbers_see_terms: {
        //     description: 'enter your description',
        //     type: null,
        // },
        // landline: {
        //     description: 'enter your description',
        //     type: null,
        // },
        mins_details: {
            description: 'enter your description',
            type: new GraphQLNonNull(Telcos_tariff_allowances_jsonMinsDetailsType),
        },
        texts_details: {
            description: 'enter your description',
            type: new GraphQLNonNull(Telcos_tariff_allowances_jsonTextsDetailsType),
        },
        // wifi_mb: {
        //     description: 'enter your description',
        //     type: null,
        // },
        cellular_mb: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
        },
        cellular_speed: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
        },
        data_details: {
            description: 'enter your description',
            type: new GraphQLNonNull(Telcos_tariff_allowances_jsonDataDetailsType),
        },
        Telcos_tariff_allowances_json: {
            description: 'enter your description',
            type: new GraphQLNonNull(TelcosTariffAllowancesJsonType),
        },
        pence_per_cross_net_min: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
        },
        pence_per_cross_net_text: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
        },
        // pence_per_mb: {
        //     description: 'enter your description',
        //     type: null,
        // },
        // data_charge_text: {
        //     description: 'enter your description',
        //     type: null,
        // },
        pence_per_voicemail_min: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
        },
        Telcos_tariff_out_of_plan_charges_json: {
            description: 'enter your description',
            type: new GraphQLNonNull(TelcosTariffOutOfPlanChargesJsonType),
        },
        // Telcos_deal_tags_json: {
        //     description: 'enter your description',
        //     type: null,
        // },
        deal_type_id: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
        },
        deal_type_name: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
        },
        Telcos_deal_type_json: {
            description: 'enter your description',
            type: new GraphQLNonNull(TelcosDealTypeJsonType),
        },
        // Telcos_deal_promo_info: {
        //     description: 'enter your description',
        //     type: null,
        // },
        Telcos_deal_retailer_json: {
            description: 'enter your description',
            type: new GraphQLNonNull(TelcosDealRetailerJsonType),
        },
        upfront_inc_vat: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
        },
        upfront_exc_vat: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
        },
        // upfront_previous_inc_vat: {
        //     description: 'enter your description',
        //     type: null,
        // },
        // upfront_previous_exc_vat: {
        //     description: 'enter your description',
        //     type: null,
        // },
        monthly_total_inc_vat: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
        },
        monthly_total_exc_vat: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
        },
        // monthly_total_previous_inc_vat: {
        //     description: 'enter your description',
        //     type: null,
        // },
        // monthly_total_previous_exc_vat: {
        //     description: 'enter your description',
        //     type: null,
        // },
        // monthly_device_inc_vat: {
        //     description: 'enter your description',
        //     type: null,
        // },
        // monthly_device_exc_vat: {
        //     description: 'enter your description',
        //     type: null,
        // },
        // monthly_device_term_months: {
        //     description: 'enter your description',
        //     type: null,
        // },
        // monthly_device_final_term_inc_vat: {
        //     description: 'enter your description',
        //     type: null,
        // },
        // monthly_device_final_term_exc_vat: {
        //     description: 'enter your description',
        //     type: null,
        // },
        // monthly_device_final_term_months: {
        //     description: 'enter your description',
        //     type: null,
        // },
        // monthly_contract_inc_vat: {
        //     description: 'enter your description',
        //     type: null,
        // },
        // monthly_contract_exc_vat: {
        //     description: 'enter your description',
        //     type: null,
        // },
        monthly_contract_term_months: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
        },
        ecpm_inc_vat: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
        },
        ecpm_exc_vat: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
        },
        tco_inc_vat: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
        },
        tco_exc_vat: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
        },
        Telcos_deal_cost_json: {
            description: 'enter your description',
            type: new GraphQLNonNull(TelcosDealCostJsonType),
        },
        // Telcos_deal_discounts_json: {
        //     description: 'enter your description',
        //     type: null,
        // },
        // Telcos_deal_cashback_json: {
        //     description: 'enter your description',
        //     type: null,
        // },
        // Telcos_deal_legal_info: {
        //     description: 'enter your description',
        //     type: null,
        // },
        // Telcos_subscription_name: {
        //     description: 'enter your description',
        //     type: null,
        // },
        // Telcos_subscription_price_effective: {
        //     description: 'enter your description',
        //     type: new GraphQLNonNull(GraphQLString),
        // },
        // Telcos_subscription_renewal: {
        //     description: 'enter your description',
        //     type: null,
        // }
    })
});

const Schema = new GraphQLSchema({
    query: new GraphQLObjectType({
        name: 'RootQueryType',
        fields: () => ({
            allDeals: {
                description: "all deals",
                type: new GraphQLList(DealType)
            }
        })
    })
});

export default Schema;