<template>
   <div
   @click="pushToTagPage"
    v-ripple
      class="tw-p-1 hover:tw-bg-gray-200 tw-cursor-pointer  tw-px-2 tw-my-1 tw-mr-3 tw-border-2 tw-border-gray-100 tw-rounded tw-inline"
   >
      <h2 v-ripple class="tw-inline">#{{tag}}</h2>
   </div>
</template>
<script>
export default {
   props:['tag'],
   methods:{
      pushToTagPage(){
         this.$router.push(`/view/${this.$route.params.userId}/tags/${this.tag}`);
      }
   }
}
</script>
