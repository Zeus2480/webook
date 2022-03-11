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
            <v-progress-linear
               value="100"
               color="black"
               rounded
            ></v-progress-linear>
            <div class="tw-flex tw-flex-row-reverse tw-mt-1 tw-mb-4">
               <p class="tw-opacity-75">Step 1 of 2</p>
            </div>

            <!-- //Form -->
            
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
                  <p :class="{opacity:!showNameMessage}" class="tw-text-red-600 tw-text-sm tw-mt-1 tw-px-4">
                     First and last name are mandatory.
                  </p>
               </div>
               <div class="email tw-mb-3">
                   <div class="tw-px-2">
                       <input type="text" placeholder="Email" class="tw-w-full tw-border-solid tw-border-2 tw-border-gray-300 tw-px-2 tw-py-2 focus:tw-outline-none focus:tw-border-gray-500 tw-rounded-md">
                   </div>
                    <p :class="{opacity:!showEmailMessage}" class="tw-text-red-600 tw-text-sm tw-mt-1 tw-px-4">
                     Email already exists.
                  </p>
               </div>
               <div class="password tw-mb-3">
                  <div class="tw-flex tw-w-full">
                     <div class="tw-w-1/2 tw-px-2">
                        <input
                           type="text"
                           placeholder="Password"
                           class="tw-w-full tw-border-solid tw-border-2 tw-border-gray-300 tw-px-2 tw-py-2 tw-rounded-md focus:tw-outline-none focus:tw-border-gray-500"
                        />
                     </div>
                     <div class="tw-w-1/2 tw-px-2">
                        <input
                           type="text"
                           placeholder="Confirm Password"
                           class="tw-w-full tw-border-solid tw-border-2 tw-border-gray-300 tw-px-2 tw-py-2 tw-rounded-md focus:tw-outline-none focus:tw-border-gray-500"
                        />
                     </div>
                  </div>
                  <p :class="{opacity:!showPasswordMessage}" class="tw-text-red-600 tw-text-sm tw-mt-1 tw-px-4">
                     Password dosen't match.
                  </p>
                  <p class="tw-text-gray-600 tw-text-sm tw-mt-1 tw-px-4">Use 8 or more characters with a mix of letters, numbers & symbols</p>
               </div>
               <div class="show-password tw-px-4 tw-flex">
                   <input type="checkbox" class="tw-my-auto tw-mr-2">
                   <label for="" class="tw-text-sm ">Show password</label>
               </div>
               <div class="sign-up-button tw-px-2 tw-mt-10">
                   <v-btn block color="black" dark @click="next">Next</v-btn>
               </div>
               <div class="login tw-px-2 tw-mt-4">
                   <p class="tw-text-sm">Already have an account? <router-link to="/login">Login</router-link></p>

               </div>
            </div>
         </div>
      </div>
   </div>
</template>
<script>
export default {
    data(){
        return{
            showNameMessage:false,
            showEmailMessage:false,
            showPasswordMessage:false
        }
    },
    methods:{
        next(){
            this.$router.push('/register-domain')
        }
    }
}
</script>
<style scoped>
.opacity{
    opacity: 0;
}
</style>
