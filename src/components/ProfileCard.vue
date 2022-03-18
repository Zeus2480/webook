<template>
   <div>
      <v-card>
         <div class="tw-py-4 tw-px-4">
            <div class="tw-flex">
               <div>
                  <img
                     src="../assets/Images/profilepicture.jpg"
                     class="tw-h-24 tw-w-24 tw-rounded-full"
                     alt=""
                  />
               </div>
               <div class="tw-my-auto tw-mx-8">
                  <h1 class="tw-mb-2 tw-text-lg">Faizan Siddiqui</h1>
                  <v-btn color="primary" @click="editProfile" small
                     >Edit profile</v-btn
                  >
               </div>
            </div>
            <div class="tw-mt-4">
               <p>On Webook since 29 Feb</p>
            </div>
         </div>
      </v-card>
      <v-card class="tw-mt-6">
         <div class="tw-p-4">
            <v-row justify="center">
               <v-col cols="4" align-self="center">
                  <div
                     class="tw-flex tw-justify-center tw-opacity-80 tw-border-r-2 tw-mx-auto tw-border-gray-400"
                  >
                     <img
                        src="../assets/Logo/people_black_24dp.svg"
                        class="tw-opacity-80"
                        alt=""
                     />
                     <p class="tw-ml-3">Subscribers 23</p>
                  </div>
               </v-col>
               <v-col cols="4" align-self="center">
                  <div
                     class="tw-flex tw-justify-center tw-border-r-2 tw-mx-auto tw-opacity-80 tw-border-gray-400"
                  >
                     <img
                        src="../assets/Logo/description_black_24dp.svg"
                        class="tw-opacity-80"
                        alt=""
                     />
                     <p class="tw-ml-3">Posts 23</p>
                  </div>
               </v-col>
               <v-col cols="4" align-self="center">
                  <div class="tw-flex tw-justify-center tw-opacity-80">
                     <!-- <v-icon>mdi-chat-bubble</v-icon> -->
                     <img
                        src="../assets/Logo/chat_bubble_black_24dp.svg"
                        class="tw-opacity-80"
                        alt=""
                     />
                     <p class="tw-ml-3">Comments 23</p>
                  </div>
               </v-col>
            </v-row>
         </div>
      </v-card>
      <v-card class="tw-mt-6">
         <div class="tw-p-4">
            <p>It’s a beautiful day. Don’t let it get away.</p>
            <div class="tw-mt-2">
               <v-btn icon><v-icon>mdi-instagram</v-icon></v-btn>
               <v-btn icon><v-icon>mdi-facebook</v-icon></v-btn>
               <v-btn icon><v-icon>mdi-twitter</v-icon></v-btn>
            </div>
         </div>
      </v-card>
   </div>
</template>
<script>
export default {
   methods: {
      editProfile() {
         this.$router.push("/dashboard/profile/edit");
      },
   },
};
</script>
