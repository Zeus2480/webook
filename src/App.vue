<template>
  <v-app>
      <router-view/>

  </v-app>
</template>

<script>

export default {
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
