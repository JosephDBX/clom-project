<template>
  <v-card :loading="loading" class="ma-2 align-self-start" width="180">
    <template slot="progress">
      <v-progress-linear
        color="accent"
        height="5"
        indeterminate
      ></v-progress-linear>
    </template>

    <v-img
      height="100"
      :lazy-src="member.photoURL"
      :src="member.photoURL"
      transition="fade-transition"
    ></v-img>

    <div class="subtitle-1 ma-2 font-weight-medium">
      {{ member.account.displayName }}
    </div>

    <div class="subtitle-2 ma-2">Teléfono: {{ member.contact.phone }}</div>

    <v-card-actions>
      <v-btn color="red darken-3" icon @click="location">
        <v-icon>mdi-map-marker-outline</v-icon>
      </v-btn>

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
            {{ member.bio }}
          </div>
        </v-card-text>
      </div>
    </v-expand-transition>
  </v-card>
</template>

<script>
export default {
  props: ["member", "active", "toggle"],
  data: () => ({
    loading: false,
  }),

  methods: {
    location() {
      this.loading = false;
    },
  },
};
</script>