<template>
  <v-app>
    <sidenav></sidenav>

    <navbar></navbar>

    <v-main>
      <v-container class="">
        <router-view></router-view>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import Navbar from "./components/layout/Navbar.vue";
import Sidenav from "./components/layout/Sidenav.vue";

export default {
  name: "App",
  components: { Sidenav, Navbar },
};
</script>