<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <carousel />
      </v-col>
    </v-row>

    <v-row class="mx-2 mt-6 d-block d-md-none">
      <v-col cols="12">
        <div class="text-h6 text-sm-h5 text-center text-sm-left">
          Nuestros colaboradores
        </div>

        <v-divider></v-divider>
      </v-col>
    </v-row>

    <v-row class="my-6 my-md-16 mx-md-2 mx-lg-4">
      <v-col xs="12" md="7" xl="9">
        <member-slide />
      </v-col>

      <v-col xs="12" md="5" xl="3" class="d-none d-md-block">
        <div class="text-h6 text-sm-h5 text-center text-sm-left my-4">
          Nuestros colaboradores
        </div>

        <p class="text-justify">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio
          eum iste optio repudiandae architecto, quod reiciendis, rerum rem
          dolorem nihil ex! Minus totam consequatur autem mollitia ea atque eos
          eaque nam! Quos dolor voluptate perferendis esse natus quia inventore
          obcaecati, tempora ex explicabo adipisci recusandae eligendi molestiae
          vel, cum cumque sapiente magni consequuntur alias dolorem fugit.
        </p></v-col
      >
    </v-row>

    <v-row class="mx-2 mt-6 d-block d-md-none">
      <v-col cols="12">
        <div class="text-h6 text-sm-h5 text-center text-sm-left">
          Áreas en las que nos especializamos
        </div>

        <v-divider></v-divider>
      </v-col>
    </v-row>

    <v-row class="my-6 my-md-16 mx-md-2 mx-lg-4">
      <v-col xs="12" md="5" lg="" xl="3" class="d-none d-md-block">
        <div class="text-h6 text-sm-h5 text-center text-sm-left my-4">
          Áreas en las que nos especializamos
        </div>

        <p class="text-justify">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio
          eum iste optio repudiandae architecto, quod reiciendis, rerum rem
          dolorem nihil ex! Minus totam consequatur autem mollitia ea atque eos
          eaque nam! Quos dolor voluptate perferendis esse natus quia inventore
          obcaecati, tempora ex explicabo adipisci recusandae eligendi molestiae
          vel, cum cumque sapiente magni consequuntur alias dolorem fugit.
        </p>
      </v-col>

      <v-col xs="12" md="7" xl="9">
        <area-slide />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import AreaSlide from "../../components/area/AreaSlide.vue";
import Carousel from "../../components/layout/Carousel.vue";
import MemberSlide from "../../components/member/MemberSlide.vue";

export default {
  components: { Carousel, MemberSlide, AreaSlide },
  data: () => ({}),
};
</script>
