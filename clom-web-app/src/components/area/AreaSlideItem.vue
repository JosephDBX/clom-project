<template>
  <v-card :loading="loading" class="ma-2" width="200">
    <template slot="progress">
      <v-progress-linear
        color="accent"
        height="5"
        indeterminate
      ></v-progress-linear>
    </template>

    <div class="secondary">
      <v-card-title class="body-1 grey--text text--lighten-4">
        {{ area.name }}
      </v-card-title>

      <v-card-subtitle class="grey--text text--lighten-4">
        Pruebas: 23
      </v-card-subtitle>
    </div>

    <v-divider class="mx-4"></v-divider>

    <v-card-text>
      <div class="grey--text body-2 text-justify">
        {{ area.description }}
      </div>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  props: ["area"],
  data: () => ({
    loading: false,
  }),

  methods: {},
};
</script>