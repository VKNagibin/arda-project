<template>
  <div class="flex justify-around md:space-y-md sm:space-y-sm items-center md:flex-col bg-arda-black w-full py-md sm:py-sm">
    <Logo class="w-[200px] sm:w-[100px] md:w-[150px] object-contain" white="true" />
    <link-component class="text-[1.5rem] cursor-pointer border-none transition-colors duration-300 text-arda-orange font-roboto hover:text-arda-orange hover:border-arda-orange italic"
                    href="#">
      it@arda.digital
    </link-component>
    <link-component href="https://vc.ru/u/1119860-arda" class="border-none sm:w-[100px] will-change-transform hover:scale-[105%]  transition-transform duration-300">
      <img class="w-[100px] md:w-[100px] " :src="VCLogo" alt="VC.RU">
    </link-component>
  </div>

  <div class="py-1.5 w-[100vw] bg-arda-grey text-[1.5rem] sm:text-[1rem] text-center">
    ARDA(c)
    <a href="#" class="text-arda-deep-orange">
      Политика конфиденциальности.
    </a>
    Информация на сайте не является публичной офертой
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Logo from "@/components/Logo.vue";
import LinkComponent from "@/components/LinkComponent.vue";
import VCLogo from "@/assets/images/vc.png"

export default defineComponent({
  components: {
    Logo,
    LinkComponent,
  },
  data() {
    return {
      VCLogo,
    }
  }
});

</script>