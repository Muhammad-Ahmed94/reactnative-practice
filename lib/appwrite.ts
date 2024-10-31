import { Client } from "react-native-appwrite";

export const appwriteConfig = {
  endpoint: "https://cloud.appwrite.io/v1",
  platform: "com.muneeb.aora_",
  projectId: "6723cdac003bce849128",
  databseId: "6723cf2b0018a6fd80cc",
  usersCollectionId: "6723cf44000227c56e24",
  videosCollectionId: "6723cf75003a48832b67",
  storageId: "6723d1c10029a8b4bf3e",
};

// Init your React Native SDK
const client = new Client();

client
  .setEndpoint(appwriteConfig.endpoint) // Your Appwrite Endpoint
  .setProject(appwriteConfig.projectId) // Your project ID
  .setPlatform(appwriteConfig.platform); // Your application ID or bundle ID.