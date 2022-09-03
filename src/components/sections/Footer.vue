<template>
  <div class="flex w-screen overflow-hidden flex-col">
  <div class="flex justify-around md:space-y-md sm:space-y-sm items-center md:flex-col bg-arda-black w-full py-md sm:py-sm">
    <Logo class="w-[200px] sm:w-[100px] md:w-[150px] object-contain" white="true" />
    <a class="text-[1.5rem] cursor-pointer border-none transition-colors duration-300 text-arda-orange font-roboto hover:text-arda-orange hover:border-arda-orange italic"
                    href="#">
      it@arda.digital
    </a>
    <a href="https://vc.ru/u/1119860-arda" class="border-none sm:w-[100px] will-change-transform hover:scale-[105%]  transition-transform duration-300">
      <img class="w-[100px] md:w-[100px] " :src="VCLogo" alt="VC.RU">
    </a>
  </div>
  <div class="py-1.5 w-full bg-arda-grey text-[1.5rem] sm:text-[1rem] text-center">
    ARDA(c)
    <a href="#" class="text-arda-deep-orange">
      Политика конфиденциальности.
    </a>
    Информация на сайте не является публичной офертой
  </div>
  </div>


</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Logo from "@/components/custom-primitives/Logo.vue";
import VCLogo from "@/assets/images/arda-style-components/vc.png"

export default defineComponent({
  components: {
    Logo,
  },
  data() {
    return {
      VCLogo,
    }
  }
});

</script>