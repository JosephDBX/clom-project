<template>
  <v-app-bar app dense flat>
    <v-app-bar-nav-icon v-if="account" @click="toggleDrawer" />

    <v-app-bar-title class="grey--text text--darken-1">
      Laboratorio
      <span class="font-weight-bold">Moncada</span>
    </v-app-bar-title>

    <v-spacer></v-spacer>

    <div class="d-none d-sm-block" v-if="!account">
      <v-btn color="primary" @click="navLogin">
        <v-icon>mdi-google-plus</v-icon>
        <span class="ml-2">Iniciar sesión</span>
      </v-btn>
    </div>

    <div class="d-flex d-sm-none" v-if="!account">
      <v-btn color="primary" fab small @click="navLogin">
        <v-icon>mdi-google-plus</v-icon>
      </v-btn>
    </div>

    <div v-if="account">
      <v-menu offset-y>
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            plain
            color="primary"
            v-bind="attrs"
            v-on="on"
            class="text-none"
          >
            <span class="d-none d-sm-block">{{ account.displayName }}</span>
            <v-icon class="d-flex d-sm-none">mdi-account-circle</v-icon>
            <v-icon>mdi-chevron-down</v-icon>
          </v-btn>
        </template>

        <v-list>
          <v-list-item link>
            <v-list-item-title>Gestiona tu cuenta</v-list-item-title>
          </v-list-item>

          <v-list-item link @click="navLogout">
            <v-list-item-title>Cerrar sesión</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </div>
  </v-app-bar>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "Navbar",

  data: () => ({
    credentials: {
      uid: "qwert",
      displayName: "JosephDBX",
      email: "st.joseph.dbx@gmail.com",
      photoURL: "https://picsum.photos/300/300",
      state: true,
    },
  }),
  methods: {
    ...mapActions(["toggleDrawer", "login", "logout"]),
    navLogin() {
      this.login(this.credentials);
      this.$router.push("/user-panel");
    },
    navLogout() {
      this.logout();
      if (this.$route.params.pathMatch != "Home")
        this.$router.push(
          { name: "Home" },
          () => {},
          () => {}
        );
    },
  },
  computed: { ...mapGetters(["account", "drawer"]) },
};
</script>