<template>
   <div class="tw-">
      <NavabarFront />
      <v-main class="no-padding">
         <div class="tw-min-h-screen tw-min-w-full tw-bg-gray-100">
            <div class="tw-flex">
               <div
                  class="md:tw-w-9/12 tw-w-full tw-bg-gray-100 tw-mb-20 tw-min-h-screen"
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
                                 Search Results
                              </h1>
                           </div>
                        </v-container>
                        <!-- <div class="search tw-mx-3 tw-my-3">
                           <div
                              class="tw-border-2 tw-mt-6 tw-border-gray-200 tw-p-1 tw-flex tw-py-2 tw-px-2 tw-rounded-3xl"
                           >
                              <v-icon>mdi-magnify</v-icon>
                              <input
                                 type="text"
                                 class="tw-mx-2 tw-w-full tw-outline-none"
                                 placeholder="Search"
                                 v-model="searchQuery"
                                 @keyup.enter="searchFunctions"
                              />
                           </div>
                        </div> -->
                        <div class="tw-bg-gray-100">
                           <div class="tw-mx-3 md:tw-mx-12 tw-my-4 tw-mt-6">
                              <h1
                                 class="tw-text-xl md:tw-text-3xl tw-font-semibold"
                              >
                                 <span class="tw-opacity-60"
                                    >Search Result for</span
                                 >
                                 {{ searchQueryCapital }}
                              </h1>
                           </div>
                           <div v-if="!isLoadingCompleted">
                              <all-blogs-skeleton></all-blogs-skeleton>
                              <all-blogs-skeleton></all-blogs-skeleton>
                           </div>
                           <div v-if="isLoadingCompleted">
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
                                 <h1
                                    class="tw-flex tw-justify-center tw-text-xl"
                                 >
                                    No Result Found
                                 </h1>
                              </div>

                              <div v-if="!showEmptyState" class="tw-mb-6">
                                 <all-blogs-card
                                    v-for="(data, index) in searchData"
                                    :key="index"
                                    :title="data.name"
                                    :summary="data.excerpt"
                                    :createdData="data.created_at"
                                    :tags="JSON.parse(data.tags)"
                                    :image="data.image_path"
                                    :userId="userId"
                                    :postId="data.id"
                                 ></all-blogs-card>
                              </div>
                           </div>
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
import NavabarFront from "./NavbarFornt.vue";

import axios from "axios";
export default {
   components: {
      "view-blog-sidebar": ViewBLogSidebar,
      "all-blogs-card": AllBLogsCard,
      "all-blogs-skeleton": AllBlogsSkeleton,
      NavabarFront,
   },
   data() {
      return {
         searchData: [],
         showEmptyState: true,
         isLoadingCompleted: false,
      };
   },
   computed: {
      searchQueryCapital() {
         return (
            this.searchTerm.charAt(0).toUpperCase() + this.searchTerm.slice(1)
         );
      },
   },
   methods: {
      getSearchData() {
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
   props: ["userId", "searchTerm"],
   created() {
      console.log(this.userId);
      this.getSearchData();
      //   console.log(this.userId);
      //   console.log(this.blogId);
   },
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
   .no-padding {
      padding-top: 0 !important;
   }
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
