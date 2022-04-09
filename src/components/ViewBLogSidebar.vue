<template>
   <div class="tw-p-3">
      <div v-if="!isUserLoggedIn" class="login-register-btn tw-my-3 tw-mr-3">
         <v-row>
            <v-col cols="7">
               <v-btn dark rounded @click="pushRegister" block
                  >Get Started</v-btn
               >
            </v-col>
            <v-col class="tw-mr-3" cols="3">
               <v-btn outlined rounded color="primary">Sign In</v-btn>
            </v-col>
         </v-row>
      </div>
      <div class="top tw-mt-10">
         <div class="image tw-flex tw-justify-center">
            <img
               src="../assets/Images/profilepicture.jpg"
               class="tw-h-24 tw-w-24 tw-rounded-full"
               alt=""
            />
         </div>
         <div class="name tw-my-3">
            <h1 class="tw-text-center tw-text-lg tw-font-medium">
               Faizan Siddiqui
            </h1>
         </div>
      </div>
      <div class="user-details">
         <p>It’s a beautiful day don’t let it get away</p>
         <div class="socails-links tw-my-2">
            <v-btn icon><v-icon>mdi-instagram</v-icon></v-btn>
            <v-btn icon><v-icon>mdi-facebook</v-icon></v-btn>
            <v-btn icon><v-icon>mdi-twitter</v-icon></v-btn>
         </div>
      </div>
      <div class="recommended-topics">
         <h1 class="tw-font-medium tw-text-lg">Recommended Topics</h1>
         <div class="tw-w-full tw-mt-3">
            <v-chip-group v-model="selection" column>
               <v-chip link v-for="tag in tags" :value="tag" :key="tag">
                  {{ tag }}
               </v-chip>
            </v-chip-group>
         </div>
      </div>
   </div>
</template>
<script>
export default {
   data: () => ({
      tags: [
         "Work",
         "Home Improvement",
         "Vacation",
         "Food",
         "Drawers",
         "Shopping",
         "Art",
         "Tech",
         "Creative Writing",
      ],
      selection: "",
      selectt: "",
   }),
   watch: {
      selection(old) {
         console.log(old);
      },
   },
   methods: {
      tagclick() {},
      pushRegister() {
         this.$router.push({ name: "RegisterUserDetails", params: { isUserBuying: true } });
      },
   },
};
</script>
