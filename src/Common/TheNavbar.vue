<template>
   <div>
      <v-app-bar flat height="49" app color="white">
         <v-app-bar-nav-icon
            class="tw-ml-6"
            @click="toogleNavigationDrawer"
         ></v-app-bar-nav-icon>
         <!-- <div >
            <v-toolbar-title
            class="tw-ml-3 tw-flex"
               ><img
                  src="../assets/Logo/WebookLogo.svg"
                  class="tw-h-6"
                  alt=""
               />
               <span class="tw-font-medium tw-ml-2 tw-my-auto">Webook</span>
               </v-toolbar-title
            >
         </div> -->
         <v-spacer></v-spacer>
         <div v-if="isSearchVisible" class="tw-h-full">
            <div class="tw-mb-3 tw-my-auto xl:tw-w-96">
               <input
                  v-model="searchQuery"

                  type="search"
                  class="tw-form-control tw-block tw-w-full tw-px-3 tw-py-1.5 tw-text-base tw-font-normal tw-text-gray-700 tw-bg-white tw-bg-clip-padding tw-border tw-border-solid tw-border-gray-300 tw-rounded tw-my-auto focus:tw-text-gray-700 focus:tw-bg-white focus:tw-border-blue-600 focus:tw-outline-none"
                  id="exampleSearch"
                  style="font-family: Arial, 'Font Awesome 5 Free'"
                  placeholder="&#xF002; Search"
               />
            </div>
         </div>
         <v-spacer></v-spacer>
         <v-menu nudge-bottom allow-overflow max-height="600">
            <template v-slot:activator="{ on: menu, attrs }">
               <v-tooltip bottom>
                  <template v-slot:activator="{ on: tooltip }">
                     <v-btn
                        color="primary"
                        dark
                        v-bind="attrs"
                        v-on="{ ...tooltip, ...menu }"
                        icon
                     >
                        <img
                           class="tw-h-5"
                           src="../assets/Logo/Vector (4).svg"
                           alt=""
                        />
                     </v-btn>
                  </template>
                  <span>Notifications</span>
               </v-tooltip>
            </template>
            <v-card width="500">
               <div class="tw-p-3">
                  <h2 class="tw-text-2xl tw-font-medium tw-p-3">
                     Notifications
                  </h2>
                  <div>
                     <notification-bar-card></notification-bar-card>
                     <notification-bar-card></notification-bar-card>
                     <notification-bar-card></notification-bar-card>
                     <notification-bar-card></notification-bar-card>
                     <notification-bar-card></notification-bar-card>
                     <notification-bar-card></notification-bar-card>
                     <notification-bar-card></notification-bar-card>
                     <notification-bar-card></notification-bar-card>
                     <notification-bar-card></notification-bar-card>
                     <notification-bar-card></notification-bar-card>
                     <notification-bar-card></notification-bar-card>
                     <notification-bar-card></notification-bar-card>
                  </div>
               </div>
            </v-card>
         </v-menu>

         <v-btn v-if="isProfilePictureAvailable" class="ma-2" icon
            ><v-icon>mdi-account-circle</v-icon></v-btn
         >
         <v-btn v-if="!isProfilePictureAvailable" class="ma-2" icon
            ><img
               src="../assets/Images/profilepicture.jpg"
               class="tw-h-6 tw-w-6 tw-rounded-full"
               alt=""
         /></v-btn>
         <v-icon>mdi-notifications</v-icon>
      </v-app-bar>

      <v-navigation-drawer v-model="drawer" app>
         <div class=" ">
            <div class="logo tw-flex tw-w-full tw-justify-center tw-mt-4">
               <img src="../assets/Logo/WebookLogo.svg" class="tw-h-8" alt="" />
               <h2 class="tw-my-auto tw-font-medium tw-text-2xl tw-ml-3">
                  Webook
               </h2>
            </div>
         </div>
         <div class="new-post-button tw-mt-8 tw-ml-6">
            <v-btn dark rounded small @click="newPost" class="tw-p-2"
               ><img
                  src="../assets/Logo/Vector (2).svg"
                  class="tw-h-5 tw-mr-2"
                  alt=""
               />
               New Post</v-btn
            >
         </div>
         <div class="tw-mx-6 tw-mt-6">
            <v-list nav>
               <v-list-item class="tw-my-2" router to="/dashboard/post">
                  <v-list-item-action>
                     <v-icon>mdi-file</v-icon>
                  </v-list-item-action>
                  <v-list-item-content>
                     <v-list-item-title>Posts</v-list-item-title>
                  </v-list-item-content>
               </v-list-item>
               <v-list-item class="tw-my-2" router to="/dashboard/stats">
                  <v-list-item-action>
                     <v-icon>mdi-equalizer</v-icon>
                  </v-list-item-action>
                  <v-list-item-content>
                     <v-list-item-title>Stats</v-list-item-title>
                  </v-list-item-content>
               </v-list-item>
               <v-list-item class="tw-my-2" router to="/dashboard/comments">
                  <v-list-item-action>
                     <v-icon>mdi-comment</v-icon>
                  </v-list-item-action>
                  <v-list-item-content>
                     <v-list-item-title>Comments</v-list-item-title>
                  </v-list-item-content>
               </v-list-item>
               <v-list-item
                  class="tw-my-2 tw-rounded-xl"
                  router
                  to="/dashboard/profile"
               >
                  <v-list-item-action>
                     <v-icon>mdi-account</v-icon>
                  </v-list-item-action>
                  <v-list-item-content class="">
                     <v-list-item-title>Profile</v-list-item-title>
                  </v-list-item-content>
               </v-list-item>
               <v-list-item
                  class="tw-my-2 tw-rounded-xl"
                  v-ripple
                  @click="logout"
               >
                  <v-list-item-action>
                     <v-icon>mdi-logout</v-icon>
                  </v-list-item-action>
                  <v-list-item-content>
                     <v-list-item-title>Logout</v-list-item-title>
                  </v-list-item-content>
               </v-list-item>
               <v-divider></v-divider>
            </v-list>
         </div>
         <!-- <v-btn depressed block><v-icon dark>mdi-file</v-icon> Comments</v-btn>
            <v-btn depressed block><v-icon dark>mdi-file</v-icon> Profile</v-btn>
            <v-btn depressed block><v-icon dark>mdi-file</v-icon> Logout</v-btn> -->
      </v-navigation-drawer>
      <!-- <div class="tw-h-screen tw-w-screen tw-bg-slate-500 tw-mt-12 ">fdfd</div> -->

      <!-- <p class="tw-mt-12">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos iure harum reiciendis alias atque totam saepe vitae modi eveniet optio?</p> -->
   </div>
</template>
<script>
import axios from "axios";
import NotificationBarCard from "../components/NotificationBarCard.vue";
export default {
   props: ["isSearchVisible", "notOpenNavigation"],
   components: {
      "notification-bar-card": NotificationBarCard,
   },

   data() {
      return {
         drawer: true,
         // isProfilePictureAvailable: false,
         imagePath:"",
         searchQuery:"",
      };
   },
   created() {
      this.getProfile();
   },
   computed:{
      isProfilePictureAvailable(){
        if (this.$store.getters.getUserProfilePicture) {
           return false
        }
        else {
           return true;
        }
      }
   },
   methods: {
      getProfile() {
         if (this.$store.getters.getUserName == "") {
            axios
               .get("/profile", {
                  headers: {
                     Authorization: "Bearer " + localStorage.getItem("token"),
                  },
               })
               .then((res) => {
                  console.log(res.data);

                  this.$store.dispatch("setUserProfile", res.data);
               });
         }
      },
      toogleNavigationDrawer() {
         this.drawer = !this.drawer;
      },
      newPost() {
         this.$router.push("/dashboard/create-post");
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

               this.$router.push("/login");
            });
      },
   },
};
</script>
<style scoped>
.v-list-item--active {
   background-color: #e1b413;
   color: #fff !important;
   border-radius: 0.6rem;
}
</style>
