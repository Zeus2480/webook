<template>
   <div>
      <TopBar></TopBar>
      <v-container>
         <div>
            <div class="tw-my-6">
               <h3 class="tw-font-medium tw-text-xl">TAG</h3>
               <h1 class="tw-text-4xl tw-font-medium tw-my-3">
                  #{{editedTagsText}}
               </h1>
            </div>
         </div>
         <div class="tw-flex">
            <!-- <div class="tw-br-2  tw-border-b-2 tw-border-gray-1001"></div>
                <p>Article for thistasg</p>
                <div></div> -->
            <h3 class="tw-text-lg tw-text-gray-500 tw-mb-8">
               Articles with this Tag
            </h3>
         </div>
         <v-divider></v-divider>
         <div>
            <v-row class="tw-my-12">
               <v-col
                  lg="4"
                  md="6"
                  cols="12"
                  v-for="(blog, index) in tagsDataArray"
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
import axios from "axios";
export default {
   props: ["tagName"],
   data() {
      return {
         tagsDataArray: [],
      };
   },
   computed: {
      editedTagsText() {
         const arr = this.tagName.split(" ");
         for (var i = 0; i < arr.length; i++) {
            arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
         }
         return arr.join("-");
      },
   },
   created() {
      this.getTagsData();
   },
   components: {
      TopBar,
      BlogCard,
   },
   methods: {
      getTagsData() {
         axios
            .post(`/post/tags`, {
               tags: this.tagName,
            })
            .then((res) => {
               console.log(res.data);
               this.tagsDataArray = res.data;
            })
            .finally(() => {
               this.isLoadingCompleted = true;
            });
      },
   },
};
</script>
