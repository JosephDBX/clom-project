<template>
  <v-slide-group show-arrows v-model="model" center-active>
    <span class="mx-auto d-block d-md-none"></span>

    <v-slide-item
      v-for="(area, index) in areas"
      :key="index"
      v-slot="{ active, toggle }"
    >
      <area-slide-item :area="area" :active="active" :toggle="toggle" />
    </v-slide-item>

    <v-slide-item>
      <v-btn class="mx-2 my-16" plain>Ver más...</v-btn>
    </v-slide-item>

    <span class="mx-auto"></span>
  </v-slide-group>
</template>

<script>
import AreaSlideItem from "./AreaSlideItem.vue";

export default {
  components: { AreaSlideItem },
  data: () => ({
    model: null,
    areas: [
      {
        id: "",
        name: "Área de exámenes",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam porta turpis sit amet ex fermentum, vitae pretium arcu dapibus. Vivamus lectus neque, interdum id enim ut, laoreet dignissim mauris. I200",
        state: true,
      },
      {
        id: "",
        name: "Área de exámenes",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam porta turpis sit amet ex fermentum, vitae pretium arcu dapibus. Vivamus lectus neque, interdum id enim ut, laoreet dignissim mauris. I200",
        state: true,
      },
      {
        id: "",
        name: "Área de exámenes",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam porta turpis sit amet ex fermentum, vitae pretium arcu dapibus. Vivamus lectus neque, interdum id enim ut, laoreet dignissim mauris. I200",
        state: true,
      },
      {
        id: "",
        name: "Área de exámenes",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam porta turpis sit amet ex fermentum, vitae pretium arcu dapibus. Vivamus lectus neque, interdum id enim ut, laoreet dignissim mauris. I200",
        state: true,
      },
      {
        id: "",
        name: "Área de exámenes",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam porta turpis sit amet ex fermentum, vitae pretium arcu dapibus. Vivamus lectus neque, interdum id enim ut, laoreet dignissim mauris. I200",
        state: true,
      },
    ],
  }),
};
</script>