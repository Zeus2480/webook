<template>
   <div class="tw-mb-3 tw-shadow">
      <!-- <v-card>
         <div class="tw-p-2">
            <div class="tw-flex">
               <div class="img">
                  <img
                     src="../assets/Images/wallpaperflare.com_wallpaper (17).jpg"
                     style="height: 103px; width: 131px; border-radius: 10px"
                     alt=""
                  />
               </div>
               <div class="information tw-mx-4 tw-flex tw-flex-col tw-justify-between ">
                  <div class="heading tw-my-3  ">
                     <h1 class="tw-font-medium tw-truncate tw-text-md">
                        5 Best React UI Frameworks to Build
                        Faster in 2022
                     </h1>
                  </div>
                  <div class="tw-flex  tw-mb-3">
                     <p class="tw-text-lime-500 tw-text-sm">Published</p>
                     <p class="tw-text-sm tw-mx-4 tw-opacity-75">18 Feb</p>
                  </div>
               </div>
            </div>
            <div></div>
         </div>
      </v-card> -->
      <v-hover v-slot="{ hover }">
         <v-card :elevation="hover ? 0 : 0" :class="{ 'on-hover': hover }">
            <div class="tw-p-2">
               <v-row>
                  <v-col cols="11">
                     <div class="tw-p-2">
                        <div class="user-detail">
                           <div class="tw-flex">
                              <!-- <img
                                 src="../assets/Images/profilepicture.jpg"
                                 class="tw-h-12 tw-rounded-full tw-w-12"
                                 alt=""
                              /> -->
                              <v-avatar size="38" color="blue">
                           <span class="white--text  text-h5">{{
                              initials
                           }}</span>
                        </v-avatar>
                              <div class="tw-my-auto">
                                 <h1 class="tw-mx-2 tw-text-base">
                                    {{commentAuthor}}
                                 </h1>
                                 <div class="tw-flex tw-mx-2">
                                    <p class="tw-text-sm tw-opacity-70">
                                       {{commentDate}}
                                    </p>
                                    <!-- <p
                                       class="tw-text-sm tw-text-red-700 tw-mx-2"
                                    >
                                       Spam
                                    </p> -->
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div class="comment tw-my-2">
                           <p>
                              {{commentBody}}
                           </p>
                        </div>
                     </div>
                  </v-col>
                  <v-col cols="1">
                     <div class="tw-flex tw-flex-row-reverse">
                        <div>
                           <v-menu left transition="slide-y-transition">
                              <template v-slot:activator="{ on, attrs }">
                                 <v-btn right icon v-bind="attrs" v-on="on">
                                    <v-icon>mdi-dots-vertical</v-icon>
                                 </v-btn>
                              </template>
                              <v-list>
                                 
                                 <v-list-item @click="deleteComment">
                                    <v-list-item-action>
                                       <v-icon color="red">mdi-trash-can</v-icon>
                                    </v-list-item-action>
                                    <v-list-item-content>
                                       <v-list-item-title class="tw-text-red-500"
                                          >Delete</v-list-item-title
                                       >
                                    </v-list-item-content>
                                 </v-list-item>
                                 <!-- <v-list-item>
                                    <v-list-item-action>
                                       <v-icon>mdi-file</v-icon>
                                    </v-list-item-action>
                                    <v-list-item-content>
                                       <v-list-item-title
                                          >Posts</v-list-item-title
                                       >
                                    </v-list-item-content>
                                 </v-list-item>
                                 <v-list-item>
                                    <v-list-item-action>
                                       <v-icon>mdi-file</v-icon>
                                    </v-list-item-action>
                                    <v-list-item-content>
                                       <v-list-item-title
                                          >Posts</v-list-item-title
                                       >
                                    </v-list-item-content>
                                 </v-list-item> -->
                              </v-list>
                           </v-menu>
                        </div>
                        
                     </div>
                  </v-col>
               </v-row>
            </div>
         </v-card>
      </v-hover>
   </div>
</template>
<script>
import axios from "axios"
export default {
   data(){
      return{
         initials:""
      }
   },
   computed:{
      // initials(){
      //    let temp=this.initials;
      //     return temp.shift().charAt(0) + temp.pop().charAt(0);
      // }
   },
   methods:{
      deleteComment(){
         axios.delete(`/comments/${this.commentId}/delete`,{
            headers:{
               "Authorization":"Bearer "+localStorage.getItem("token")
            }
         }).then(res=>{
            console.log(res.data)
            this.$emit("deleteComment",this.commentId,this.postId)
         }).catch(err=>{
            console.log(err)
         })
      }
   },
   props:['commentId','commentBody','commentAuthor','commentDate','postId','commentAuthorId'],
   created(){
      // let temp=this.initials;
      const fullName = this.commentAuthor.split(" ");
      this.initials=fullName.shift().charAt(0) + fullName.pop().charAt(0);
   }
}
</script>
<style>
.v-btn__content {
   text-transform: unset !important;
}
.btn {
   text-transform: unset !important;
}
.no-padding {
   padding-left: 0px !important;
   padding-right: 0px !important;
}
</style>
