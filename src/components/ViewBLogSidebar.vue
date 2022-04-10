<template>
   <div class="tw-p-3 tw-pl-4">
      <div v-if="!isUserLoggedIn" class="login-register-btn tw-mt-4 tw-mr-3">
         <div class="tw-flex">
            <v-btn dark rounded small color="primary" @click="pushRegister"
               >Get Started</v-btn
            >
            <v-btn
               small
               outlined
               rounded
               class="tw-mx-3"
               @click="pushLogin"
               color="primary"
               >Sign In</v-btn
            >
         </div>
      </div>
      <div v-if="isUserLoggedIn" class="login-register-btn tw-mt-4 tw-mr-3">
         <div class="tw-flex">
            <v-btn dark rounded small color="primary" @click="logout"
               >Logout</v-btn
            >
         </div>
      </div>
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
            class="tw-border-2 tw-mt-8 tw-border-gray-200 tw-p-1 tw-px-2 tw-rounded-3xl"
         >
            <v-icon>mdi-magnify</v-icon>
            <input
               type="text"
               class="tw-mx-2 tw-outline-none"
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
               class="tw-h-20 tw-w-20 tw-rounded-full"
               alt=""
            />
         </div>
         <div class="name tw-my-3">
            <h1 class="tw-text-base tw-font-medium">{{ authorName }}</h1>
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
      <div class="subscribe-btn tw-mt-4">
         <v-btn class="" rounded small color="#E1B413">
            <v-icon small>mdi-email</v-icon>
            Subscribe
         </v-btn>
      </div>
      <div v-if="tags.length" class="recommended-topics tw-mt-4">
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
   }),
   computed: {
      priflePicturePath() {
         if (this.authorImage) {
            return this.authorImage;
         } else {
            return "https://i.ibb.co/TPmLQyP/user.png";
         }
      },
   },
   created() {
      this.checkUserLoggedIn();
      this.getAuthorData();
      this.getRecommendedTopics();
   },
   watch: {
      selection(val) {
         this.$router.push(`/view/${this.userId}/tags/${val}`);
         console.log(val);
      },
   },
   methods: {
      searchFunctions() {
         console.log(this.searchQuery);

         if (this.searchQuery) {
            this.$router.push(
               `/view/${this.userId}/search/${this.searchQuery}`
            );
         }
      },
      getAuthorData() {
         console.log(`/user/${this.userId}/profile`);
         
         axios.get(`/user/${this.userId}/profile`).then((res) => {
            this.authorName = res.data.name;
            this.authorImage = res.data.image_path;
            this.authorBio = res.data.bio;
            this.authorSocials.facebook = res.data.facebook;
            this.authorSocials.twitter = res.data.youtube;
            this.authorSocials.instagram = res.data.instagram;
            this.authorSubscribers = res.data.subscribe;
            this.siteName = res.data.site;
            console.log(this.siteName);

            this.$emit("siteName", 7);
         });
      },
      getRecommendedTopics() {
         axios.get(`/tagList`).then((res) => {
            this.tags = JSON.parse(res.data.data);
         });
      },
      tagclick() {},
      checkUserLoggedIn() {
         if (localStorage.getItem("token")) {
            this.isUserLoggedIn = true;
         }
      },

      pushRegister() {
         this.$router.push({
            name: "RegisterReader",
         });
      },
      pushLogin() {
         this.$router.push("/login-reader");
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
