import {
    GraphQLInt,
    GraphQLObjectType,
    GraphQLSchema,
    GraphQLList,
    GraphQLBoolean
} from "graphql";

import { DealType } from "./types";
import { MerchantCategoryEnum, OperatingSystemEnum, ContractTypeEnum, ProductVersionNameEnum, ManufacturerEnum, SortByEnum } from "./enums";

const Schema = new GraphQLSchema({
    query: new GraphQLObjectType({
        name: "RootQueryType",
        fields: () => ({
            allDeals: {
                description: "all deals",
                type: new GraphQLList(DealType),
                args: {
                    page: {
                        type: GraphQLInt
                    }
                }
            },
            allDealsFiltered: {
                description: "all deals by filters",
                type: new GraphQLList(DealType),
                args: {
                    page: {
                        type: GraphQLInt
                    },
                    merchantCategory: {
                        type: MerchantCategoryEnum
                    },
                    operatingSystem: {
                        type: OperatingSystemEnum
                    },
                    contractType: {
                        type: ContractTypeEnum
                    },
                    productVersionName: {
                        type: ProductVersionNameEnum
                    },
                    manufacturer: {
                        type: ManufacturerEnum
                    },
                    onlyIncludeUnlimitedMinutesAndTexts: {
                        type: GraphQLBoolean
                    },
                    sortBy: {
                        type: SortByEnum
                    }
                }
            }
        })
    })
});

export default Schema;