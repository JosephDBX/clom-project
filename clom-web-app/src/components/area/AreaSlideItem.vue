<template>
  <v-card :loading="loading" class="ma-1" width="200">
    <template slot="progress">
      <v-progress-linear
        color="accent"
        height="5"
        indeterminate
      ></v-progress-linear>
    </template>

    <v-img
      height="150"
      :lazy-src="member.photoURL"
      :src="member.photoURL"
      transition="fade-transition"
    ></v-img>

    <v-card-title class="body-1">
      {{ member.name }} {{ member.surname }}
    </v-card-title>

    <v-card-text>
      <div class="grey--text body-2 text-justify">
        {{ member.bio }}
      </div>
    </v-card-text>

    <v-divider class="mx-4"></v-divider>

    <v-card-text class="text-center">
      <div class="body-1">Teléfono: {{ member.contact.phone }}</div>

      <v-btn color="secondary" plain @click="location">Localización</v-btn>
    </v-card-text>
  </v-card>
</template>

<script>
import Member from "../../models/Member";

export default {
  props: {
    member: Member,
  },
  data: () => ({
    loading: true,
    selection: 1,
  }),

  methods: {
    location() {
      this.loading = false;
    },
  },
};
</script>