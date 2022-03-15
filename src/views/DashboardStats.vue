<template>
   <div>
      <the-navbar></the-navbar>
      <v-main class="tw-bg-secondary-background tw-min-h-screen">
         <v-container class="tw-h-full tw-px-0 xl:tw-px-20">
            <v-card class="tw-py-6 tw-px-2" elevation="2"
               ><v-row  align-content="center" justify="center">
                  <v-col cols="2" 
                     ><div
                        class=" tw-border-r-2 tw-border-gray-300"
                     >
                        <div class="tw-flex">
                           <p class="tw-text-sm">All time</p>
                           <img class="tw-mx-2" src="../assets/Logo/Vector (10).svg" alt="" />

                           <p class="tw-text-sm">123</p>
                        </div>
                     </div>
                  </v-col>
                  <v-col cols="2" 
                     ><div
                        class=" tw-border-r-2 tw-border-gray-300"
                     >
                        <div class="tw-flex">
                           <p class="tw-text-sm">Today</p>
                           <img class="tw-mx-2" src="../assets/Logo/Vector (10).svg" alt="" />

                           <p class="tw-text-sm">123</p>
                        </div>
                     </div>
                  </v-col>
                  <v-col cols="2" 
                     ><div
                        class=" tw-border-r-2 tw-border-gray-300"
                     >
                        <div class="tw-flex">
                           <p class="tw-text-sm">Yesterday</p>
                           <img class="tw-mx-2" src="../assets/Logo/Vector (10).svg" alt="" />

                           <p class="tw-text-sm">123</p>
                        </div>
                     </div>
                  </v-col>
                  <v-col cols="2" 
                     ><div
                        class=" tw-border-r-2 tw-border-gray-300"
                     >
                        <div class="tw-flex">
                           <p class="tw-text-sm">This month</p>
                           <img class="tw-mx-2" src="../assets/Logo/Vector (10).svg" alt="" />

                           <p class="tw-text-sm">123</p>
                        </div>
                     </div>
                  </v-col>
                  <v-col cols="2" 
                     ><div
                        class=" "
                     >
                        <div class="tw-flex">
                           <p class="tw-text-sm">Last month</p>
                           <img class="tw-mx-2" src="../assets/Logo/Vector (10).svg" alt="" />

                           <p class="tw-text-sm">123</p>
                        </div>
                     </div>
                  </v-col>
                 
                 
               </v-row></v-card
            >
            <div class="tw-mt-6">
                <stats-graph :dates="dates" :views="views"></stats-graph>
                <stats-graph :dates="dates" :views="views"></stats-graph>
                <stats-graph :dates="dates" :views="views"></stats-graph>
                <stats-graph :dates="dates" :views="views"></stats-graph>
            </div>
         </v-container>
      </v-main>
   </div>
</template>
<script>
import Navbar from "../Common/TheNavbar.vue";
import StatsGraph from "../components/StatsGraph.vue"
export default {
    data(){
        return{
            views: [12, 1,5,6,12,111,3,4,67,45,11,12,13,14,15],
            dates: ["today", "yesteddy", "55", "43", "12", "14", "67", "1","3","56",'11','12','13','14','15'],
        }
    },
   components: {
      "the-navbar": Navbar,
      "stats-graph":StatsGraph,
   },
};
</script>
