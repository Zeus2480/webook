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
      <v-snackbar
         v-model="snackbar"
         :timeout="7000"
         :color="errorColor"
         absolute
      >
         {{ text }}

         <template v-slot:action="{ attrs }">
            <v-btn color="white" text v-bind="attrs" @click="snackbar = false">
               Close
            </v-btn>
         </template>
      </v-snackbar>
      <div class="tw-min-h-screen tw-min-w-screen tw-flex">
         <div
            class="logo-screen tw-hidden md:tw-w-2/5 tw-bg-black md:tw-flex tw-justify-center tw-items-center"
         >
            <div class="">
               <img src="../assets/Logo/WebookLogo.svg" alt="" />
            </div>
         </div>
         <div
            class="form tw-w-full md:tw-w-3/5 tw-h-screen tw-px-4 md:tw-px-24 tw-py-10 tw-flex tw-flex-col"
         >
            <div class="tw-flex tw-pb-4">
               <img
                  src="../assets/Logo/WebookLogo.svg"
                  class="tw-h-8 tw-my-auto"
                  alt=""
               />
               <div class="tw-my-auto tw-mx-6">
                  <h1 class="tw-font-medium tw-text-md md:tw-text-xl">
                     Login into your Webook account.
                  </h1>
               </div>
            </div>
            <v-progress-linear
               value="100"
               color="black"
               rounded
               class="tw-mb-10"
            ></v-progress-linear>
            <!-- //Form -->
            <div class="tw-h-full tw-px-6 md:tw-px-24">
               <div class="form tw-px-3">
                  <div class="email tw-mb-3 tw-mt-12">
                     <div class="">
                        <input
                           type="email"
                           placeholder="Email"
                           v-model="inputEmail"
                           class="tw-w-full tw-border-solid tw-border-2 tw-border-gray-400 tw-px-3 tw-py-3 focus:tw-outline-none focus:tw-border-gray-500 tw-rounded-xl"
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
                           @keyup.enter="Login"
                           placeholder="Password"
                           class="tw-w-full tw-border-solid tw-border-2 tw-border-gray-400 tw-px-3 tw-py-3 tw-rounded-xl focus:tw-outline-none focus:tw-border-gray-500"
                        />
                        <input
                           v-if="showPassword"
                           v-model="inputPassword"
                           type="text"
                           @keyup.enter="Login"
                           placeholder="Password"
                           class="tw-w-full tw-border-solid tw-border-2 tw-border-gray-400 tw-px-3 tw-py-3 tw-rounded-xl focus:tw-outline-none focus:tw-border-gray-500"
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
   created() {
      // this.$router.go('/login')
   },
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
         text:"",
         errorColor:null,
         snackbar:null
      };
   },
   methods: {
      showPasswordFunctions() {
         this.showPassword = !this.showPassword;
      },
      reload() {},
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
                  this.text="Invalid Credentials";
                  this.errorColor="red darken-4";
                  this.snackbar=true;
                  // this.passwordMessage = "Invalid Credentials";
                  // this.showPasswordMessage = true;
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
