<template>
   <div class="tw-bg-gray-100">
      <NavabarFront />
      <v-main>
         <div class="tw-min-h-screen tw-min-w-full tw-bg-gray-100">
            <div class="tw-flex">
               <div
                  class="md:tw-w-9/12 tw-w-full tw-bg-gray-100 tw-min-h-screen"
               >
                  <div class="backgroundImage">
                     <div class="tw-h-full">
                        <v-container
                           class="tw-flex tw-items-center tw-h-full tw-px-10 tw-w-full"
                           ><v-btn icon dark @click="backNavigate"
                              ><img
                                 src="../../assets/Logo/WhiteBack.svg"
                                 alt=""
                           /></v-btn>
                           <div class="tw-flex tw-justify-center tw-w-full">
                              <h1
                                 class="tw-text-white tw-my-auto tw-text-3xl tw-font-medium"
                              >
                                 <div class="tag-title tw-flex">
                                    <img
                                       src="../../assets/Logo/Tag-icon.svg"
                                       alt=""
                                    />
                                    <h1 class="tw-mx-3">{{ tagNameEdited }}</h1>
                                 </div>
                              </h1>
                           </div>
                        </v-container>
                        <div class="tw-bg-gray-200">
                           <v-container>
                              <div v-if="isLoadingCompleted">
                                 <all-blogs-card
                                    v-for="(data, index) in tagsDataArray"
                                    :key="index"
                                    :title="data.name"
                                    :summary="data.excerpt"
                                    :createdData="data.created_at"
                                    :tags="JSON.parse(data.tags)"
                                    :image="data.image_path"
                                    :userId="userId"
                                 ></all-blogs-card>
                              </div>
                              <div v-if="!isLoadingCompleted">
                                 <AllBlogsSkeleton/>
                              </div>
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
import axios from "axios";
import NavabarFront from "./NavbarFornt.vue";
import AllBlogsSkeleton from "../../components/AllBlogsSkeleton.vue";

export default {
   props: ["userId", "tagName"],
   components: {
      "view-blog-sidebar": ViewBLogSidebar,
      "all-blogs-card": AllBLogsCard,
      NavabarFront,
      AllBlogsSkeleton,
   },
   data() {
      return {
         tagsDataArray: [],
         prevRoute: null,
         isLoadingCompleted:false
      };
   },
   beforeRouteEnter(to, from, next) {
      //   this.prevRoute=from.fullPath;
      next((vm) => {
         vm.prevRoute = from.fullPath;
      });
   },
   computed: {
      tagNameEdited() {
         //make first letter capital
         return this.tagName.charAt(0).toUpperCase() + this.tagName.slice(1);
      },
   },
   methods: {
      backNavigate() {
         this.$router.push(this.prevRoute);
      },
      getTagsData() {
         axios
            .post(`/post/tags`, {
               tags: this.tagName,
            })
            .then((res) => {
               console.log(res.data);
               this.tagsDataArray = res.data;
            }).finally(()=>{
               this.isLoadingCompleted=true;
            });
      },
   },

   created() {
      this.getTagsData();
      //   console.log(this.userId);
      //   console.log(this.blogId);
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
