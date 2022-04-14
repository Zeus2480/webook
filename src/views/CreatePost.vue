<template>
   <div>
      <v-snackbar v-model="snackbar">
         {{ text }}

         <template v-slot:action="{ attrs }">
            <v-btn color="pink" text v-bind="attrs" @click="snackbar = false">
               Close
            </v-btn>
         </template>
      </v-snackbar>
      <the-navbar></the-navbar>

      <v-main class="tw-bg-secondary-background tw-min-h-screen">
         <v-container class="tw-h-full tw-px-0 xl:tw-px-20">
            <div class="view-profile">
               <v-card>
                  <div class="tw-p-4">
                     <div class="tw-flex tw-justify-between">
                        <div class="back-btn tw-flex">
                           <v-btn @click="back" icon
                              ><img
                                 src="../assets/Logo/arrow_back_black_24dp.svg"
                                 alt=""
                           /></v-btn>
                           <h1 class="tw-my-auto tw-mx-2 tw-text-xl">
                              Create Post
                           </h1>
                        </div>
                        <div class="puplish-preview">
                           <v-btn outlined color="primary">Preview</v-btn>
                           <v-btn
                              color="primary"
                              @click="publish"
                              class="tw-ml-4"
                              >Publish</v-btn
                           >
                        </div>
                     </div>
                     <div class="form tw-mt-8 tw-px-2">
                        <v-form ref="form" v-model="valid" lazy-validation>
                           <v-text-field
                              v-model="title"
                              :rules="titleRules"
                              label="Title"
                              required
                           ></v-text-field>

                           <v-text-field
                              v-model="summary"
                              :rules="summaryRules"
                              label="Summary"
                              required
                           ></v-text-field>
                        </v-form>

                        <div>
                           <v-file-input
                              label="File input"
                              filled
                              prepend-icon="mdi-camera"
                              accept="image/png, image/gif, image/jpeg"
                              @change="onFileSelected"
                           ></v-file-input>
                        </div>
                        <div class="title">
                           <v-text-field
                              v-model="inputTag"
                              label="Tags"
                              @keyup.enter="onEnter"
                           ></v-text-field>

                           <v-chip-group v-model="selection" column>
                              <v-chip
                                 v-for="(tag, index) in tagsArray"
                                 :value="tag"
                                 :key="index"
                                 link
                              >
                                 {{ tag }}
                              </v-chip>
                           </v-chip-group>
                        </div>
                        <div class="tw-my-4">
                           <VueEditor v-model="body" />
                        </div>
                     </div>
                  </div>
               </v-card>
            </div>
         </v-container>
      </v-main>
   </div>
</template>
<script>
import TheNav from "../Common/TheNavbar.vue";
import { VueEditor } from "vue2-editor";
import axios from "axios";
export default {
   watch: {
      selection(newValue) {
         let temp = this.tagsArray.filter((val) => {
            return val !== newValue;
         });

         this.tagsArray = temp;
         console.log(temp);
      },
   },
   data() {
      return {
         isLoadingCompleted: false,
         prevRoute: null,
         inputTag: "",
         tagsArray: [],
         selection: "",
         removeValue: "",
         snackbar: false,
         title: null,
         summary: null,
         body: null,
         selectedFile: null,
         text: `Hello, I'm a snackbar`,
         valid: true,
         titleRules: [
            (v) => !!v || "Title is required",
            // (v) =>
            //    (v && v.length <= 10) || "Name must be less than 10 characters",
         ],
         summaryRules: [(v) => !!v || "Summary is required"],
      };
   },
   beforeRouteEnter(to, from, next) {
      //   this.prevRoute=from.fullPath;
      next((vm) => {
         vm.prevRoute = from.fullPath;
      });
   },
   created() {
      setTimeout(() => {
         this.isLoadingCompleted = true;
      }, 2000);
   },
   components: {
      "the-navbar": TheNav,
      VueEditor,
   },
   methods: {
      onFileSelected(event) {
         // console.log(event);
         if (event) {
            this.selectedFile = event;
         } else {
            this.selectedFile = null;
         }
      },
      back() {
         this.$router.push(`${this.prevRoute}`);
      },
      onEnter() {
         this.tagsArray.push(this.inputTag);
         this.inputTag = "";
      },
      remove() {
         //   console.log(123);
         //   console.log(this.selection);
         //   console.log(this.s);
      },
      validate() {
         this.valid = this.$refs.form.validate();
      },
      publish() {
         if (this.valid) {
            console.log(this.tagsArray);
            let formData = new FormData();
            formData.append("name", this.title);
            formData.append("excerpt", this.summary);
            formData.append("body", this.body);
            formData.append("tags",JSON.stringify( this.tagsArray));
            formData.append("image", this.selectedFile);
            console.log(formData);
            axios
               .post("/post/create", formData, {
                  headers: {
                     Authorization: "Bearer " + localStorage.getItem("token"),
                  },
               })
               .then((res) => {
                  console.log(JSON.parse(res.data.tags));
                  this.snackbar = true;
                  this.text = "Post Created Successfully";
                  this.$router.push(`/dashboard/post`)
               });
            // this.snackbar = true;
            // this.text = `Post published successfully`;
         }
         // this.$router.push(`/`);
      },
   },
};
</script>
