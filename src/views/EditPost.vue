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
                              Edit Post
                           </h1>
                        </div>
                        <div class="puplish-preview">
                           <!-- <v-btn outlined color="primary">Preview</v-btn> -->
                           <v-btn
                              color="primary"
                              @click="update"
                              class="tw-ml-4"
                              >Update</v-btn
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
    props:['postId'],
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
     this.getData();
   },
   components: {
      "the-navbar": TheNav,
      VueEditor,
   },
   methods: {
       getData(){
           let slug=this.$store.getters.getSlug;
              axios.get(`/user/${slug}/post/${this.postId}`).then(res=>{
              console.log(res.data);
              this.title=res.data.post.name;
                this.summary=res.data.post.excerpt;
                this.body=res.data.post.body;
                this.tagsArray=res.data.post.tags;
              })
         },
      
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
      update() {
         if (this.valid) {
            let formData = new FormData();
            formData.append("name", this.title);
            formData.append("excerpt", this.summary);
            formData.append("body", this.body);
            formData.append("tags", this.tagsArray);
            if(this.selectedFile){
                formData.append("image", this.selectedFile);

            }
            console.log(formData);
            axios
               .post(`/post/${this.postId}/update`, formData, {
                  headers: {
                     Authorization: "Bearer " + localStorage.getItem("token"),
                  },
               })
               .then((res) => {
                  console.log(res);
                  this.snackbar = true;
                  this.text = "Post Updated Successfully";
                  this.$router.push("/dashboard/post");
               });
            
         }
         // this.$router.push(`/`);
      },
   },
};
</script>
