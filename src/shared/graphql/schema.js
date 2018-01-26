import {
    GraphQLInt,
    GraphQLObjectType,
    GraphQLSchema,
    GraphQLList,
    GraphQLBoolean
} from "graphql";

import { DealType } from "./types";
import { MerchantCategoryFilterEnum, OperatingSystemFilterEnum, ContractTypeFilterEnum, ProductVersionNameFilterEnum, ManufacturerFilterEnum, SortByEnum } from "./enums";

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
                        type: MerchantCategoryFilterEnum
                    },
                    operatingSystem: {
                        type: OperatingSystemFilterEnum,
                    },
                    contractType: {
                        type: ContractTypeFilterEnum
                    },
                    productVersionName: {
                        type: ProductVersionNameFilterEnum
                    },
                    manufacturer: {
                        type: ManufacturerFilterEnum
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