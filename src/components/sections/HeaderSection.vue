<template>
  <div
      class="flex border-arda-grey mb-lg sm:px-1 sm:mb-[5vh] border-[1px]
       border-t-0 px-[5%] py-[1vh] items-center justify-between w-[98vw] rounded-b-md"
  >
    <Logo class="justify-start"/>
    <div class="flex items-center space-x-40  md:space-x-5 ">
      <a
          class="text-2xl cursor-pointer text-arda-black hover:text-arda-orange will-change-color transition-colors duration-300 sm:text-lg font-roboto italic"
          href="#"
      >
        it@arda.digital
      </a>
      <ProfileButton  :signedIn="$props.signedIn"/>
    </div>
  </div>
</template>

<script lang="ts">
import ButtonComponent from "@/components/custom-primitives/ButtonComponent.vue";
import Logo from "@/components/custom-primitives/Logo.vue";
import ProfileButton from "@/components/custom-primitives/ProfileButton.vue";
import { defineComponent } from 'vue';

export default defineComponent({
  components: {
    Logo,
    ButtonComponent,
    ProfileButton,
  },

  props: {
    signedIn: Boolean,
  }

})
</script>
