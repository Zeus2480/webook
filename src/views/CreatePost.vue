<template>
   <div>
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
                           <v-btn color="primary" class="tw-ml-4"
                              >Publish</v-btn
                           >
                        </div>
                     </div>
                     <div class="form tw-mt-8 tw-px-2">
                        <div class="title">
                           <input
                              type="text"
                              placeholder="Title"
                              class="tw-w-full tw-border-solid tw-border-2 tw-border-gray-300 tw-px-2 tw-py-1 focus:tw-outline-none focus:tw-border-gray-500 tw-rounded-md"
                           />
                        </div>
                        <div class="title tw-my-4">
                           <input
                              type="text"
                              placeholder="Summary"
                              class="tw-w-full tw-border-solid tw-border-2 tw-border-gray-300 tw-px-2 tw-py-1 focus:tw-outline-none focus:tw-border-gray-500 tw-rounded-md"
                           />
                        </div>
                        <div>
                           <v-file-input
                              label="File input"
                              filled
                              prepend-icon="mdi-camera"
                              accept="image/png, image/gif, image/jpeg"
                           ></v-file-input>
                        </div>
                        <div class="title">
                           <input
                              type="text"
                              v-model="inputTag"
                              placeholder="Summary"
                              @keyup.enter="onEnter"
                              class="tw-w-full tw-border-solid tw-border-2 tw-border-gray-300 tw-px-2 tw-py-1 focus:tw-outline-none focus:tw-border-gray-500 tw-rounded-md"
                           />
                           <v-chip-group v-model="selection" column>
                              <v-chip
                                 v-for="(tag, index) in tagsArray"
                                 :value="tag"
                                 :key="index"
                                 link
                                 close
                                 
                              >
                                 {{ tag }}
                              </v-chip>
                           </v-chip-group>
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
export default {
    watch:{
        selection(newValue){
            let  temp=this.tagsArray.filter(val=>{
                val!=newValue;
            })
            this.tagsArray=temp;
        }
        
    },
   data() {
      return {
         isLoadingCompleted: false,
         prevRoute: null,
         inputTag: "",
         tagsArray: [],
         selection: "",
         removeValue:"",

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
   },
   methods: {
      back() {
         this.$router.push(`${this.prevRoute}`);
      },
      onEnter() {
         this.tagsArray.push(this.inputTag);
      },
      remove(){
        //   console.log(123);
        //   console.log(this.selection);
        //   console.log(this.s);
      }
   },
};
</script>
