<template>
   <div>
      <the-navbar></the-navbar>
      <v-main class="tw-bg-secondary-background tw-min-h-screen">
         <v-container class="tw-h-full tw-px-0 xl:tw-px-20">
            <div >
               <stats-view-card v-if="isLoadingCompleted"></stats-view-card>
               <stats-view-skeleton v-if="!isLoadingCompleted"></stats-view-skeleton>
               <div class="tw-mt-6">
                  <stats-graph-skeleton v-if="!isLoadingCompleted"></stats-graph-skeleton>
                  <stats-graph v-if="isLoadingCompleted" :dates="dates" :views="views"></stats-graph>
                  <stats-graph :dates="dates" :views="views"></stats-graph>
                  <stats-graph :dates="dates" :views="views"></stats-graph>
                  <stats-graph :dates="dates" :views="views"></stats-graph>
                  
               </div>
            </div>
            
         </v-container>
      </v-main>
   </div>
</template>
<script>
import Navbar from "../Common/TheNavbar.vue";
import StatsGraph from "../components/StatsGraph.vue";
import StatsGraphSkeleton from "../components/StatsGraphSkeleton.vue"
import StatsViewCard from "../components/StatsViewCard.vue";
import StatsViewSkelton from "../components/StatsViewSkelton.vue"
// import EditProfile from "../components/EditProfile.vue" 
export default {
   data() {
      return {
         views: [12, 1, 5, 6, 12, 111, 3, 4, 67, 45, 11, 12, 13, 14, 15],
         dates: [
            "today",
            "yesteddy",
            "55",
            "43",
            "12",
            "14",
            "67",
            "1",
            "3",
            "56",
            "11",
            "12",
            "13",
            "14",
            "15",
         ],
         isLoadingCompleted:false,
      };
   },
   created(){
      setTimeout(()=>{
         this.isLoadingCompleted=true;
      },2000)
   },
   components: {
      "the-navbar": Navbar,
      "stats-graph": StatsGraph,
      "stats-view-card": StatsViewCard,
      "stats-view-skeleton":StatsViewSkelton,
      "stats-graph-skeleton":StatsGraphSkeleton,
      // "edit-profile":EditProfile
   },
};
</script>
