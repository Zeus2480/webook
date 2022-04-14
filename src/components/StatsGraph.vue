<template>
   <div class="tw-my-6">
      <v-card>
         <div class="post-detail tw-p-3">
            <v-row>
               <v-col cols="2">
                  <img
                     class="tw-rounded-md tw-h-20 tw-w-full"
                     :src="img"
                     alt=""
                  />
               </v-col>
               <v-col cols="9">
                  <div class="tw-flex tw-justify-between tw-flex-col tw-h-full">
                     <h2 class="tw-line-clamp-2">
                        {{title}}
                     </h2>
                     <p class="tw-opacity-80 tw-text-sm">{{createdAt}}</p>
                  </div>
               </v-col>
            </v-row>
           
            <v-row>
                <!-- <v-col cols="1"></v-col> -->
               <v-col cols="6">
                  <div>
                       <p class="tw-my-3 tw-text-sm tw-opacity-70">Views</p>
                     <!-- <line-chart :dates="dates" :options="chartOptions" :views="views"></line-chart> -->
                     <apex-chart
                        width="100%"
                        heigth="100"
                        type="line"
                        :options="optionsViews"
                        :series="seriesViews"
                     ></apex-chart>
                  </div>
               </v-col>
               <v-col cols="6">
                  <div>
                       <p class="tw-my-3 tw-text-sm tw-opacity-70">Likes</p>
                     <!-- <line-chart :dates="dates" :options="chartOptions" :views="views"></line-chart> -->
                     <apex-chart
                        width="100%"
                        heigth="100"
                        type="line"
                        :options="optionsLikes"
                        :series="seriesLikes"
                     ></apex-chart>
                  </div>
               </v-col>
               
               
            </v-row>
         </div>
      </v-card>
   </div>
</template>
<script>
export default {
    props:['views','dates','title','img','createdAt','likesArray','likesDates','viewsArray','viewsDates'],
   components: {},
   created(){
      console.log(this.viewsArray);
      
   },
   computed:{
      seriersLIKES(){
         return this.viewsArray;
      },
   
   },
   data() {
      return {
         likes:[],
         likesData:[],
         chartOptions: {
            responsive: true,
            maintainAspectRatio: false
         },
         optionsLikes: {
            chart: {
               id: "vuechart-example",
        
               
            },
            xaxis: {
               categories: this.likesDates
            },
            
         },
         optionsViews: {
            chart: {
               id: "vuechart-example1",
        
               
            },
            xaxis: {
               categories: this.viewsDates
            },
            
         },
         seriesLikes: [
            {
               name: "series-1",
               data: this.likesArray
            },
         ],
         seriesViews: [
            {
               name: "series-11",
               data: this.viewsArray
            },
         ],
      };
   },
   methods: {
       getCategories() {
           return ["21", "32", "45", "43", "12", "14", "67", "1"];
       }
       }
};

</script>
<style scoped>
/* .apexcharts-toolbar {
   display: none !important;
} */
.apexcharts-toolbar {
    z-index: 0 !important;
}
</style>
