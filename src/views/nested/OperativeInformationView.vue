<template>
  <h1 class="page-heading">Гид по IT-кластеру ARDA</h1>
  <ITCluster />
  <ClusterAims id="operativeInfo"/>
  <AlreadyDone />
  <Footer />
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import ITCluster from "@/components/sections/ITCluster.vue";
import ClusterAims from "@/components/sections/ClusterAims.vue";
import AlreadyDone from "@/components/sections/AlreadyDone.vue";
import Footer from "@/components/sections/Footer.vue";


export default defineComponent({
  components: {
    ITCluster,
    ClusterAims,
    AlreadyDone,
    Footer,
  },

})
</script>