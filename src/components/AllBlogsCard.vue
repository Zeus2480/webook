<template>
   <div>
      <v-container class="md:tw-px-10" @click="openPost">
         <v-card>
            <div class="tw-p-2 md:tw-p-3">
               <v-row>
                  <v-col md="9" cols="8">
                     <div
                        class="tw-p-2 tw-flex tw-flex-col tw-h-full tw-justify-between"
                     >
                        <div>
                           <div class="heading tw-mb-2">
                              <h1
                                 class="tw-text-sm md:tw-text-xl tw-font-medium tw-line-clamp-2"
                              >
                                 {{ title }}
                              </h1>
                              <div class="tw-flex tw-opacity-60 tw-my-1">
                                 <p class="tw-text-xs md:tw-text-sm">
                                    {{ createdData }}
                                 </p>
                              </div>
                           </div>
                           <div class="summary tw-hidden md:tw-block">
                              <p
                                 class="tw-line-clamp-2 tw-text-sm md:tw-text-base"
                              >
                                 {{ summary }}
                              </p>
                           </div>
                        </div>
                        <div
                           @click="opentag"
                           class="cards tw-hidden md:tw-block"
                        >
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
                  <v-col md="3" cols="4" class="tw-h-full"
                     ><img
                        :src="image"
                        style="max-height: 200px; width: 100%"
                        class="image-fit tw-h-full"
                        alt=""
                  /></v-col>
               </v-row>
               <div class="md:tw-hidden">
                  <div class="summary">
                     <p class="tw-line-clamp-2 tw-text-sm md:tw-text-base">
                        {{ summary }}
                     </p>
                  </div>
               </div>
               <div class="md:tw-hidden">
                  <div class="cards" >
                     <v-chip-group v-model="selection" column>
                        <div @click="opentag" class="tw-block">
                           <v-chip
                              x-small
                              link
                              v-for="tag in tags"
                              :value="tag"
                              :key="tag"
                           >
                              {{ tag }}
                           </v-chip>
                        </div>
                     </v-chip-group>
                  </div>
               </div>
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
      opentag(e) {
         e.stopPropagation();
         console.log(this.selection);
         this.$router.push(`/view/${this.userId}/tags/${this.selection}`);
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
@media screen and (max-width: 600px) {
   .image-fit {
      height: 60px;
      width: 100%;
      object-fit: cover;
   }
}
</style>
