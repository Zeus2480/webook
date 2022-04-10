<template>
   <div>
      <v-row justify="center">
         <v-dialog v-model="dialog" max-width="400" max-height="1000">
            <v-card>
               <v-card-title class="tw-text-center text-h5">
                  You are not Logged In
               </v-card-title>
               <div class="tw-p-4 tw-flex tw-flex-row-reverse">
                  <v-btn right color="primary" @click="pushLogin">Login</v-btn>
               </div>
            </v-card>
         </v-dialog>
      </v-row>
      <v-navigation-drawer
         v-model="drawer"
         fixed
         temporary
         right
         width="400px"
         class="tw-z-40"
      >
         <div class="tw-pt-4 tw-w-full tw-z-40 tw-mt-4 tw-px-4">
            <div>
               <h1 class="tw-text-xl tw-font-semibold tw-px-2">
                  Responses ({{ commentsArray.length }})
               </h1>
            </div>
            <div class="tw-my-4">
               <textarea
                  name=""
                  placeholder="What are your thoughts?"
                  class="tw-bg-gray-100 tw-py-1 tw-px-2 tw-mx-2 tw-rounded-lg tw-border-2 tw-w-full tw-border-gray-400 tw-border-solid"
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
                  v-for="(comment, index) in commentsArray"
                  :key="index"
                  :body="comment.body"
                  :userName="comment.user_name"
                  :userId="comment.user_id"
                  :loggedUserId="loggedInUserId"
                  :date="comment.created_at"
                  :commentId="comment.id"
                  :profilePicture="comment.users.image_path"
                  @delete-comment="deleteComment"
                  @report="showReportAlert"
               />
            </div>
         </div>
      </v-navigation-drawer>
      <div class="tw-min-h-screen tw-min-w-full tw-bg-gray-300">
         <div class="tw-flex">
            <div
               class="tw-w-4/5 tw-bg-orange-100 tw-border-r-2 tw-border-gray-200 tw-min-h-screen"
            >
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
                              {{ siteName }}
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
                                 class="banner tw-object-cover"
                                 :src="imageUrl"
                                 alt=""
                              />
                           </div>
                           <div v-html="body" class="content tw-mt-5"></div>
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
                           <p class="tw-text-sm">
                              Subscribe to get latest and important articles
                              from Faizan Siddiqui
                           </p>
                           <v-btn class="tw-mt-5" color="#E1B413">
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
                  <view-blog-sidebar :userId="userId"></view-blog-sidebar>
               </div>
            </div>
         </div>
      </div>
   </div>
</template>
<script>
import ViewBLogSidebar from "../../components/ViewBLogSidebar.vue";
import CommentsCard from "./CommentsCard.vue";
import axios from "axios";
export default {
   components: {
      "view-blog-sidebar": ViewBLogSidebar,
      CommentsCard,
   },
   computed: {
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
   },
   watch: {
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
         loading:false
      };
   },
   methods: {
      deleteComment(commentId) {
         this.commentsArray = this.commentsArray.filter(
            (comment) => comment.id !== commentId
         );
         // console.log(this.commentsArray);
      },
      getCommentsArray() {
         this.getUserID();
         // console.log(123);
         axios.get("/comments").then((res) => {
            this.commentsArray = res.data.filter(
               (data) => data.post_id == this.id
            );
            this.commentsArray = this.commentsArray.reverse();
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
                  if (res.data == "You are blocked") {
                     this.showAlert = true;
                     this.alertMessage = "You are blocked";
                     this.alertType = "warning";
                     this.alertTimeOut();

                     console.log("blocked");
                  } else {
                     this.commentBody = "";
                     this.commentsArray.unshift(res.data);
                  }
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
         axios.get(`user/${this.userId}/post/${this.blogId}`).then((res) => {
            // console.log(res.data);
            this.siteName = res.data.siteTitile;
            this.title = res.data.psot.name;
            this.body = res.data.psot.body;
            this.imageUrl = res.data.psot.image_path;
            this.createdDate = res.data.psot.created_at;
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
               });
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
            });
      },
   },
   props: ["userId", "blogId"],
   created() {
      //   console.log(this.userId);
      //   console.log(this.blogId);
      this.getBlogData();
      this.userLiked();
      this.noOfLikes();
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
