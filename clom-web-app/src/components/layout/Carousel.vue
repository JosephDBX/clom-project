<template>
  <v-carousel cycle interval="15000" show-arrows-on-hover>
    <v-carousel-item v-for="(item, i) in items" :key="i" :src="item.src">
      <v-sheet :style="item.style" height="110%" tile>
        <v-row class="fill-height" align="center" justify="center">
          <v-col cols="11">
            <h2
              class="display-2 text-justify font-weight-bold hidden-md-and-down"
            >
              {{ item.title }}
            </h2>

            <h2
              class="display-2 text-center text-md-justify font-weight-bold hidden-lg-and-up"
            >
              {{ item.subtitle }}
            </h2>

            <p
              class="my-4 my-sm-8 text-center text-md-justify font-weight-medium"
            >
              {{ item.text }}
            </p>
          </v-col>
        </v-row>
      </v-sheet>
    </v-carousel-item>
  </v-carousel>
</template>

<script>
export default {
  data: () => ({
    items: [
      //{ src: require("@/assets/bgs/cover.jpg") },
      {
        src: "https://picsum.photos/id/596/1920/1080",
        style: {
          background: "linear-gradient(145deg, #1565C0D0 10%, #000000E0 90%)",
        },
        title: "Laboratorio Clínico Bacteriológico Moncada",
        subtitle: "LCBM",
        text: "Exámenes de laboratorio clínico y ecografías a domicilio",
      },
      {
        src: "https://picsum.photos/id/490/1920/1080",
        style: {
          background: "linear-gradient(145deg, #1565C0D0 10%, #000000E0 90%)",
        },
        title: "Exámes de laboratorio",
        subtitle: "Exámenes",
        text:
          "Ofrecemos la más alta gama en exámenes de laboratorio y ecografía a color",
      },
    ],
  }),
};
</script>