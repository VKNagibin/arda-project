<template>
  <img
      class="block w-[80px] sm:w-[50px] fill-arda-orange cursor-pointer"
      :src="$props.white ? WhiteLogo : BlackLogo"
      alt="ARDA"
      @click="handleLogoClick"
  >
</template>

<script lang="ts">
import BlackLogo from "../../assets/images/arda-style-components/logo-black.png"
import WhiteLogo from "../../assets/images/arda-style-components/logo-white.png"
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    white: String,
  },

  data() {
    return {
      BlackLogo,
      WhiteLogo,
    }
  },

  methods: {
    handleLogoClick() {
      this.$router.push("/");
    }
  }
})
</script>