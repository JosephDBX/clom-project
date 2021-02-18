<template>
  <v-navigation-drawer
    app
    v-if="authenticated"
    :value="drawer"
    @input="setDrawer"
  >
    <v-list-item>
      <v-list-item-content>
        <v-list-item-title class="title text--secondary">
          Laboratorio Moncada
        </v-list-item-title>

        <v-list-item-subtitle>
          Exámenes clínicos de laboratorio
        </v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>

    <v-divider></v-divider>

    <v-list>
      <v-list-item
        color="primary"
        v-for="(item, index) in items"
        :key="index+item.name"
        :to="{ name: item.uri }"
        exact
      >
        <v-list-item-icon>
          <v-icon v-text="item.icon"></v-icon>
        </v-list-item-icon>

        <v-list-item-title v-text="item.name"></v-list-item-title>
      </v-list-item>

      <v-list-group
        color="primary"
        :prepend-icon="role.icon"
        :value="i == 0"
        v-for="(role, i) in authenticated.roles"
        :key="i"
        mandatory
      >
        <template v-slot:activator>
          <v-list-item-title v-text="role.name"></v-list-item-title>
        </template>

        <v-list-item
          color="primary"
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