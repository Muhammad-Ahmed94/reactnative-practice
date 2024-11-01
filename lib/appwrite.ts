import { Account, Avatars, Client, Databases, ID } from "react-native-appwrite";
/* interface createUserProps {
  email: string;
  password: string;
  username: string;
} */

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

  const account = new Account(client);
  const avatars = new Avatars(client);
  const databases = new Databases(client);

export const createUser = async (email:string, password:string, username:string) => {
  try {
    const newAccount = await account.create(ID.unique(), email, password, username);

    if(!newAccount) throw Error;

    const avatarsUrl = avatars.getInitials(username);
    
    await signIn(email, password)

    const newUser = await databases.createDocument(appwriteConfig.databseId, appwriteConfig.usersCollectionId, ID.unique(), {accountId: newAccount.$id, email, username, avatarsUrl});
    return newUser;

  } catch (error) {
    console.log(error);
  }
}

export async function signIn(email: string, password: string) {
  try {
    const session = await account.createEmailPasswordSession(email, password)
    return session;
  } catch (error) {
    console.log(error);
  }
}