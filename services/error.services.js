import {mongoClient} from "../utils/database.js";
import {ObjectId} from "mongodb";

function createErrorMongoClient() {
    try {
        const database = mongoClient.db(process.env.MONGO_DB_NAME);
        const errorCollection = database.collection(process.env.MONGO_DB_ERROR_COLLECTION_NAME);

        return errorCollection;
    } catch (error) {
        throw error;
    }
}

export async function logErrorToDatabase(type, stack) {
    try {
        const errorCollection = createErrorMongoClient();

        return await errorCollection.insertOne({
            type,
            stack,
            timestamp: Date.now()
        });
    } catch (error) {
        throw error;
    } finally {

    }
}

export async function getErrorFromDatabase(errorObjectId) {
    const errorCollection = createErrorMongoClient();

    try {
        return await errorCollection.findOne({ _id: ObjectId(errorObjectId) });
    } catch (err) {
        throw err;
    }
}

export async function getAllErrorsFromDatabase() {
    const errorCollection = createErrorMongoClient();

    try {
        return await errorCollection.find({}).toArray();
    } catch (err) {
        throw err;
    }
}
