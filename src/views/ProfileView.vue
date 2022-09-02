<template>
  <div class="flex flex-col w-full items-center">
    <HeaderSection :signed-in="true"/>
    <page-container>
      <router-view></router-view>
    </page-container>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import HeaderSection from "@/components/sections/HeaderSection.vue";
import PageContainer from "@/components/custom-primitives/PageContainer.vue";

export default defineComponent({
  components: {
    HeaderSection,
    PageContainer,
  }
}) as any;

</script>