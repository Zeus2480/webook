<template>
   <div class="tw-bg-orange-100">
      <div class="tw-min-h-screen tw-min-w-full tw-bg-orange-100">
         <div class="tw-flex">
            <div class="md:tw-w-4/5 tw-w-full tw-bg-orange-100 tw-min-h-screen">
               <div class="backgroundImage">
                  <div class="tw-h-full">
                     <v-container
                        class="tw-flex tw-items-center tw-h-full tw-px-10 tw-w-full"
                     ><v-btn icon dark @click="backNavigate"
                           ><img src="../../assets/Logo/WhiteBack.svg" alt=""
                        /></v-btn>
                        <div class="tw-flex tw-justify-center tw-w-full">
                           <h1
                              class="tw-text-white tw-my-auto tw-text-3xl tw-font-medium"
                           >
                              <div class="tag-title tw-flex">
                                  <img src="../../assets/Logo/Tag-icon.svg" alt="">
                                  <h1 class="tw-mx-3"> Javascript</h1>
                              </div>
                           </h1>
                        </div>
                     </v-container>
                     <div class="tw-bg-orange-100">
                        <v-container>
                           <all-blogs-card></all-blogs-card>
                           <all-blogs-card></all-blogs-card>
                           <all-blogs-card></all-blogs-card>
                           <all-blogs-card></all-blogs-card>
                           <all-blogs-card></all-blogs-card>
                           <all-blogs-card></all-blogs-card>
                           <all-blogs-card></all-blogs-card>
                           <all-blogs-card></all-blogs-card>
                        </v-container>
                     </div>
                  </div>
               </div>
            </div>

            <div class="tw-w-1/5 tw-hidden md:tw-block tw-bg-white">
               <div>
                  <view-blog-sidebar></view-blog-sidebar>
               </div>
            </div>
         </div>
      </div>
   </div>
</template>
<script>
import ViewBLogSidebar from "../../components/ViewBLogSidebar.vue";
import AllBLogsCard from "../../components/AllBlogsCard.vue";
export default {
   components: {
      "view-blog-sidebar": ViewBLogSidebar,
      "all-blogs-card": AllBLogsCard,
   },
   data() {
      return {
         
      };
   },
   methods: {
       backNavigate(){
           this.$router.push(`/view/${this.userId}`)
       },
     
      
   },
   props: ["userId", "blogId"],
   created() {
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
