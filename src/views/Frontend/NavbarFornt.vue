<template>
   <div>
      <!-- <div class="md:tw-hidden">
         <v-navigation-drawer v-model="drawer" >
         <div>
            <h1>ffdfdfd</h1>
         </div>
      </v-navigation-drawer>
      </div> -->
      <v-app-bar class="tw-hidden md:tw-block" color="black" height="60" app>
         <v-app-bar-nav-icon
            @click="drawer=!drawer"
            dark
            class="tw-block md:tw-hidden tw-cursor-pointer"
         ></v-app-bar-nav-icon>
         <!-- <button class="tw-bg-white" @click="drawer=!drawer">hhh</button> -->
         <v-toolbar-title
            class="tw-flex tw-cursor-pointer"
            @click="allBlogsPush"
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
                        <v-avatar size="38" color="blue">
                           <span class="white--text text-h5">{{
                              user.initials
                           }}</span>
                        </v-avatar>
                     </v-btn>
                  </template>
                  <v-card>
                     <v-list-item-content class="justify-center">
                        <div class="mx-auto text-center">
                           <v-avatar color="blue">
                              <span class="white--text text-h5">{{
                                 user.initials
                              }}</span>
                           </v-avatar>
                           <h3 class="tw-truncate tw-my-2">
                              {{ user.fullName }}
                           </h3>
                           <p class="text-caption mt-1">
                              {{ user.email }}
                           </p>
                           <v-divider class="my-3"></v-divider>
                           <!-- <v-btn depressed block text> Edit Account </v-btn>
                           <v-divider class="my-3"></v-divider> -->
                           <v-btn
                              depressed
                              rounded
                              block
                              color="red"
                              text
                              @click="logout"
                           >
                              Log out
                           </v-btn>
                        </div>
                     </v-list-item-content>
                  </v-card>
               </v-menu>
            </v-row>
         </div>
      </v-app-bar>

      <div class="tw-block md:tw-hidden">
         <v-bottom-navigation app color="teal" grow>
            <v-btn to="/view/ggg">
               <span>Home</span>

               <v-icon>mdi-home</v-icon>
            </v-btn>

            <v-btn to="/view/ggg/search/test">
               <span>Search</span>

               <v-icon>mdi-magnify</v-icon>
            </v-btn>

            <v-btn>
               <span>Nearby</span>

               <v-icon>mdi-map-marker</v-icon>
            </v-btn>
         </v-bottom-navigation>
      </div>
   </div>
</template>
<script>
import axios from "axios";
export default {
   data: () => ({
      user: {
         initials: "",
         fullName: "",
         email: "john.doe@doe.com",
         slug: "",
         drawer: true,
      },
   }),
   created() {
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
      getLoggedInUserData() {
         if (localStorage.getItem("token")) {
            axios
               .get("/profile", {
                  headers: {
                     Authorization: "Bearer " + localStorage.getItem("token"),
                  },
               })
               .then((res) => {
                  console.log(res.data);
                  this.user.fullName = res.data.name;
                  this.user.email = res.data.email;
                  const fullName = this.user.fullName.split(" ");
                  this.user.initials =
                     fullName.shift().charAt(0) + fullName.pop().charAt(0);
                  this.$store.dispatch("setFrontLoggedInUser", res.data.id);
               });
         }
      },
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
