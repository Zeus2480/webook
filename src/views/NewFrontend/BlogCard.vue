<template>
   <div>
      <div
         @click="openBlog"
         class="tw-w-full tw-cursor-pointer height-fix tw-p-3 tw-rounded tw-border-2 hover:tw-border-gray-200 tw-border-gray-100"
      >
         <div class="tw-flex">
            <img
               :src="authorImage"
               class="tw-h-6 tw-w-6 tw-rounded-full"
               alt=""
            />
            <h2 class="tw-my-auto tw-font-medium tw-text-lg tw-mx-2">
               {{ authorName }}
            </h2>
         </div>
         <div class="image tw-my-3">
            <img :src="image" class="tw-w-full tw-rounded tw-h-40" alt="" />
         </div>
         <div class="heading">
            <h1 class="tw-text-2xl tw-line-clamp-2 tw-font-semibold">
               {{ title }}
            </h1>
            <div class="tw-flex tw-my-2 tw-mt-1">
               <p class="tw-text-sm tw-text-gray-400">{{ createdDate }}</p>
               <v-icon disabled class="tw-ml-3 tw-mr-1" small>mdi-eye</v-icon>
               <p class="tw-text-sm tw-text-gray-400">Views {{ views }}</p>
            </div>
         </div>
         <div class="summary">
            <h3 class="tw-line-clamp-3">
               {{ summary }}
            </h3>
         </div>
      </div>
   </div>
</template>
<script>
export default {
   props: ["id", "title", "summary", "image", "createdDate", "views"],
   computed: {
      authorName() {
         return this.$store.getters.getAuthorProfile.authorName;
      },
      authorImage() {
         return this.$store.getters.getAuthorProfile.authorImage;
      },
   },
   methods: {
      openBlog() {
         this.$router.push(`/view/${this.$route.params.userId}/${this.id}`);
      },
   },
};
</script>
<style scoped>
.height-fix {
   height: 407px;
}
</style>
