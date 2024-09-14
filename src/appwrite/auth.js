import { Client, Account, ID } from "appwrite";
import conf from '../conf.js'
export class AuthService {
    client = new Client();
    account;

    constructor(){
        this.client
        .setEndpoint(conf.appwriteURL)
        .setProject(conf.appwriteProjectID);

        this.account = new Account(this.client);

    }
    // create accout method
    async createAccount ({email,password,name}){
       try {
       const userAcccount =  await this.account.create(ID.unique(),email,password,name)
       if (userAcccount) {
        //login the user
        return this.login({email,password})
       } else {
        return userAcccount;
       }
       } catch (error) {
        console.log("create account error :" , error);
        
       }
    }
     //login  method
    async login({email,password}){
        try {
            return await this.account.createEmailPasswordSession(email,password)
        } catch (error) {
         console.log("error in logging in : " , error);
            
        }
    }

    // getting current userr 

    async getCurrentUser (){
        try {
            return this.account.get()
        } catch (error) {
            console.log("error in  gettting user :" , error);
            
        }
        return null;
    }

    // logoout method

    async logout (){
        try {
            return this.account.deleteSessions()
        } catch (error) {
            throw error;
        }
    }

}

const authService = new AuthService()
export default authService;