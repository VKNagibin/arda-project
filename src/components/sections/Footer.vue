<template>
  <div class="flex w-screen overflow-hidden justify-self-end flex-col">
  <div class="flex justify-around items-center bg-arda-black w-full py-[1rem]">
    <Logo class="w-[3rem] object-contain" white="true" />
    <a class="default-content cursor-pointer border-none transition-colors duration-300 text-arda-orange font-roboto hover:text-arda-orange hover:border-arda-orange"
                    href="#">
      it@arda.digital
    </a>
    <a href="https://vc.ru/u/1119860-arda" class="border-none w-[2rem] will-change-transform hover:scale-[105%]  transition-transform duration-300">
      <img :src="VCLogo" alt="VC.RU">
    </a>
  </div>
  <div class="py-1.5 w-full bg-arda-grey default-content md:text-[.8rem] text-center">
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