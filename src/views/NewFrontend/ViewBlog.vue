<template>
   <div>
      <TopBar />
      <v-overlay :value="showOverlay" opacity=".5">
         <div class="text-center">
            <v-progress-circular
               indeterminate
               color="white"
               size="50"
            ></v-progress-circular>
         </div>
      </v-overlay>
      <div class="tw-hidden md:tw-block">
         <v-navigation-drawer
            v-model="drawer"
            fixed
            temporary
            right
            width="400px"
            class="tw-z-40"
         >
            <div
               class="tw-pt-4 tw-w-full tw-z-40 md:tw-mt-4 tw-px-0 md:tw-px-4"
            >
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
         <v-bottom-sheet v-model="drawerMobile">
            <v-sheet class="text-center" height="90vh">
               <div class="tw-pt-4 tw-w-full tw-z-40 md:tw-mt-4 tw-px-4">
                  <div>
                     <h1
                        class="tw-text-xl tw-text-left tw-font-semibold md:tw-px-2"
                     >
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
      <v-container>
         <div class="tw-mb-6">
            <div class="image tw-flex tw-justify-center">
               <img :src="imageUrl" class="tw-h-50-vh tw-w-screen" alt="" />
            </div>
            <div class="tw-flex tw-my-4">
               <h1 class="tw-text-5xl tw-text-bold">
                  {{ title }}
               </h1>
            </div>
            <div class="tw-flex">
               <div>
                  <div class="tw-flex tw-my-4">
                     <img
                        :src="authourImageUrl"
                        class="tw-h-10 tw-w-10 tw-rounded-full"
                        alt=""
                     />
                     <h2 class="tw-my-auto tw-mx-4 tw-text-xl">
                        {{ authorName }}
                     </h2>
                     <div
                        class="tw-h-1 tw-w-1 tw-bg-gray-500 tw-rounded-full tw-my-auto"
                     ></div>
                     <h2
                        class="tw-my-auto tw-mx-4 tw-text-base tw-text-gray-600"
                     >
                        {{ createdDate }}
                     </h2>
                  </div>
               </div>
            </div>
            <div v-html="body" class="body tw-break-words tw-overflow-clip"></div>
            <div>
               <div class="like-comment-bar tw-flex tw-justify-between">
                  <div class="tw-flex tw-my-5">
                     <div class="tw-flex">
                        <v-btn @click="likeUnlike" icon :color="likebtnColor">
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
                              {{ commentsArray.length }}
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
                     <v-btn :href="authorFacebook" icon v-if="authorFacebook"
                        ><v-icon>mdi-facebook</v-icon></v-btn
                     >
                     <v-btn :href="authorTwitter" icon v-if="authorTwitter"
                        ><v-icon>mdi-twitter</v-icon></v-btn
                     >
                  </div>
               </div>
               <div class="tw-mb-6">
                  <TagsCard
                     v-for="(tag, index) in tagsArray"
                     :key="index"
                     :tag="tag"
                  />
               </div>
            </div>
            <v-divider></v-divider>
            <div class="tw-my-12">
               <div class="tw-px-3 md:tw-px-12">
                  <div v-if="authorBio" class="tw-flex">
                     <div class="image">
                        <img
                           :src="authourImageUrl"
                           class="md:tw-h-20 tw-h-10 tw-w-10 md:tw-w-20 tw-rounded-full"
                           alt=""
                        />
                     </div>
                     <div class="tw-ml-5 tw-w-full">
                        <div class="tw-flex tw-justify-between">
                           <div>
                              <p class="tw-text-gray-400">Written By</p>
                              <h1 class="tw-text-lg md:tw-text-2xl">{{ authorName }}</h1>
                           </div>
                           <div class="tw-hidden md:tw-block">
                              <v-btn @click="subscribe" v-if="!isUserSubscribed" depressed
                                 ><v-icon>mdi-plus</v-icon> Follow</v-btn
                              >
                              <v-btn @click="subscribe" v-if="isUserSubscribed" color="green" dark depressed
                                 ><v-icon>mdi-check</v-icon> Following</v-btn
                              >
                           </div>
                           <div class="md:tw-hidden tw-block">
                              <v-btn small @click="subscribe" v-if="!isUserSubscribed" depressed
                                 ><v-icon small>mdi-plus</v-icon> Follow</v-btn
                              >
                              <v-btn small @click="subscribe" v-if="isUserSubscribed" color="green" dark depressed
                                 ><v-icon small>mdi-check</v-icon> Following</v-btn
                              >
                           </div>
                        </div>
                        <div class="tw-mt-6">
                           <p>
                              {{ authorBio }}
                           </p>
                        </div>
                        <div></div>
                     </div>
                     <v-divider> </v-divider>
                  </div>
               </div>
            </div>
            <div class="tw-flex tw-mt-12 tw-justify-between">
               <h3 class="tw-mb-4 tw-my-auto tw-text-2xl tw-text-gray-500.">
                  More Articles
               </h3>
               <v-btn @click="pushToAllBlogs" class="tw-my-auto" depressed
                  >View All</v-btn
               >
            </div>
            <v-row class="tw-my-4">
               <v-col
                  lg="4"
                  md="6"
                  cols="12"
                  v-for="(blog, index) in moreArticles"
                  :key="index"
               >
                  <div class="">
                     <BlogCard
                        :id="blog.id"
                        :title="blog.name"
                        :summary="blog.excerpt"
                        :image="blog.image_path"
                        :createdDate="blog.created_at"
                        :views="blog.views"
                     ></BlogCard></div
               ></v-col>
            </v-row>
         </div>
      </v-container>
   </div>
</template>
<script>
import TopBar from "../NewFrontend/TopBar.vue";
import BlogCard from "../NewFrontend/BlogCard.vue";
import TagsCard from "../NewFrontend/TagsCard.vue";
import CommentsCard from "../Frontend/CommentsCard.vue";
import axios from "axios";
export default {
   components: {
      TopBar,
      BlogCard,
      TagsCard,
      CommentsCard,
   },
   created() {
      //   console.log(this.userId);
      //   console.log(this.blogId);
      this.checkUserSubscribed();
      this.getBlogData();
      this.userLiked();
      this.noOfLikes();
      this.getCommentsArray();
      this.getMoreBlogs();
   },
   data() {
      return {
         showOverlay: false,
         drawer: false,
         drawerMobile: false,
         btnColor: "black",
         iconColor: "black",
         isLiked: false,
         title: null,
         body: null,
         imageUrl: null,
         createdDate: null,
         likeCount: null,
         siteName: null,
         commentBody: "",
         commentsArray: [],
         dialog: false,
         loading: false,
         isBLogsDataLoadingCompleted: false,
         isUserLikedLoadingCompleted: false,
         isNoOfLikesLoadingCompleted: false,
         isCommentsArrayLoadingCompleted: false,
         dr: false,
         tagsArray: [],
         moreArticles: [],
         isUserSubscribed:null
      };
   },
   computed: {
      loggedInUserId() {
         return this.$store.getters.getFrontLoggedInUserId;
      },
      authourImageUrl() {
         return this.$store.getters.getAuthorProfile.authorImage;
      },
      authorName() {
         return this.$store.getters.getAuthorProfile.authorName;
      },
      authorBio() {
         return this.$store.getters.getAuthorProfile.authorBio;
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
   },
   methods: {
      subscribe(){
         if(localStorage.getItem("token")){

            axios.post(`/user/${this.$route.params.userId}/subscribe`,{},{
               headers:{
                  'Authorization': `Bearer `+localStorage.getItem('token')
               }
            }).then(()=>{
               this.isUserSubscribed=!this.isUserSubscribed;
               
            })
         }
         else{
            this.$router.push("/login-reader");
         }
      },
      checkUserSubscribed(){
         axios.get(`/user/${this.userId}/is_subscribe`, {
            headers: {
               Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
         }).then((res) => {
            if (res.data.is_subscribe) {
               this.isUserSubscribed = true;
            }
            else{
               this.isUserSubscribed = false;
            }
         });
      },
      pushToAllBlogs() {
         this.$router.push(`/view/${this.$route.params.userId}`);
      },
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
            this.$router.push('/login-reader');
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
            this.$router.push("/login-reader");
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
               this.tagsArray = res.data.post.tags;
            })
            .finally(() => {
               this.isBLogsDataLoadingCompleted = true;
            });
      },
      getMoreBlogs() {
         axios.get(`user/${this.userId}/publishedPosts`).then((res) => {
            this.moreArticles = res.data;

            if (this.moreArticles.length > 3) {
               this.moreArticles = this.moreArticles.slice(0, 3);
            }
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
