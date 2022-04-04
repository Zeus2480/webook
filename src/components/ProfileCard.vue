<template>
   <div>
      <v-card>
         <div class="tw-py-4 tw-px-4">
            <div class="tw-flex">
               <div>
                  <img
                     :src="priflePicturePath"
                     class="tw-h-24 tw-w-24 tw-rounded-full tw-object-cover"
                     alt=""
                  />
               </div>
               <div class="tw-my-auto tw-mx-8">
                  <h1 class="tw-mb-2 tw-text-lg">{{ name }}</h1>
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
                     <p class="tw-ml-3">{{ subscribersCount }}</p>
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
                     <p class="tw-ml-3">{{ postsCount }}</p>
                  </div>
               </v-col>
               <v-col cols="4" align-self="center">
                  <div class="tw-flex tw-justify-center tw-opacity-80">
                     <!-- <v-icon>mdi-chat-bubble</v-icon> -->
                     <img
                        src="../assets/Logo/favorite_black_24dp.svg"
                        class="tw-opacity-80"
                        alt=""
                     />
                     <p class="tw-ml-3">{{ LikesCount }}</p>
                  </div>
               </v-col>
            </v-row>
         </div>
      </v-card>
      <v-card v-if="ifShowsocials" class="tw-mt-6">
         <div class="tw-p-4">
            <p>{{bio}}</p>
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
   props: [
      "subscribers",
      "likes",
      "posts",
      "name",
      "created",
      "bio",
      "instagram",
      "imagePath",
      "facebook",
      "twitter"
   ],
   computed: {
      priflePicturePath() {
         if (this.$store.getters.getUserProfilePicture) {
            return this.$store.getters.getUserProfilePicture;
         } else {
            return "https://i.ibb.co/TPmLQyP/user.png";
         }
      },
      subscribersCount() {
         return `Subscribers ${this.subscribers}`;
      },
      postsCount() {
         return `Posts ${this.posts}`;
      },
      LikesCount() {
         return `Likes ${this.likes}`;
      },
      ifShowsocials(){
         if(!this.instagram &&!this.twitter && !this.facebook && !this.bio){
            return false;
         }
         else{
            return true;
         }
      }
   },
   methods: {
      editProfile() {
         this.$router.push("/dashboard/profile/edit");
      },
   },
};
</script>
