<template>
   <div>
      <the-navbar :isSearchVisible="true" @searchQuery="searchQuery"></the-navbar>
      <v-snackbar v-model="snackbar" timeout="1000">
         {{ snackbarText }}

         <template v-slot:action="{ attrs }">
            <v-btn color="pink" text v-bind="attrs" @click="snackbar = false">
               Close
            </v-btn>
         </template>
      </v-snackbar>
      <v-main class="tw-bg-secondary-background tw-min-h-screen">
         <v-container class="tw-h-full">
            <div class="tw-h-full tw-w-full">
               <div class="md:tw-p-20 " v-if="showSkeletonLoading">
                  <post-card-skeleton></post-card-skeleton>
                  <post-card-skeleton></post-card-skeleton>
                  <post-card-skeleton></post-card-skeleton>
                  <post-card-skeleton></post-card-skeleton>
               </div>
               <div v-if="!showSkeletonLoading" class="
                tw-h-full">
                  <div
                     v-if="emptyStateCheck"
                     class="empty-state tw-px-6 tw-flex tw-h-full tw-flex-col tw-my-auto tw-justify-center tw-items-center"
                  >
                     <img src="../assets/Logo/nopost.png" class="tw-w-56 md:tw-w-60" alt="" />
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

                  <div v-if="!emptyStateCheck">
                     <div class="tw-px-2 md:tw-px-20">
                        <v-row>
                           <v-col md="2" cols="6 md:6 ">
                              <v-select v-model="selected" :items="items">
                              </v-select>
                           </v-col>
                        </v-row>

                        <div>
                           <post-card
                              @showSnackbar="showSnackbar"
                              @deletePost="deletePost"
                              v-for="(post, index) in activePost"
                              :index="index"
                              :key="index"
                              :title="post.name"
                              :postId="post.id"
                              :imageUrl="post.image_path"
                              :status="post.status"
                              :publishedDate="post.created_at"
                              :likes="post.likes_count"
                              :coments="post.comments_count"
                              :views="post.views"
                           ></post-card>
                        </div>
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
import PostCard from "../components/PostCard.vue";
import PostCardSkeleton from "../components/PostCardSkeleton.vue";
import axios from "axios";

export default {
   computed: {
      slug(){
         return this.$store.getters.getSlug;
      }
      // emptyStateCheck() {
      //    if (this.allPosts.length == 0) {
      //       return true;
      //    } else {
      //       return false;
      //    }
      // },
   },

   data() {
      return {
         items: ["All", "Published", "Archived"],
         selected: "All",
         showSkeletonLoading: true,
         snackbar: false,
         emptyStateCheck: null,
         allPosts: [],
         publishedPost: [],
         archivedPost: [],
         draftPost: [],
         activePost: [],
         snackbarText: "",
         
      };
   },
   watch: {
      selected(value) {
         console.log(value);
         // this.filterPost(newV);
         if (value == "All") {
            this.activePost = this.allPosts;
         }
         if (value == "Published") {
            this.activePost = this.publishedPost;
         }
         if (value == "Archived") {
            this.activePost = this.archivedPost;
         }
         console.log(this.activePost);
      },
      slug(value) {
         this.getAllPosts();
         console.log(value);
         // this.filterPost(value);
      },
   },
   
   created() {
      // this.slug=this.$store.getters.getSlug;
      this.getAllPosts();
      // setTimeout(()=>{
      //    this.showSkeletonLoading=true;
      // },3000)
   },
   components: {
      "the-navbar": TheNavbar,
      "post-card": PostCard,
      "post-card-skeleton": PostCardSkeleton,
   },

   methods: {
      searchQuery(searchQuery){
         if(searchQuery!=""){
            //filter activePost
            this.activePost = this.activePost.filter(post => {
               return post.name.toLowerCase().includes(searchQuery.toLowerCase());
            });
            console.log(this.activePost);
            
         }
         else{
            console.log("hello");   
            
            this.filterPostArray();
            if(this.selected=="All"){
               this.activePost = this.allPosts;
            }
            else if(this.selected=="Published"){
               this.activePost = this.publishedPost;
            }
            else if(this.selected=="Archived"){
               this.activePost = this.archivedPost;
            }
            else if(this.selected=="Draft"){
               this.activePost = this.draftPost;
            }
         }
         console.log(searchQuery);
      },
      filterPost(value) {
         // console.log(value);
         if (value == "All") {
            this.activePost = this.allPosts;
         }
         if (value == "Published") {
            this.activePost = this.publishedPost;
         }
         if (value == "Archived") {
            this.activePost = this.archivedPost;
         }
         console.log(this.activePost);
      },
      showSnackbar(text,index,resdata) {
         console.log("Sss");
         console.log(text,index,resdata);
         console.log(this.selected);
         if(this.selected!="All"){
            this.activePost.splice(index,1);
         }
         // this.activePost.splice(index, 1);
         let ind=this.allPosts.findIndex(post=>post.id==resdata.id);
         this.allPosts[ind]=resdata;
         this.filterPostArray();
         // console.log(this.allPosts);
         // console.log(this.activePost);
         // console.log(this.publishedPost);
         // console.log(this.archivedPost);
         
         this.snackbarText = text;
         this.snackbar = true;
      },
      newPost() {
         this.$router.push("/dashboard/create-post");
      },
      getAllPosts() {
         

         if (this.$store.getters.getSlug) {
            axios
               .get(`/user/${this.slug}/posts`)
               .then((res) => {
                  console.log(res.data);
                  this.allPosts = res.data.reverse();
                  this.filterPostArray();
                  this.activePost = this.allPosts;
                  console.log(this.archivedPost);
                  console.log(this.publishedPost);
                  if (this.allPosts.length == 0) {
                     this.emptyStateCheck = true;
                  } else {
                     this.emptyStateCheck = false;
                  }
               })
               .finally(() => {
                  this.showSkeletonLoading = false;
               });
         }
      },
      filterPostArray() {
         this.publishedPost = this.allPosts.filter(
            (post) => post.status == "published"
         );
         this.archivedPost =this.allPosts.filter(
            (post) => post.status == "Archive"
         );

      },
      deletePost(text,index,postId){
         if(this.selected!=="All"){
            this.activePost.splice(index,1);
         }
         let ind=this.allPosts.findIndex(post=>post.id==postId);
         this.allPosts.splice(ind,1);
         this.filterPostArray();
         this.snackbarText = text;
         this.snackbar = true;

      }
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
