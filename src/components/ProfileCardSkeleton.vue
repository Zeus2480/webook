<template>
   <div>
      <v-card>
         <div class="tw-py-4 tw-px-4">
            <v-skeleton-loader
               class="tw-w-full "
               type="list-item-avatar"
               height="100%"
            ></v-skeleton-loader>
            <div class="tw-mt-4">
               <p class="tw-opacity-0">On Webook since 29 Feb</p>
            </div>
         </div>
      </v-card>
      <v-card class="tw-mt-6">
         <div class="tw-p-4">
            <v-row justify="center">
               <v-col cols="12" align-self="center">
                  <v-skeleton-loader
                     class="tw-w-full "
                     type="card-heading"
                     height="100%"
                  ></v-skeleton-loader>
               </v-col>
            </v-row>
         </div>
      </v-card>
      <v-card class="tw-mt-6">
          <v-skeleton-loader
                     class="tw-w-full "
                     type="list-item-two-line"
                     height="100%"
                  ></v-skeleton-loader>
      </v-card>
   </div>
</template>
