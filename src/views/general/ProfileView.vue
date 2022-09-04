<template>
  <div class="flex flex-col w-full items-center">
    <view-container>
      <Header :signed-in="true"/>
      <router-view />
      <Footer />
    </view-container>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Header from "@/components/sections/Header.vue";
import ViewContainer from "@/components/custom-primitives/ViewContainer.vue";
import Footer from "@/components/sections/Footer.vue";

export default defineComponent({
  components: {
    Header,
    ViewContainer,
    Footer,
  }
}) as any;

</script>