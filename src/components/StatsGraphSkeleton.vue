<template>
   <div class="tw-my-6">
      <v-card>
         <div class="post-detail tw-p-3">
            <v-row>
                <v-skeleton-loader
                           class="tw-w-full tw-pt-6"
                           type="list-item-avatar-two-line"
                           height="100%"
                        ></v-skeleton-loader>
            </v-row>

            <v-row>
               <!-- <v-col cols="1"></v-col> -->
               <v-col cols="6">
                  <div>
                     <p class="tw-my-3 tw-text-sm tw-opacity-0">Views</p>
                     <!-- <line-chart :dates="dates" :options="chartOptions" :views="views"></line-chart> -->
                     <v-responsive :aspect-ratio="16 / 9">
                        <v-skeleton-loader
                           class="tw-w-full tw-pt-6"
                           type="image"
                           height="100%"
                        ></v-skeleton-loader>
                     </v-responsive>
                  </div>
               </v-col>
               <v-col cols="6">
                  <div>
                     <p class="tw-my-3 tw-text-sm tw-opacity-0">Comments</p>
                     <!-- <line-chart :dates="dates" :options="chartOptions" :views="views"></line-chart> -->
                     <v-responsive :aspect-ratio="16 / 9">
                        <v-skeleton-loader
                           class="tw-w-full tw-pt-6"
                           type="image"
                           height="100%"
                        ></v-skeleton-loader>
                     </v-responsive>
                  </div>
               </v-col>
            </v-row>
         </div>
      </v-card>
   </div>
</template>
<style scoped>
.v-skeleton-loader__image {
   height: 100% !important;
}
</style>
