<template>
    <div class="tw-mb-3">
        <v-card elevation="0" >
         <div class="tw-p-2">
            <v-row>
               <v-col cols="2">
                  <div class="tw-rounded-md">
                   
                     <v-skeleton-loader class="tw-h-20" type="image">
                     </v-skeleton-loader>
                  </div>
               </v-col>
               <v-col cols="7">
                  <div class="tw-flex tw-justify-between tw-flex-col tw-h-full">
                     <div class="">
                       
                        <v-skeleton-loader
                           class="tw-w-full"
                           type="list-item-two-line"
                        ></v-skeleton-loader>
                     </div>
                     
                  </div>
               </v-col>
               
            </v-row>
         </div>
      </v-card>
    </div>
</template>