<template>
   <div @click="openPost" class="tw-mb-3 tw-cursor-pointer">
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
      <v-hover v-slot="{ hover }">
         <v-card :elevation="hover ? 0 : 0" :class="{ 'on-hover': hover }">
            <div class="tw-p-2 tw-shadow">
               <v-row>
                  <v-col md="2" cols="3">
                     <div class="tw-rounded-md">
                        <img
                           class="tw-rounded-md tw-h-20 tw-object-cover tw-w-full"
                           :src="imageUrl"
                           alt=""
                        />
                        <!-- <v-skeleton-loader class="tw-h-20" type="image">
                     </v-skeleton-loader> -->
                     </div>
                  </v-col>
                  <v-col md="7" cols="6">
                     <div
                        class="tw-flex tw-justify-between tw-flex-col tw-h-full"
                     >
                        <div class="tw-mt-1">
                           <h1 class="tw-text-sm md:tw-text-base tw-line-clamp-2">
                              {{ title }}
                           </h1>
                           <!-- <v-skeleton-loader
                           class="tw-w-full"
                           type="list-item-two-line"
                        ></v-skeleton-loader> -->
                        </div>
                        <div class="tw-flex tw-mb-2">
                           <p
                              v-if="showPublish"
                              class="tw-text-lime-600 tw-text-xs md:tw-text-sm tw-mr-2"
                           >
                              Published
                           </p>
                           <p
                              v-if="showArchive"
                              class="tw-text-red-600 tw-text-xs md:tw-text-sm tw-mr-2"
                           >
                              Archived
                           </p>
                           <p class="tw-ml-2 tw-opacity-80 tw-text-xs md:tw-text-sm">
                              {{ publishedDate }}
                           </p>
                        </div>
                     </div>
                  </v-col>
                  <v-col cols="3">
                     <div class="tw-flex tw-flex-row-reverse">
                        <div>
                           <v-menu
                              left
                              transition="slide-y-transition"
                              rounded=""
                           >
                              <template v-slot:activator="{ on, attrs }">
                                 <v-btn right icon v-bind="attrs" v-on="on">
                                    <v-icon >mdi-dots-vertical</v-icon>
                                 </v-btn>
                              </template>
                              <v-list nav>
                                 <v-list-item v-ripple router :to="editRoute">
                                    <v-list-item-action>
                                       <v-icon > mdi-pencil </v-icon>
                                    </v-list-item-action>
                                    <v-list-item-content>
                                       <v-list-item-title
                                          >Edit</v-list-item-title
                                       >
                                    </v-list-item-content>
                                 </v-list-item>
                                 <v-list-item
                                    v-if="!showArchive"
                                    v-ripple
                                    @click="archivePost"
                                 >
                                    <v-list-item-action>
                                       <v-icon>mdi-package-down</v-icon>
                                    </v-list-item-action>
                                    <v-list-item-content>
                                       <v-list-item-title
                                          >Archive</v-list-item-title
                                       >
                                    </v-list-item-content>
                                 </v-list-item>
                                 <v-list-item
                                    v-if="!showPublish"
                                    v-ripple
                                    @click="publishPost"
                                 >
                                    <v-list-item-action>
                                       <v-icon> mdi-cloud-upload</v-icon>
                                    </v-list-item-action>
                                    <v-list-item-content>
                                       <v-list-item-title
                                          >Publish</v-list-item-title
                                       >
                                    </v-list-item-content>
                                 </v-list-item>
                                 <v-list-item v-ripple @click="deletePost">
                                    <v-list-item-action>
                                       <v-icon color="red">mdi-delete</v-icon>
                                    </v-list-item-action>
                                    <v-list-item-content>
                                       <v-list-item-title
                                          class="tw-text-red-500"
                                       >
                                          Delete</v-list-item-title
                                       >
                                    </v-list-item-content>
                                 </v-list-item>
                              </v-list>
                           </v-menu>
                        </div>
                        <div v-if="!showArchive">
                           <v-tooltip bottom>
                              <template v-slot:activator="{ on, attrs }">
                                 <v-btn
                                    @click="copyLink"
                                    v-bind="attrs"
                                    v-on="on"
                                    icon
                                 >
                                    <v-icon small>mdi-share-variant</v-icon>
                                 </v-btn>
                              </template>
                              <span>Copy link</span>
                           </v-tooltip>
                           <!-- <v-btn icon><v-icon>mdi-share-variant</v-icon></v-btn> -->
                        </div>
                     </div>
                     <div class="tw-mt-2 tw-hidden md:tw-block">
                        <v-row class="md:tw-mr-3">
                           <!-- <v-col cols="4"><div class="tw-bg-black">d</div></v-col> -->

                           <v-col cols="4"
                              ><div class="tw-flex">
                                 <img
                                    src="../assets/Logo/Vector (5).svg"
                                    alt=""
                                    class=""
                                 />
                                 <p class="tw-ml-1 tw-text-xs md:tw-text-sm tw-opacity-80">
                                    {{ views }}
                                 </p>
                              </div></v-col
                           >
                           <v-col cols="4" align-self="center"
                              ><div class="tw-flex">
                                 <img
                                    src="../assets/Logo/Vector (6).svg"
                                    alt=""
                                 />
                                 <p class="tw-ml-1 tw-text-sm tw-opacity-80">
                                    {{ likes }}
                                 </p>
                              </div>
                           </v-col>
                           <v-col cols="4"
                              ><div class="tw-flex">
                                 <v-icon small>mdi-message-text</v-icon>
                                 <p class="tw-ml-1 tw-text-sm tw-opacity-80">
                                    {{ coments }}
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
<script>
import axios from "axios";
export default {
   data() {
      return {
         showPublish: false,
         showArchive: false,
         resData: null,
      };
   },
   computed: {
      editRoute() {
         return `/dashboard/edit-post/${this.postId}`;
      },
   },
   created() {
      this.co();
   },
   watch: {
      status(value) {
         console.log(value);
         if (this.status == "Archive") {
            this.showArchive = true;
            this.showPublish = false;
         }
         if (this.status == "published") {
            this.showPublish = true;
            this.showArchive = false;
         }
      },
   },
   props: [
      "views",
      "index",
      "title",
      "imageUrl",
      "likes",
      "coments",
      "publishedDate",
      "postId",
      "userId",
      "status",
   ],
   methods: {
      co() {
         console.log(this.status);
         if (this.status == "Archive") {
            this.showArchive = true;
         }
         if (this.status == "published") {
            this.showPublish = true;
         }
      },
      openPost(){
         this.$router.push(`/view/${this.$store.getters.getSlug}/${this.postId}`)
      },
      copyLink(e) {
         e.stopPropagation();
         navigator.clipboard.writeText(
            `http://localhost:8080/view/${this.$store.getters.getSlug}/${this.postId}`
         );
         this.$emit("showSnackbar", "Link Copied Sucessfully");
      },
      archivePost() {
         console.log(123);
         axios
            .post(`/post/${this.postId}/update/status_archive`)
            .then((res) => {
               this.resData = res.data.post;
               // this.showArchive = !this.showArchive;
               // this.showPublish = !this.showPublish;
               this.$emit(
                  "showSnackbar",
                  "Post Archived Sucessfully",
                  this.index,
                  this.resData
               );
            });
      },
      publishPost() {
         axios
            .post(`/post/${this.postId}/update/status_archive`)
            .then((res) => {
               console.log(res.data.post);
               this.resData = res.data.post;
               // this.showArchive = !this.showArchive;
               // this.showPublish = !this.showPublish;
               this.$emit(
                  "showSnackbar",
                  "Post Published Sucessfully",
                  this.index,
                  this.resData
               );
            });
      },
      deletePost() {
         axios
            .delete(`/post/${this.postId}/delete`, {
               headers: {
                  Authorization: "Bearer " + localStorage.getItem("token"),
               },
            })
            .then(() => {
               // this.resData=res.data.post;
               // this.showArchive = !this.showArchive;
               // this.showPublish = !this.showPublish;
               this.$emit(
                  "deletePost",
                  "Post Deleted Sucessfully",
                  this.index,
                  this.postId
               );
            });
      },
   },
};
</script>
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
.Archive {
   color: #2196f3;
}
</style>
