<template>
  <div class="flex flex-col w-full items-center">
    <Header :signed-in="true"/>
    <page-container>
      <router-view></router-view>
    </page-container>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Header from "@/components/sections/Header.vue";
import PageContainer from "@/components/custom-primitives/PageContainer.vue";

export default defineComponent({
  components: {
    Header,
    PageContainer,
  }
}) as any;

</script>