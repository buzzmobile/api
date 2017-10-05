import {
    GraphQLInt,
    GraphQLObjectType,
    GraphQLSchema,
    GraphQLList
} from "graphql";

import { DealType } from "./types";
import { MerchantCategoryEnum, OperatingSystemEnum } from "./enums";

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
                    }
                }
            }
        })
    })
});

export default Schema;