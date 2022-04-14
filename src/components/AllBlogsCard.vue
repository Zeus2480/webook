<template>
   <div>
      <v-container class="tw-px-10" @click="openPost">
         <v-card>
            <div class="tw-p-3">
               <v-row>
                  <v-col cols="9">
                     <div
                        class="tw-p-2 tw-flex tw-flex-col tw-h-full tw-justify-between"
                     >
                        <div>
                           <div class="heading tw-mb-2">
                              <h1
                                 class="tw-text-xl tw-font-medium tw-line-clamp-2"
                              >
                                 {{ title }}
                              </h1>
                              <div class="tw-flex tw-opacity-60 tw-my-1">
                                 <p class="tw-text-sm">{{ createdData }}</p>
                              </div>
                           </div>
                           <div class="summary">
                              <p class="tw-line-clamp-2">
                                 {{ summary }}
                              </p>
                           </div>
                        </div>
                        <div class="cards">
                           <v-chip-group v-model="selection" column>
                              <v-chip
                                 
                                 link
                                 v-for="tag in tags"
                                 :value="tag"
                                 :key="tag"
                              >
                                 {{ tag }}
                              </v-chip>
                           </v-chip-group>
                        </div>
                     </div>
                  </v-col>
                  <v-col cols="3" class="tw-h-full"
                     ><img

                        :src="image"
                        style="height: 200px; width: 100%"
                        class="image-fit tw-h-full"
                        alt=""
                  /></v-col>
               </v-row>
            </div>
         </v-card>
      </v-container>
   </div>
</template>
<script>
export default {
   props: [
      "title",
      "postId",
      "createdData",
      "summary",
      "tags",
      "image",
      "userId",
   ],
   data() {
      return {
         selection: "",
         selectt: "",
      };
   },
   watch: {
      // selection(val) {
      //    this.$router.push(`/view/${this.userId}/tags/${val}`);
      //    console.log(val);
      // },
   },
   methods: {
      openPost(e) {
         e.stopPropagation();
         console.log(e.target);
         this.$router.push(`/view/${this.userId}/${this.postId}`);
      },
      s(e) {
         e.stopPropagation();
         console.log(e.target);
      },
   },
};
</script>
<style scoped>
.image-fit {
   height: 100%;
   width: 100%;
   object-fit: cover;
}
</style>
