<template>
   <div>
      <the-navbar></the-navbar>
      <v-main class="tw-bg-secondary-background tw-min-h-screen">
         <v-container class="tw-h-full">
            <v-snackbar
               v-model="snackbar"
               :timeout="2000"
               :color="errorColor"
               absolute
            >
               {{ text }}

               <template v-slot:action="{ attrs }">
                  <v-btn
                     color="white"
                     text
                     v-bind="attrs"
                     @click="snackbar = false"
                  >
                     Close
                  </v-btn>
               </template>
            </v-snackbar>
            <div class="tw-h-full tw-w-full">
               <div
                  v-if="emptyState"
                  class="empty-state tw-px-6 tw-flex tw-h-full tw-flex-col tw-my-auto tw-justify-center tw-items-center"
               >
                  <img
                     src="../assets/Logo/nopost.png"
                     class="tw-w-56 md:tw-w-60"
                     alt=""
                  />
                  <p class="tw-my-6 tw-text-center">
                     Looks like you haven’t written any blogs until now
                  </p>
                  <v-btn
                     @click="newPost"
                     dark
                     flat
                     rounded
                     small
                     class="tw-p-2 tw-mt-4 tw-mb-12"
                     ><img
                        src="../assets/Logo/Vector (2).svg"
                        class="tw-h-5 tw-mr-2"
                        alt=""
                     />
                     New Post</v-btn
                  >
               </div>

               <div v-if="!emptyState">
                  <div class="tw-px-2 md:tw-px-20">
                     <v-row>
                        <v-col cols="8">
                           <v-select
                              v-model="selected"
                              :items="titleArrayReactive"
                              item-text="title"
                              item-value="id"
                              return-object
                              class="tw-w-full"
                           >
                           </v-select>
                        </v-col>
                     </v-row>
                     <div v-if="showSkeletonLoading">
                        <comment-card-skeleton></comment-card-skeleton>
                        <comment-card-skeleton></comment-card-skeleton>
                        <comment-card-skeleton></comment-card-skeleton>
                        <comment-card-skeleton></comment-card-skeleton>
                        <comment-card-skeleton></comment-card-skeleton>
                     </div>
                     <div v-if="!showSkeletonLoading">
                        <comment-card
                           @deleteComment="deleteComment"
                           v-for="(comment, index) in activePostComments"
                           :key="index"
                           :commentId="comment.id"
                           :commentBody="comment.body"
                           :commentAuthor="comment.user_name"
                           :commentDate="comment.created_at"
                           :commentAuthorId="comment.user_id"
                           :postId="comment.post_id"
                        ></comment-card>
                     </div>
                  </div>
               </div>
            </div>
         </v-container>
      </v-main>
      <!-- </v-content> -->
   </div>
</template>
<script>
import TheNavbar from "../Common/TheNavbar.vue";
import CommentCard from "../components/CommentsCard.vue";
import CommentCardSkeleton from "../components/CommentCardSkeleton.vue";
import axios from "axios";
export default {
   data() {
      return {
         items: [
            "All",
            "Publisheddf fsa kfjdsahfjdsahjkfdsjj dfhjsk fjksda hfjskad hfjskd hfsjkd hfjksd hfjksda hfjkdshkfjds fdsa fdsa fdsa fds fdsa fdsa fdsa fdsa fdsa dsd s ds ds d ds ds ds ds ds ds ds ds ds ds ds ds",
            "Archived",
            "Draft",
         ],
         selected: "All",
         showSkeletonLoading: true,
         emptyState: false,
         titleArray: [],
         commentsArray: [],
         activePostComments: [],
         text: "",
         errorColor: null,
         snackbar: null,
      };
   },
   props: ["userId"],
   computed: {
      slug() {
         return this.$store.getters.getSlug;
      },
      titleArrayReactive() {
         return this.titleArray;
      },
   },
   watch: {
      selected(newV) {
         console.log(newV);
         this.filterComment(newV.id);
      },
      slug() {
         console.log(12321);

         this.getCommentsData();
      },
   },
   created() {
      // setTimeout(()=>{
      //    this.showSkeletonLoading=true;
      // },3000)
      this.getCommentsData();
   },
   components: {
      "the-navbar": TheNavbar,
      "comment-card": CommentCard,
      "comment-card-skeleton": CommentCardSkeleton,
   },

   methods: {
      deleteComment(commentId, postId) {
         console.log(this.commentsArray);
         this.activePostComments = this.activePostComments.filter(
            (comment) => comment.id !== commentId
         );
         this.commentsArray.forEach((comment) => {
            if (comment.id === postId) {
               comment.commentsArray = comment.commentsArray.filter(
                  (comment) => comment.id !== commentId
               );
            }
         });
         this.text = "Comment Deleted Successfully";
         this.errorColor = "green";
         this.snackbar = true;
      },
      filterComment(id) {
         this.commentsArray.forEach((element) => {
            if (element.id == id) {
               this.activePostComments = element.commentsArray;
            }
         });
      },
      click(e) {
         console.log(e);
         console.log(123);
      },
      getCommentsData() {
         if (this.slug) {
            axios
               .get(`/user/${this.slug}/comments`)
               .then((res) => {
                  console.log(res.data);
                  res.data.forEach((element) => {
                     let obj = {
                        title: element.name,
                        id: element.id,
                     };
                     let cmt = {
                        id: element.id,
                        commentsArray: element.comments,
                     };
                     this.commentsArray.push(cmt);
                     this.titleArray.push(obj);
                  });
                  this.selected = this.titleArray[0];
                  this.activePostComments = this.commentsArray[1].commentsArray;
                  console.log(this.activePostComments);
               })
               .finally(() => {
                  this.showSkeletonLoading = false;
                  if (this.titleArray.length == 0) {
                     this.emptyState = true;
                  }
               });
            console.log(this.titleArray);
         }
      },
   },
};
</script>
<style scoped>
input.empty {
   font-family: FontAwesome;
   font-style: normal;
   font-weight: normal;
   text-decoration: inherit;
}
.margin {
   margin-left: 200px;
}
</style>
