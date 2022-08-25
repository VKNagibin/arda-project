<template>
  <div class="flex shadow-lg px-[5%] items-center justify-between h-[10vh] w-[98vw]  rounded-b-2xl">
    <Logo />
    <a class="text-2xl font-oswald underline" href="#">
      it@arda.digital
    </a>
    <div class="flex h-full flex-col items-center justify-center gap-y-1" >
      <button-component class="flex items-center text-[3rem]">
        <template v-slot:leftIcon>
          <BIconPersonCircle />
        </template>
      </button-component>
      <a class="font-roboto" href="#">Войти</a>
    </div>
  </div>
</template>

<script lang="ts">
import ButtonComponent from "@/components/ButtonComponent.vue";
import Logo from "@/components/Logo.vue";
import { defineComponent } from 'vue';

export default defineComponent({
  components: {
    Logo,
    ButtonComponent,
  }
})
</script>
