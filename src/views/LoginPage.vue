<template>
   <div>
      <v-overlay :value="overlay" opacity=".5">
         <div class="text-center">
            <v-progress-circular
               indeterminate
               color="white"
               size="50"
            ></v-progress-circular>
         </div>
      </v-overlay>
      <div class="tw-min-h-screen tw-min-w-screen tw-flex">
         <div
            class="logo-screen tw-w-2/5 tw-bg-black tw-flex tw-justify-center tw-items-center"
         >
            <div class="">
               <img src="../assets/Logo/WebookLogo.svg" alt="" />
            </div>
         </div>
         <div
            class="form tw-w-3/5 tw-h-screen tw-px-24 tw-py-10 tw-flex tw-flex-col"
         >
            <div
               class="tw-flex tw-mb-8 tw-border-b-2 tw-border-gray-900 tw-pb-4"
            >
               <img src="../assets/Logo/WebookLogo.svg" class="tw-h-8" alt="" />
               <div class="tw-my-auto tw-mx-6">
                  <h1 class="tw-font-medium tw-text-xl">
                     Login into your Webook account.
                  </h1>
               </div>
            </div>

            <!-- //Form -->
            <div class="tw-h-full tw-px-20">
               <div class="form tw-px-3">
                  <div class="email tw-mb-3 tw-mt-12">
                     <div class="">
                        <input
                           type="email"
                           placeholder="Email"
                           v-model="inputEmail"
                           class="tw-w-full tw-border-solid tw-border-2 tw-border-gray-300 tw-px-2 tw-py-2 focus:tw-outline-none focus:tw-border-gray-500 tw-rounded-md"
                        />
                     </div>
                     <p
                        :class="{ opacity: !showEmailMessage }"
                        class="tw-text-red-600 tw-text-sm tw-mt-1"
                     >
                        {{ emailMessage }}
                     </p>
                  </div>
                  <div class="password tw-mb-3">
                     <div class="tw-flex tw-w-full">
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
                     <p
                        :class="{ opacity: !showPasswordMessage }"
                        class="tw-text-red-600 tw-text-sm tw-mt-1"
                     >
                        {{ passwordMessage }}
                     </p>
                  </div>
                  <div class="show-password tw-px-2 tw-flex">
                     <input
                        type="checkbox"
                        @click="showPasswordFunctions"
                        class="tw-my-auto tw-mr-2"
                     />
                     <label for="" class="tw-text-sm">Show password</label>
                  </div>
                  <div class="sign-up-button tw-mt-10">
                     <v-btn
                        block
                        color="black"
                        dark
                        @click="Login"
                        :loading="showButtonLoading"
                        >Login</v-btn
                     >
                  </div>
                  <div class="login tw-px-2 tw-mt-4">
                     <p class="tw-text-sm">
                        Don't have an account?
                        <router-link to="/register-userdetails"
                           >Register</router-link
                        >
                     </p>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </div>
</template>
<script>
import axios from "axios";
export default {
   computed: {},
   components: {},
   data() {
      return {
         showPassword: false,
         overlay: false,
         inputEmail: "",
         inputPassword: "",
         showPasswordMessage: false,
         showEmailMessage: false,
         formIsValid: true,
         emailMessage: "ww",
         passwordMessage: "ww",
         showButtonLoading: false,
      };
   },
   methods: {
      showPasswordFunctions() {
         this.showPassword = !this.showPassword;
      },
      validate() {
         this.showPasswordMessage = false;
         this.showEmailMessage = false;
         this.formIsValid = true;
         if (this.inputPassword == "") {
            this.passwordMessage = "Required";
            this.showPasswordMessage = true;
            this.formIsValid = false;
         }
         if (this.inputEmail == "") {
            this.emailMessage = "Required";
            this.showEmailMessage = true;
            this.formIsValid = false;
         }
      },
      Login() {
         this.showButtonLoading = true;
         this.validate();
         if (this.formIsValid) {
            axios
               .post("/login", {
                  email: this.inputEmail,
                  password: this.inputPassword,
               })
               .then((res) => {
                  localStorage.setItem("token", res.data.access_token);
                  this.$router.push("/dashboard/post");
               })
               .catch((err) => {
                  console.log(err);
                  this.passwordMessage = "Invalid Credentials";
                  this.showPasswordMessage = true;
               })
               .finally(() => {
                  this.showButtonLoading = false;
               });
         } else {
            this.showButtonLoading = false;
         }
      },
   },
};
</script>
<style scoped>
.opacity {
   opacity: 0;
}
</style>
