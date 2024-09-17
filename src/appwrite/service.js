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

    async createPost({caption , post,userId}){
            try {
                return await this.databases.createDocument(
                    conf.appwriteDatabaseID,
                    conf.appwriteCollectionID,
                    ID.unique(),
                    {
                  
                    caption,
                    post,
                   
                    userId
                    }
                )
            } catch (error) {
                console.log("error in uploading post" , error);
                
            }
    }

    async updatePost(Id,{title,caption,post,status}){
        try {
            return await this.databases.updateDocument(
                conf.appwriteDatabaseID,
                conf.appwritCollectionID,
                Id,
                {
                    title,
                    caption,
                    post,
                    status
                }
            )
        } catch (error) {
            console.log("error in updating the post  :" , error);
            
        }
    }

    async deletePost(Id,){
        try {
            return await this.databases.deleteDocument(
                conf.appwriteDatabaseID,
                conf.appwritCollectionID,
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
                conf.appwritCollectionID,
                Id
            )
        } catch (error) {
            console.log("error getting post : " , error);
            
        }
     }

     async getAllPosts(queries = Query.equal("status", "active")){
        try {
            return this.databases.listDocuments(
                conf.appwriteDatabaseID,
                conf.appwritCollectionID,
                queries
            )
        } catch (error) {
            console.log("error gettting all the posts : "  , error);
            
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
            return await this.storage.getFilePreviewI(
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
