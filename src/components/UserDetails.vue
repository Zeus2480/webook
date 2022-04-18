<template>
   <div>
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
      <div class="form tw-mt-8">
         <div class="first-last-name tw-mb-3">
            <div class="md:tw-flex tw-w-full">
               <div class="md:tw-w-1/2 tw-px-2">
                  <input
                     type="text"
                     placeholder="First Name"
                     v-model="inputFirstName"
                     class="tw-w-full tw-border-solid tw-border-2 tw-border-gray-300 tw-px-2 tw-py-2 tw-rounded-md focus:tw-outline-none focus:tw-border-gray-500"
                  />
               </div>
               <div class="md:tw-w-1/2 tw-mt-8 md:tw-mt-0 tw-px-2">
                  <input
                     type="text"
                     placeholder="Last Name"
                     v-model="inputLastName"
                     class="tw-w-full tw-border-solid tw-border-2 tw-border-gray-300 tw-px-2 tw-py-2 tw-rounded-md focus:tw-outline-none focus:tw-border-gray-500"
                  />
               </div>
            </div>
            <p
               :class="{ opacity: !showNameMessage }"
               class="tw-text-red-600 tw-text-sm md:tw-mt-1 tw-px-4"
            >
               First and last name are mandatory.
            </p>
         </div>
         <div class="email tw-mb-3">
            <div class="tw-px-2">
               <input
                  type="text"
                  placeholder="Email"
                  v-model="inputEmail"
                  class="tw-w-full tw-border-solid tw-border-2 tw-border-gray-300 tw-px-2 tw-py-2 focus:tw-outline-none focus:tw-border-gray-500 tw-rounded-md"
               />
            </div>
            <p
               :class="{ opacity: !showEmailMessage }"
               class="tw-text-red-600 tw-text-sm md:tw-mt-1 tw-px-4"
            >
               {{ emailMessage }}
            </p>
         </div>
         <div class="password tw-mb-3">
            <div class="md:tw-flex tw-w-full">
               <div class="md:tw-w-1/2 tw-px-2">
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
               <div class="md:tw-w-1/2 md:tw-mt-0 tw-mt-8 tw-px-2">
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
               {{ passwordMessage }}
            </p>

            <!-- <p class="tw-text-gray-600 tw-text-sm tw-mt-1 tw-px-4">
               Use 8 or more characters with a mix of letters, numbers & symbols
            </p> -->
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
            <v-btn
               block
               :loading="buttonLoading"
               color="black"
               dark
               @click="next"
               >Next</v-btn
            >
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
         showPasswordEmptyMessage: false,
         inputFirstName: "",
         inputLastName: "",
         inputEmail: "",
         inputPassword: "",
         inputConfirmPassword: "",
         isFormValid: true,
         emailMessage: "ss",
         passwordMessage: "ss",
         buttonLoading: false,
         snackbar:null,
         text:"",
         showPassword: false,
         errorColor:""
      };
   },
   methods: {
      next() {
         this.buttonLoading = true;
         this.validation();
         if (this.isFormValid) {
            let data = {
               name: this.inputFirstName + " " + this.inputLastName,
               email: this.inputEmail,
               password: this.inputPassword,
               password_confirmation: this.inputConfirmPassword,
               site: "",
            };
            this.buttonLoading = false;

            this.$emit("userData", data);
         } else {
            this.buttonLoading = false;
         }

         // this.$emit('status',true);

         // this.$router.push('/register-domain')
      },
      validation() {
         this.isFormValid = true;
         this.showNameMessage = false;
         this.showEmailMessage = false;
         this.showPasswordMessage = false;
         if (this.inputFirstName == "" && this.inputLastName == "") {
            this.isFormValid = false;
            this.showNameMessage = true;
         }
         if (this.inputEmail == "") {
            this.isFormValid = false;
            this.emailMessage = "Email is mandatory.";
            this.showEmailMessage = true;
         }
         if (this.inputPassword == "" && this.inputConfirmPassword == "") {
            this.isFormValid = false;
            this.passwordMessage = "Password is mandatory";
            this.showPasswordMessage = true;
         }
         if (this.inputPassword.length<6  || this.inputConfirmPassword <6) {
            this.isFormValid = false;
            this.text = "Minimum 6 characters required";
            this.snackbar = true;
            this.errorColor="red darken-4"
         }
         if (this.inputPassword != this.inputConfirmPassword) {
            console.log(123);
            this.isFormValid = false;
            this.passwordMessage =
               "Password and confirm password are not same.";
            this.showPasswordMessage = true;
         }
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
