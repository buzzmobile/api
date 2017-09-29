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
            // TODO: Implement resolver for product_id
            resolve: () => null,
        },
        product_name: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
            // TODO: Implement resolver for product_name
            resolve: () => null,
        },
        product_brand: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
            // TODO: Implement resolver for product_brand
            resolve: () => null,
        },
        product_brand_id: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
            // TODO: Implement resolver for product_brand_id
            resolve: () => null,
        },
        product_type: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
            // TODO: Implement resolver for product_type
            resolve: () => null,
        },
        product_type_id: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
            // TODO: Implement resolver for product_type_id
            resolve: () => null,
        }
    },
});


const TelcosDeviceProductVersionJsonType = new GraphQLObjectType({
    name: 'Telcos_device_product_version_json',
    fields: {
        product_version_id: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
            // TODO: Implement resolver for product_version_id
            resolve: () => null,
        },
        product_version_name: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
            // TODO: Implement resolver for product_version_name
            resolve: () => null,
        }
    },
});


const TelcosDeviceProductEditionJsonType = new GraphQLObjectType({
    name: 'Telcos_device_product_edition_json',
    fields: {
        product_edition_id: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
            // TODO: Implement resolver for product_edition_id
            resolve: () => null,
        },
        product_edition_name: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
            // TODO: Implement resolver for product_edition_name
            resolve: () => null,
        },
        reseller_product_edition_id: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
            // TODO: Implement resolver for reseller_product_edition_id
            resolve: () => null,
        }
    },
});


const TelcosDeviceImagesJsonType = new GraphQLObjectType({
    name: 'Telcos_device_images_json',
    fields: {
        primary_thumb: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
            // TODO: Implement resolver for primary_thumb
            resolve: () => null,
        },
        primary_large: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
            // TODO: Implement resolver for primary_large
            resolve: () => null,
        }
    },
});


const TelcosDeviceFeaturesJsonType = new GraphQLObjectType({
    name: 'Telcos_device_features_json',
    fields: {
        colour: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
            // TODO: Implement resolver for colour
            resolve: () => null,
        },
        colour_group: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
            // TODO: Implement resolver for colour_group
            resolve: () => null,
        },
        max_data_standard: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
            // TODO: Implement resolver for max_data_standard
            resolve: () => null,
        },
        condition: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
            // TODO: Implement resolver for condition
            resolve: () => null,
        },
        condition_friendly: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
            // TODO: Implement resolver for condition_friendly
            resolve: () => null,
        },
        _sim_type: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
            // TODO: Implement resolver for _sim_type
            resolve: () => null,
        },
        capacity: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
            // TODO: Implement resolver for capacity
            resolve: () => null,
        },
        os: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
            // TODO: Implement resolver for os
            resolve: () => null,
        },
        megapixels: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
            // TODO: Implement resolver for megapixels
            resolve: () => null,
        }
    },
});


const TelcosDeviceSpecificationsJsonType = new GraphQLObjectType({
    name: 'Telcos_device_specifications_json',
    fields: {
        display_resolution: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
            // TODO: Implement resolver for display_resolution
            resolve: () => null,
        },
        display_size: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
            // TODO: Implement resolver for display_size
            resolve: () => null,
        },
        display_type: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
            // TODO: Implement resolver for display_type
            resolve: () => null,
        },
        primary_camera_flash: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
            // TODO: Implement resolver for primary_camera_flash
            resolve: () => null,
        },
        primary_camera_resolution: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
            // TODO: Implement resolver for primary_camera_resolution
            resolve: () => null,
        },
        internal_memory: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
            // TODO: Implement resolver for internal_memory
            resolve: () => null,
        },
        memory_card_slot: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
            // TODO: Implement resolver for memory_card_slot
            resolve: () => null,
        },
        processor: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
            // TODO: Implement resolver for processor
            resolve: () => null,
        },
        _2g: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
            // TODO: Implement resolver for 2g
            resolve: () => null,
        },
        _3g: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
            // TODO: Implement resolver for 3g
            resolve: () => null,
        },
        _4g: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
            // TODO: Implement resolver for 4g
            resolve: () => null,
        },
        bluetooth: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
            // TODO: Implement resolver for bluetooth
            resolve: () => null,
        },
        gps: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
            // TODO: Implement resolver for gps
            resolve: () => null,
        },
        wifi: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
            // TODO: Implement resolver for wifi
            resolve: () => null,
        },
        talk_time: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
            // TODO: Implement resolver for talk_time
            resolve: () => null,
        },
        _secondary_camera: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
            // TODO: Implement resolver for _secondary_camera
            resolve: () => null,
        },
        weight_grams: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
            // TODO: Implement resolver for weight_grams
            resolve: () => null,
        },
        dimensions: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
            // TODO: Implement resolver for dimensions
            resolve: () => null,
        },
        chipset: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
            // TODO: Implement resolver for chipset
            resolve: () => null,
        },
        battery_type: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
            // TODO: Implement resolver for battery_type
            resolve: () => null,
        },
        ip_rating: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
            // TODO: Implement resolver for ip_rating
            resolve: () => null,
        }
    },
});


const TelcosNetworkDetailsJsonType = new GraphQLObjectType({
    name: 'Telcos_network_details_json',
    fields: {
        name: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
            // TODO: Implement resolver for name
            resolve: () => null,
        },
        company_id: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
            // TODO: Implement resolver for company_id
            resolve: () => null,
        },
        logo_url: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
            // TODO: Implement resolver for logo_url
            resolve: () => null,
        },
        coverage_url: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
            // TODO: Implement resolver for coverage_url
            resolve: () => null,
        },
        terms_url: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
            // TODO: Implement resolver for terms_url
            resolve: () => null,
        },
        description: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
            // TODO: Implement resolver for description
            resolve: () => null,
        }
    },
});


const TelcosTariffGroupDetailsJsonType = new GraphQLObjectType({
    name: 'Telcos_tariff_group_details_json',
    fields: {
        tariff_group_id: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
            // TODO: Implement resolver for tariff_group_id
            resolve: () => null,
        },
        tariff_group_description: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
            // TODO: Implement resolver for tariff_group_description
            resolve: () => null,
        },
        tariff_group_promo_info: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
            // TODO: Implement resolver for tariff_group_promo_info
            resolve: () => null,
        }
    },
});


const TelcosTariffDetailsJsonType = new GraphQLObjectType({
    name: 'Telcos_tariff_details_json',
    fields: {
        tariff_id: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
            // TODO: Implement resolver for tariff_id
            resolve: () => null,
        },
        tariff_name: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
            // TODO: Implement resolver for tariff_name
            resolve: () => null,
        },
        tariff_type_id: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
            // TODO: Implement resolver for tariff_type_id
            resolve: () => null,
        },
        tariff_type: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
            // TODO: Implement resolver for tariff_type
            resolve: () => null,
        },
        tariff_term: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
            // TODO: Implement resolver for tariff_term
            resolve: () => null,
        },
        tariff_term_friendly: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
            // TODO: Implement resolver for tariff_term_friendly
            resolve: () => null,
        },
        tariff_promo_info: {
            description: 'enter your description',
            type: null,
            // TODO: Implement resolver for tariff_promo_info
            resolve: () => null,
        }
    },
});


const Telcos_tariff_allowances_jsonMinsDetailsType = new GraphQLObjectType({
    name: 'mins_details',
    fields: {
        cross_net_anytime: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
            // TODO: Implement resolver for cross_net_anytime
            resolve: () => null,
        },
        cross_net_anytime_qualifier: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
            // TODO: Implement resolver for cross_net_anytime_qualifier
            resolve: () => null,
        },
        _same_net_anytime: {
            description: 'enter your description',
            type: null,
            // TODO: Implement resolver for _same_net_anytime
            resolve: () => null,
        },
        _special_numbers_see_terms: {
            description: 'enter your description',
            type: null,
            // TODO: Implement resolver for _special_numbers_see_terms
            resolve: () => null,
        },
        landline: {
            description: 'enter your description',
            type: null,
            // TODO: Implement resolver for landline
            resolve: () => null,
        }
    },
});


const Telcos_tariff_allowances_jsonTextsDetailsType = new GraphQLObjectType({
    name: 'texts_details',
    fields: {
        cross_net_anytime: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
            // TODO: Implement resolver for cross_net_anytime
            resolve: () => null,
        },
        _same_net_anytime: {
            description: 'enter your description',
            type: null,
            // TODO: Implement resolver for _same_net_anytime
            resolve: () => null,
        }
    },
});


const Telcos_tariff_allowances_jsonDataDetailsType = new GraphQLObjectType({
    name: 'data_details',
    fields: {
        wifi_mb: {
            description: 'enter your description',
            type: null,
            // TODO: Implement resolver for wifi_mb
            resolve: () => null,
        },
        cellular_mb: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
            // TODO: Implement resolver for cellular_mb
            resolve: () => null,
        },
        cellular_speed: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
            // TODO: Implement resolver for cellular_speed
            resolve: () => null,
        }
    },
});

const TelcosTariffAllowancesJsonType = new GraphQLObjectType({
    name: 'Telcos_tariff_allowances_json',
    fields: {
        mins_details: {
            description: 'enter your description',
            type: new GraphQLNonNull(Telcos_tariff_allowances_jsonMinsDetailsType),
            // TODO: Implement resolver for mins_details
            resolve: () => null,
        },
        texts_details: {
            description: 'enter your description',
            type: new GraphQLNonNull(Telcos_tariff_allowances_jsonTextsDetailsType),
            // TODO: Implement resolver for texts_details
            resolve: () => null,
        },
        data_details: {
            description: 'enter your description',
            type: new GraphQLNonNull(Telcos_tariff_allowances_jsonDataDetailsType),
            // TODO: Implement resolver for data_details
            resolve: () => null,
        }
    },
});


const TelcosTariffOutOfPlanChargesJsonType = new GraphQLObjectType({
    name: 'Telcos_tariff_out_of_plan_charges_json',
    fields: {
        pence_per_cross_net_min: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
            // TODO: Implement resolver for pence_per_cross_net_min
            resolve: () => null,
        },
        pence_per_cross_net_text: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
            // TODO: Implement resolver for pence_per_cross_net_text
            resolve: () => null,
        },
        pence_per_mb: {
            description: 'enter your description',
            type: null,
            // TODO: Implement resolver for pence_per_mb
            resolve: () => null,
        },
        data_charge_text: {
            description: 'enter your description',
            type: null,
            // TODO: Implement resolver for data_charge_text
            resolve: () => null,
        },
        pence_per_voicemail_min: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
            // TODO: Implement resolver for pence_per_voicemail_min
            resolve: () => null,
        }
    },
});


const TelcosDealTypeJsonType = new GraphQLObjectType({
    name: 'Telcos_deal_type_json',
    fields: {
        deal_type_id: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
            // TODO: Implement resolver for deal_type_id
            resolve: () => null,
        },
        deal_type_name: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
            // TODO: Implement resolver for deal_type_name
            resolve: () => null,
        }
    },
});


const TelcosDealRetailerJsonType = new GraphQLObjectType({
    name: 'Telcos_deal_retailer_json',
    fields: {
        name: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
            // TODO: Implement resolver for name
            resolve: () => null,
        },
        company_id: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
            // TODO: Implement resolver for company_id
            resolve: () => null,
        },
        logo_url: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
            // TODO: Implement resolver for logo_url
            resolve: () => null,
        },
        terms_url: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
            // TODO: Implement resolver for terms_url
            resolve: () => null,
        }
    },
});


const TelcosDealCostJsonType = new GraphQLObjectType({
    name: 'Telcos_deal_cost_json',
    fields: {
        upfront_inc_vat: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
            // TODO: Implement resolver for upfront_inc_vat
            resolve: () => null,
        },
        upfront_exc_vat: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
            // TODO: Implement resolver for upfront_exc_vat
            resolve: () => null,
        },
        upfront_previous_inc_vat: {
            description: 'enter your description',
            type: null,
            // TODO: Implement resolver for upfront_previous_inc_vat
            resolve: () => null,
        },
        upfront_previous_exc_vat: {
            description: 'enter your description',
            type: null,
            // TODO: Implement resolver for upfront_previous_exc_vat
            resolve: () => null,
        },
        monthly_total_inc_vat: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
            // TODO: Implement resolver for monthly_total_inc_vat
            resolve: () => null,
        },
        monthly_total_exc_vat: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
            // TODO: Implement resolver for monthly_total_exc_vat
            resolve: () => null,
        },
        monthly_total_previous_inc_vat: {
            description: 'enter your description',
            type: null,
            // TODO: Implement resolver for monthly_total_previous_inc_vat
            resolve: () => null,
        },
        monthly_total_previous_exc_vat: {
            description: 'enter your description',
            type: null,
            // TODO: Implement resolver for monthly_total_previous_exc_vat
            resolve: () => null,
        },
        monthly_device_inc_vat: {
            description: 'enter your description',
            type: null,
            // TODO: Implement resolver for monthly_device_inc_vat
            resolve: () => null,
        },
        monthly_device_exc_vat: {
            description: 'enter your description',
            type: null,
            // TODO: Implement resolver for monthly_device_exc_vat
            resolve: () => null,
        },
        monthly_device_term_months: {
            description: 'enter your description',
            type: null,
            // TODO: Implement resolver for monthly_device_term_months
            resolve: () => null,
        },
        monthly_device_final_term_inc_vat: {
            description: 'enter your description',
            type: null,
            // TODO: Implement resolver for monthly_device_final_term_inc_vat
            resolve: () => null,
        },
        monthly_device_final_term_exc_vat: {
            description: 'enter your description',
            type: null,
            // TODO: Implement resolver for monthly_device_final_term_exc_vat
            resolve: () => null,
        },
        monthly_device_final_term_months: {
            description: 'enter your description',
            type: null,
            // TODO: Implement resolver for monthly_device_final_term_months
            resolve: () => null,
        },
        monthly_contract_inc_vat: {
            description: 'enter your description',
            type: null,
            // TODO: Implement resolver for monthly_contract_inc_vat
            resolve: () => null,
        },
        monthly_contract_exc_vat: {
            description: 'enter your description',
            type: null,
            // TODO: Implement resolver for monthly_contract_exc_vat
            resolve: () => null,
        },
        monthly_contract_term_months: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
            // TODO: Implement resolver for monthly_contract_term_months
            resolve: () => null,
        },
        ecpm_inc_vat: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
            // TODO: Implement resolver for ecpm_inc_vat
            resolve: () => null,
        },
        ecpm_exc_vat: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
            // TODO: Implement resolver for ecpm_exc_vat
            resolve: () => null,
        },
        tco_inc_vat: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
            // TODO: Implement resolver for tco_inc_vat
            resolve: () => null,
        },
        tco_exc_vat: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
            // TODO: Implement resolver for tco_exc_vat
            resolve: () => null,
        }
    },
});

const DealType = new GraphQLObjectType({
    name: 'DealType',
    fields: () => ({
        _id: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
            // TODO: Implement resolver for _id
            resolve: () => null,
        },
        aw_deep_link: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
            // TODO: Implement resolver for aw_deep_link
            async resolve(obj, { page = 1 }, { deals }) {
                const pageSize = 3;
                const dealsOut = await deals.findOne({}, { fields: { aw_deep_link: 1 }, skip: pageSize * (page - 1), limit: pageSize });
                console.log(dealsOut); //eslint-disable-line no-console
                return dealsOut.aw_deep_link;
            },
        },
        // product_name: {
        //     description: 'enter your description',
        //     type: new GraphQLNonNull(GraphQLString),
        //     // TODO: Implement resolver for product_name
        //     resolve: () => null,
        // },
        // aw_product_id: {
        //     description: 'enter your description',
        //     type: new GraphQLNonNull(GraphQLString),
        //     // TODO: Implement resolver for aw_product_id
        //     resolve: () => null,
        // },
        // merchant_product_id: {
        //     description: 'enter your description',
        //     type: new GraphQLNonNull(GraphQLString),
        //     // TODO: Implement resolver for merchant_product_id
        //     resolve: () => null,
        // },
        // merchant_image_url: {
        //     description: 'enter your description',
        //     type: new GraphQLNonNull(GraphQLString),
        //     // TODO: Implement resolver for merchant_image_url
        //     resolve: () => null,
        // },
        // description: {
        //     description: 'enter your description',
        //     type: new GraphQLNonNull(GraphQLString),
        //     // TODO: Implement resolver for description
        //     resolve: () => null,
        // },
        // merchant_category: {
        //     description: 'enter your description',
        //     type: new GraphQLNonNull(GraphQLString),
        //     // TODO: Implement resolver for merchant_category
        //     resolve: () => null,
        // },
        // search_price: {
        //     description: 'enter your description',
        //     type: new GraphQLNonNull(GraphQLString),
        //     // TODO: Implement resolver for search_price
        //     resolve: () => null,
        // },
        // merchant_name: {
        //     description: 'enter your description',
        //     type: new GraphQLNonNull(GraphQLString),
        //     // TODO: Implement resolver for merchant_name
        //     resolve: () => null,
        // },
        // merchant_id: {
        //     description: 'enter your description',
        //     type: new GraphQLNonNull(GraphQLString),
        //     // TODO: Implement resolver for merchant_id
        //     resolve: () => null,
        // },
        // category_name: {
        //     description: 'enter your description',
        //     type: new GraphQLNonNull(GraphQLString),
        //     // TODO: Implement resolver for category_name
        //     resolve: () => null,
        // },
        // category_id: {
        //     description: 'enter your description',
        //     type: new GraphQLNonNull(GraphQLString),
        //     // TODO: Implement resolver for category_id
        //     resolve: () => null,
        // },
        // aw_image_url: {
        //     description: 'enter your description',
        //     type: new GraphQLNonNull(GraphQLString),
        //     // TODO: Implement resolver for aw_image_url
        //     resolve: () => null,
        // },
        // currency: {
        //     description: 'enter your description',
        //     type: new GraphQLNonNull(GraphQLString),
        //     // TODO: Implement resolver for currency
        //     resolve: () => null,
        // },
        // store_price: {
        //     description: 'enter your description',
        //     type: new GraphQLNonNull(GraphQLString),
        //     // TODO: Implement resolver for store_price
        //     resolve: () => null,
        // },
        // delivery_cost: {
        //     description: 'enter your description',
        //     type: null,
        //     // TODO: Implement resolver for delivery_cost
        //     resolve: () => null,
        // },
        // merchant_deep_link: {
        //     description: 'enter your description',
        //     type: new GraphQLNonNull(GraphQLString),
        //     // TODO: Implement resolver for merchant_deep_link
        //     resolve: () => null,
        // },
        // language: {
        //     description: 'enter your description',
        //     type: new GraphQLNonNull(GraphQLString),
        //     // TODO: Implement resolver for language
        //     resolve: () => null,
        // },
        // last_updated: {
        //     description: 'enter your description',
        //     type: new GraphQLNonNull(GraphQLString),
        //     // TODO: Implement resolver for last_updated
        //     resolve: () => null,
        // },
        // display_price: {
        //     description: 'enter your description',
        //     type: new GraphQLNonNull(GraphQLString),
        //     // TODO: Implement resolver for display_price
        //     resolve: () => null,
        // },
        // data_feed_id: {
        //     description: 'enter your description',
        //     type: new GraphQLNonNull(GraphQLString),
        //     // TODO: Implement resolver for data_feed_id
        //     resolve: () => null,
        // },
        // Telcos_contract_type: {
        //     description: 'enter your description',
        //     type: new GraphQLNonNull(GraphQLString),
        //     // TODO: Implement resolver for Telcos_contract_type
        //     resolve: () => null,
        // },
        // Telcos_term: {
        //     description: 'enter your description',
        //     type: new GraphQLNonNull(GraphQLString),
        //     // TODO: Implement resolver for Telcos_term
        //     resolve: () => null,
        // },
        // Telcos_initial_cost: {
        //     description: 'enter your description',
        //     type: new GraphQLNonNull(GraphQLString),
        //     // TODO: Implement resolver for Telcos_initial_cost
        //     resolve: () => null,
        // },
        // Telcos_month_cost: {
        //     description: 'enter your description',
        //     type: new GraphQLNonNull(GraphQLString),
        //     // TODO: Implement resolver for Telcos_month_cost
        //     resolve: () => null,
        // },
        // Telcos_gift: {
        //     description: 'enter your description',
        //     type: null,
        //     // TODO: Implement resolver for Telcos_gift
        //     resolve: () => null,
        // },
        // Telcos_inc_minutes: {
        //     description: 'enter your description',
        //     type: new GraphQLNonNull(GraphQLString),
        //     // TODO: Implement resolver for Telcos_inc_minutes
        //     resolve: () => null,
        // },
        // Telcos_inc_data: {
        //     description: 'enter your description',
        //     type: new GraphQLNonNull(GraphQLString),
        //     // TODO: Implement resolver for Telcos_inc_data
        //     resolve: () => null,
        // },
        // Telcos_connectivity: {
        //     description: 'enter your description',
        //     type: new GraphQLNonNull(GraphQLString),
        //     // TODO: Implement resolver for Telcos_connectivity
        //     resolve: () => null,
        // },
        // Telcos_inc_texts: {
        //     description: 'enter your description',
        //     type: new GraphQLNonNull(GraphQLString),
        //     // TODO: Implement resolver for Telcos_inc_texts
        //     resolve: () => null,
        // },
        // Telcos_tariff: {
        //     description: 'enter your description',
        //     type: new GraphQLNonNull(GraphQLString),
        //     // TODO: Implement resolver for Telcos_tariff
        //     resolve: () => null,
        // },
        // Telcos_storage_size: {
        //     description: 'enter your description',
        //     type: new GraphQLNonNull(GraphQLString),
        //     // TODO: Implement resolver for Telcos_storage_size
        //     resolve: () => null,
        // },
        // Telcos_special_offer: {
        //     description: 'enter your description',
        //     type: new GraphQLNonNull(GraphQLString),
        //     // TODO: Implement resolver for Telcos_special_offer
        //     resolve: () => null,
        // },
        // Telcos_network: {
        //     description: 'enter your description',
        //     type: new GraphQLNonNull(GraphQLString),
        //     // TODO: Implement resolver for Telcos_network
        //     resolve: () => null,
        // },
        // Telcos_operating_system: {
        //     description: 'enter your description',
        //     type: new GraphQLNonNull(GraphQLString),
        //     // TODO: Implement resolver for Telcos_operating_system
        //     resolve: () => null,
        // },
        // product_id: {
        //     description: 'enter your description',
        //     type: new GraphQLNonNull(GraphQLString),
        //     // TODO: Implement resolver for product_id
        //     resolve: () => null,
        // },
        // product_brand: {
        //     description: 'enter your description',
        //     type: new GraphQLNonNull(GraphQLString),
        //     // TODO: Implement resolver for product_brand
        //     resolve: () => null,
        // },
        // product_brand_id: {
        //     description: 'enter your description',
        //     type: new GraphQLNonNull(GraphQLString),
        //     // TODO: Implement resolver for product_brand_id
        //     resolve: () => null,
        // },
        // product_type: {
        //     description: 'enter your description',
        //     type: new GraphQLNonNull(GraphQLString),
        //     // TODO: Implement resolver for product_type
        //     resolve: () => null,
        // },
        // product_type_id: {
        //     description: 'enter your description',
        //     type: new GraphQLNonNull(GraphQLString),
        //     // TODO: Implement resolver for product_type_id
        //     resolve: () => null,
        // },
        // Telcos_device_product_json: {
        //     description: 'enter your description',
        //     type: new GraphQLNonNull(TelcosDeviceProductJsonType),
        //     // TODO: Implement resolver for Telcos_device_product_json
        //     resolve: () => null,
        // },
        // product_version_id: {
        //     description: 'enter your description',
        //     type: new GraphQLNonNull(GraphQLString),
        //     // TODO: Implement resolver for product_version_id
        //     resolve: () => null,
        // },
        // product_version_name: {
        //     description: 'enter your description',
        //     type: new GraphQLNonNull(GraphQLString),
        //     // TODO: Implement resolver for product_version_name
        //     resolve: () => null,
        // },
        // Telcos_device_product_version_json: {
        //     description: 'enter your description',
        //     type: new GraphQLNonNull(TelcosDeviceProductVersionJsonType),
        //     // TODO: Implement resolver for Telcos_device_product_version_json
        //     resolve: () => null,
        // },
        // product_edition_id: {
        //     description: 'enter your description',
        //     type: new GraphQLNonNull(GraphQLString),
        //     // TODO: Implement resolver for product_edition_id
        //     resolve: () => null,
        // },
        // product_edition_name: {
        //     description: 'enter your description',
        //     type: new GraphQLNonNull(GraphQLString),
        //     // TODO: Implement resolver for product_edition_name
        //     resolve: () => null,
        // },
        // reseller_product_edition_id: {
        //     description: 'enter your description',
        //     type: new GraphQLNonNull(GraphQLString),
        //     // TODO: Implement resolver for reseller_product_edition_id
        //     resolve: () => null,
        // },
        // Telcos_device_product_edition_json: {
        //     description: 'enter your description',
        //     type: new GraphQLNonNull(TelcosDeviceProductEditionJsonType),
        //     // TODO: Implement resolver for Telcos_device_product_edition_json
        //     resolve: () => null,
        // },
        // Telcos_device_full_name: {
        //     description: 'enter your description',
        //     type: new GraphQLNonNull(GraphQLString),
        //     // TODO: Implement resolver for Telcos_device_full_name
        //     resolve: () => null,
        // },
        // Telcos_device_description: {
        //     description: 'enter your description',
        //     type: new GraphQLNonNull(GraphQLString),
        //     // TODO: Implement resolver for Telcos_device_description
        //     resolve: () => null,
        // },
        // primary_thumb: {
        //     description: 'enter your description',
        //     type: new GraphQLNonNull(GraphQLString),
        //     // TODO: Implement resolver for primary_thumb
        //     resolve: () => null,
        // },
        // primary_large: {
        //     description: 'enter your description',
        //     type: new GraphQLNonNull(GraphQLString),
        //     // TODO: Implement resolver for primary_large
        //     resolve: () => null,
        // },
        // Telcos_device_images_json: {
        //     description: 'enter your description',
        //     type: new GraphQLNonNull(TelcosDeviceImagesJsonType),
        //     // TODO: Implement resolver for Telcos_device_images_json
        //     resolve: () => null,
        // },
        // colour: {
        //     description: 'enter your description',
        //     type: new GraphQLNonNull(GraphQLString),
        //     // TODO: Implement resolver for colour
        //     resolve: () => null,
        // },
        // colour_group: {
        //     description: 'enter your description',
        //     type: new GraphQLNonNull(GraphQLString),
        //     // TODO: Implement resolver for colour_group
        //     resolve: () => null,
        // },
        // max_data_standard: {
        //     description: 'enter your description',
        //     type: new GraphQLNonNull(GraphQLString),
        //     // TODO: Implement resolver for max_data_standard
        //     resolve: () => null,
        // },
        // condition: {
        //     description: 'enter your description',
        //     type: new GraphQLNonNull(GraphQLString),
        //     // TODO: Implement resolver for condition
        //     resolve: () => null,
        // },
        // condition_friendly: {
        //     description: 'enter your description',
        //     type: new GraphQLNonNull(GraphQLString),
        //     // TODO: Implement resolver for condition_friendly
        //     resolve: () => null,
        // },
        // _sim_type: {
        //     description: 'enter your description',
        //     type: new GraphQLNonNull(GraphQLString),
        //     // TODO: Implement resolver for _sim_type
        //     resolve: () => null,
        // },
        // capacity: {
        //     description: 'enter your description',
        //     type: new GraphQLNonNull(GraphQLString),
        //     // TODO: Implement resolver for capacity
        //     resolve: () => null,
        // },
        // os: {
        //     description: 'enter your description',
        //     type: new GraphQLNonNull(GraphQLString),
        //     // TODO: Implement resolver for os
        //     resolve: () => null,
        // },
        // megapixels: {
        //     description: 'enter your description',
        //     type: new GraphQLNonNull(GraphQLString),
        //     // TODO: Implement resolver for megapixels
        //     resolve: () => null,
        // },
        // Telcos_device_features_json: {
        //     description: 'enter your description',
        //     type: new GraphQLNonNull(TelcosDeviceFeaturesJsonType),
        //     // TODO: Implement resolver for Telcos_device_features_json
        //     resolve: () => null,
        // },
        // display_resolution: {
        //     description: 'enter your description',
        //     type: new GraphQLNonNull(GraphQLString),
        //     // TODO: Implement resolver for display_resolution
        //     resolve: () => null,
        // },
        // display_size: {
        //     description: 'enter your description',
        //     type: new GraphQLNonNull(GraphQLString),
        //     // TODO: Implement resolver for display_size
        //     resolve: () => null,
        // },
        // display_type: {
        //     description: 'enter your description',
        //     type: new GraphQLNonNull(GraphQLString),
        //     // TODO: Implement resolver for display_type
        //     resolve: () => null,
        // },
        // primary_camera_flash: {
        //     description: 'enter your description',
        //     type: new GraphQLNonNull(GraphQLString),
        //     // TODO: Implement resolver for primary_camera_flash
        //     resolve: () => null,
        // },
        // primary_camera_resolution: {
        //     description: 'enter your description',
        //     type: new GraphQLNonNull(GraphQLString),
        //     // TODO: Implement resolver for primary_camera_resolution
        //     resolve: () => null,
        // },
        // internal_memory: {
        //     description: 'enter your description',
        //     type: new GraphQLNonNull(GraphQLString),
        //     // TODO: Implement resolver for internal_memory
        //     resolve: () => null,
        // },
        // memory_card_slot: {
        //     description: 'enter your description',
        //     type: new GraphQLNonNull(GraphQLString),
        //     // TODO: Implement resolver for memory_card_slot
        //     resolve: () => null,
        // },
        // processor: {
        //     description: 'enter your description',
        //     type: new GraphQLNonNull(GraphQLString),
        //     // TODO: Implement resolver for processor
        //     resolve: () => null,
        // },
        // _2g: {
        //     description: 'enter your description',
        //     type: new GraphQLNonNull(GraphQLString),
        //     // TODO: Implement resolver for 2g
        //     resolve: () => null,
        // },
        // _3g: {
        //     description: 'enter your description',
        //     type: new GraphQLNonNull(GraphQLString),
        //     // TODO: Implement resolver for 3g
        //     resolve: () => null,
        // },
        // _4g: {
        //     description: 'enter your description',
        //     type: new GraphQLNonNull(GraphQLString),
        //     // TODO: Implement resolver for 4g
        //     resolve: () => null,
        // },
        // bluetooth: {
        //     description: 'enter your description',
        //     type: new GraphQLNonNull(GraphQLString),
        //     // TODO: Implement resolver for bluetooth
        //     resolve: () => null,
        // },
        // gps: {
        //     description: 'enter your description',
        //     type: new GraphQLNonNull(GraphQLString),
        //     // TODO: Implement resolver for gps
        //     resolve: () => null,
        // },
        // wifi: {
        //     description: 'enter your description',
        //     type: new GraphQLNonNull(GraphQLString),
        //     // TODO: Implement resolver for wifi
        //     resolve: () => null,
        // },
        // talk_time: {
        //     description: 'enter your description',
        //     type: new GraphQLNonNull(GraphQLString),
        //     // TODO: Implement resolver for talk_time
        //     resolve: () => null,
        // },
        // _secondary_camera: {
        //     description: 'enter your description',
        //     type: new GraphQLNonNull(GraphQLString),
        //     // TODO: Implement resolver for _secondary_camera
        //     resolve: () => null,
        // },
        // weight_grams: {
        //     description: 'enter your description',
        //     type: new GraphQLNonNull(GraphQLString),
        //     // TODO: Implement resolver for weight_grams
        //     resolve: () => null,
        // },
        // dimensions: {
        //     description: 'enter your description',
        //     type: new GraphQLNonNull(GraphQLString),
        //     // TODO: Implement resolver for dimensions
        //     resolve: () => null,
        // },
        // chipset: {
        //     description: 'enter your description',
        //     type: new GraphQLNonNull(GraphQLString),
        //     // TODO: Implement resolver for chipset
        //     resolve: () => null,
        // },
        // battery_type: {
        //     description: 'enter your description',
        //     type: new GraphQLNonNull(GraphQLString),
        //     // TODO: Implement resolver for battery_type
        //     resolve: () => null,
        // },
        // ip_rating: {
        //     description: 'enter your description',
        //     type: new GraphQLNonNull(GraphQLString),
        //     // TODO: Implement resolver for ip_rating
        //     resolve: () => null,
        // },
        // Telcos_device_specifications_json: {
        //     description: 'enter your description',
        //     type: new GraphQLNonNull(TelcosDeviceSpecificationsJsonType),
        //     // TODO: Implement resolver for Telcos_device_specifications_json
        //     resolve: () => null,
        // },
        // name: {
        //     description: 'enter your description',
        //     type: new GraphQLNonNull(GraphQLString),
        //     // TODO: Implement resolver for name
        //     resolve: () => null,
        // },
        // company_id: {
        //     description: 'enter your description',
        //     type: new GraphQLNonNull(GraphQLString),
        //     // TODO: Implement resolver for company_id
        //     resolve: () => null,
        // },
        // logo_url: {
        //     description: 'enter your description',
        //     type: new GraphQLNonNull(GraphQLString),
        //     // TODO: Implement resolver for logo_url
        //     resolve: () => null,
        // },
        // coverage_url: {
        //     description: 'enter your description',
        //     type: new GraphQLNonNull(GraphQLString),
        //     // TODO: Implement resolver for coverage_url
        //     resolve: () => null,
        // },
        // terms_url: {
        //     description: 'enter your description',
        //     type: new GraphQLNonNull(GraphQLString),
        //     // TODO: Implement resolver for terms_url
        //     resolve: () => null,
        // },
        // Telcos_network_details_json: {
        //     description: 'enter your description',
        //     type: new GraphQLNonNull(TelcosNetworkDetailsJsonType),
        //     // TODO: Implement resolver for Telcos_network_details_json
        //     resolve: () => null,
        // },
        // tariff_group_id: {
        //     description: 'enter your description',
        //     type: new GraphQLNonNull(GraphQLString),
        //     // TODO: Implement resolver for tariff_group_id
        //     resolve: () => null,
        // },
        // tariff_group_description: {
        //     description: 'enter your description',
        //     type: new GraphQLNonNull(GraphQLString),
        //     // TODO: Implement resolver for tariff_group_description
        //     resolve: () => null,
        // },
        // tariff_group_promo_info: {
        //     description: 'enter your description',
        //     type: new GraphQLNonNull(GraphQLString),
        //     // TODO: Implement resolver for tariff_group_promo_info
        //     resolve: () => null,
        // },
        // Telcos_tariff_group_details_json: {
        //     description: 'enter your description',
        //     type: new GraphQLNonNull(TelcosTariffGroupDetailsJsonType),
        //     // TODO: Implement resolver for Telcos_tariff_group_details_json
        //     resolve: () => null,
        // },
        // tariff_id: {
        //     description: 'enter your description',
        //     type: new GraphQLNonNull(GraphQLString),
        //     // TODO: Implement resolver for tariff_id
        //     resolve: () => null,
        // },
        // tariff_name: {
        //     description: 'enter your description',
        //     type: new GraphQLNonNull(GraphQLString),
        //     // TODO: Implement resolver for tariff_name
        //     resolve: () => null,
        // },
        // tariff_type_id: {
        //     description: 'enter your description',
        //     type: new GraphQLNonNull(GraphQLString),
        //     // TODO: Implement resolver for tariff_type_id
        //     resolve: () => null,
        // },
        // tariff_type: {
        //     description: 'enter your description',
        //     type: new GraphQLNonNull(GraphQLString),
        //     // TODO: Implement resolver for tariff_type
        //     resolve: () => null,
        // },
        // tariff_term: {
        //     description: 'enter your description',
        //     type: new GraphQLNonNull(GraphQLString),
        //     // TODO: Implement resolver for tariff_term
        //     resolve: () => null,
        // },
        // tariff_term_friendly: {
        //     description: 'enter your description',
        //     type: new GraphQLNonNull(GraphQLString),
        //     // TODO: Implement resolver for tariff_term_friendly
        //     resolve: () => null,
        // },
        // tariff_promo_info: {
        //     description: 'enter your description',
        //     type: null,
        //     // TODO: Implement resolver for tariff_promo_info
        //     resolve: () => null,
        // },
        // Telcos_tariff_details_json: {
        //     description: 'enter your description',
        //     type: new GraphQLNonNull(TelcosTariffDetailsJsonType),
        //     // TODO: Implement resolver for Telcos_tariff_details_json
        //     resolve: () => null,
        // },
        // cross_net_anytime: {
        //     description: 'enter your description',
        //     type: new GraphQLNonNull(GraphQLString),
        //     // TODO: Implement resolver for cross_net_anytime
        //     resolve: () => null,
        // },
        // cross_net_anytime_qualifier: {
        //     description: 'enter your description',
        //     type: new GraphQLNonNull(GraphQLString),
        //     // TODO: Implement resolver for cross_net_anytime_qualifier
        //     resolve: () => null,
        // },
        // _same_net_anytime: {
        //     description: 'enter your description',
        //     type: null,
        //     // TODO: Implement resolver for _same_net_anytime
        //     resolve: () => null,
        // },
        // _special_numbers_see_terms: {
        //     description: 'enter your description',
        //     type: null,
        //     // TODO: Implement resolver for _special_numbers_see_terms
        //     resolve: () => null,
        // },
        // landline: {
        //     description: 'enter your description',
        //     type: null,
        //     // TODO: Implement resolver for landline
        //     resolve: () => null,
        // },
        // mins_details: {
        //     description: 'enter your description',
        //     type: new GraphQLNonNull(Telcos_tariff_allowances_jsonMinsDetailsType),
        //     // TODO: Implement resolver for mins_details
        //     resolve: () => null,
        // },
        // texts_details: {
        //     description: 'enter your description',
        //     type: new GraphQLNonNull(Telcos_tariff_allowances_jsonTextsDetailsType),
        //     // TODO: Implement resolver for texts_details
        //     resolve: () => null,
        // },
        // wifi_mb: {
        //     description: 'enter your description',
        //     type: null,
        //     // TODO: Implement resolver for wifi_mb
        //     resolve: () => null,
        // },
        // cellular_mb: {
        //     description: 'enter your description',
        //     type: new GraphQLNonNull(GraphQLString),
        //     // TODO: Implement resolver for cellular_mb
        //     resolve: () => null,
        // },
        // cellular_speed: {
        //     description: 'enter your description',
        //     type: new GraphQLNonNull(GraphQLString),
        //     // TODO: Implement resolver for cellular_speed
        //     resolve: () => null,
        // },
        // data_details: {
        //     description: 'enter your description',
        //     type: new GraphQLNonNull(Telcos_tariff_allowances_jsonDataDetailsType),
        //     // TODO: Implement resolver for data_details
        //     resolve: () => null,
        // },
        // Telcos_tariff_allowances_json: {
        //     description: 'enter your description',
        //     type: new GraphQLNonNull(TelcosTariffAllowancesJsonType),
        //     // TODO: Implement resolver for Telcos_tariff_allowances_json
        //     resolve: () => null,
        // },
        // pence_per_cross_net_min: {
        //     description: 'enter your description',
        //     type: new GraphQLNonNull(GraphQLString),
        //     // TODO: Implement resolver for pence_per_cross_net_min
        //     resolve: () => null,
        // },
        // pence_per_cross_net_text: {
        //     description: 'enter your description',
        //     type: new GraphQLNonNull(GraphQLString),
        //     // TODO: Implement resolver for pence_per_cross_net_text
        //     resolve: () => null,
        // },
        // pence_per_mb: {
        //     description: 'enter your description',
        //     type: null,
        //     // TODO: Implement resolver for pence_per_mb
        //     resolve: () => null,
        // },
        // data_charge_text: {
        //     description: 'enter your description',
        //     type: null,
        //     // TODO: Implement resolver for data_charge_text
        //     resolve: () => null,
        // },
        // pence_per_voicemail_min: {
        //     description: 'enter your description',
        //     type: new GraphQLNonNull(GraphQLString),
        //     // TODO: Implement resolver for pence_per_voicemail_min
        //     resolve: () => null,
        // },
        // Telcos_tariff_out_of_plan_charges_json: {
        //     description: 'enter your description',
        //     type: new GraphQLNonNull(TelcosTariffOutOfPlanChargesJsonType),
        //     // TODO: Implement resolver for Telcos_tariff_out_of_plan_charges_json
        //     resolve: () => null,
        // },
        // Telcos_deal_tags_json: {
        //     description: 'enter your description',
        //     type: null,
        //     // TODO: Implement resolver for Telcos_deal_tags_json
        //     resolve: () => null,
        // },
        // deal_type_id: {
        //     description: 'enter your description',
        //     type: new GraphQLNonNull(GraphQLString),
        //     // TODO: Implement resolver for deal_type_id
        //     resolve: () => null,
        // },
        // deal_type_name: {
        //     description: 'enter your description',
        //     type: new GraphQLNonNull(GraphQLString),
        //     // TODO: Implement resolver for deal_type_name
        //     resolve: () => null,
        // },
        // Telcos_deal_type_json: {
        //     description: 'enter your description',
        //     type: new GraphQLNonNull(TelcosDealTypeJsonType),
        //     // TODO: Implement resolver for Telcos_deal_type_json
        //     resolve: () => null,
        // },
        // Telcos_deal_promo_info: {
        //     description: 'enter your description',
        //     type: null,
        //     // TODO: Implement resolver for Telcos_deal_promo_info
        //     resolve: () => null,
        // },
        // Telcos_deal_retailer_json: {
        //     description: 'enter your description',
        //     type: new GraphQLNonNull(TelcosDealRetailerJsonType),
        //     // TODO: Implement resolver for Telcos_deal_retailer_json
        //     resolve: () => null,
        // },
        // upfront_inc_vat: {
        //     description: 'enter your description',
        //     type: new GraphQLNonNull(GraphQLString),
        //     // TODO: Implement resolver for upfront_inc_vat
        //     resolve: () => null,
        // },
        // upfront_exc_vat: {
        //     description: 'enter your description',
        //     type: new GraphQLNonNull(GraphQLString),
        //     // TODO: Implement resolver for upfront_exc_vat
        //     resolve: () => null,
        // },
        // upfront_previous_inc_vat: {
        //     description: 'enter your description',
        //     type: null,
        //     // TODO: Implement resolver for upfront_previous_inc_vat
        //     resolve: () => null,
        // },
        // upfront_previous_exc_vat: {
        //     description: 'enter your description',
        //     type: null,
        //     // TODO: Implement resolver for upfront_previous_exc_vat
        //     resolve: () => null,
        // },
        // monthly_total_inc_vat: {
        //     description: 'enter your description',
        //     type: new GraphQLNonNull(GraphQLString),
        //     // TODO: Implement resolver for monthly_total_inc_vat
        //     resolve: () => null,
        // },
        // monthly_total_exc_vat: {
        //     description: 'enter your description',
        //     type: new GraphQLNonNull(GraphQLString),
        //     // TODO: Implement resolver for monthly_total_exc_vat
        //     resolve: () => null,
        // },
        // monthly_total_previous_inc_vat: {
        //     description: 'enter your description',
        //     type: null,
        //     // TODO: Implement resolver for monthly_total_previous_inc_vat
        //     resolve: () => null,
        // },
        // monthly_total_previous_exc_vat: {
        //     description: 'enter your description',
        //     type: null,
        //     // TODO: Implement resolver for monthly_total_previous_exc_vat
        //     resolve: () => null,
        // },
        // monthly_device_inc_vat: {
        //     description: 'enter your description',
        //     type: null,
        //     // TODO: Implement resolver for monthly_device_inc_vat
        //     resolve: () => null,
        // },
        // monthly_device_exc_vat: {
        //     description: 'enter your description',
        //     type: null,
        //     // TODO: Implement resolver for monthly_device_exc_vat
        //     resolve: () => null,
        // },
        // monthly_device_term_months: {
        //     description: 'enter your description',
        //     type: null,
        //     // TODO: Implement resolver for monthly_device_term_months
        //     resolve: () => null,
        // },
        // monthly_device_final_term_inc_vat: {
        //     description: 'enter your description',
        //     type: null,
        //     // TODO: Implement resolver for monthly_device_final_term_inc_vat
        //     resolve: () => null,
        // },
        // monthly_device_final_term_exc_vat: {
        //     description: 'enter your description',
        //     type: null,
        //     // TODO: Implement resolver for monthly_device_final_term_exc_vat
        //     resolve: () => null,
        // },
        // monthly_device_final_term_months: {
        //     description: 'enter your description',
        //     type: null,
        //     // TODO: Implement resolver for monthly_device_final_term_months
        //     resolve: () => null,
        // },
        // monthly_contract_inc_vat: {
        //     description: 'enter your description',
        //     type: null,
        //     // TODO: Implement resolver for monthly_contract_inc_vat
        //     resolve: () => null,
        // },
        // monthly_contract_exc_vat: {
        //     description: 'enter your description',
        //     type: null,
        //     // TODO: Implement resolver for monthly_contract_exc_vat
        //     resolve: () => null,
        // },
        // monthly_contract_term_months: {
        //     description: 'enter your description',
        //     type: new GraphQLNonNull(GraphQLString),
        //     // TODO: Implement resolver for monthly_contract_term_months
        //     resolve: () => null,
        // },
        // ecpm_inc_vat: {
        //     description: 'enter your description',
        //     type: new GraphQLNonNull(GraphQLString),
        //     // TODO: Implement resolver for ecpm_inc_vat
        //     resolve: () => null,
        // },
        // ecpm_exc_vat: {
        //     description: 'enter your description',
        //     type: new GraphQLNonNull(GraphQLString),
        //     // TODO: Implement resolver for ecpm_exc_vat
        //     resolve: () => null,
        // },
        // tco_inc_vat: {
        //     description: 'enter your description',
        //     type: new GraphQLNonNull(GraphQLString),
        //     // TODO: Implement resolver for tco_inc_vat
        //     resolve: () => null,
        // },
        // tco_exc_vat: {
        //     description: 'enter your description',
        //     type: new GraphQLNonNull(GraphQLString),
        //     // TODO: Implement resolver for tco_exc_vat
        //     resolve: () => null,
        // },
        // Telcos_deal_cost_json: {
        //     description: 'enter your description',
        //     type: new GraphQLNonNull(TelcosDealCostJsonType),
        //     // TODO: Implement resolver for Telcos_deal_cost_json
        //     resolve: () => null,
        // },
        // Telcos_deal_discounts_json: {
        //     description: 'enter your description',
        //     type: null,
        //     // TODO: Implement resolver for Telcos_deal_discounts_json
        //     resolve: () => null,
        // },
        // Telcos_deal_cashback_json: {
        //     description: 'enter your description',
        //     type: null,
        //     // TODO: Implement resolver for Telcos_deal_cashback_json
        //     resolve: () => null,
        // },
        // Telcos_deal_legal_info: {
        //     description: 'enter your description',
        //     type: null,
        //     // TODO: Implement resolver for Telcos_deal_legal_info
        //     resolve: () => null,
        // },
        // Telcos_subscription_name: {
        //     description: 'enter your description',
        //     type: null,
        //     // TODO: Implement resolver for Telcos_subscription_name
        //     resolve: () => null,
        // },
        // Telcos_subscription_price_effective: {
        //     description: 'enter your description',
        //     type: new GraphQLNonNull(GraphQLString),
        //     // TODO: Implement resolver for Telcos_subscription_price_effective
        //     resolve: () => null,
        // },
        // Telcos_subscription_renewal: {
        //     description: 'enter your description',
        //     type: null,
        //     // TODO: Implement resolver for Telcos_subscription_renewal
        //     resolve: () => null,
        // }
    })
});

const Schema = new GraphQLSchema({
    query: new GraphQLObjectType({
        name: 'RootQueryType',
        fields: () => ({
            allDeals: {
                description: "all deals", 
                type: new GraphQLList(DealType),
                async resolve(obj, { page = 1 }, { deals }) {
                    const pageSize = 3;
                    const dealsOut = await deals.find({}, { fields: { aw_deep_link: 1 }, skip: pageSize * (page - 1), limit: pageSize });
                    console.log(dealsOut); //eslint-disable-line no-console
                    return dealsOut;
                },
            }
        })
    })
});

export default Schema;