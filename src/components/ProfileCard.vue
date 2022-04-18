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
               <p>On Webook since {{ created }}</p>
            </div>
         </div>
      </v-card>
      <v-card class="tw-mt-6">
         <div class="tw-p-4">
            <v-row justify="center">
               <v-col md="4" cols="12" align-self="left md:center">
                  <div
                     class="tw-flex md:tw-justify-center tw-opacity-80 md:tw-border-r-2 tw-mx-auto tw-border-gray-400"
                  >
                     <img
                        src="../assets/Logo/people_black_24dp.svg"
                        class="tw-opacity-80"
                        alt=""
                     />
                     <p class="tw-ml-3">{{ subscribersCount }}</p>
                  </div>
               </v-col>
               <v-col md="4" cols="12" align-self="center">
                  <div
                     class="tw-flex md:tw-justify-center md:tw-border-r-2 tw-mx-auto tw-opacity-80 tw-border-gray-400"
                  >
                     <img
                        src="../assets/Logo/description_black_24dp.svg"
                        class="tw-opacity-80"
                        alt=""
                     />
                     <p class="tw-ml-3">{{ postsCount }}</p>
                  </div>
               </v-col>
               <v-col md="4" cols="12 " align-self="">
                  <div class="tw-flex md:tw-justify-center tw-opacity-80">
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
            <p>{{ bio }}</p>
            <div class="tw-mt-2">
               <v-btn v-if="instagram" :href="instagram" icon
                  ><v-icon>mdi-instagram</v-icon></v-btn
               >
               <v-btn v-if="facebook" :href="facebook" icon
                  ><v-icon>mdi-facebook</v-icon></v-btn
               >
               <v-btn v-if="twitter" :href="twitter" icon
                  ><v-icon>mdi-twitter</v-icon></v-btn
               >
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
      "twitter",
   ],
   computed: {
      align() {
         switch (this.$vuetify.breakpoint.name) {
            default:
               return "center";
            case "md":
               return "left";
            
         }
      },

      priflePicturePath() {
         if (this.$store.getters.getUserProfilePicture) {
            return this.$store.getters.getUserProfilePicture;
         } else {
            return "https://i.ibb.co/TPmLQyP/user.png";
         }
      },
      subscribersCount() {
         if (this.subscribers == null) {
            return `Subscribers 0`;
         } else {
            return `Subscribers ${this.subscribers}`;
         }
      },
      postsCount() {
         if (this.posts == null) {
            return `Posts 0`;
         } else {
            return `Posts ${this.posts}`;
         }
         // return `Posts ${this.posts}`;
      },
      LikesCount() {
         if (this.likes == null) {
            return `Likes 0`;
         } else {
            return `Likes ${this.likes}`;
         }
         // return `Likes ${this.likes}`;
      },
      ifShowsocials() {
         if (!this.instagram && !this.twitter && !this.facebook && !this.bio) {
            return false;
         } else {
            return true;
         }
      },
   },
   methods: {
      editProfile() {
         this.$router.push("/dashboard/profile/edit");
      },
   },
};
</script>
