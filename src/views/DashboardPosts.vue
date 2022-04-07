<template>
   <div>
      <the-navbar :isSearchVisible="true"></the-navbar>
      <v-snackbar v-model="snackbar">
         Link copied to clipboard

         <template v-slot:action="{ attrs }">
            <v-btn color="pink" text v-bind="attrs" @click="snackbar = false">
               Close
            </v-btn>
         </template>
      </v-snackbar>
      <v-main class="tw-bg-secondary-background tw-min-h-screen">
         <v-container class="tw-h-full">
            <div class="tw-h-full tw-w-full">
               <div v-if="showSkeletonLoading">
                  <post-card-skeleton></post-card-skeleton>
                  <post-card-skeleton></post-card-skeleton>
                  <post-card-skeleton></post-card-skeleton>
                  <post-card-skeleton></post-card-skeleton>
               </div>
               <div v-if="!showSkeletonLoading">
                  <div
                     v-if="emptyStateCheck"
                     class="empty-state tw-flex tw-h-full tw-flex-col tw-my-auto tw-justify-center tw-items-center"
                  >
                     <img src="../assets/Group.svg" alt="" />
                     <p class="tw-my-6">
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
                     <div class="tw-px-20">
                        <v-row>
                           <v-col cols="2">
                              <v-select v-model="selected" :items="items">
                              </v-select>
                           </v-col>
                        </v-row>

                        <div>
                           <post-card
                              @showSnackbar="showSnackbar"
                              v-for="(post, index) in allPosts"
                              :key="index"
                              :title="post.name"
                              :postId="post.id"
                              :imageUrl="post.image_path"
                              :status="post.status"
                              :publishedDate="post.created_at"
                              :likes="post.likes_count"
                              :coments="post.comments_count"
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
         items: ["All", "Published", "Archived", "Draft"],
         selected: "All",
         showSkeletonLoading: true,
         snackbar: false,
         emptyStateCheck:null,
         allPosts: [],
      };
   },
   watch: {
      selected(newV) {
         console.log(newV);
      },
   },
   created() {
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
      showSnackbar() {
         this.snackbar = true;
      },
      newPost() {
         this.$router.push("/dashboard/create-post");
      },
      getAllPosts() {
         const slug = this.$store.getters.getSlug;
         axios
            .get(`/user/${slug}/posts`)
            .then((res) => {
               console.log(res.data[0]);
               this.allPosts = res.data;
               if (this.allPosts.length == 0) {
                  this.emptyStateCheck= true;
               } else {
                  this.emptyStateCheck=false;
               }
            })
            .finally(() => {
               this.showSkeletonLoading = false;
            });
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
