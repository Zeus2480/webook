<template>
  <v-app>
    

      <router-view/>
   
    <!-- </v-content> -->

  </v-app>
</template>

<script>
// import TheNavbarVue from './Common/TheNavbar.vue';
// import Navbar from './Common/TheNavbar.vue'
import axios from "axios"
export default {
  components:{
    // 'the-nav':Navbar
  },
  name: 'App',
  created(){
    // console.log(123456);
    if(localStorage.getItem("token")){

      // this.getProfile();
    }
  },
  methods:{
     getProfile() {
         if (this.$store.getters.getUserName == "") {
            axios
               .get("/profile", {
                  headers: {
                     Authorization: "Bearer " + localStorage.getItem("token"),
                  },
               })
               .then((res) => {
                  console.log(res.data);

                  this.$store.dispatch("setUserProfile", res.data);
               });
         }
      },
  },
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
