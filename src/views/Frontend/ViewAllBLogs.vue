<template>
   <div class="">
      <NavabarFront/>
      <v-main>
         <div class="tw-min-h-screen tw-min-w-full">
            <div class="tw-flex">
               <div
                  class="md:tw-w-9/12 tw-w-full tw-bg-gray-200 tw-min-h-screen"
               >
                  <div class="backgroundImage">
                     <div class="tw-h-full">
                        <v-container
                           class="tw-flex tw-items-center tw-h-full tw-px-10 tw-w-full"
                        >
                           <div class="tw-flex tw-justify-center tw-w-full">
                              <h1
                                 class="tw-text-white tw-my-auto tw-text-3xl tw-font-medium"
                              >
                                 {{ siteName }}
                              </h1>
                           </div>
                        </v-container>
                        <div class="tw-bg-gray-200" v-if="!isLoadingCompleted">
                           <v-container>
                              <all-blogs-skeleton></all-blogs-skeleton>
                              <all-blogs-skeleton></all-blogs-skeleton>
                           </v-container>
                        </div>
                        <div class="tw-bg-gray-200" v-if="isLoadingCompleted">
                           <v-container>
                              <all-blogs-card
                                 v-for="(blog, index) in allBlogs"
                                 :key="index"
                                 :title="blog.name"
                                 :summary="blog.excerpt"
                                 :createdData="blog.created_at"
                                 :tags="JSON.parse(blog.tags)"
                                 :image="blog.image_path"
                                 :userId="userId"
                                 :postId="blog.id"
                              ></all-blogs-card>
                           </v-container>
                        </div>
                     </div>
                  </div>
               </div>

               <div
                  class="tw-w-3/12 tw-hidden md:tw-block tw-border-l-2 tw-border-gray-200 tw-bg-white"
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
import AllBLogsCard from "../../components/AllBlogsCard.vue";
import AllBlogsSkeleton from "../../components/AllBlogsSkeleton.vue";
import axios from "axios";
import NavabarFront from "./NavbarFornt.vue";

export default {
   components: {
      "view-blog-sidebar": ViewBLogSidebar,
      "all-blogs-card": AllBLogsCard,
      "all-blogs-skeleton": AllBlogsSkeleton,
      NavabarFront,
   },
   data() {
      return {
         allBlogs: [],
         isLoadingCompleted: false,
      };
   },
   computed: {
      siteName() {
         return this.$store.getters.getSite;
      },
   },
   methods: {
      getAllBlogs() {
         axios
            .get(`user/${this.userId}/publishedPosts`)
            .then((res) => {
               this.allBlogs = res.data;
            })
            .finally(() => {
               this.isLoadingCompleted = true;
            });
      },
   },
   props: ["userId"],
   created() {
      //   console.log(this.userId);
      //   console.log(this.blogId);
      this.getAllBlogs();
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
