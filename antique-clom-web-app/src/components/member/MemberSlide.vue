<template>
  <v-slide-group show-arrows v-model="model" center-active>
    <span class="mx-auto d-block d-md-none"></span>

    <v-slide-item
      v-for="(member, index) in members"
      :key="index"
      v-slot="{ active, toggle }"
    >
      <member-slide-item :member="member" :active="active" :toggle="toggle" />
    </v-slide-item>

    <v-slide-item>
      <v-btn class="mx-2 my-16" plain>Ver más...</v-btn>
    </v-slide-item>

    <span class="mx-auto align-self-start"></span>
  </v-slide-group>
</template>

<script>
import MemberSlideItem from "./MemberSlideItem.vue";
export default {
  components: { MemberSlideItem },
  data: () => ({
    model: null,
    members: [
      {
        email: "test@mail.com",
        photoURL: "https://picsum.photos/300/300",
        account: { displayName: "Dr. Fulanito Mario Pérez López" },
        bio:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam porta turpis sit amet ex fermentum, vitae pretium arcu dapibus. Vivamus lectus neque, interdum id enim ut, laoreet dignissim mauris. I200",
        contact: {
          phone: "8877-6655",
          geopoint: {
            latitude: 123.45,
            longitude: 678.91,
          },
        },
      },
      {
        email: "test@mail.com",
        photoURL: "https://picsum.photos/300/300",
        account: { displayName: "Dr. Fulanito Mario Pérez López" },
        bio:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam porta turpis sit amet ex fermentum, vitae pretium arcu dapibus. Vivamus lectus neque, interdum id enim ut, laoreet dignissim mauris. I200",
        contact: {
          phone: "8877-6655",
          geopoint: {
            latitude: 123.45,
            longitude: 678.91,
          },
        },
      },
      {
        email: "test@mail.com",
        photoURL: "https://picsum.photos/300/300",
        account: { displayName: "Dr. Fulanito Mario Pérez López" },
        bio:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam porta turpis sit amet ex fermentum, vitae pretium arcu dapibus. Vivamus lectus neque, interdum id enim ut, laoreet dignissim mauris. I200",
        contact: {
          phone: "8877-6655",
          geopoint: {
            latitude: 123.45,
            longitude: 678.91,
          },
        },
      },
      {
        email: "test@mail.com",
        photoURL: "https://picsum.photos/300/300",
        account: { displayName: "Dr. Fulanito Mario Pérez López" },
        bio:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam porta turpis sit amet ex fermentum, vitae pretium arcu dapibus. Vivamus lectus neque, interdum id enim ut, laoreet dignissim mauris. I200",
        contact: {
          phone: "8877-6655",
          geopoint: {
            latitude: 123.45,
            longitude: 678.91,
          },
        },
      },
      {
        email: "test@mail.com",
        photoURL: "https://picsum.photos/300/300",
        account: { displayName: "Dr. Fulanito Mario Pérez López" },
        bio:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam porta turpis sit amet ex fermentum, vitae pretium arcu dapibus. Vivamus lectus neque, interdum id enim ut, laoreet dignissim mauris. I200",
        contact: {
          phone: "8877-6655",
          geopoint: {
            latitude: 123.45,
            longitude: 678.91,
          },
        },
      },
    ],
  }),
};
</script>