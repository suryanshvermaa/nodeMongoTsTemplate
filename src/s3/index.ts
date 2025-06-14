import {
	DeleteObjectCommand,
	GetObjectCommand,
	PutObjectCommand,
} from "@aws-sdk/client-s3";
import s3client from "../config/s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import "dotenv/config";
const Bucket = process.env.S3_BUCKET;

export const objectUploadURL = async (object: string): Promise<string> => {
	return new Promise(async (resolve, reject) => {
		const putObjectCommand = new PutObjectCommand({
			Bucket,
			Key: `${Date.now().toString() + object}`,
		});
		const signedUrl = await getSignedUrl(s3client, putObjectCommand, {
			expiresIn: 60 * 5,
		});
		if (!signedUrl) reject("signed url not found");
		resolve(signedUrl);
	});
};

export const signedUrl = async (
	objectUrl: string,
	time: number
): Promise<string> => {
	return new Promise(async (resolve, reject) => {
		const getObjectCommand = new GetObjectCommand({
			Bucket,
			Key: objectUrl,
		});
		const signedImageUrl = await getSignedUrl(s3client, getObjectCommand, {
			expiresIn: 60 * time,
		});
		if (!signedImageUrl) reject("signed url not found");
		resolve(signedImageUrl);
	});
};

export const deleteObject = async (objectUrl: string): Promise<boolean> => {
	return new Promise(async (resolve, reject) => {
		try {
			const deleteObjectCommand = new DeleteObjectCommand({
				Bucket,
				Key: objectUrl,
			});
			await s3client.send(deleteObjectCommand);
			resolve(true);
		} catch (error) {
			reject(error);
		}
	});
};
