<template>
  <v-app-bar app dense flat>
    <v-app-bar-nav-icon v-if="account" @click="toggleDrawer" />

    <v-app-bar-title class="text--primary">
      Laboratorio
      <span class="font-weight-bold">Moncada</span>
    </v-app-bar-title>

    <v-spacer></v-spacer>

    <div class="d-none d-sm-block" v-if="!account">
      <v-btn color="primary" text @click="navLogin">
        <v-avatar size="24">
          <img :src="GoogleLogo" alt="Google Logo" />
        </v-avatar>
        <span class="ml-2">Iniciar sesión</span>
      </v-btn>
    </div>

    <div class="d-flex d-sm-none" v-if="!account">
      <v-btn color="primary" fab small text @click="navLogin">
        <v-avatar size="40">
          <img :src="GoogleLogo" alt="Google Logo" />
        </v-avatar>
      </v-btn>
    </div>

    <div v-if="account">
      <v-menu offset-y>
        <template v-slot:activator="{ on, attrs }">
          <v-btn color="primary" v-bind="attrs" v-on="on" fab small text>
            <v-avatar size="40">
              <img :src="account.photoURL" alt="User Photo" />
            </v-avatar>
          </v-btn>
        </template>

        <v-list>
          <v-list-item link>
            <v-list-item-title>Gestiona tu cuenta</v-list-item-title>
          </v-list-item>

          <v-divider />

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
import GoogleLogo from "../../assets/google-logo.svg";

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
    GoogleLogo,
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