<template>
   <div>
      <div class="form tw-mt-8">
         <div class="first-last-name tw-mb-3">
            <div class="tw-flex tw-w-full">
               <div class="tw-w-1/2 tw-px-2">
                  <input
                     type="text"
                     placeholder="First Name"
                     class="tw-w-full tw-border-solid tw-border-2 tw-border-gray-300 tw-px-2 tw-py-2 tw-rounded-md focus:tw-outline-none focus:tw-border-gray-500"
                  />
               </div>
               <div class="tw-w-1/2 tw-px-2">
                  <input
                     type="text"
                     placeholder="Last Name"
                     class="tw-w-full tw-border-solid tw-border-2 tw-border-gray-300 tw-px-2 tw-py-2 tw-rounded-md focus:tw-outline-none focus:tw-border-gray-500"
                  />
               </div>
            </div>
            <p
               :class="{ opacity: !showNameMessage }"
               class="tw-text-red-600 tw-text-sm tw-mt-1 tw-px-4"
            >
               First and last name are mandatory.
            </p>
         </div>
         <div class="email tw-mb-3">
            <div class="tw-px-2">
               <input
                  type="text"
                  placeholder="Email"
                  class="tw-w-full tw-border-solid tw-border-2 tw-border-gray-300 tw-px-2 tw-py-2 focus:tw-outline-none focus:tw-border-gray-500 tw-rounded-md"
               />
            </div>
            <p
               :class="{ opacity: !showEmailMessage }"
               class="tw-text-red-600 tw-text-sm tw-mt-1 tw-px-4"
            >
               Email already exists.
            </p>
         </div>
         <div class="password tw-mb-3">
            <div class="tw-flex tw-w-full">
               <div class="tw-w-1/2 tw-px-2">
                  <input
                     v-if="!showPassword"
                     v-model="inputPassword"
                     type="password"
                     placeholder="Password"
                     class="tw-w-full tw-border-solid tw-border-2 tw-border-gray-300 tw-px-2 tw-py-2 tw-rounded-md focus:tw-outline-none focus:tw-border-gray-500"
                  />
                  <input
                     v-if="showPassword"
                     v-model="inputPassword"
                     type="text"
                     placeholder="Password"
                     class="tw-w-full tw-border-solid tw-border-2 tw-border-gray-300 tw-px-2 tw-py-2 tw-rounded-md focus:tw-outline-none focus:tw-border-gray-500"
                  />
               </div>
               <div class="tw-w-1/2 tw-px-2">
                  <input
                     v-if="!showPassword"
                     v-model="inputConfirmPassword"
                     type="password"
                     placeholder="Confirm Password"
                     class="tw-w-full tw-border-solid tw-border-2 tw-border-gray-300 tw-px-2 tw-py-2 tw-rounded-md focus:tw-outline-none focus:tw-border-gray-500"
                  />
                  <input
                     v-if="showPassword"
                     v-model="inputConfirmPassword"
                     type="text"
                     placeholder="Confirm Password"
                     class="tw-w-full tw-border-solid tw-border-2 tw-border-gray-300 tw-px-2 tw-py-2 tw-rounded-md focus:tw-outline-none focus:tw-border-gray-500"
                  />
               </div>
            </div>
            <p
               :class="{ opacity: !showPasswordMessage }"
               class="tw-text-red-600 tw-text-sm tw-mt-1 tw-px-4"
            >
               Password dosen't match.
            </p>
            <p class="tw-text-gray-600 tw-text-sm tw-mt-1 tw-px-4">
               Use 8 or more characters with a mix of letters, numbers & symbols
            </p>
         </div>
         <div class="show-password tw-px-4 tw-flex">
            <input
               type="checkbox"
               @click="showPasswordFunctions"
               class="tw-my-auto tw-mr-2"
            />
            <label for="" class="tw-text-sm">Show password</label>
         </div>
         <div class="sign-up-button tw-px-2 tw-mt-10">
            <v-btn block color="black" dark @click="next">Next</v-btn>
         </div>
         <div class="login tw-px-2 tw-mt-4">
            <p class="tw-text-sm">
               Already have an account?
               <router-link to="/login">Login</router-link>
            </p>
         </div>
      </div>
   </div>
</template>
<script>
export default {
   data() {
      return {
         showNameMessage: false,
         showEmailMessage: false,
         showPasswordMessage: false,
         inputPassword: "",
         inputConfirmPassword: "",
         showPassword: false,
      };
   },
   methods: {
      next() {
         this.$emit('status',true);

         // this.$router.push('/register-domain')
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
