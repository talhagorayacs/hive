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
            
            await authService.login({ email, password });

            
            const user = await authService.getCurrentUser();
        
            if (user) {
                localStorage.setItem('user' , JSON.stringify(user))
            }
            
            commit('SET_USER', user);
        } catch (error) {
            console.log("Error in login state: ", error);
        }
    },
    async logout({commit}){
        try {
            await authService.logout()
            commit('CLEAR_USER');
            localStorage.removeItem('user');
            console.log("User removed from localStorage");
        console.log("User removed from localStorage");
        } catch (error) {
            console.log("error in logout store" , error);
            
        }
    },

    initializeStore({commit}){
       const user = localStorage.getItem('user')
        if (user) {
            commit( 'SET_USER',JSON.parse(user))
        }
        else {
            commit('CLEAR_USER')
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