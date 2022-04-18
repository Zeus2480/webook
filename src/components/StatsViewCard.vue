<template>
   <div>
      <v-card class="tw-py-6 tw-px-6" elevation="2">
         <div class="loading-competed">
            <v-row align-content="center" justify="center">
               <v-col md="4" cols="12"
                  ><div class="md:tw-border-r-2 tw-border-gray-300">
                     <div class="tw-flex md:tw-justify-center">
                        <p class="tw-text-sm">All time</p>
                        <img
                           class="tw-mx-2"
                           src="../assets/Logo/Vector (10).svg"
                           alt=""
                        />

                        <p class="tw-text-sm">{{allTimeViews}}</p>
                     </div>
                  </div>
               </v-col>
               <v-col md="4" cols="12"
                  ><div class="md:tw-border-r-2 tw-border-gray-300">
                     <div class="tw-flex md:tw-justify-center">
                        <p class="tw-text-sm">Today</p>
                        <img
                           class="tw-mx-2"
                           src="../assets/Logo/Vector (10).svg"
                           alt=""
                        />

                        <p class="tw-text-sm">{{todayViews}}</p>
                     </div>
                  </div>
               </v-col>
               <v-col md="4" cols="12"
                  ><div class=" ">
                     <div class="tw-flex md:tw-justify-center">
                        <p class="tw-text-sm">This week</p>
                        <img
                           class="tw-mx-2"
                           src="../assets/Logo/Vector (10).svg"
                           alt=""
                        />

                        <p class="tw-text-sm">{{thisWeekViews}}</p>
                     </div>
                  </div>
               </v-col>
            </v-row>
         </div>
      </v-card>
   </div>
</template>
<script>
import axios from 'axios';
export default {
   props:['todayViews','allTimeViews','thisWeekViews'],
   data(){
      return{

      }
   },
   methods:{
      getData(){
         axios.get();
      }
   }
}
</script>
