const conf = {
    appwriteURL: String(import.meta.env.VITE_APPWRITE_URL),
    appwriteProjectID:String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
    appwriteDatabaseID:String(import.meta.env.VITE_APPWRITE_DATABASE_ID),
    appwritCollectionID:String(import.meta.env.VITE_APPWRITE_COLLECCTION_ID),
    appwriteBucketID:String(import.meta.env.VITE_APPWRITE_BUCKET_ID)
}

export default conf;