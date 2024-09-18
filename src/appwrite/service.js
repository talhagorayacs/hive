import { Client, Databases, ID , Query, Storage } from "appwrite";
import conf from '../conf.js'

export class Service {
    client = new Client();
    databases;
    storage;

    constructor (){
        this.client
        .setEndpoint(conf.appwriteURL)
        .setProject(conf.appwriteProjectID);

        this.databases = new Databases(this.client)
        this.storage = new Storage(this.client)
    }

    async createPost({caption , post,userId,userName}){
            try {
                return await this.databases.createDocument(
                    conf.appwriteDatabaseID,
                    conf.appwriteCollectionID,
                    ID.unique(),
                    {
                  
                    caption,
                    post,
                    userId,
                    userName
                    }
                )
            } catch (error) {
                console.log("error in uploading post" , error);
                
            }
    }

    async updatePost(Id,{title,caption,post,status,userName}){
        try {
            return await this.databases.updateDocument(
                conf.appwriteDatabaseID,
                conf.appwriteCollectionID,
                Id,
                {
                    title,
                    caption,
                    post,
                    status,
                    userName
                }
            )
        } catch (error) {
            console.log("error in updating the post  :" , error);
            
        }
    }

    async deletePost(Id){
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

     async getPost (Id){
        try {
            return await this.databases.getDocument(
                conf.appwriteDatabaseID,
                conf.appwriteCollectionID,
                Id
            )
        } catch (error) {
            console.log("error getting post : " , error);
            
        }
     }

     async getAllPosts() {
        try {
            return await this.databases.listDocuments(
                conf.appwriteDatabaseID,
                conf.appwriteCollectionID
            );
        } catch (error) {
            console.log("Error getting all the posts:", error);
            throw error; // Optional: re-throw the error to handle it later
        }
    }
    
    

    //  file uploading

    async uploadImage(file){
        try {
            return await this.storage.createFile(
                conf.appwriteBucketID,
                ID.unique( ),
                file
            )
        } catch (error) {
            console.log("error uploading file :" ,error);
            
        }
    }

    // delete file 
    async deleteFile(fileId){
        try {
            return await this.storage.deleteFile(
                conf.appwriteBucketID,
                fileId
            )
        } catch (error) {
            console.log("error deletting file :" , error);
            
        }
    }

    async getFilePreview(fileId){
        try {
            return await this.storage.getFilePreview(
                conf.appwriteBucketID,
                fileId
            )
        } catch (error) {
            console.log("error gettting preview of file " , error);
            
        }
    }
}

const postService = new Service()

export default postService;
