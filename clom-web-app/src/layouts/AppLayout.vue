<template>
  <v-app>
    <sidenav />

    <navbar />

    <v-main>
      <v-fade-transition mode="out-in">
        <router-view />
      </v-fade-transition>
    </v-main>
  </v-app>
</template>

<script>
import Navbar from "../components/layout/Navbar.vue";
import Sidenav from "../components/layout/Sidenav.vue";

export default {
  components: { Sidenav, Navbar },
};
</script>