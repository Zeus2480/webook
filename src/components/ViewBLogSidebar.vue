<template>
   <div class="tw-py-4 tw-h-full tw-px-7">
      <!-- <div v-if="!isUserLoggedIn" class="login-register-btn"> -->
         <!-- <div class="tw-flex"> -->
            <!-- <div class="tw-p-2 tw-px-3 tw-bg-black tw-rounded-lg">
               <h1 class="tw-text-white">Get Statred</h1>
            </div> -->

            <!-- <v-btn
               dark
               rounded
               small
               color="black"
               class=""
               @click="pushRegister"
               >Get Started</v-btn
            >
            <v-btn
               small
               outlined
               rounded
               class="tw-ml-3"
               @click="pushLogin"
               color="primary"
               >Sign In</v-btn
            > -->
         <!-- </div>
         <div class="tw-mt-4 tw-w-full">
            <v-btn rounded block color="black" dark @click="pushLogin">
               Get started
            </v-btn>
         </div>
      </div>
      <div v-if="isUserLoggedIn" class="login-register-btn tw-mt-4 tw-mr-3">
         <div class="tw-flex">
            <v-btn dark rounded small color="primary" @click="logout"
               >Logout</v-btn
            >
         </div>
      </div> -->
      <div class="searchBar">
         <!-- <v-row>
            <v-col cols="12">
               <v-text-field
                  v-model="search"
                  label="Search"
                  prepend-icon="mdi-search"
                  class="tw-w-full"
                  outlined
                  rounded
                  
                  @keyup.enter="searchFunctions"
               ></v-text-field>
            </v-col>
         </v-row> -->
         <div
            class="tw-border-2 tw-mt-6 tw-border-gray-200 tw-p-1 tw-flex tw-py-2 tw-px-2 tw-rounded-3xl"
         >
            <v-icon>mdi-magnify</v-icon>
            <input
               type="text"
               class=" tw-mx-2 tw-w-full tw-outline-none"
               placeholder="Search"
               v-model="searchQuery"
               @keyup.enter="searchFunctions"
            />
         </div>
      </div>
      <div class="top tw-mt-8">
         <div class="image tw-flex">
            <img
               :src="authorImage"
               class="tw-h-24 tw-w-24 tw-rounded-full"
               alt=""
            />
         </div>
         <div class="name tw-my-3">
            <h1 class="tw-text-lg tw-font-medium">{{ authorName }}</h1>
            <p class="tw-text-sm tw-opacity-80 tw-my-2">
               {{ authorSubscribers }} Subscribers
            </p>
         </div>
      </div>
      <div class="user-details">
         <p class="tw-text-sm tw-mb-2">{{ authorBio }}</p>
         <!-- <div class="socails-links tw-my-2">
            <v-btn icon><v-icon>mdi-instagram</v-icon></v-btn>
            <v-btn icon><v-icon>mdi-facebook</v-icon></v-btn>
            <v-btn icon><v-icon>mdi-twitter</v-icon></v-btn>
         </div> -->
      </div>
      <div class="subscribe-btn tw-mt-6">
         <v-btn @click="subscribe" class=""  rounded small color="#E1B413">
            <v-icon small>mdi-email</v-icon>
            {{isUserSubscribedBtnText}}
         </v-btn>
        
      </div>
      <div v-if="tags.length" class="recommended-topics tw-mt-8">
         <h1 class="tw-font-medium tw-text-base">Recommended Topics</h1>
         <div class="tw-w-full tw-mt-3">
            <v-chip-group v-model="selection" column>
               <v-chip link v-for="tag in tags" :value="tag" :key="tag">
                  {{ tag }}
               </v-chip>
            </v-chip-group>
         </div>
      </div>
   </div>
</template>
<script>
import axios from "axios";
export default {
   props: ["userId"],
   data: () => ({
      tags: [],
      selection: "",
      selectt: "",

      authorName: null,
      authorImage: null,
      authorBio: null,
      authorSocials: {
         facebook: null,
         twitter: null,
         instagram: null,
      },
      authorSubscribers: null,
      siteName: null,
      searchQuery: "",
      isUserSubscribed:null
   }),
   computed: {
      isUserSubscribedBtnText() {
         if(this.isUserSubscribed){
            return "Unsubscribe"
         }else{
            return "Subscribe"
         }
         // return this.isUserSubscribed;
      },
      priflePicturePath() {
         if (this.authorImage) {
            return this.authorImage;
         } else {
            return "https://i.ibb.co/TPmLQyP/user.png";
         }
      },
   },
   created() {
      this.checkUserSubscribed();
      this.checkUserLoggedIn();
      this.getAuthorData();
      this.getRecommendedTopics();
   },
   watch: {
      selection(val) {
         this.$router.push(`/view/${this.userId}/tags/${val}`);
         // console.log(val);
      },
   },
 
   methods: {
      // s() {
      //    console.log(this.selection);
      // },
      subscribe(){
         axios.post(`/user/${this.userId}/subscribe`,{},{
            headers:{
               'Authorization': `Bearer `+localStorage.getItem('token')
            }
         }).then(()=>{
            this.isUserSubscribed=!this.isUserSubscribed;
            
         })
      },
      searchFunctions() {
         // console.log(this.searchQuery);

         if (this.searchQuery) {
            this.$router.push(
               `/view/${this.userId}/search/${this.searchQuery}`
            );
         }
      },
      getAuthorData() {
         // console.log(`/user/${this.userId}/profile`);
         if (!this.$store.getters.getSite) {
            axios.get(`/user/${this.userId}/profile`).then((res) => {
               let tempObject = {
                  authorName: res.data.name,
                  authorImage: res.data.image_path,
                  authorBio: res.data.bio,
                  authorTwitter: res.data.youtube,
                  authorInstagram: res.data.instagram,
                  authorFacebook: res.data.facebook,
                  authorSubscribers: res.data.subscribe,
                  authorSLug: this.userId,
                  authorSite: res.data.site,
               };
               this.$store.dispatch("setAuthorProfile", tempObject);
               this.authorName = res.data.name;
               this.authorImage = res.data.image_path;
               this.authorBio = res.data.bio;
               this.authorSocials.facebook = res.data.facebook;
               this.authorSocials.twitter = res.data.youtube;
               this.authorSocials.instagram = res.data.instagram;
               this.authorSubscribers = res.data.subscribe;
               this.siteName = res.data.site;
               console.log(this.siteName);

               // this.$emit("siteName", 7);
            });
         } else {
            let authorDetails = this.$store.getters.getAuthorProfile;

            this.authorName = authorDetails.authorName;
            this.authorImage = authorDetails.authorImage;
            this.authorBio = authorDetails.authorBio;
            this.authorSocials.facebook = authorDetails.authorFacebook;
            this.authorSocials.twitter = authorDetails.authorTwitter;
            this.authorSocials.instagram = authorDetails.authorInstagram;
            this.authorSubscribers = authorDetails.authorSubscribers;
            this.siteName = authorDetails.authorSite;
         }
      },
      getRecommendedTopics() {
         axios.get(`/user/${this.userId}/tagList`).then((res) => {
            // this.tags = JSON.parse(res.data.data[1]);
            res.data.data.forEach((element) => {
               this.tags.push(...JSON.parse(element));
            });
            // this.tags.forEach((element) => {
            //    console.log(JSON.parse(element));
            // });
            console.log(this.tags);
         });
      },
     
      checkUserLoggedIn() {
         if (localStorage.getItem("token")) {
            this.isUserLoggedIn = true;
         }
      },
      checkUserSubscribed(){
         axios.get(`/user/${this.userId}/is_subscribe`, {
            headers: {
               Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
         }).then((res) => {
            if (res.data.is_subscribe) {
               this.isUserSubscribed = true;
            }
            else{
               this.isUserSubscribed = false;
            }
         });
      },

     
      logout() {
         axios
            .post(
               "/logout",
               {},
               {
                  headers: {
                     Authorization: "Bearer " + localStorage.getItem("token"),
                  },
               }
            )
            .then(() => {
               // this.loggedOut=true;
               localStorage.removeItem("token");

               this.$router.push("/login-reader");
            });
      },
   },
};
</script>
