<template>
  <v-slide-group multiple show-arrows>
    <span class="mx-auto d-block d-md-none"></span>

    <v-slide-item v-for="(area, index) in areas" :key="index">
      <area-slide-item :area="area" />
    </v-slide-item>

    <span class="mx-auto"></span>
  </v-slide-group>
</template>

<script>
import AreaSlideItem from "./AreaSlideItem.vue";

export default {
  components: { AreaSlideItem },
  data: () => ({
    areas: [
      {
        id: "",
        name: "Area de exámenes",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam porta turpis sit amet ex fermentum, vitae pretium arcu dapibus. Vivamus lectus neque, interdum id enim ut, laoreet dignissim mauris. I200",
        state: true,
      },
      {
        id: "",
        name: "Area de exámenes",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam porta turpis sit amet ex fermentum, vitae pretium arcu dapibus. Vivamus lectus neque, interdum id enim ut, laoreet dignissim mauris. I200",
        state: true,
      },
      {
        id: "",
        name: "Area de exámenes",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam porta turpis sit amet ex fermentum, vitae pretium arcu dapibus. Vivamus lectus neque, interdum id enim ut, laoreet dignissim mauris. I200",
        state: true,
      },
      {
        id: "",
        name: "Area de exámenes",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam porta turpis sit amet ex fermentum, vitae pretium arcu dapibus. Vivamus lectus neque, interdum id enim ut, laoreet dignissim mauris. I200",
        state: true,
      },
      {
        id: "",
        name: "Area de exámenes",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam porta turpis sit amet ex fermentum, vitae pretium arcu dapibus. Vivamus lectus neque, interdum id enim ut, laoreet dignissim mauris. I200",
        state: true,
      },
    ],
  }),
};
</script>