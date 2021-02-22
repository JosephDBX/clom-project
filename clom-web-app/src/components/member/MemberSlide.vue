<template>
  <v-slide-group multiple show-arrows>
    <span class="mx-auto d-block d-md-none"></span>

    <v-slide-item v-for="(member, index) in members" :key="index">
      <member-slide-item :member="member" />
    </v-slide-item>

    <span class="mx-auto"></span>
  </v-slide-group>
</template>

<script>
import MemberSlideItem from "./MemberSlideItem.vue";
export default {
  components: { MemberSlideItem },
  data: () => ({
    members: [
      {
        email: "test@mail.com",
        photoURL: "https://picsum.photos/300/300",
        name: "Fulanito",
        surname: "Pérez",
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
        name: "Fulanito",
        surname: "Pérez",
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
        name: "Fulanito",
        surname: "Pérez",
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
        name: "Fulanito",
        surname: "Pérez",
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
        name: "Fulanito",
        surname: "Pérez",
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