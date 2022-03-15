<template>
   <div class="tw-my-6">
      <v-card>
         <div class="post-detail tw-p-3">
            <v-row>
               <v-col cols="2">
                  <img
                     class="tw-rounded-md tw-h-20 tw-w-full"
                     src="../assets/Images/wallpaperflare.com_wallpaper (17).jpg"
                     alt=""
                  />
               </v-col>
               <v-col cols="9">
                  <div class="tw-flex tw-justify-between tw-flex-col tw-h-full">
                     <h2 class="tw-line-clamp-2">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Repellendus totam error expedita quibusdam pariatur sed
                        cupiditate unde asperiores, officia optio doloribus
                        ducimus iure quisquam architecto eos saepe, debitis
                        corrupti! In!
                     </h2>
                     <p class="tw-opacity-80 tw-text-sm">22 Feb 2022</p>
                  </div>
               </v-col>
            </v-row>
            <p class="tw-my-3 tw-text-sm tw-opacity-70">Views</p>
            <v-row>
                <!-- <v-col cols="1"></v-col> -->
               <v-col cols="7">
                  <div>
                     <!-- <line-chart :dates="dates" :options="chartOptions" :views="views"></line-chart> -->
                     <apex-chart
                        width="100%"
                        heigth="100"
                        type="line"
                        :options="options"
                        :series="series"
                     ></apex-chart>
                  </div>
               </v-col>
               <v-col cols="2"></v-col>
               <v-col cols="3" align-self="center">
                   <div class="tw-mb-12">
                       <div>
                           <div class="tw-flex">
                               <img src="../assets/Logo/Vector (10).svg" alt="">
                               <p class="tw-mx-4">123</p>
                           </div>
                           <div class="tw-flex tw-mt-4">
                               <img src="../assets/Logo/Vector (11).svg" alt="">
                               <p class="tw-mx-4">123</p>
                           </div>
                       </div>
                   </div>
               </v-col>
            </v-row>
         </div>
      </v-card>
   </div>
</template>
<script>
export default {
    props:['views','dates'],
   components: {},
   data() {
      return {
         
         chartOptions: {
            responsive: true,
            maintainAspectRatio: false
         },
         options: {
            chart: {
               id: "vuechart-example",
        
               
            },
            xaxis: {
               categories: this.dates
            },
            
         },
         series: [
            {
               name: "series-1",
               data: this.views
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
