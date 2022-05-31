<template>
   <div>
      <div class="tw-w-full tw-pt-5 tw-pb-5 tw-px-3 md:tw-px-24">
         <div class="tw-flex tw-justify-between">
            <div
               @click="pushToAllBlogs"
               class="title tw-flex tw-cursor-pointer"
            >
               <img
                  :src="authourImageUrl"
                  class="md:tw-h-10 tw-my-auto tw-h-6 tw-w-6 md:tw-w-10 tw-rounded-full"
                  alt=""
               />
               <h1
                  class="tw-my-auto tw-mx-3 tw-font-semibold tw-hidden md:tw-block tw-text-md md:tw-text-2xl"
               >
                  {{ siteName }}
               </h1>
            </div>

            <div
               class="tw-border-2 tw-flex md:tw-w-80 tw-px-2 tw-rounded-lg tw-mx-3 tw-border-gray-300"
            >
               <div class="tw-my-auto tw-flex">
                  <v-icon class="">mdi-magnify</v-icon>
               </div>
               <input
                  type="text"
                  placeholder="Search"
                  class="tw-w-full tw-outline-none"
                  v-model="searchQuery"
                  @keyup.enter="pushToSearchPage"
               />
            </div>
            <div class="tw-flex">
               <div class="tw-hidden md:tw-flex">
                  <v-btn
                     v-if="!isUserSubscribed"
                     depressed
                     class="tw-my-auto"
                     @click="subscribe"
                     ><v-icon>mdi-plus</v-icon> Follow</v-btn
                  >
                  <v-btn
                     v-if="isUserSubscribed"
                     depressed
                     @click="subscribe"
                     color="green"
                     dark
                     class="tw-my-auto"
                     ><v-icon>mdi-check</v-icon> Following</v-btn
                  >
                  <div class="tw-flex tw-ml-3 tw-my-auto tw-flex-row-reverse">
                     <v-btn
                        v-if="authourTwitterUrl"
                        :href="authourTwitterUrl"
                        icon
                        ><v-icon>mdi-twitter</v-icon></v-btn
                     >
                     <v-btn
                        v-if="authourFacebookUrl"
                        :href="authourFacebookUrl"
                        icon
                        ><v-icon>mdi-facebook</v-icon></v-btn
                     >
                     <v-btn
                        v-if="authourInstagramUrl"
                        :href="authourInstagramUrl"
                        icon
                        ><v-icon>mdi-instagram</v-icon></v-btn
                     >
                  </div>
               </div>
               <!-- <v-btn icon large><v-icon>mdi-menu-down</v-icon></v-btn> -->
               <div class="text-center">
                  <v-menu
                     v-model="menu"
                     :close-on-content-click="false"
                     max-width="320"
                  >
                     <template v-slot:activator="{ on, attrs }">
                        <v-btn large v-bind="attrs" v-on="on" icon>
                           <v-icon>mdi-menu-down</v-icon>
                        </v-btn>
                     </template>

                     <v-card>
                        <div v-if="!isUserLoggedIn" class="">
                           <div
                              class="tw-bg-gray-200 tw-border-2 tw-border-gray-200"
                           >
                              <div class="tw-p-6 tw-py-4 tw-flex">
                                 <img
                                    src="../../assets/Logo/WebookLogo.svg"
                                    class="tw-h-6 tw-my-auto"
                                    alt=""
                                 />
                                 <h1
                                    class="tw-text-2xl tw-my-auto tw-mx-2 tw-font-semibold"
                                 >
                                    Webook
                                 </h1>
                              </div>
                           </div>
                           <v-divider></v-divider>
                           <div class="tw-p-6 tw-pb-4">
                              <div class="tw-flex tw-justify-center">
                                 <img
                                    :src="authourImageUrl"
                                    class="tw-h-20 tw-w-20 tw-rounded-full"
                                    alt=""
                                 />
                              </div>
                              <div class="tw-flex tw-mt-2 tw-justify-center">
                                 <h1
                                    class="tw-text-xl tw-truncate tw-my-auto tw-mx-2 tw-font-semibold"
                                 >
                                    {{ authorName }}
                                 </h1>
                              </div>
                              <div class="tw-my-2 tw-mb-4">
                                 <p
                                    class="tw-text-center tw-text-gray-500 tw-text-base"
                                 >
                                    Don't miss my next atricles sign in with a
                                    webook account.
                                 </p>
                              </div>
                              <v-divider></v-divider>
                              <div
                                 @click="pushRegister"
                                 v-ripple
                                 class="tw-flex tw-px-4 tw-py-2 tw-cursor-pointer hover:tw-bg-gray-200 tw-rounded tw-my-2"
                              >
                                 <v-icon>mdi-login</v-icon>
                                 <h1 class="tw-mx-4 tw-text-lg tw-my-auto">
                                    Login
                                 </h1>
                              </div>
                           </div>
                        </div>
                        <div v-if="isUserLoggedIn">
                           <div
                              class="tw-bg-gray-200 tw-border-2 tw-border-gray-200"
                           >
                              <div class="tw-p-6 tw-py-4 tw-flex">
                                 <img
                                    src="../../assets/Logo/WebookLogo.svg"
                                    class="tw-h-6 tw-my-auto"
                                    alt=""
                                 />
                                 <h1
                                    class="tw-text-2xl tw-my-auto tw-mx-2 tw-font-semibold"
                                 >
                                    Webook
                                 </h1>
                              </div>
                           </div>
                           <v-divider></v-divider>
                           <div class="tw-p-6 tw-pb-4">
                              <div class="tw-mb-4">
                                 <div class="tw-flex tw-justify-center">
                                    <v-avatar size="40" color="blue">
                                       <span class="white--text text-h5">{{
                                          user.initials
                                       }}</span>
                                    </v-avatar>
                                 </div>
                                 <div class="tw-ml-2">
                                    <h1
                                       class="tw-text-center tw-text-xl tw-font-semibold tw-mb-2"
                                    >
                                       {{ user.fullName }}
                                    </h1>
                                    <p
                                       class="tw-text-sm tw-text-center tw-text-gray-400"
                                    >
                                       {{ user.email }}
                                    </p>
                                 </div>
                              </div>
                              <v-divider></v-divider>
                              <div
                                 @click="logout"
                                 v-ripple
                                 class="tw-flex tw-px-4 tw-py-2 tw-cursor-pointer hover:tw-bg-gray-200 tw-rounded tw-my-2"
                              >
                                 <v-icon>mdi-logout</v-icon>
                                 <h1 class="tw-mx-4 tw-text-lg tw-my-auto">
                                    Log out
                                 </h1>
                              </div>
                           </div>
                        </div>
                     </v-card>
                  </v-menu>
               </div>
            </div>
         </div>
         <div class="tw-mt-6 md:tw-hidden">
            <div>
               <h1
                  class="tw-my-auto tw-mx-3 tw-text-center tw-font-semibold tw-text-2xl"
               >
                  {{ siteName }}
               </h1>
            </div>
            <div class="tw-flex tw-justify-center socials">
               <div class="tw-flex tw-mt-2 tw-my-auto">
                  <v-btn
                     @click="subscribe"
                     v-if="!isUserSubscribed"
                     depressed
                     class="tw-my-auto"
                     ><v-icon>mdi-plus</v-icon> Follow</v-btn
                  >
                  <v-btn
                     v-if="isUserSubscribed"
                     @click="subscribe"
                     depressed
                     color="green"
                     dark
                     class="tw-my-auto"
                     ><v-icon>mdi-check</v-icon> Following</v-btn
                  >
                  <v-btn v-if="authourTwitterUrl" :href="authourTwitterUrl" icon
                     ><v-icon>mdi-twitter</v-icon></v-btn
                  >
                  <v-btn
                     v-if="authourFacebookUrl"
                     :href="authourFacebookUrl"
                     icon
                     ><v-icon>mdi-facebook</v-icon></v-btn
                  >
                  <v-btn
                     v-if="authourInstagramUrl"
                     :href="authourInstagramUrl"
                     icon
                     ><v-icon>mdi-instagram</v-icon></v-btn
                  >
               </div>
            </div>
         </div>
      </div>
      <v-divider></v-divider>
   </div>
</template>
<script>
import axios from "axios";
export default {
   created() {
      this.checkUserSubscribed();
      this.getAuthorDetails();
      this.getLoggedInUserData();
   },
   computed: {
      isUserLoggedIn() {
         if (localStorage.getItem("token")) {
            return true;
         } else {
            return false;
         }
      },
      authourImageUrl() {
         return this.authorImage;
      },
      authourFacebookUrl() {
         return this.authorSocials.facebook;
      },
      authourInstagramUrl() {
         return this.authorSocials.instagram;
      },
      authourTwitterUrl() {
         return this.authorSocials.twitter;
      },
   },
   data() {
      return {
         authorName: "",
         authorImage: "",
         authorBio: "",
         authorSocials: {
            twitter: "",
            facebook: "",
            instagram: "",
         },
         authorSubscribers: "",
         siteName: "",
         searchQuery: "",
         user: {
            initials: "",
            fullName: "",
            email: "john.doe@doe.com",
            slug: "",
            drawer: true,
         },
         isUserSubscribed: false,
      };
   },

   methods: {
      subscribe() {
         if (localStorage.getItem("token")) {
            axios
               .post(
                  `/user/${this.$route.params.userId}/subscribe`,
                  {},
                  {
                     headers: {
                        Authorization:
                           `Bearer ` + localStorage.getItem("token"),
                     },
                  }
               )
               .then(() => {
                  this.isUserSubscribed = !this.isUserSubscribed;
                  this.$router.go();
               });
         }
         else{
            this.$router.push('/login-reader');
         }
      },
      checkUserSubscribed() {
         console.log();
         if (!this.$store.getters.getFrontLoggedInUserSubscribed) {
            axios
               .get(`/user/${this.$route.params.userId}/is_subscribe`, {
                  headers: {
                     Authorization: `Bearer ${localStorage.getItem("token")}`,
                  },
               })
               .then((res) => {
                  if (res.data.is_subscribe) {
                     this.isUserSubscribed = true;
                     this.$store.dispatch(
                        "setFrontLoggedInUserIsUserSubscribed",
                        true
                     );
                  } else {
                     this.isUserSubscribed = false;
                     this.$store.dispatch(
                        "setFrontLoggedInUserIsUserSubscribed",
                        false
                     );
                  }
               });
         } else {
            this.isUserSubscribed =
               this.$store.getters.getFrontLoggedInUserSubscribed;
         }
      },
      getLoggedInUserData() {
         if (localStorage.getItem("token")) {
            if (!this.$store.getters.getFrontLoggedInUser.email) {
               axios
                  .get("/profile", {
                     headers: {
                        Authorization:
                           "Bearer " + localStorage.getItem("token"),
                     },
                  })
                  .then((res) => {
                     console.log(res.data);
                     this.user.fullName = res.data.name;
                     this.user.email = res.data.email;
                     const fullName = this.user.fullName.split(" ");
                     this.user.initials =
                        fullName.shift().charAt(0) + fullName.pop().charAt(0);
                     this.$store.dispatch("setFrontLoggedInUser", {
                        id: res.data.id,
                        name: res.data.name,
                        email: res.data.email,
                     });
                  });
            } else {
               this.user.fullName =
                  this.$store.getters.getFrontLoggedInUser.name;
               this.user.email = this.$store.getters.getFrontLoggedInUser.email;
               const fullName = this.user.fullName.split(" ");
               this.user.initials =
                  fullName.shift().charAt(0) + fullName.pop().charAt(0);
            }
         }
      },
      pushRegister() {
         this.$router.push({
            name: "RegisterReader",
         });
      },
      pushToAllBlogs() {
         this.$router.push(`/view/${this.$route.params.userId}`);
      },

      getAuthorDetails() {
         if (!this.$store.getters.getSite) {
            axios
               .get(`/user/${this.$route.params.userId}/profile`)
               .then((res) => {
                  let tempObject = {
                     authorName: res.data.user.name,
                     authorImage: res.data.user.image_path,
                     authorBio: res.data.user.bio,
                     authorTwitter: res.data.user.youtube,
                     authorInstagram: res.data.user.instagram,
                     authorFacebook: res.data.user.facebook,
                     authorSubscribers: res.data.subscriber,
                     authorSLug: this.$route.params.userId,
                     authorSite: res.data.user.site,
                  };
                  console.log(tempObject);
                  
                  this.$store.dispatch("setAuthorProfile", tempObject);
                  this.authorName = res.data.user.name;
                  this.authorImage = res.data.user.image_path;
                  this.authorBio = res.data.user.bio;
                  this.authorSocials.facebook = res.data.user.facebook;
                  this.authorSocials.twitter = res.data.user.youtube;
                  this.authorSocials.instagram = res.data.user.instagram;
                  this.authorSubscribers = res.data.subscriber;
                  this.siteName = res.data.user.site;
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
      pushToSearchPage() {
         if (this.searchQuery) {
            this.$router.push(
               `/view/${this.$route.params.userId}/search/${this.searchQuery}`
            );
         }
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
               this.$store.dispatch("setFrontLoggedInUser", {
                  id: "",
                  name: "",
                  email: "",
                  isUserSubscribed: false,
               });
               this.$router.push("/login-reader");
            });
      },
   },
};
</script>
