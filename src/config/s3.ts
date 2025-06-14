import { S3Client } from "@aws-sdk/client-s3";
import "dotenv/config";

const s3client = new S3Client({
	region: process.env.S3_REGION!,
	endpoint: process.env.S3_ENDPOINT!, //if using s3 like service,otherwise remove this property
	credentials: {
		accessKeyId: process.env.ACCESS_KEY_ID!,
		secretAccessKey: process.env.SECRET_ACCESS_KEY!,
	},
	forcePathStyle: true, // if using s3 like service,otherwise remove this property
});

export default s3client;
