<template>
   <div>
      <div class="tw-min-h-screen tw-min-w-screen tw-flex">
         <div
            class="logo-screen tw-w-2/5 tw-bg-black tw-flex tw-justify-center tw-items-center"
         >
            <div class="">
               <img src="../assets/Logo/WebookLogo.svg" alt="" />
            </div>
         </div>
         <div class="form tw-w-3/5 tw-px-24 tw-py-10">
            <div class="tw-flex tw-mb-4">
               <img src="../assets/Logo/WebookLogo.svg" class="tw-h-8" alt="" />
               <div class="tw-my-auto tw-mx-6">
                  <h1 class="tw-font-medium tw-text-xl">
                     Create Your Webook Account
                  </h1>
               </div>
            </div>

            <div>
               <v-progress-linear
                  :value="progress"
                  color="black"
                  rounded
               ></v-progress-linear>
               <div class="tw-flex tw-flex-row-reverse tw-mt-1 tw-mb-4">
                  <p class="tw-opacity-75">{{ whichStep }}</p>
               </div>
            </div>

            <!-- //Form -->
            <user-details
               v-if="!isStepOneCompleted"
               @userData="userData"
            ></user-details>
            <user-domain
               :userData="formData"
               v-if="isStepOneCompleted"
            ></user-domain>
         </div>
      </div>
   </div>
</template>
<script>
import UserDetails from "../components/UserDetails.vue";
import UserDOmain from "../components/UserDomian.vue";
export default {
   computed: {
      whichStep() {
         return `Step ${this.step} of 2`;
      },
   },
   components: {
      "user-details": UserDetails,
      "user-domain": UserDOmain,
   },
   data() {
      return {
         progress: 50,
         step: 1,
         isStepOneCompleted: false,
         formData: null,
         domainName: null,
      };
   },
   methods: {
      userData(data) {
         //  console.log(123);
         this.formData = data;
         this.progress = 100;
         this.step = 2;
         this.isStepOneCompleted = true;
      },

      showPasswordFunctions() {
         this.showPassword = !this.showPassword;
      },
   },
};
</script>
<style scoped>
.opacity {
   opacity: 0;
}
</style>
