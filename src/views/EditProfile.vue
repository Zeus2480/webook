<template>
   <div>
      <v-snackbar v-model="snackbar" color="sucess" timeout="2000">
         {{ text }}

         <template v-slot:action="{ attrs }">
            <v-btn color="pink" text v-bind="attrs" @click="snackbar = false">
               Close
            </v-btn>
         </template>
      </v-snackbar>
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
                              :src="priflePicturePath"
                              class="tw-h-24 tw-w-24 tw-object-cover tw-rounded-full"
                              alt=""
                           />
                        </div>
                        <div class="tw-my-auto tw-mx-8">
                           <template>
                              <div class="text-center">
                                 <v-dialog width="500" v-model="profileCard">
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
                                                v-if="!preview"
                                                :src="priflePicturePath"
                                                class="tw-h-20 tw-w-20 tw-rounded-full tw-object-cover"
                                                alt=""
                                             />
                                             <img
                                                v-if="preview"
                                                :src="image"
                                                class="tw-h-20 tw-w-20 tw-rounded-full tw-object-cover"
                                                alt=""
                                             />
                                          </div>
                                          <v-file-input
                                             label="File input"
                                             prepend-icon="mdi-camera"
                                             @change="onFileSelected"
                                             accept="image/png, image/gif, image/jpeg"
                                          ></v-file-input>
                                          <v-btn
                                             color="primary"
                                             block
                                             :loading="
                                                uploadProfilePictureLoading
                                             "
                                             @click="updateProfilePicture"
                                             :disabled="
                                                disableUpdateProfilePictureButton
                                             "
                                             >Update</v-btn
                                          >
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
                                 v-model="firstName"
                                 placeholder="First name"
                                 class="tw-w-full tw-border-solid tw-border-2 tw-border-gray-300 tw-px-2 tw-py-2 focus:tw-outline-none focus:tw-border-gray-500 tw-rounded-md"
                           /></v-col>
                           <v-col cols="12" sm="6"
                              ><input
                                 type="text"
                                 v-model="lastName"
                                 placeholder="Last name"
                                 class="tw-w-full tw-border-solid tw-border-2 tw-border-gray-300 tw-px-2 tw-py-2 focus:tw-outline-none focus:tw-border-gray-500 tw-rounded-md"
                           /></v-col>
                        </v-row>
                        <v-row>
                           <v-col cols="12">
                              <textarea
                                 type="text"
                                 v-model="bio"
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
                                 v-model="instagram"
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
                                 v-model="facebook"
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
                                 v-model="twitter"
                                 placeholder="Twitter Username"
                                 class="tw-w-full tw-border-solid tw-border-2 tw-border-gray-300 tw-px-2 tw-py-2 focus:tw-outline-none focus:tw-border-gray-500 tw-rounded-md"
                              />
                           </v-col>
                        </v-row>
                        <v-row class="tw-mb-1"
                           ><v-col
                              ><v-btn
                                 block
                                 color="primary"
                                 @click="upodateProfile"
                                 >Update</v-btn
                              >
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
import axios from "axios";
export default {
   data() {
      return {
         userName: "",
         firstName: "",
         lastName: "",
         bio: null,
         instagram: null,
         facebook: null,
         twitter: null,
         imagePath: "",
         selectedFile: "",
         image: "",
         preview: false,
         disableUpdateProfilePictureButton: true,
         uploadProfilePictureLoading: false,
         upadeProfileLoading: false,
         snackbar: false,
         text: "",
         profileCard: null,
      };
   },
   computed: {
      priflePicturePath() {
         if (this.$store.getters.getUserProfilePicture != null) {
            return this.$store.getters.getUserProfilePicture;
         } else {
            return "https://i.ibb.co/TPmLQyP/user.png";
         }
      },
   },
   components: {
      "nav-bar": NavBar,
   },
   created() {
      this.getData();
   },
   methods: {
      upodateProfile() {
         this.upadeProfileLoading = true;
         const formData = new FormData();
         this.userName = this.firstName + " " + this.lastName;
         formData.append("name", this.userName);
         if (this.bio) {
            formData.append("bio", this.bio);
         }
         if (this.instagram) {
            // console.log(this.instagram)
            formData.append("instagram", this.instagram);
         }
         if (this.facebook) {
            formData.append("facebook", this.facebook);
         }
         if (this.twitter) {
            formData.append("youtube", this.twitter);
         }
         axios
            .post("/upload", formData, {
               headers: {
                  Authorization: "Bearer " + localStorage.getItem("token"),
               },
            })
            .then((res) => {
               console.log(res.data);
               this.$store.dispatch("updateUserProfile", res.data);
               this.text = "Profile updated sucessfully!";
               this.snackbar = true;
               this.$router.push('/dashboard/profile')
            })
            .finally(() => {
               this.upadeProfileLoading = false;
            });
      },
      updateProfilePicture() {
         if (this.selectedFile) {
            this.uploadProfilePictureLoading = true;
            const formData = new FormData();
            formData.append("image", this.selectedFile);
            formData.append("name", this.userName);
            if (this.bio) {
               formData.append("bio", this.bio);
            }
            if (this.instagram) {
               // console.log(this.instagram)
               formData.append("instagram", this.instagram);
            }
            if (this.facebook) {
               formData.append("facebook", this.facebook);
            }
            if (this.twitter) {
               formData.append("youtube", this.twitter);
            }
            axios
               .post("/upload", formData, {
                  headers: {
                     Authorization: "Bearer " + localStorage.getItem("token"),
                  },
               })
               .then((res) => {
                  console.log(res);
                  this.$store.dispatch("updateUserProfile", res.data);
                  this.text = "Profile Picture updated sucessfully!";
                  this.snackbar = true;
                  this.profileCard = false;

                  this.text = "Profile updated sucessfully!";
                  this.snackbar = true;
               })
               .finally(() => {
                  this.uploadProfilePictureLoading = false;
               });
         }
      },
      onFileSelected(event) {
         // console.log(event);
         if (event) {
            this.disableUpdateProfilePictureButton = false;
            this.selectedFile = event;
            this.preview = true;
            this.image = URL.createObjectURL(event);
         } else {
            this.disableUpdateProfilePictureButton = true;
            this.preview = false;
            this.selectedFile = "";
         }
      },
      getData() {
         // let data = this.$store.getters.getUserProfile;
         // this.userName = this.$store.getters.getUserName;
         // this.firstName = this.userName.split(" ").slice(0, -1).join(" ");
         // this.lastName = this.userName.split(" ").slice(-1).join(" ");
         // this.createdDate = data.createdAt;
         // this.bio = this.$store.getters.getBio;
         // // this.instagram = data.instagram;
         // // this.facebook = data.facebook;
         // // this.twitter = data.twitter;
         // this.imagePath = data.imagePath;
         axios
            .get("/profile", {
               headers: {
                  Authorization: "Bearer " + localStorage.getItem("token"),
               },
            })
            .then((res) => {
               // console.log(res.data);
               this.userName = res.data.name;
               this.firstName = this.userName.split(" ").slice(0, -1).join(" ");
               this.lastName = this.userName.split(" ").slice(-1).join(" ");
               this.bio = res.data.bio;
               this.instagram = res.data.instagram;

               this.twitter = res.data.youtube;

               if (!res.data.facebook) {
                  this.facebook = "";
               } else {
                  this.facebook = res.data.facebook;
               }
               if (!res.data.instagram) {
                  this.instagram = "";
               } else {
                  this.instagram = res.data.instagram;
               }
               if (!res.data.youtube) {
                  this.twitter = "";
               } else {
                  this.twitter = res.data.youtube;
               }
            });
      },
      backToProfile() {
         this.$router.push("/dashboard/profile");
      },
   },
};
</script>
