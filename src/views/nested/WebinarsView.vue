<template>
    <custom-list class="flex-wrap mb-[3rem]" :row="true">
      <template v-slot:heading>
        Вебинары
      </template>
        <webinar-component v-for="webinar in webinars" :link="webinar.link" :duration="webinar.duration">
          <template v-slot:title>
            {{ webinar.title }}
          </template>
          <template v-slot:description>
            <div v-html="webinar.description"></div>
          </template>
        </webinar-component>
    </custom-list>
  <WantToArdaComponent class="mb-lg md:mb-lg"/>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import CustomList from "@/components/custom-primitives/CustomList.vue";
import CardComponent from "@/components/custom-primitives/CardComponent.vue";
import WebinarComponent from "@/components/custom-primitives/WebinarComponent.vue";
import WantToArdaComponent from "@/components/custom-primitives/WantToArdaComponent.vue";
import Footer from "@/components/sections/Footer.vue";

import webinars from "@/configs/webinars";

export default defineComponent({
  components: {
    CardComponent,
    CustomList,
    WebinarComponent,
    WantToArdaComponent,
    Footer,
  },

  data() {
    return {
      webinars,
    }
  },


  mounted() {
    console.log(this.webinars);
  }
})
</script>
