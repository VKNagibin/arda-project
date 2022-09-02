<template>
  <h1 class="page-heading">Гид по IT-кластеру ARDA</h1>
  <ITClusterSection />
  <ClusterAimsSection id="operativeInfo"/>
  <AlreadyDoneSection />
  <FooterSection />
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import ITClusterSection from "@/components/sections/ITClusterSection.vue";
import ClusterAimsSection from "@/components/sections/ClusterAimsSection.vue";
import AlreadyDoneSection from "@/components/sections/AlreadyDoneSection.vue";
import FooterSection from "@/components/sections/FooterSection.vue";


export default defineComponent({
  components: {
    ITClusterSection,
    ClusterAimsSection,
    AlreadyDoneSection,
    FooterSection,
  },

})
</script>