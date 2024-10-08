const conf = {
    appwriteURL: String(import.meta.env.VITE_APPWRITE_URL),
    appwriteProjectID: String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
    appwriteDatabaseID: String(import.meta.env.VITE_APPWRITE_DATABASE_ID),
    appwriteCollectionID: String(import.meta.env.VITE_APPWRITE_COLLECTION_ID),
    appwriteBucketID: String(import.meta.env.VITE_APPWRITE_BUCKET_ID),
    appwriteProfileCollectionID: String(import.meta.env.VITE_APPWRITE_PROFILE_COLLECTION_ID),
    appwriteProfileBucketID: String(import.meta.env.VITE_APPWRITE_PROFILE_BUCKET_ID)
};

console.log('Appwrite Configuration:', conf);

export default conf;
