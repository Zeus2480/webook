<template>
   <div>
      <NavabarFront></NavabarFront>
      <!-- <div class="md:tw-hidden">
         <v-navigation-drawer v-model="dr" app>
            <div>
               <h1>ffdfdfd</h1>
            </div>
         </v-navigation-drawer>
      </div> -->
      <v-main class="no-padding">
         <v-overlay :value="showOverlay" opacity=".5">
            <div class="text-center">
               <v-progress-circular
                  indeterminate
                  color="white"
                  size="50"
               ></v-progress-circular>
            </div>
         </v-overlay>
         <v-row justify="center">
            <v-dialog v-model="dialog" max-width="400" max-height="1000">
               <v-card>
                  <v-card-title class="tw-text-center text-h5">
                     You are not Logged In
                  </v-card-title>
                  <div class="tw-p-4 tw-flex tw-flex-row-reverse">
                     <v-btn right color="primary" @click="pushLogin"
                        >Login</v-btn
                     >
                  </div>
               </v-card>
            </v-dialog>
         </v-row>
         <div class="tw-hidden md:tw-block">
            <v-navigation-drawer
               v-model="drawer"
               fixed
               temporary
               right
               width="400px"
               class="tw-z-40"
            >
               <div class="tw-pt-4 tw-w-full tw-z-40 md:tw-mt-4 tw-px-0 md:tw-px-4">
                  <div>
                     <h1 class="tw-text-xl tw-font-semibold tw-px-2">
                        Responses ({{ commentsArray.length }})
                     </h1>
                  </div>
                  <div class="tw-my-4">
                     <textarea
                        name=""
                        placeholder="What are your thoughts?"
                        class="tw-bg-gray-100 tw-py-1 tw-px-2  tw-mx-2 tw-rounded-lg tw-border-2 tw-w-full tw-border-gray-400 tw-border-solid"
                        id=""
                        cols="39"
                        rows="4"
                        v-model="commentBody"
                        @keyup.13.stop="comment"
                     ></textarea>
                     <div class="tw-flex tw-items-center">
                        <v-btn
                           @click="comment"
                           @keyup.enter="comment"
                           dark
                           color="#2A73C5"
                           block
                           :loading="loading"
                           class="loading tw-flex tw-items-center tw-ml-2"
                           >Comment</v-btn
                        >
                     </div>
                  </div>
                  <div class="tw-mb-16">
                     <CommentsCard
                        @delete-comment="deleteComment"
                        v-for="(comment, index) in commentsArray"
                        :key="index"
                        :body="comment.body"
                        :userName="comment.users.name"
                        :userId="comment.user_id"
                        :date="comment.created_at"
                        :commentId="comment.id"
                        :profilePicture="comment.users.image_path"
                        :loggedUserId="loggedInUserId"
                     />
                  </div>
               </div>
            </v-navigation-drawer>
         </div>
         <div class="">
            <v-bottom-sheet  v-model="drawerMobile">
               <v-sheet class="text-center" height="90vh">
                  <div class="tw-pt-4 tw-w-full tw-z-40  md:tw-mt-4 tw-px-4">
                     <div>
                        <h1 class="tw-text-xl tw-text-left tw-font-semibold md:tw-px-2">
                           Responses ({{ commentsArray.length }})
                        </h1>
                     </div>
                     <div class="tw-my-4">
                        <textarea
                           name=""
                           placeholder="What are your thoughts?"
                           class="tw-bg-gray-100 tw-py-1 tw-px-2 md:tw-mx-2 tw-rounded-lg tw-border-2 tw-w-full tw-border-gray-400 tw-border-solid"
                           id=""
                           cols="39"
                           rows="4"
                           v-model="commentBody"
                           
                        ></textarea>
                        <div class="tw-flex tw-items-center">
                           <v-btn
                              @click="comment"
                              @keyup.enter="comment"
                              dark
                              color="#2A73C5"
                              block
                              :loading="loading"
                              class="loading tw-flex tw-items-center md:tw-ml-2"
                              >Comment</v-btn
                           >
                        </div>
                     </div>
                     <div class="tw-mb-16">
                        <CommentsCard
                           @delete-comment="deleteComment"
                           v-for="(comment, index) in commentsArray"
                           :key="index"
                           :body="comment.body"
                           :userName="comment.users.name"
                           :userId="comment.user_id"
                           :date="comment.created_at"
                           :commentId="comment.id"
                           :profilePicture="comment.users.image_path"
                           :loggedUserId="loggedInUserId"
                        />
                     </div>
                  </div>
                  <!-- <v-btn class="mt-6" text color="red" @click="sheet = !sheet">
                  close
               </v-btn>
               <div class="py-3">
                  This is a bottom sheet using the controlled by v-model instead
                  of activator
               </div> -->
               </v-sheet>
            </v-bottom-sheet>
         </div>
         <div class="tw-min-h-screen tw-min-w-full tw-bg-gray-300">
            <div class="tw-flex">
               <div
                  class="tw-w-full md:tw-w-9/12 tw-bg-secondary-background tw-border-r-2 tw-border-gray-200 tw-min-h-screen"
               >
                  <div class="backgroundImage">
                     <div class="tw-h-full">
                        <v-container
                           class="tw-flex tw-items-center tw-h-full tw-px-3 md:tw-px-10 tw-w-full"
                        >
                           <v-btn icon dark @click="backNavigate"
                              ><img
                                 src="../../assets/Logo/WhiteBack.svg"
                                 alt=""
                           /></v-btn>
                           <div class="tw-flex tw-justify-center tw-w-full">
                              <h1
                                 class="tw-text-white tw-my-auto tw-text-3xl tw-font-medium"
                              >
                                 {{ siteName }}
                              </h1>
                           </div>
                        </v-container>
                     </div>
                  </div>
                  <div class="tw-z-10">
                     <v-container class="md:tw-px-10">
                        <v-card class="">
                           <div class="tw-p-6 tw-px-4 md:tw-px-10">
                              <div>
                                 <v-row>
                                    <v-col cols="11">
                                       <div>
                                          <h1
                                             class="tw-text-2xl tw-font-medium tw-line-clamp-2"
                                          >
                                             {{ title }}
                                          </h1>
                                          <div class="tw-flex tw-mt-3">
                                             <div class="tw-flex tw-my-auto">
                                                <p
                                                   class="tw-opacity-70 tw-text-sm"
                                                >
                                                   {{ createdDate }}
                                                </p>
                                                <!-- <p class="tw-mx-5 tw-opacity-70">
                                                2 min read
                                             </p> -->
                                             </div>
                                          </div>
                                       </div>
                                    </v-col>
                                    <v-col
                                       cols="1"
                                       class="tw-flex tw-justify-center tw-items-center"
                                    >
                                       <div class="tw-my-auto">
                                          <v-btn icon @click="copyLink"
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
                                    class="banner tw-object-cover"
                                    :src="imageUrl"
                                    alt=""
                                 />
                              </div>
                              <div v-html="body" class="content tw-break-words tw-overflow-hidden tw-mt-5" ></div>
                              <div
                                 class="like-comment-bar tw-flex tw-justify-between"
                              >
                                 <div class="tw-flex tw-my-5">
                                    <div class="tw-flex">
                                       <v-btn
                                          @click="likeUnlike"
                                          icon
                                          :color="likebtnColor"
                                       >
                                          <v-icon :color="likebtnColor">{{
                                             likeBtnIcon
                                          }}</v-icon>
                                       </v-btn>
                                       <div class="">
                                          <p class="tw-mt-2 tw-mx-1">
                                             {{ likeCount }}
                                          </p>
                                       </div>
                                    </div>
                                    <div class="tw-flex">
                                       <v-btn
                                          @click="drawer = !drawer"
                                          icon
                                          color="black"
                                          class="tw-ml-3 tw-hidden md:tw-block"
                                       >
                                          <img
                                             src="../../assets/Logo/chat_bubble_outline_black_24dp.svg"
                                             alt=""
                                          />
                                       </v-btn>
                                       <v-btn
                                          @click="drawerMobile = !drawerMobile"
                                          icon
                                          color="black"
                                          class="tw-ml-3 md:tw-hidden"
                                       >
                                          <img
                                             src="../../assets/Logo/chat_bubble_outline_black_24dp.svg"
                                             alt=""
                                          />
                                       </v-btn>
                                       <div>
                                          <p class="tw-mt-2 tw-mx-1">
                                             {{ commentsCount }}
                                          </p>
                                       </div>
                                    </div>
                                 </div>
                                 <div class="tw-my-auto">
                                    <v-btn
                                       :href="authorInstargram"
                                       v-if="authorInstargram"
                                       icon
                                       ><v-icon>mdi-instagram</v-icon></v-btn
                                    >
                                    <v-btn
                                       :href="authorFacebook"
                                       icon
                                       v-if="authorFacebook"
                                       ><v-icon>mdi-facebook</v-icon></v-btn
                                    >
                                    <v-btn
                                       :href="authorTwitter"
                                       icon
                                       v-if="authorTwitter"
                                       ><v-icon>mdi-twitter</v-icon></v-btn
                                    >
                                 </div>
                              </div>
                           </div>
                        </v-card>
                        <!-- <v-card class="tw-my-6 tw-mb-12">
                           <div class="tw-p-6 tw-px-4 md:tw-px-10">
                              <h1 class="tw-text-xl tw-font-medium tw-mb-2">
                                 Get an email whenever
                                 {{ getAuthorName }} Publishes
                              </h1>
                              <p class="tw-text-sm">
                                 Subscribe to get latest and important articles
                                 from {{ getAuthorName }}
                              </p>
                              <v-btn class="tw-mt-5" color="#E1B413">
                                 <v-icon>mdi-email</v-icon>
                                 Subscribe
                              </v-btn>
                           </div>
                        </v-card> -->
                     </v-container>
                  </div>
               </div>

               <div
                  class="tw-w-3/12 tw-bg-white md:tw-block tw-hidden tw-border-l-2 tw-border-gray-200"
               >
                  <div>
                     <view-blog-sidebar :userId="userId"></view-blog-sidebar>
                  </div>
               </div>
            </div>
         </div>
      </v-main>
   </div>
</template>
<script>
import ViewBLogSidebar from "../../components/ViewBLogSidebar.vue";
import CommentsCard from "./CommentsCard.vue";
import NavabarFront from "./NavbarFornt.vue";
import axios from "axios";
export default {
   components: {
      "view-blog-sidebar": ViewBLogSidebar,
      CommentsCard,
      NavabarFront,
   },
   computed: {
      loggedInUserId() {
         return this.$store.getters.getForntLoggedInUserId;
      },
      authorInstargram() {
         return this.$store.getters.getAuthorInstagram;
      },
      authorFacebook() {
         return this.$store.getters.getAuthorFacebook;
      },
      authorTwitter() {
         return this.$store.getters.getAuthorTwitter;
      },
      getDrawer() {
         return this.$store.getters.getDrawer;
      },
      getAuthorName() {
         return this.$store.getters.getAuthorname;
      },
      showOverlay() {
         if (
            this.isBLogsDataLoadingCompleted &&
            this.isCommentsArrayLoadingCompleted &&
            this.isUserLikedLoadingCompleted &&
            this.isNoOfLikesLoadingCompleted
         ) {
            return false;
         } else {
            return true;
         }
      },
      likeBtnIcon() {
         if (!this.isLiked) {
            return "mdi-heart-outline";
         } else {
            return "mdi-heart";
         }
      },
      likebtnColor() {
         if (!this.isLiked) {
            return "black";
         } else {
            return "red";
         }
      },
      commentsCount() {
         return this.commentsArray.length;
      },
   },
   created() {
      //   console.log(this.userId);
      //   console.log(this.blogId);
      this.getBlogData();
      this.userLiked();
      this.noOfLikes();
      this.getCommentsArray();
   },
   watch: {
      getDrawer() {
         this.dr = !this.dr;
      },
      // siteName() {
      //    console.log(11111);
      //    this.siteNameMethod();
      // },
   },
   data() {
      return {
         btnColor: "black",
         iconColor: "black",
         isLiked: false,
         drawer: false,
         title: null,
         body: null,
         imageUrl: null,
         createdDate: null,
         likeCount: null,
         siteName: null,
         commentBody: "",
         commentsArray: [],
         dialog: false,
         drawerMobile: false,
         loading: false,
         isBLogsDataLoadingCompleted: false,
         isUserLikedLoadingCompleted: false,
         isNoOfLikesLoadingCompleted: false,
         isCommentsArrayLoadingCompleted: false,
         dr: false,
      };
   },
   methods: {
      copyLink() {
         navigator.clipboard.writeText(
            `http://localhost:8080/view/${this.userId}/${this.blogId}`
         );
      },
      deleteComment(commentId) {
         this.commentsArray = this.commentsArray.filter(
            (comment) => comment.id !== commentId
         );
         // console.log(this.commentsArray);
      },
      getCommentsArray() {
         // console.log(123);
         axios
            .get(`/comments/${this.blogId}`)
            .then((res) => {
               this.commentsArray = res.data;
               console.log(this.commentsArray);

               this.commentsArray = this.commentsArray.reverse();
            })
            .finally(() => {
               this.isCommentsArrayLoadingCompleted = true;
            });
      },
      pushLogin() {
         this.$router.push("/login-reader");
      },
      comment() {
         if (localStorage.getItem("token")) {
            this.loading = true;
            axios
               .post(
                  `/post/${this.blogId}/comments`,
                  {
                     body: this.commentBody,
                  },
                  {
                     headers: {
                        Authorization:
                           "Bearer " + localStorage.getItem("token"),
                     },
                  }
               )
               .then((res) => {
                  this.commentBody = "";
                  this.commentsArray.unshift(res.data);
                  console.log(this.commentsArray);
               })
               .finally(() => {
                  this.loading = false;
                  this.commentBody = "";
               });
         } else {
            this.dialog = true;
         }
      },
      backNavigate() {
         this.$router.push(`/view/${this.userId}`);
      },
      likeUnlike() {
         if (localStorage.getItem("token")) {
            axios
               .post(
                  `post/${this.blogId}/likes`,
                  {},
                  {
                     headers: {
                        Authorization:
                           "Bearer " + localStorage.getItem("token"),
                     },
                  }
               )
               .then((res) => {
                  console.log(res);

                  this.isLiked = !this.isLiked;
                  if (res.data.like) {
                     this.likeCount++;
                  } else {
                     this.likeCount--;
                  }
                  // this.likeCount = res.data.like;
               });
         } else {
            this.dialog = true;
         }

         // if (this.isLiked) {
         //    this.btnColor = "black";
         //    this.iconColor = "black";
         //    this.isLiked = !this.isLiked;
         // } else {
         //    this.btnColor = "pink";
         //    this.iconColor = "pink";
         //    this.isLiked = !this.isLiked;
         // }
      },
      siteNameMethod(name) {
         console.log(name);

         this.siteName = name;
      },
      getBlogData() {
         // console.log(`user/${this.userId}/post/${this.blogId}`);
         axios
            .get(`user/${this.userId}/post/${this.blogId}`)
            .then((res) => {
               // console.log(res.data);
               this.siteName = res.data.siteTitile;
               this.title = res.data.post.name;
               this.body = res.data.post.body;
               this.imageUrl = res.data.post.image_path;
               this.createdDate = res.data.post.created_at;
            })
            .finally(() => {
               this.isBLogsDataLoadingCompleted = true;
            });
      },
      userLiked() {
         if (localStorage.getItem("token")) {
            axios
               .get(`/liked/${this.blogId}`, {
                  headers: {
                     Authorization: "Bearer " + localStorage.getItem("token"),
                  },
               })
               .then((res) => {
                  console.log(res.data.is_like);

                  if (res.data.is_like == 1) {
                     this.isLiked = true;
                  } else {
                     this.isLiked = false;
                  }
               })
               .finally(() => {
                  this.isUserLikedLoadingCompleted = true;
               });
         } else {
            this.isUserLikedLoadingCompleted = true;
         }
      },
      noOfLikes() {
         axios
            .get(`/post/${this.blogId}/counts`, {
               headers: {
                  Authorization: "Bearer " + localStorage.getItem("token"),
               },
            })
            .then((res) => {
               // console.log(res);

               this.likeCount = res.data.like;
            })
            .finally(() => {
               this.isNoOfLikesLoadingCompleted = true;
            });
      },
   },
   props: ["userId", "blogId"],
};
</script>
<style scoped>
.backgroundImage {
   background-image: url("../../assets/Images/pexels-johannes-plenio-1435075 1.png");
   /* background-size: 100%; */
   width: 100%;
   height: 190px;
   background-position: center;
   background-repeat: no-repeat;
   object-fit: cover;
}
@media screen and (max-width: 768px) {
   .no-padding{
      padding-top: 0 !important;
   
}
}
.overlay {
   position: fixed;
   top: 10;
   right: 10;
}
.banner {
   /* height: 300px; */
   max-width: 100%;
   object-fit: cover;
}
</style>
