<template>
   <div>
      <nav-bar></nav-bar>
      <v-main class="tw-bg-secondary-background tw-min-h-screen">
         <v-container class="tw-h-full tw-px-0 xl:tw-px-20">
            <div>
               <v-card>
                  <div class="tw-py-4 tw-px-4">
                     <div class="back tw-flex tw-mb-5">
                        <v-btn @click="backToProfile" icon
                           ><img
                              src="../assets/Logo/arrow_back_black_24dp.svg"
                              alt=""
                        /></v-btn>
                        <h1 class="tw-my-auto tw-mx-4 tw-text-xl">
                           Edit profile
                        </h1>
                     </div>
                     <div class="tw-flex">
                        <div>
                           <img
                              src="../assets/Images/profilepicture.jpg"
                              class="tw-h-24 tw-w-24 tw-rounded-full"
                              alt=""
                           />
                        </div>
                        <div class="tw-my-auto tw-mx-8">
                           <template>
                              <div class="text-center">
                                 <v-dialog v-model="dialog" width="500">
                                    <template v-slot:activator="{ on, attrs }">
                                       <v-btn
                                          color="primary"
                                          small
                                          dark
                                          v-bind="attrs"
                                          v-on="on"
                                       >
                                          Edit picture
                                       </v-btn>
                                    </template>

                                    <v-card>
                                       <div class="tw-p-5">
                                          <h1 class="tw-text-xl tw-font-medium">
                                             Edit Profile Picture
                                          </h1>
                                          <div class="tw-my-4">
                                             <img
                                                src="../assets/Images/profilepicture.jpg"
                                                class="tw-h-20 tw-w-20 tw-rounded-full"
                                                alt=""
                                             />
                                          </div>
                                          <v-file-input
                                             label="File input"
                                             
                                             prepend-icon="mdi-camera"
                                          ></v-file-input>
                                          <v-btn color="primary" block>Update</v-btn>
                                       </div>
                                    </v-card>
                                 </v-dialog>
                              </div>
                           </template>
                        </div>
                     </div>
                     <div class="change-form tw-mt-6">
                        <v-row>
                           <v-col cols="12" sm="6"
                              ><input
                                 type="text"
                                 placeholder="First name"
                                 class="tw-w-full tw-border-solid tw-border-2 tw-border-gray-300 tw-px-2 tw-py-2 focus:tw-outline-none focus:tw-border-gray-500 tw-rounded-md"
                           /></v-col>
                           <v-col cols="12" sm="6"
                              ><input
                                 type="text"
                                 placeholder="Last name"
                                 class="tw-w-full tw-border-solid tw-border-2 tw-border-gray-300 tw-px-2 tw-py-2 focus:tw-outline-none focus:tw-border-gray-500 tw-rounded-md"
                           /></v-col>
                        </v-row>
                        <v-row>
                           <v-col cols="12">
                              <textarea
                                 type="text"
                                 rows="3"
                                 placeholder="Bio"
                                 class="tw-w-full tw-border-solid tw-border-2 tw-border-gray-300 tw-px-2 tw-py-2 focus:tw-outline-none focus:tw-border-gray-500 tw-rounded-md"
                              />
                           </v-col>
                        </v-row>
                        <h2 class="tw-my-2">Socials</h2>
                        <v-row>
                           <v-col cols="12">
                              <input
                                 type="text"
                                 rows="3"
                                 placeholder="Instagram Username"
                                 class="tw-w-full tw-border-solid tw-border-2 tw-border-gray-300 tw-px-2 tw-py-2 focus:tw-outline-none focus:tw-border-gray-500 tw-rounded-md"
                              />
                           </v-col>
                        </v-row>
                        <v-row>
                           <v-col cols="12">
                              <input
                                 type="text"
                                 rows="3"
                                 placeholder="Facebook Username"
                                 class="tw-w-full tw-border-solid tw-border-2 tw-border-gray-300 tw-px-2 tw-py-2 focus:tw-outline-none focus:tw-border-gray-500 tw-rounded-md"
                              />
                           </v-col>
                        </v-row>
                        <v-row>
                           <v-col cols="12">
                              <input
                                 type="text"
                                 rows="3"
                                 placeholder="Twitter Username"
                                 class="tw-w-full tw-border-solid tw-border-2 tw-border-gray-300 tw-px-2 tw-py-2 focus:tw-outline-none focus:tw-border-gray-500 tw-rounded-md"
                              />
                           </v-col>
                        </v-row>
                        <v-row class="tw-mb-1"
                           ><v-col
                              ><v-btn block color="primary">Update</v-btn>
                           </v-col>
                        </v-row>
                     </div>
                  </div>
               </v-card>
            </div>
         </v-container></v-main
      >
   </div>
</template>
<script>
import NavBar from "../Common/TheNavbar.vue";
export default {
   components: {
      "nav-bar": NavBar,
   },
   methods: {
      backToProfile() {
         this.$router.push("/dashboard/profile");
      },
   },
};
</script>
