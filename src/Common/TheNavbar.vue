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
         <div class="tw-h-full">
            <div class="tw-mb-3 tw-my-auto xl:tw-w-96">
               <input
                  type="search"
                  class="tw-form-control tw-block tw-w-full tw-px-3 tw-py-1.5 tw-text-base tw-font-normal tw-text-gray-700 tw-bg-white tw-bg-clip-padding tw-border tw-border-solid tw-border-gray-300 tw-rounded tw-my-auto focus:tw-text-gray-700 focus:tw-bg-white focus:tw-border-blue-600 focus:tw-outline-none"
                  id="exampleSearch"
                  style="font-family: Arial, 'Font Awesome 5 Free'"
                  placeholder="&#xF002; Search"
               />
            </div>
         </div>
         <v-spacer></v-spacer>
         <v-btn icon>
            <img class="tw-h-5" src="../assets/Logo/Vector (4).svg" alt="">
         </v-btn>
         <v-btn class="ma-2" icon
            ><v-icon >mdi-account-circle</v-icon></v-btn
         >
         <v-icon>mdi-notifications</v-icon>
      </v-app-bar>

      <v-navigation-drawer v-model="drawer" app>
         <div class=" ">
            <div class="logo tw-flex tw-w-full tw-justify-center tw-mt-10">
               <img src="../assets/Logo/WebookLogo.svg" class="tw-h-8" alt="" />
               <h2 class="tw-my-auto tw-font-medium tw-text-2xl tw-ml-3">
                  Webook
               </h2>
            </div>
         </div>
         <div class="new-post-button tw-mt-6 tw-ml-4">
            <v-btn dark flat rounded small class="tw-p-2"
               ><img
                  src="../assets/Logo/Vector (2).svg"
                  class="tw-h-5 tw-mr-2"
                  alt=""
               />
               New Post</v-btn
            >
         </div>
         <div class="tw-mx-6 tw-mt-12">
            <v-list>
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
               <v-list-item class="tw-my-2">
                  <v-list-item-action>
                     <v-icon>mdi-comment</v-icon>
                  </v-list-item-action>
                  <v-list-item-content>
                     <v-list-item-title>Comments</v-list-item-title>
                  </v-list-item-content>
               </v-list-item>
               <v-list-item class="tw-my-2">
                  <v-list-item-action>
                     <v-icon>mdi-account</v-icon>
                  </v-list-item-action>
                  <v-list-item-content>
                     <v-list-item-title>Profile</v-list-item-title>
                  </v-list-item-content>
               </v-list-item>
               <v-list-item class="tw-my-2">
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
export default {
   data() {
      return {
         drawer: true,
      };
   },
   methods: {
      toogleNavigationDrawer() {
         this.drawer = !this.drawer;
      },
   },
};
</script>
<style scoped>
.v-list-item--active{
   background-color: #E1B413;
   color: #fff !important;
   border-radius: 1rem;
}
</style>
