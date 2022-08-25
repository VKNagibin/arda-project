<template>
  <img
      class="block w-[100px] fill-arda-orange cursor-pointer"
      :src="logo"
      alt="ARDA"
      @click="handleLogoClick"
  >
</template>

<script lang="ts">
import logo from "../assets/images/logo.png"
import { defineComponent } from 'vue';

export default defineComponent({
  data() {
    return {
      logo,
    }
  },

  methods: {
    handleLogoClick() {
      this.$router.push("/");
    }
  }
})
</script>