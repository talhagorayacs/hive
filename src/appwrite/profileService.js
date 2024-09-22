import { Client, Databases, Storage ,Query} from "appwrite";
import conf from '../conf.js';

export class ProfileService {
    client = new Client();
    databases;
    storage;

    constructor() {
        this.client
            .setEndpoint(conf.appwriteURL)
            .setProject(conf.appwriteProjectID);

        this.databases = new Databases(this.client);
        this.storage = new Storage(this.client);
    }

    // Create or update a profile document
    async createOrUpdateProfile({ userId, userName, description, profilePhoto }) {
        try {
            // Check if the document for this userId exists
            const profileExists = await this.getProfileDetails(userId);
            
            if (profileExists) {
                // If the profile exists, update it
                return await this.updateProfile(userId, { userName, description, profilePhoto });
            } else {
                // If no profile exists, create a new one
                return await this.databases.createDocument(
                    conf.appwriteDatabaseID,
                    conf.appwriteProfileCollectionID,
                    userId,
                    {
                        userId, // Set userId as a required field
                        userName,
                        description,
                        profilePhoto
                    }
                );
            }
        } catch (error) {
            console.log("Error creating/updating profile:", error);
        }
    }

    // Upload profile image to the bucket
   // Upload profile image to the bucket
   async uploadProfileImage(file) {
    try {
        return await this.storage.createFile(
            conf.appwriteProfileBucketID,
            'unique()', // Use Appwrite's unique ID generation
            file
        );
    } catch (error) {
        console.log("Error uploading profile image:", error);
        throw error; // Re-throw the error for further handling
    }
}



    // Update an existing profile document
    async updateProfile(userId, { userName, description, profilePhoto }) {
        try {
            return await this.databases.updateDocument(
                conf.appwriteDatabaseID,
                conf.appwriteProfileCollectionID,
                userId, // Use the document ID for the update
                {
                    userName,
                    description,
                    profilePhoto
                }
            );
        } catch (error) {
            console.log("Error updating profile:", error);
        }
    }

    // Fetch profile details
    async getProfileDetails(userId) {
        try {
            const response = await this.databases.listDocuments(
                conf.appwriteDatabaseID,
                conf.appwriteProfileCollectionID,
                [Query.equal("userId", userId)]
            );

            // Return the first document from the response if available
            if (response.documents.length > 0) {
                return response.documents[0];
            } else {
                return null; // No document found
            }
        } catch (error) {
            console.log("Error fetching profile details:", error);
        }
    }

    // Delete the old document before updating
    async deleteOldData(userId) {
        try {
            const profile = await this.getProfileDetails(userId);
            if (profile) {
                return await this.databases.deleteDocument(
                    conf.appwriteDatabaseID,
                    conf.appwriteProfileCollectionID,
                    userId
                );
            } else {
                console.log("No existing profile found to delete.");
            }
        } catch (error) {
            console.log("Error in deleting old profile data:", error);
        }
    }
    
    async getFilePreview(fileId){
        try {
            return await this.storage.getFilePreview(
                conf.appwriteProfileBucketID,
                fileId
            )
        } catch (error) {
            console.log("error gettting preview of file " , error);
            
        }
    }
}

const profileService = new ProfileService();
export default profileService;
