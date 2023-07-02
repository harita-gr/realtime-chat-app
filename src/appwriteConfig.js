import { Client, Databases } from "appwrite";

export const PROJECT_ID = "649dfaa5ba598a38b068";
export const DATABASE_ID = "649dfdc56211136c2aa0";
export const COLLECTION_ID_MESSAGES = "649dfdd56674329f61ab";

const client = new Client();

client
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject("649dfaa5ba598a38b068");

export const databases = new Databases(client);

export default client;
