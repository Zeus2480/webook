<template>
   <div>
      <the-navbar :isSearchVisible="true"></the-navbar>
      <v-main class="tw-bg-secondary-background tw-min-h-screen">
         <v-container class="tw-h-full">
            <div class="tw-h-full tw-w-full">
               <div
                  v-if="emptyState"
                  class="empty-state tw-flex tw-h-full tw-flex-col tw-my-auto tw-justify-center tw-items-center"
               >
                  <img src="../assets/Group.svg" alt="" />
                  <p class="tw-my-6">
                     Looks like you haven’t written any blogs until now
                  </p>
                  <v-btn dark flat rounded small class="tw-p-2 tw-mt-4 tw-mb-12"
                     ><img
                        src="../assets/Logo/Vector (2).svg"
                        class="tw-h-5 tw-mr-2"
                        alt=""
                     />
                     New Post</v-btn
                  >
               </div>
               <div v-if="!emptyState">
                  <div class="tw-px-20">
                     <v-row>
                        <v-col cols="2">
                           <v-select v-model="selected" :items="items">
                           </v-select>
                        </v-col>
                     </v-row>
                     <div v-if="!showSkeletonLoading">
                        <post-card-skeleton></post-card-skeleton>
                        <post-card-skeleton></post-card-skeleton>
                        <post-card-skeleton></post-card-skeleton>
                        <post-card-skeleton></post-card-skeleton>
                        <post-card-skeleton></post-card-skeleton>
                        <post-card-skeleton></post-card-skeleton>
                     </div>
                     <div v-if="showSkeletonLoading">
                        <post-card></post-card>
                        <post-card></post-card>
                        <post-card></post-card>
                        <post-card></post-card>
                        <post-card></post-card>
                        <post-card></post-card>
                        <post-card></post-card>
                        <post-card></post-card>
                        <post-card></post-card>
                        <post-card></post-card>
                        <post-card></post-card>
                        <post-card></post-card>
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
import PostCardSkeleton from "../components/PostCardSkeleton.vue"
export default {
   data() {
      return {
         items: ["All", "Published", "Archived", "Draft"],
         selected: "All",
         showSkeletonLoading:false,
         emptyState:false
      };
   },
   watch:{
      selected(newV){
         console.log(newV);
         
      }
   },
   created(){
      setTimeout(()=>{
         this.showSkeletonLoading=true;
      },3000)
   },
   components: {
      "the-navbar": TheNavbar,
      "post-card": PostCard,
      "post-card-skeleton":PostCardSkeleton,
   },
   mehtods: {
      click(e) {
         console.log(e);
         console.log(123);
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
