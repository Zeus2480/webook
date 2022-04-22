<template>
   <div>
      <TopBar />
      <v-container>
         <div class="tw-mt-12 tw-mb-8">
            <div class="tw-flex tw-justify-center">
               <img
                  :src="authorProfilePicture"
                  class="tw-h-24 tw-w-24 tw-rounded-full"
                  alt=""
               />
            </div>
            <div>
               <h1 class="tw-mt-3 tw-text-3xl tw-font-semibold tw-text-center">
                  {{authorName}}
               </h1>
               <p class="tw-text-xl tw-text-center tw-text-gray-500">
                  {{authorSubscribers}} Followers
               </p>
               <div class="tw-flex tw-justify-center tw-my-4">
                  <p class="tw-text-xl tw-w-96 tw-text-center tw-text-gray-500">
                    {{authorBio}}
                  </p>
               </div>
            </div>
            <div>
               <div class="tw-flex tw-flex-wrap">
                  <TagsCard v-for="(tag,index) in tagsArray"
                  :key="index"
                  :tag="tag"></TagsCard>
               </div>
            </div>
         </div>
         <v-divider></v-divider>
         <v-row class="tw-my-12">
            <v-col lg="4" md="6" cols="12" v-for="(blog, index) in allBlogs"
            :key="index"
            >
               <div class=""><BlogCard :id="blog.id"
               :title="blog.name"
               :summary="blog.excerpt"
               :image="blog.image_path"
               :createdDate="blog.created_at"
               :views="blog.views"></BlogCard></div
            ></v-col>
            <!-- <v-col lg="4" md="6" cols="12"
               ><div class=""><BlogCard></BlogCard></div
            ></v-col>
            <v-col lg="4" md="6" cols="12"
               ><div class=""><BlogCard></BlogCard></div
            ></v-col> -->
         </v-row>
      </v-container>
   </div>
</template>
<script>
import TopBar from "../NewFrontend/TopBar.vue";
import BlogCard from "../NewFrontend/BlogCard.vue";
import TagsCard from "../NewFrontend/TagsCard.vue";
import axios from "axios";
export default {
   data(){
      return{
         allBlogs:[],
         tagsArray:[]
      }
   },
   computed:{
      authorProfilePicture(){
         return this.$store.getters.getAuthorProfile.authorImage;
      },
      authorName(){
         return this.$store.getters.getAuthorProfile.authorName;
      },
      authorBio(){
         return this.$store.getters.getAuthorProfile.authorBio;
      },
      authorSubscribers(){
         return this.$store.getters.getAuthorProfile.authorSubscribers;
      },
   },
   components: {
      TopBar,
      BlogCard,
      TagsCard,
   },
   created(){
      this.getAllBlogs();
      this.getAllTags();
   },
   methods: {
      getAllBlogs() {
         axios
            .get(`user/${this.$route.params.userId}/publishedPosts`)
            .then((res) => {
               this.allBlogs = res.data;
            })
            .finally(() => {
               this.isLoadingCompleted = true;
            });
      },
      getAllTags(){
         axios.get(`user/${this.$route.params.userId}/tagList`).then(res=>{
            this.tagsArray = res.data.data;
         })
      }
   },
};
</script>
