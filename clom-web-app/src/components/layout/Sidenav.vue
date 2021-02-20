<template>
  <v-navigation-drawer
    app
    v-if="authenticated"
    :value="drawer"
    @input="setDrawer"
    color="primary"
    dark
  >
    <v-list>
      <v-list-item class="justify-center">
        <v-list-item-avatar color="primary lighten-1" size="120" class="ma-0 my-2">
          <v-img :src="authenticated.photoURL"></v-img>
        </v-list-item-avatar>
      </v-list-item>

      <v-list-item link class="text-center" no-action>
        <v-list-item-content>
          <v-list-item-title class="title">{{
            authenticated.displayName
          }}</v-list-item-title>

          <v-list-item-subtitle>{{ authenticated.email }}</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </v-list>

    <v-divider></v-divider>

    <v-list>
      <v-list-item
        v-for="(item, index) in items"
        :key="index + item.name"
        :to="{ name: item.uri }"
        exact
      >
        <v-list-item-icon>
          <v-icon v-text="item.icon"></v-icon>
        </v-list-item-icon>

        <v-list-item-title v-text="item.name"></v-list-item-title>
      </v-list-item>

      <v-list-group
        color="lighten-5"
        :value="i == 0"
        v-for="(role, i) in authenticated.roles"
        :key="i"
      >
        <template v-slot:activator>
          <v-list-item-icon>
            <v-icon v-text="role.icon"></v-icon>
          </v-list-item-icon>
          <v-list-item-title v-text="role.name"></v-list-item-title>
        </template>

        <v-list-item
          v-for="(access, j) in role.access"
          :key="j"
          :to="access.uri"
          exact
        >
          <v-list-item-icon>
            <v-icon v-text="access.icon"></v-icon>
          </v-list-item-icon>

          <v-list-item-title v-text="access.title"></v-list-item-title>
        </v-list-item>
      </v-list-group>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "Sidenav",
  data: () => ({
    items: [{ name: "Inicio", icon: "mdi-home", uri: "Home" }],
  }),
  methods: { ...mapActions(["setDrawer"]) },
  computed: { ...mapGetters(["authenticated", "drawer"]) },
};
</script>