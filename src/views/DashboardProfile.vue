<template>
   <div>
      <the-navbar></the-navbar>

      <v-main class="tw-bg-secondary-background tw-min-h-screen">
         <v-container class="tw-h-full tw-px-0 xl:tw-px-20">
            <div class="view-profile">
               <profile-card
                  :imagePath="imagePath"
                  :likes="likesCount"
                  :posts="postsCount"
                  :subscribers="subscribersCount"
                  :name="userName"
                  :facebook="facebook"
                  :twitter="twitter"
                  :created="createdDate"
                  v-if="isLoadingCompleted"
               ></profile-card>
               <profile-card-skeleton
                  v-if="!isLoadingCompleted"
               ></profile-card-skeleton>
            </div>
         </v-container>
      </v-main>
   </div>
</template>
<script>
import TheNav from "../Common/TheNavbar.vue";
import ProfileCard from "../components/ProfileCard.vue";
import ProfileCardSkeleton from "../components/ProfileCardSkeleton.vue";
import axios from "axios";
export default {
   data() {
      return {
         isLoadingCompleted: false,
         subscribersCount: null,
         postsCount: null,
         likesCount: null,
         userName: null,
         createdDate: null,
         bio: null,
         instagram: null,
         facebook: null,
         twitter: null,
         imagePath: null,
         searchQuery:"",
      };
   },
   created() {
      let data = this.$store.getters.getUserProfile;
      console.log(data);
      this.userName = data.name;
      this.createdDate = data.createdAt;
      this.bio = data.bio;
      this.instagram = data.instagram;
      this.facebook = data.facebook;
      this.twitter = data.twitter;
      this.imagePath = data.imagePath;
      this.getCounts();
   },
   components: {
      "the-navbar": TheNav,
      "profile-card": ProfileCard,
      "profile-card-skeleton": ProfileCardSkeleton,
   },
   methods: {
      editProfile() {
         this.$router.push("/dashboard/profile/edit");
      },
      getCounts() {
         axios
            .get("/user_details", {
               headers: {
                  Authorization: "Bearer " + localStorage.getItem("token"),
               },
            })
            .then((res) => {
               // console.log(res.data);
               this.subscribersCount = res.data.Subscriber;
               this.postsCount = res.data.PostCount;
               this.likesCount = res.data.LikeCount;
            })
            .finally(() => {
               this.isLoadingCompleted = true;
            });
      },
   },
};
</script>
