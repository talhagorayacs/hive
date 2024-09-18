import { Client, Databases, ID, Query, Storage } from "appwrite";
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

    // Create a new profile document
    async createProfile({ userId, userName, description, profilePhoto, followers, posts, following }) {
        try {
            // Ensure that all required fields are included in the document
            return await this.databases.createDocument(
                conf.appwriteDatabaseID,
                conf.appwriteProfileCollectionID,
                ID.unique(), // Automatically generate a unique ID for the new document
                {
                    userId,       // Ensure this field matches your Appwrite schema
                    userName,
                    description,
                    profilePhoto,
                    followers,
                    following,
                    posts
                }
            );
        } catch (error) {
            console.log("Error creating profile:", error);
        }
    }

    // Upload profile image to the bucket
    async uploadProfileImage(file) {
        try {
            return await this.storage.createFile(
                conf.appwriteProfileBucketID,
                ID.unique(),
                file
            );
        } catch (error) {
            console.log("Error uploading profile image:", error);
        }
    }

    // Update an existing profile document
    async updateProfile(documentId, { userName, description, profilePhoto, followers, posts, following }) {
        try {
            return await this.databases.updateDocument(
                conf.appwriteDatabaseID,
                conf.appwriteProfileCollectionID,
                documentId, // Use the ID of the document to update
                {
                    userName,
                    description,
                    profilePhoto,
                    followers,
                    following,
                    posts
                }
            );
        } catch (error) {
            console.log("Error updating profile:", error);
        }
    }

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


    async getProfilePhoto(id){
        try {
            return await this.storage.getFile(
                conf.appwriteProfileBucketID,
               id
            )
        } catch (error) {
            console.log("error in fetching profile photo");
            
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


      // delete file 
      async deleteFile(fileId){
        try {
            return await this.storage.deleteFile(
                conf.appwriteProfileBucketID,
                fileId
            )
            
        } catch (error) {
            console.log("error deletting file :" , error);
            
        }
    }

    async deleteOldData(Id){
        try {
            return await this.databases.deleteDocument(
                conf.appwriteDatabaseID,
                conf.appwriteCollectionID,
                Id
            )
        } catch (error) {
            console.log("error in deleting post" , error);
            
        }
    }
}

const profileService = new ProfileService();

export default profileService;
