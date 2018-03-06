import {
    GraphQLInt,
    GraphQLObjectType,
    GraphQLSchema,
    GraphQLList,
    GraphQLString
} from "graphql";

import { DealType } from "./types";
import { 
    MerchantCategoryFilterEnum, 
    OperatingSystemFilterEnum, 
    ContractTypeFilterEnum, 
    ProductVersionNameFilterEnum, 
    ManufacturerFilterEnum, 
    TalkMinutesFilterEnum,
    NumberOfTextsFilterEnum,
    NetworkFilterEnum,
    MerchantFilterEnum,
    StorageSizeFilterEnum,
    ColourFilterEnum,
    SortByEnum
} from "./enums";

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
            getDealById: {
                description: "get a deal by its id",
                type: DealType,
                args: { 
                    id: {
                        type: GraphQLString
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
                    talkMinutes: {
                        type: TalkMinutesFilterEnum
                    },
                    numberOfTexts: {
                        type: NumberOfTextsFilterEnum
                    },
                    network: {
                        type: NetworkFilterEnum
                    },
                    merchant: {
                        type: MerchantFilterEnum
                    },
                    storageSize: {
                        type: StorageSizeFilterEnum
                    },
                    colour: {
                        type: ColourFilterEnum
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