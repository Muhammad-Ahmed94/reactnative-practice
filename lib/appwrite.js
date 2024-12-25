import { Account, Avatars, Client, Databases, ID, Query, Storage } from 'react-native-appwrite';

export const appwriteConfig = {
  endpoint: "https://cloud.appwrite.io/v1",
  platform: "com.muneeb.aora_",
  projectId: "6723cdac003bce849128",
  databseId: "6723cf2b0018a6fd80cc",
  usersCollectionId: "6723cf44000227c56e24",
  videosCollectionId: "6723cf75003a48832b67",
  storageId: "6723d1c10029a8b4bf3e",
};

const { endpoint, platform, projectId, databseId, usersCollectionId, videosCollectionId, storageId } = appwriteConfig
// Init your React Native SDK
const client = new Client();

client
  .setEndpoint(endpoint) // Your Appwrite Endpoint
  .setProject(projectId) // Your project ID
  .setPlatform(platform); // Your application ID or bundle ID.

const account = new Account(client); // Accound instance
const avatars = new Avatars(client); // Avatars instance for userprofiles
const databases = new Databases(client); // AppWrite instance for storage
const storage = new Storage(client); // AppWrite instance for storage

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
      databseId,
      usersCollectionId,
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
    const currentAccount = await account.get() // Check if session exist
    if(!currentAccount) throw Error("No active session found")

    const currentUser = await databases.listDocuments(
      databseId,
      usersCollectionId,
      [Query.equal('accountId', currentAccount.$id)]
    )

    if(!currentUser.documents || currentUser.documents.length === 0) {
      throw Error("No user documents found");
    } 

    return currentUser.documents[0]
  } catch (error) {
    console.log("Error in get current user", error.message);
    return null
  }
}

export const getPostsDocuments = async () => {
  try {
    const posts = await databases.listDocuments(
      databseId,
      videosCollectionId
    )
    return posts.documents
  } catch (error) {
    throw new Error(error)
  }
}

export const getTrendyPosts = async () => {
  try {
    const posts = await databases.listDocuments(
      databseId,
      videosCollectionId,
      [Query.orderDesc('$createdAt', Query.limit(7))]
    )
    return posts.documents
  } catch (error) {
    throw new Error(error)
  }
}

export const searchPosts = async (query) => {
  try {
    const posts = await databases.listDocuments(
      databseId,
      videosCollectionId,
      [Query.search('title', query)]
    )
    return posts.documents
  } catch (error) {
    throw new Error(error)
  }
}

export const userPosts = async (userId) => {
  try {
    const posts = await databases.listDocuments(
      databseId,
      videosCollectionId,
      [Query.equal('creator', userId)]
    )
    return posts.documents
  } catch (error) {
    throw new Error(error)
  }
}

export const logUserOut = async () => {
  try {
    const session = await account.deleteSession('current')
    return session

  } catch (error) {
    throw new Error(error)
  }
}

//* File Preview
export const getFilePreview = async (fileId, type) => {
  let fileURL;

  try {
    if(type === 'video'){
      fileURL = storage.getFileView(storageId, fileId)
    } else if(type === 'image') {
      fileURL = storage.getFilePreview(storageId, fileId, 2000, 2000, 'top', 100)
    } else {
      throw new Error("Encountered invalid file type")
    }

    if(!fileURL) throw Error

    return fileURL;
  } catch (error) {
    throw new Error(error)
  }
}

//* Upload File
export const uploadFile = async (file, type) => {
  if(!file) return;

  const { mimeType, ...rest } = file;
  const asset = { type: mimeType, ...rest}

  try {
    const uploadedFile = await storage.createFile(
      storageId,
      ID.unique(),
      asset
    )
    const fileURL = await getFilePreview(uploadedFile.$id, type);

    return fileURL;
  } catch (error) {
    throw new Error(error)
  }
}

//* Create Video
export const createVideo  = async (form) => {
  try {
    const [ thumbnailURL, videoURL ] = await Promise.all([
      uploadFile(thumbnailURL, 'image'),
      uploadFile(videoURL, 'video')
    ])

    const newPost = await databases.createDocument(
      databseId,
      videosCollectionId,
      ID.unique(),
      {
        title: form.title,
        thumbnail: thumbnailURL,
        video: videoURL,
        prompt: form.prompt,
        creator: form.userId
      }
    )

    return newPost;
  } catch (error) {
    throw new Error(error)
  }
}