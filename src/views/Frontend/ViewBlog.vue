<template>
   <div>
      <v-navigation-drawer
         v-model="drawer"
         right
         width="300"
         absolute
         temporary
      >
      </v-navigation-drawer>
      <div class="tw-min-h-screen tw-min-w-full tw-bg-gray-300">
         <div class="tw-flex">
            <div class="tw-w-4/5 tw-bg-orange-100 tw-min-h-screen">
               <div class="backgroundImage">
                  <div class="tw-h-full">
                     <v-container
                        class="tw-flex tw-items-center tw-h-full tw-px-10 tw-w-full"
                     >
                        <v-btn icon dark @click="backNavigate"
                           ><img src="../../assets/Logo/WhiteBack.svg" alt=""
                        /></v-btn>
                        <div class="tw-flex tw-justify-center tw-w-full">
                           <h1
                              class="tw-text-white tw-my-auto tw-text-3xl tw-font-medium"
                           >
                              This is the name of the BLogsite
                           </h1>
                        </div>
                     </v-container>
                  </div>
               </div>
               <div class="tw-z-10">
                  <v-container class="tw-px-10">
                     <v-card class="">
                        <div class="tw-p-6 tw-px-10">
                           <div>
                              <v-row>
                                 <v-col cols="11">
                                    <div>
                                       <h1
                                          class="tw-text-2xl tw-font-medium tw-line-clamp-2"
                                       >
                                          This is the title of the blog
                                       </h1>
                                       <div class="tw-flex tw-mt-3">
                                          <div class="tw-flex tw-my-auto">
                                             <p class="tw-opacity-70">
                                                29 Feb 2022
                                             </p>
                                             <p class="tw-mx-5 tw-opacity-70">
                                                2 min read
                                             </p>
                                          </div>
                                          <v-btn small color="#E1B413">
                                             <v-icon>mdi-email</v-icon>
                                             Subscribe
                                          </v-btn>
                                       </div>
                                    </div>
                                 </v-col>
                                 <v-col
                                    cols="1"
                                    class="tw-flex tw-justify-center tw-items-center"
                                 >
                                    <div class="tw-my-auto">
                                       <v-btn icon
                                          ><v-icon
                                             >mdi-share-variant</v-icon
                                          ></v-btn
                                       >
                                    </div>
                                 </v-col>
                              </v-row>
                           </div>
                           <div class="image tw-my-4">
                              <img
                                 class="banner"
                                 src="../../assets/Images/wallpaperflare.com_wallpaper (17).jpg"
                                 alt=""
                              />
                           </div>
                           <div class="content tw-mt-5">
                              <p>
                                 Chrome 100 ships in late March (2022), and
                                 Firefox 100 ships shortly after in early May.
                                 Both of these are a major version number
                                 milestone and roll over to three digits. But,
                                 if your code is expecting two digits, the new
                                 version number could cause issues for you.
                              </p>
                              <p>
                                 Any code that checks version numbers, or parses
                                 the user agent string should be checked to make
                                 sure it won't have any issues.
                              </p>
                              <p>
                                 Chrome flags page highlighting the new
                                 #force-major-version-to-100 option In Chrome,
                                 the #force-major-version-to-100 flag will
                                 change the current version number to 100.
                              </p>
                              <p>
                                 And in Firefox Nightly's Settings menu, you can
                                 enable the "Firefox 100 User-Agent String"
                                 option. It's a good idea to test your site so
                                 that you can make sure everything works as
                                 expected.
                              </p>
                              <p>
                                 #CSS Cascasde Layers Support for CSS Cascade
                                 Layers and the CSS @layer rule is landing in
                                 Chrome 99. They provide more explicit control
                                 of your CSS files to prevent style-specificity
                                 conflicts. This is especially useful for large
                                 codebases, design systems, and when managing
                                 third party styles in applications.
                              </p>
                              <p>
                                 Chrome 100 ships in late March (2022), and
                                 Firefox 100 ships shortly after in early May.
                                 Both of these are a major version number
                                 milestone and roll over to three digits. But,
                                 if your code is expecting two digits, the new
                                 version number could cause issues for you.
                              </p>
                              <p>
                                 Any code that checks version numbers, or parses
                                 the user agent string should be checked to make
                                 sure it won't have any issues.
                              </p>
                              <p>
                                 Chrome flags page highlighting the new
                                 #force-major-version-to-100 option In Chrome,
                                 the #force-major-version-to-100 flag will
                                 change the current version number to 100.
                              </p>
                              <p>
                                 And in Firefox Nightly's Settings menu, you can
                                 enable the "Firefox 100 User-Agent String"
                                 option. It's a good idea to test your site so
                                 that you can make sure everything works as
                                 expected.
                              </p>
                              <p>
                                 #CSS Cascasde Layers Support for CSS Cascade
                                 Layers and the CSS @layer rule is landing in
                                 Chrome 99. They provide more explicit control
                                 of your CSS files to prevent style-specificity
                                 conflicts. This is especially useful for large
                                 codebases, design systems, and when managing
                                 third party styles in applications.
                              </p>
                              <p>
                                 Chrome 100 ships in late March (2022), and
                                 Firefox 100 ships shortly after in early May.
                                 Both of these are a major version number
                                 milestone and roll over to three digits. But,
                                 if your code is expecting two digits, the new
                                 version number could cause issues for you.
                              </p>
                              <p>
                                 Any code that checks version numbers, or parses
                                 the user agent string should be checked to make
                                 sure it won't have any issues.
                              </p>
                              <p>
                                 Chrome flags page highlighting the new
                                 #force-major-version-to-100 option In Chrome,
                                 the #force-major-version-to-100 flag will
                                 change the current version number to 100.
                              </p>
                              <p>
                                 And in Firefox Nightly's Settings menu, you can
                                 enable the "Firefox 100 User-Agent String"
                                 option. It's a good idea to test your site so
                                 that you can make sure everything works as
                                 expected.
                              </p>
                              <p>
                                 #CSS Cascasde Layers Support for CSS Cascade
                                 Layers and the CSS @layer rule is landing in
                                 Chrome 99. They provide more explicit control
                                 of your CSS files to prevent style-specificity
                                 conflicts. This is especially useful for large
                                 codebases, design systems, and when managing
                                 third party styles in applications.
                              </p>
                           </div>
                           <div
                              class="like-comment-bar tw-flex tw-justify-between"
                           >
                              <div class="tw-flex tw-my-5">
                                 <div class="tw-flex">
                                    <v-btn
                                       @click="likeUnlike"
                                       icon
                                       :color="btnColor"
                                    >
                                       <v-icon :color="iconColor"
                                          >mdi-heart</v-icon
                                       >
                                    </v-btn>
                                    <div class="">
                                       <p class="tw-mt-2 tw-mx-1">123</p>
                                    </div>
                                 </div>
                                 <div class="tw-flex">
                                    <v-btn
                                       @click="drawer = !drawer"
                                       icon
                                       color="black"
                                       class="tw-ml-3"
                                    >
                                       <img
                                          src="../../assets/Logo/chat_bubble_outline_black_24dp.svg"
                                          alt=""
                                       />
                                    </v-btn>
                                    <div>
                                       <p class="tw-mt-2 tw-mx-1">123</p>
                                    </div>
                                 </div>
                              </div>
                              <div class="tw-my-auto">
                                 <v-btn icon
                                    ><v-icon>mdi-instagram</v-icon></v-btn
                                 >
                                 <v-btn icon
                                    ><v-icon>mdi-facebook</v-icon></v-btn
                                 >
                                 <v-btn icon
                                    ><v-icon>mdi-twitter</v-icon></v-btn
                                 >
                              </div>
                           </div>
                        </div>
                     </v-card>
                     <v-card class="tw-my-6 tw-mb-12">
                        <div class="tw-p-6 tw-px-10">
                           <h1 class="tw-text-xl tw-font-medium tw-mb-2">
                              Get an email whenever Faizan Siddiqui Publishes
                           </h1>
                           <p class="tw-text-sm ">
                              Subscribe to get latest and important articles
                              from Faizan Siddiqui
                           </p>
                           <v-btn  class="tw-mt-5" color="#E1B413">
                              <v-icon>mdi-email</v-icon>
                              Subscribe
                           </v-btn>
                        </div>
                     </v-card>
                  </v-container>
               </div>
            </div>

            <div class="tw-w-1/5 tw-bg-white">
                <div>
                    <view-blog-sidebar></view-blog-sidebar>
                </div>
            </div>


         </div>
      </div>
   </div>
</template>
<script>
import ViewBLogSidebar from "../../components/ViewBLogSidebar.vue" 
export default {
    components:{
        'view-blog-sidebar':ViewBLogSidebar,
    },
   data() {
      return {
         btnColor: "black",
         iconColor: "black",
         isLiked: false,
         drawer: false,
      };
   },
   methods: {
      backNavigate(){
           this.$router.push(`/view/${this.userId}`)
       },
      likeUnlike() {
         if (this.isLiked) {
            this.btnColor = "black";
            this.iconColor = "black";
            this.isLiked = !this.isLiked;
         } else {
            this.btnColor = "pink";
            this.iconColor = "pink";
            this.isLiked = !this.isLiked;
         }
      },
   },
   props: ["userId", "blogId"],
   created() {
    //   console.log(this.userId);
    //   console.log(this.blogId);
   },
};
</script>
<style scoped>
.backgroundImage {
   background-image: url("../../assets/Images/pexels-johannes-plenio-1435075 1.png");
   background-size: 100%;
   width: 100%;
   height: 190px;
   background-position: center;
   background-repeat: no-repeat;
   object-fit: cover;
}
.overlay {
   position: fixed;
   top: 10;
   right: 10;
}
.banner {
   height: 300px;
   width: 100%;
   object-fit: cover;
}
</style>
