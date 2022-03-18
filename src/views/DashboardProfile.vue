<template>
   <div>
      <the-navbar></the-navbar>

      <v-main class="tw-bg-secondary-background tw-min-h-screen">
         <v-container class="tw-h-full tw-px-0 xl:tw-px-20">
            <div class="view-profile">
              <profile-card v-if="isLoadingCompleted"></profile-card>
              <profile-card-skeleton v-if="!isLoadingCompleted"></profile-card-skeleton>
            </div>
         </v-container>
      </v-main>
   </div>
</template>
<script>
import TheNav from "../Common/TheNavbar.vue";
import ProfileCard from "../components/ProfileCard.vue"
import ProfileCardSkeleton from "../components/ProfileCardSkeleton.vue"
export default {
    data(){
        return{
            isLoadingCompleted:false
        }
    },
    created(){
        setTimeout(()=>{
            this.isLoadingCompleted=true;
        },2000)
    },
   components: {
      "the-navbar": TheNav,
      "profile-card":ProfileCard,
      "profile-card-skeleton":ProfileCardSkeleton,
   },
   methods:{
       editProfile(){
           this.$router.push('/dashboard/profile/edit');
       }
   }
};
</script>
