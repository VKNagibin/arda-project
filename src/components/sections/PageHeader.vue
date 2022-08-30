<template>
  <div class="flex border-arda-grey border-[1px] border-t-0 px-[5%] py-[1vh] items-center justify-between w-[98vw] rounded-b-md md:justify-between">
    <Logo class="justify-start"/>
    <div class="flex items-center space-x-40 md:space-x-5 ">
      <LinkComponent
          class="text-2xl cursor-pointer text-arda-black hover:text-arda-orange will-change-color transition-colors duration-300 sm:text-lg font-roboto italic"
          href="#"
      >
        it@arda.digital
      </LinkComponent>
      <div class="flex group justify-center h-full flex-col ">
        <button-component class="flex items-center self-center">
          <template v-slot:leftIcon>
            <BIconPersonCircle class="text-[3rem] sm:text-[2rem] group-hover:text-arda-orange will-change-transform group-hover:scale-[103%] transition-all duration-200"/>
          </template>
        </button-component>
        <a class=" group-hover:text-arda-orange font-roboto will-change-transform group-hover:scale-[103%] transition-all duration-200" href="#">Войти</a>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import ButtonComponent from "@/components/ButtonComponent.vue";
import LinkComponent from "@/components/LinkComponent.vue";
import Logo from "@/components/Logo.vue";
import { defineComponent } from 'vue';

export default defineComponent({
  components: {
    Logo,
    ButtonComponent,
    LinkComponent,
  }
})
</script>
