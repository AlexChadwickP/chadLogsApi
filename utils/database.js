import {MongoClient} from "mongodb";

export const mongoClient = new MongoClient(process.env.MONGO_DB_URI);

export function cleanup() {
    mongoClient.close();
}
