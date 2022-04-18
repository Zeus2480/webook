import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userProfile: {
      name: "",
      twitter: "",
      instagram: "",
      facebook: "",
      slug: "",
      site: "",
      imagePath: "",
      bio: "",
      createdAt: ""
    },
    authorDetails: {
      authorName: "",
      authorImage: "",
      authorBio: "",
      authorTwitter: "",
      authorInstagram: "",
      authorFacebook: "",
      authorSLug: "",
      authorSite: "",
      authorSubscribers: "",
    },
    frontLoggedInUser:{
      id:"",
    },
    drawer:false
  },
  getters: {
    getUserProfile(state) {
      return state.userProfile;
    },
    getUserName(state) {
      return state.userProfile.name;
    },
    getUserProfilePicture(state) {
      return state.userProfile.imagePath;
    },
    getBio(state) {
      return state.userProfile.bio;
    },
    getTwitter(state) {  //getters are used to access the state
      return state.userProfile.twitter;
    },
    getInstagram(state) {
      return state.userProfile.instagram;
    },
    getFacebook(state) {
      return state.userProfile.facebook;
    },
    getSlug(state) {
      return state.userProfile.slug;
    },
    getSite(state) {
      return state.authorDetails.authorSite;
    },
    getAuthorProfile(state) {
      return state.authorDetails;
    },
    getAuthorSlug(state) {
      return state.authorDetails.authorSLug;
    },
    getDrawer(state) {
      return state.drawer;
    },
    getAuthorname(state) {
      return state.authorDetails.authorName;
    },
    getAuthorInstagram(state) { //getters are used to access the state
      return state.authorDetails.authorInstagram;
    },
    getAuthorTwitter(state) {
      return state.authorDetails.authorTwitter;
    },
    getAuthorFacebook(state) {
      return state.authorDetails.authorFacebook;
    },
    getForntLoggedInUserId(state) {
      return state.frontLoggedInUser.id;
    }
  },
  mutations: {
    setDrawer(state, payload) {
      state.drawer = payload;
    },
    setAuthorProfile(state, payload) {
      state.authorDetails.authorName = payload.authorName;
      state.authorDetails.authorImage = payload.authorImage;
      state.authorDetails.authorBio = payload.authorBio;
      state.authorDetails.authorTwitter = payload.authorTwitter;
      state.authorDetails.authorInstagram = payload.authorInstagram;
      state.authorDetails.authorFacebook = payload.authorFacebook;
      state.authorDetails.authorSLug = payload.authorSLug;
      state.authorDetails.authorSite = payload.authorSite;
      state.authorDetails.authorSubscribers = payload.authorSubscribers;

    },
    setUserProfile(state, payload) {
      state.userProfile.name = payload.name;
      state.userProfile.twitter = payload.youtube;
      state.userProfile.facebook = payload.facebook;
      state.userProfile.instagram = payload.instagram;
      state.userProfile.slug = payload.slug;
      state.userProfile.site = payload.site;
      state.userProfile.imagePath = payload.image_path;
      state.userProfile.bio = payload.bio;
      state.userProfile.createdAt = payload.created_at;
    },
    updateUserProfile(state, payload) {
      state.userProfile.name = payload.name;
      state.userProfile.bio = payload.bio;
      state.userProfile.facebook = payload.facebook;
      state.userProfile.imagePath = payload.image_path;
      state.userProfile.instagram = payload.instagram;
      state.userProfile.twitter = payload.youtube;


    },
    setFrontLoggedInUser(state, payload) {
      state.frontLoggedInUser.id = payload;
    }
  },
  actions: {
    setDrawer(context, payload) {
      context.commit('setDrawer', payload);
    },
    setUserProfile(context, payload) {
      context.commit('setUserProfile', payload);
    },
    updateUserProfile(context, payload) {
      context.commit('updateUserProfile', payload);
    },
    setAuthorProfile(context, payload) {
      context.commit('setAuthorProfile', payload);
    },
    setFrontLoggedInUser(context, payload) {  
      context.commit('setFrontLoggedInUser', payload);
    }
  },
  modules: {
  }
})
