<template>
   <div class="tw-mb-3">
      <!-- <v-card>
         <div class="tw-p-2">
            <div class="tw-flex">
               <div class="img">
                  <img
                     src="../assets/Images/wallpaperflare.com_wallpaper (17).jpg"
                     style="height: 103px; width: 131px; border-radius: 10px"
                     alt=""
                  />
               </div>
               <div class="information tw-mx-4 tw-flex tw-flex-col tw-justify-between ">
                  <div class="heading tw-my-3  ">
                     <h1 class="tw-font-medium tw-truncate tw-text-md">
                        5 Best React UI Frameworks to Build
                        Faster in 2022
                     </h1>
                  </div>
                  <div class="tw-flex  tw-mb-3">
                     <p class="tw-text-lime-500 tw-text-sm">Published</p>
                     <p class="tw-text-sm tw-mx-4 tw-opacity-75">18 Feb</p>
                  </div>
               </div>
            </div>
            <div></div>
         </div>
      </v-card> -->
      <v-hover
        v-slot="{ hover }"
        
      >
      <v-card :elevation="hover ? 3 : 0"
          :class="{ 'on-hover': hover }">
         <div class="tw-p-2">
            <v-row>
               <v-col cols="2">
                  <div class="tw-rounded-md">
                     <img
                        class="tw-rounded-md tw-h-20 tw-w-full"
                        src="../assets/Images/wallpaperflare.com_wallpaper (17).jpg"
                        alt=""
                     />
                     <!-- <v-skeleton-loader class="tw-h-20" type="image">
                     </v-skeleton-loader> -->
                  </div>
               </v-col>
               <v-col cols="7">
                  <div class="tw-flex tw-justify-between tw-flex-col tw-h-full">
                     <div class="tw-mt-1">
                        <h1 class="tw-line-clamp-2">
                           Lorem ipsum dolor sit amet consectetur adipisicing
                           elit. Nobis, enim architecto possimus ducimus vero ex
                           nisi id hic accusantium molestiae facilis tempore
                           cum. Quas alias dignissimos mollitia sequi neque qui.
                        </h1>
                        <!-- <v-skeleton-loader
                           class="tw-w-full"
                           type="list-item-two-line"
                        ></v-skeleton-loader> -->
                     </div>
                     <div class="tw-flex tw-mb-2">
                        <p class="tw-text-lime-600 tw-text-sm tw-mr-2">
                           Published
                        </p>
                        <p class="tw-ml-2 tw-opacity-80 tw-text-sm">
                           19 Feb 2021
                        </p>
                     </div>
                  </div>
               </v-col>
               <v-col cols="3">
                  <div class="tw-flex tw-flex-row-reverse">
                     <div>
                        <v-menu left transition="slide-y-transition" >
                           <template v-slot:activator="{ on, attrs }">
                              <v-btn right icon v-bind="attrs" v-on="on">
                                 <v-icon>mdi-dots-vertical</v-icon>
                              </v-btn>
                           </template>
                           <v-list>
                              <v-list-item>
                                 <v-row>
                                    <v-col cols="4"><img src="../assets/Logo/Vector (7).svg" alt=""></v-col>
                                    <v-col cols="4" class="tw-bg-b"><p>Edit</p></v-col>
                                 </v-row>
                              </v-list-item>
                              <v-list-item>
                                 <v-row>
                                    <v-col cols="4"><img src="../assets/Logo/Vector (7).svg" alt=""></v-col>
                                    <v-col cols="4" class="tw-bg-b"><p class="tw-text-sm">Move to draft</p></v-col>
                                 </v-row>
                              </v-list-item>
                              <v-list-item>
                                 <v-row>
                                    <v-col cols="4"><img src="../assets/Logo/Vector (7).svg" alt=""></v-col>
                                    <v-col cols="4" class="tw-bg-b"><p>Ediccccccct</p></v-col>
                                 </v-row>
                              </v-list-item>
                              <v-list-item>
                                 <v-list-item-action>
                                    <v-icon>mdi-file</v-icon>
                                 </v-list-item-action>
                                 <v-list-item-content>
                                    <v-list-item-title>Posts</v-list-item-title>
                                 </v-list-item-content>
                              </v-list-item>
                              <v-list-item>
                                 <v-list-item-action>
                                    <v-icon>mdi-file</v-icon>
                                 </v-list-item-action>
                                 <v-list-item-content>
                                    <v-list-item-title>Posts</v-list-item-title>
                                 </v-list-item-content>
                              </v-list-item>
                              <v-list-item>
                                 <v-list-item-action>
                                    <v-icon>mdi-file</v-icon>
                                 </v-list-item-action>
                                 <v-list-item-content>
                                    <v-list-item-title>Posts</v-list-item-title>
                                 </v-list-item-content>
                              </v-list-item>
                           </v-list>
                        </v-menu>
                     </div>
                     <div>
                        <v-tooltip bottom>
                           <template v-slot:activator="{ on, attrs }">
                              <v-btn v-bind="attrs" v-on="on" icon>
                                 <v-icon>mdi-share-variant</v-icon>
                              </v-btn>
                           </template>
                           <span>Copy link</span>
                        </v-tooltip>
                        <!-- <v-btn icon><v-icon>mdi-share-variant</v-icon></v-btn> -->
                     </div>
                  </div>
                  <div class="tw-mt-2">
                     <v-row class="tw-mr-3">
                        <!-- <v-col cols="4"><div class="tw-bg-black">d</div></v-col> -->
      
                        
                        <v-col cols="4"
                           ><div class="tw-flex">
                              <img src="../assets/Logo/Vector (5).svg" alt="" />
                              <p class="tw-ml-1 tw-text-sm tw-opacity-80">
                                 124
                              </p>
                           </div></v-col
                        >
                        <v-col cols="4" align-self="center"
                           ><div class="tw-flex">
                              <img src="../assets/Logo/Vector (6).svg" alt="" />
                              <p class="tw-ml-1 tw-text-sm tw-opacity-80">
                                 124
                              </p>
                           </div>
                        </v-col
                           >
                        <v-col cols="4"
                           ><div class="tw-flex">
                              <v-icon small>mdi-message-text</v-icon>
                              <p class="tw-ml-1 tw-text-sm tw-opacity-80">
                                 124
                              </p>
                           </div></v-col
                        >
                        <!-- <v-col cols="1"><div class="tw-bg-black">d</div></v-col> -->
                     </v-row>
                  </div>
               </v-col>
            </v-row>
         </div>
      </v-card>
      </v-hover>
   </div>
</template>
<style>
.v-btn__content {
   text-transform: unset !important;
}
.btn {
   text-transform: unset !important;
}
.no-padding {
   padding-left: 0px !important;
   padding-right: 0px !important;
}
</style>
