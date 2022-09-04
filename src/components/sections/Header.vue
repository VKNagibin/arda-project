<template>
  <div
      class="flex mb-[4rem] py-[1rem] items-center justify-between w-[90vw] rounded-b-md"
  >
    <Logo class="justify-start"/>
    <div class="flex items-center space-x-40  md:space-x-5 ">
      <a
          class="cursor-pointer text-gray-500 default-content hover:text-arda-orange will-change-color transition-colors duration-300 font-roboto"
          href="#"
      >
        it@arda.digital
      </a>
      <NavigationButton :signedIn="$props.signedIn"/>
    </div>
  </div>
</template>

<script lang="ts">
import ButtonComponent from "@/components/custom-primitives/ButtonComponent.vue";
import Logo from "@/components/custom-primitives/Logo.vue";
import NavigationButton from "@/components/custom-primitives/NavigationButton.vue";
import { defineComponent } from 'vue';

export default defineComponent({
  components: {
    Logo,
    ButtonComponent,
    NavigationButton,
  },

  props: {
    signedIn: Boolean,
  }

})
</script>
