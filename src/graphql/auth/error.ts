import { GraphQLFormattedError } from "graphql";

const graphQlError = (err: GraphQLFormattedError) => {
	return {
		success: false,
		message: err.message,
		data: {},
	};
};
export default graphQlError;
