import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userProfile:{
      name:"",
      twitter:"",
      instagram:"",
      facebook:"",
      slug:"",
      site:"",
      imagePath:"",
      bio:"",
      createdAt:""
    }
  },
  getters: {
    getUserProfile(state){
      return state.userProfile;
    },
    getUserName(state){
      return state.userProfile.name;
    },
    getUserProfilePicture(state){
      return state.userProfile.imagePath;
    },
    getBio(state){
      return state.userProfile.bio;
    },
    getTwitter(state){  //getters are used to access the state
      return state.userProfile.twitter;
    },
    getInstagram(state){
      return state.userProfile.instagram;
    },
    getFacebook(state){
      return state.userProfile.facebook;
    },
    getSlug(state){
      return state.userProfile.slug;
    }
  },
  mutations: {
    setUserProfile(state,payload){
      state.userProfile.name=payload.name;
      state.userProfile.twitter=payload.youtube;
      state.userProfile.facebook=payload.facebook;
      state.userProfile.instagram=payload.instagram;
      state.userProfile.slug=payload.slug;
      state.userProfile.site=payload.site;
      state.userProfile.imagePath=payload.image_path;
      state.userProfile.bio=payload.bio;
      state.userProfile.createdAt=payload.created_at;
    },
    updateUserProfile(state,payload){
      state.userProfile.name=payload.name;
      state.userProfile.bio=payload.bio;
      state.userProfile.facebook=payload.facebook;
      state.userProfile.imagePath=payload.image_path;
      state.userProfile.instagram=payload.instagram;
      state.userProfile.twitter=payload.youtube;


    }
  },
  actions: {
    setUserProfile(context,payload){
      context.commit('setUserProfile',payload);
    },
    updateUserProfile(context,payload){
      context.commit('updateUserProfile',payload);
    }
  },
  modules: {
  }
})
