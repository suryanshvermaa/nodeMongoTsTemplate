import { ApolloServer } from "@apollo/server";
import graphQlError from "../graphql/auth/error";
import userSchema from "../graphql/schemas/user.schema";
import userResolver from "../graphql/resolvers/user.resolver";

const apolloServer = new ApolloServer({
	typeDefs: [userSchema],
	resolvers: [userResolver],
	formatError: graphQlError,
});

export default apolloServer;
