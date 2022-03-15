<template>
   <div>
      <v-overlay :value="overlay" opacity=".5">
         <div class="text-center">
            <v-progress-circular
               indeterminate
               color="white"
               size="50"
            ></v-progress-circular>
         </div>
      </v-overlay>
      <div class="form tw-mt-8">
         <h2>
            What would you like to call your blog site? By this name users will
            be able to identify your site.
         </h2>
         <div class="blog-name-input tw-mt-12">
            <input
               type="text"
               placeholder="Blogsite name"
               maxlength="20"
               v-model="inputBlogName"
               @input="showNoOfCharacters"
               :class="{ 'focus:tw-border-gray-500': maxLimitreached }"
               class="tw-w-full tw-border-solid tw-border-2 tw-border-gray-300 tw-px-2 tw-py-2 focus:tw-outline-none focus:tw-border-gray-500 tw-rounded-md"
            />
         </div>
         <div class="tw-flex tw-flex-row-reverse tw-mt-1 tw-mb-4">
            <p class="tw-opacity-75">{{ showLength }}</p>
         </div>
         <div class="create-btn tw-mt-16">
            <v-btn block color="black" dark @click="create">Create</v-btn>
         </div>
      </div>
   </div>
</template>
<script>
export default {
   data() {
      return {
         inputBlogName: "",
         maxLimitreached: true,
         inputLength: 0,
         overlay:false,
      };
   },
   computed: {
      showLength() {
         return `${this.inputLength} of 20`;
      },
   },
   methods: {
      showNoOfCharacters() {
         this.inputLength = this.inputBlogName.length;
      },
      create(){
          console.log('df');
          this.overlay=true;
          setTimeout(()=>{
              this.overlay=false;
              this.$router.push('/dashboard/post');
          },3000);
      }
   },
};
</script>
