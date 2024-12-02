import { Account, Avatars, Client, Databases, ID, Query } from 'react-native-appwrite';

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

const account = new Account(client); // Accound instance
const avatars = new Avatars(client); // Avatars instance for userprofiles
const databases = new Databases(client); // AppWrite instance for storage

export const createUser = async (email, password, username) => {
  try {
    const newAccount = await account.create( //* Account.create for new user account document id (ID.unique), email, username and password
      ID.unique(),
      email,
      password,
      username
    );

    if (!newAccount) throw Error; // if new user acc not created throw back err

    const avatarsUrl = avatars.getInitials(username); // Users profile with their username initials

    await signIn(email, password); //* For signing in new created user

    const newUser = await databases.createDocument( //* Storing new user account to appwrite database
      appwriteConfig.databseId,
      appwriteConfig.usersCollectionId,
      ID.unique(),
      { accountId: newAccount.$id, email, username, avatarsUrl }
    );
    return newUser;
  } catch (error) {
    console.log(error);
  }
};

export const signIn = async (email, password) => { //* Sign in function
  try {
    const session = await account.createEmailPasswordSession(email, password);
    return session;
  } catch (error) {
    console.log(error);
  }
}

export const getCurrentUser = async () => {
  try {
    const currentAccount = await account.get();

    if(!currentAccount) throw Error;

    const currentUser = await databases.listDocuments(
      appwriteConfig.databseId,
      appwriteConfig.usersCollectionId,
      [Query.equal('accountId', currentAccount.$id)]
    )

    if(!currentUser) throw Error;

    return currentUser.documents[0]
  } catch (error) {
    console.log(error);
  }
}