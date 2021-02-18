<template>
  <v-app-bar app dense flat>
    <v-app-bar-nav-icon
      v-if="authenticated"
      @click="toggleDrawer"
    ></v-app-bar-nav-icon>

    <v-app-bar-title class="text--disabled">
      Laboratorio
      <span class="font-weight-bold">Moncada</span>
    </v-app-bar-title>

    <v-spacer></v-spacer>

    <div class="d-none d-sm-block" v-if="!authenticated">
      <v-btn color="secondary" plain @click="navLogin">Iniciar sesión</v-btn>
      <v-btn color="accent" plain>Crear una cuenta</v-btn>
    </div>

    <div class="d-flex d-sm-none" v-if="!authenticated">
      <v-menu offset-y>
        <template v-slot:activator="{ on, attrs }">
          <v-btn icon v-bind="attrs" v-on="on">
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </template>

        <v-list>
          <v-list-item link @click="navLogin">
            <v-list-item-title>Iniciar sesión</v-list-item-title>
          </v-list-item>

          <v-list-item link>
            <v-list-item-title>Crear una cuenta</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </div>

    <div v-if="authenticated">
      <v-menu offset-y>
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            plain
            color="primary"
            v-bind="attrs"
            v-on="on"
            class="text-lowercase"
          >
            <span class="d-none d-sm-block">{{ authenticated.email }}</span>
            <v-icon class="d-flex d-sm-none">mdi-account-circle</v-icon>
            <v-icon>mdi-chevron-down</v-icon>
          </v-btn>
        </template>

        <v-list>
          <v-list-item link>
            <v-list-item-title>Gestiona tu cuenta</v-list-item-title>
          </v-list-item>

          <v-list-item link @click="logout">
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
      email: "st.joseph.dbx@gmail.com",
    },
  }),
  methods: {
    ...mapActions(["toggleDrawer", "login", "logout"]),
    navLogin() {
      this.login(this.credentials);
    },
  },
  computed: { ...mapGetters(["authenticated"]) },
};
</script>