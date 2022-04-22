<template>
   <div>
      <TopBar></TopBar>
      <v-container>
         <div>
            <div class="tw-my-6">
               <h3 class="tw-font-medium tw-text-xl">Search Result</h3>
               <h1 class="tw-text-4xl tw-font-medium tw-my-3">
                  {{ searchQueryCapital }}
               </h1>
            </div>
         </div>
         <div class="tw-flex">
            <!-- <div class="tw-br-2  tw-border-b-2 tw-border-gray-1001"></div>
                <p>Article for thistasg</p>
                <div></div> -->
            <h3 class="tw-text-lg tw-text-gray-500 tw-mb-8"></h3>
         </div>
         <v-divider></v-divider>
         <div v-if="showEmptyState">
            <div
               class="emptyState tw-flex tw-justify-center tw-items-center tw-mt-12"
            >
               <!-- <img
                                       class="tw-mt-12"
                                       src="../../assets/Images/Image.svg"
                                       alt=""
                                    /> -->
               <lottie-player
                  src="https://assets8.lottiefiles.com/packages/lf20_aBYmBC.json"
                  background="transparent"
                  speed="1"
                  style="width: 300px; height: 300px"
                  loop
                  autoplay
               ></lottie-player>
            </div>
            <h1 class="tw-flex tw-justify-center tw-text-xl">
               No Result Found
            </h1>
         </div>
         <div>
            <v-row class="tw-my-12">
               <v-col
                  v-for="(blog, index) in searchData"
                  :key="index"
                  lg="4"
                  md="6"
                  cols="12"
                  ><div class="">
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
   props: ["searchTerm", "userId"],
   data() {
      return {
         searchData: [],
         showEmptyState: true,
         isLoadingCompleted: false,
      };
   },
   components: {
      TopBar,
      BlogCard,
   },
   created() {
      this.getSearchResult();
   },
   computed: {
      searchQueryCapital() {
         return (
            this.searchTerm.charAt(0).toUpperCase() + this.searchTerm.slice(1)
         );
      },
   },
   methods: {
      getSearchResult() {
         axios
            .post(`/user/${this.userId}/search`, {
               query: this.searchTerm,
            })
            .then((res) => {
               this.searchData = res.data;
               if (this.searchData.length > 0) {
                  this.showEmptyState = false;
               }
            })
            .finally(() => {
               this.isLoadingCompleted = true;
            });
      },
   },
};
</script>
