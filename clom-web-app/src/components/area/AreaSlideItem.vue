<template>
  <v-card :loading="loading" class="ma-2 align-self-start" width="180">
    <template slot="progress">
      <v-progress-linear
        color="accent"
        height="5"
        indeterminate
      ></v-progress-linear>
    </template>

    <div class="subtitle-1 ma-2 font-weight-medium">
      {{ area.name }}
    </div>

    <v-card-actions>
      <div class="subtitle-2 ma-2">Pruebas: 25</div>

      <v-spacer></v-spacer>

      <v-btn icon @click="toggle" color="secondary">
        <v-icon>{{ active ? "mdi-chevron-up" : "mdi-chevron-down" }}</v-icon>
      </v-btn>
    </v-card-actions>

    <v-expand-transition>
      <div v-show="active">
        <v-divider></v-divider>

        <v-card-text>
          <div class="text-justify">
            {{ area.description }}
          </div>
        </v-card-text>
      </div>
    </v-expand-transition>
  </v-card>
</template>

<script>
export default {
  props: ["area", "active", "toggle"],
  data: () => ({
    loading: false,
  }),

  methods: {},
};
</script>