<template>
   <div>
      <v-container class="tw-px-10">
         <v-card>
            <div class="tw-p-3">
               <v-row>
                  <v-col cols="9">
                     <div class="tw-p-2">
                        <div class="heading  tw-mb-2">
                           <h1 class="tw-text-xl tw-font-medium">This is the heading for this card .</h1>
                           <div class="tw-flex tw-opacity-60 tw-my-1">
                              <p class="tw-text-sm">29 Feb 2022</p>
                              <p class="tw-text-sm tw-mx-4">5 min read</p>
                           </div>
                        </div>
                        <div class="summary">
                           <p class="tw-line-clamp-2">
                              Chrome 100 ships in late March (2022), and Firefox
                              100 ships shortly after in early May. Both of
                              these are a major version number milestone and
                              roll over to three digits. But, if yods a sda fdsa
                              fsdaur ...
                           </p>
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
                  <v-col cols="3"
                     ><img
                        src="../assets/Images/wallpaperflare.com_wallpaper (17).jpg"
                        class="image-fit"
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
   data() {
      return {
         tags: [
            "Work",
            "Home Improvement",
            "Vacation",
        
         ],
         selection: "",
         selectt: "",
      };
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
