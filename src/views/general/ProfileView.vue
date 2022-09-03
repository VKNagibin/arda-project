<template>
  <div class="flex flex-col w-full items-center">
    <Header :signed-in="true"/>
    <view-container>
      <router-view />
    </view-container>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Header from "@/components/sections/Header.vue";
import ViewContainer from "@/components/custom-primitives/ViewContainer.vue";

export default defineComponent({
  components: {
    Header,
    ViewContainer,
  }
}) as any;

</script>