<template>
  <v-app>
    

      <router-view/>
   
    <!-- </v-content> -->

  </v-app>
</template>

<script>
// import TheNavbarVue from './Common/TheNavbar.vue';
// import Navbar from './Common/TheNavbar.vue'
export default {
  components:{
    // 'the-nav':Navbar
  },
  name: 'App',

  data: () => ({
    //
  }),
};
</script>
<style >
*{
  font-family: 'Poppins', sans-serif;
}
.v-application p {
    margin-bottom: unset !important;
}
</style>
