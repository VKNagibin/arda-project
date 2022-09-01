<template>
  <card-component id="webinars">
    <template v-slot:heading>

      <h2 class="font-roboto-bold">Вебинары</h2>
      <custom-list>
        <webinar-component v-for="webinar in webinars" :link="webinar.link">
          <template v-slot:title>
            {{ webinar.title }}
          </template>
          <template v-slot:link>
            {{ webinar.link }}
          </template>
          <template v-slot:description>
            <div v-html="webinar.description"></div>
          </template>
        </webinar-component>
      </custom-list>
    </template>
  </card-component>
  <WantToArdaForm class="mb-lg md:mb-lg"/>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import CustomList from "@/components/custom-primitives/CustomList.vue";
import CardComponent from "@/components/custom-primitives/CardComponent.vue";
import WebinarComponent from "@/components/custom-primitives/WebinarComponent.vue";
import WantToArdaForm from "@/components/custom-primitives/WantToArdaForm.vue";

import webinars from "@/configs/webinars";

export default defineComponent({
  components: {
    CardComponent,
    CustomList,
    WebinarComponent,
    WantToArdaForm,
  },

  data() {
    return {
      webinars,
    }
  }
})
</script>
