import { clients, projects } from "../sampleData";

import {
	GraphQLID,
	GraphQLObjectType,
	GraphQLSchema,
	GraphQLString,
} from "graphql";

//CLIENT TYPE
const ClientType = new GraphQLObjectType({
	name: "Client",
	fields: () => ({
		id: { type: GraphQLID },
		name: { type: GraphQLString },
		email: { type: GraphQLString },
		phone: { type: GraphQLString },
	}),
});

const RootQuery = new GraphQLObjectType({
	name: "RootQueryType",
	fields: {
		clients: {
			type: ClientType,
			args: { id: { type: GraphQLID } },
			resolve(parent, args) {
				return clients.find((client) => client.id === args.id);
			},
		},
	},
});

export const schema = new GraphQLSchema({
	query: RootQuery,
});
