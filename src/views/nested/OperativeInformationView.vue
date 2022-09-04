<template>
  <h1 class="page-heading">Гид по IT-кластеру ARDA</h1>
  <ITCluster />
  <div class="flex md:flex-col h-fit gap-[2rem] items-center">
    <ClusterAims class="basis-[50%] md:basis-[100%]"/>
    <AlreadyDone class="basis-[50%] md:basis-[100%]"/>
  </div>
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