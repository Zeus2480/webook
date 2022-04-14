<template>
   <div>
      <v-app-bar color="black" height="60" app>
         <v-app-bar-nav-icon
            @click="toogleNavigationDrawer"
            dark
            class="tw-block md:tw-hidden"
         ></v-app-bar-nav-icon>

         <v-toolbar-title class="tw-flex" @click="allBlogsPush"
            ><img
               src="../../assets/Logo/WebookLogo.svg"
               class="tw-my-auto tw-mr-3 tw-h-6"
               alt=""
            />
            <h1 class="tw-text-xl tw-font-medium tw-text-white">Webook</h1>
         </v-toolbar-title>

         <v-spacer></v-spacer>
         <div v-if="!isUserLoggedIn">
            <v-btn
               depressed
               @click="pushLogin"
               dark
               color="black"
               rounded
               class="mx-5"
               :small="$vuetify.breakpoint.xs"
               >Sign in</v-btn
            >
            <v-btn dark color="primary" rounded @click="pushRegister">
               Get started
            </v-btn>
         </div>
         <div v-if="isUserLoggedIn">
            <v-row justify="center">
               <v-menu bottom min-width="200px" rounded offset-y>
                  <template v-slot:activator="{ on }">
                     <v-btn icon x-large v-on="on" class="tw-mx-3">
                        <v-avatar color="brown" size="35">
                           <img
                              src="../../assets/Images/profilepicture.jpg"
                              alt=""
                           />
                        </v-avatar>
                     </v-btn>
                  </template>
                  <v-card>
                     <v-list-item-content class="justify-center">
                        <div class="mx-auto text-center">
                           <v-avatar color="brown">
                              <span class="white--text text-h5">{{
                                 user.initials
                              }}</span>
                           </v-avatar>
                           <h3>{{ user.fullName }}</h3>
                           <p class="text-caption mt-1">
                              {{ user.email }}
                           </p>
                           <v-divider class="my-3"></v-divider>
                           <v-btn depressed block text> Edit Account </v-btn>
                           <v-divider class="my-3"></v-divider>
                           <v-btn depressed block text @click="logout"> Log out </v-btn>
                        </div>
                     </v-list-item-content>
                  </v-card>
               </v-menu>
            </v-row>
         </div>
      </v-app-bar>
      <!-- <div class="md:tw-hidden">
         <v-navigation-drawer v-model="drawer" >
         <div>
            <h1>ffdfdfd</h1>
         </div>
      </v-navigation-drawer>
      </div> -->
   </div>
</template>
<script>
import axios from "axios";
export default {
   data: () => ({
      user: {
         initials: "JD",
         fullName: "John Doe",
         email: "john.doe@doe.com",
         slug: "",
         drawer: null,
      },
   }),
   computed: {
      isUserLoggedIn() {
         if (localStorage.getItem("token")) {
            return true;
         } else {
            return false;
         }
      },
      getSlug() {
         return this.$store.getters.getAuthorSlug;
      },
      getDrawer() {
         return this.drawer;
      },
   },
   watch: {
      getSlug(newValue) {
         this.slug = newValue;
      },
   },
   methods: {
      toogleNavigationDrawer() {
         // console.log(123);
         console.log(this.drawer);

         this.drawer = !this.drawer;
         console.log(this.drawer);
         this.$store.dispatch("setDrawer", this.drawer);
      },
      pushRegister() {
         this.$router.push({
            name: "RegisterReader",
         });
      },
      pushLogin() {
         this.$router.push("/login-reader");
      },
      allBlogsPush() {
         this.$router.push(`/view/${this.getSlug}`);
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
