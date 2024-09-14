import authService from '/src/appwrite/auth.js';
const state = {
    status :false,
    userData : null

};

const mutations = {
    SET_USER(state,user){
        state.status= true;
        state.userData = user;
    },
    CLEAR_USER(state){
        state.status=false;
        state.userData=null;
    }

};

const actions = {
    async login({ commit }, { email, password }) {
        try {
            // Ensure the email and password are passed correctly
            await authService.login({ email, password });

            // Fetch the current user after successful login
            const user = await authService.getCurrentUser();

            // Commit the user data to the state
            commit('SET_USER', user);
        } catch (error) {
            console.log("Error in login state: ", error);
        }
    },
    async logout({commit}){
        try {
            await authService.logout()
            commit('CLEAR_USER')
        } catch (error) {
            console.log("error in logout store" , error);
            
        }
    }

};

const getters = {
    isLoggedIn(state){
        return state.status;
    },
    userData(state){
        return state.userData
    }

};

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
}