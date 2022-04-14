<template>
   <div>
      <v-container class="tw-px-10" @click="openPost">
         <v-card>
            <div class="tw-p-3">
               <v-row>
                  <v-col cols="9">
                     <div
                        class="tw-p-2 tw-flex tw-flex-col tw-h-full tw-justify-between"
                     >
                        <div>
                           <div class="heading tw-mb-2">
                              <v-skeleton-loader
                                 
                                 type="article"
                              ></v-skeleton-loader>
                           </div>
                           <div class="summary">
                              <p class="tw-line-clamp-2">
                                 {{ summary }}
                              </p>
                           </div>
                        </div>
                        <div class="cards tw-flex">
                           <v-skeleton-loader
                                 
                                
                                 type="chip"
                              ></v-skeleton-loader>
                           <v-skeleton-loader
                                class="tw-mx-4"
                                 type="chip"
                              ></v-skeleton-loader>
                        </div>
                     </div>
                  </v-col>
                  <v-col cols="3" class="tw-h-full"
                     ><v-skeleton-loader
                        class="mx-auto"
                        max-width="300"
                        type="image"
                     ></v-skeleton-loader
                  ></v-col>
               </v-row>
            </div>
         </v-card>
      </v-container>
   </div>
</template>
<style scoped>
.v-application .mx-auto {
   margin-right: unset !important;
   margin-left: unset !important;
}
</style>
