<template>
  <popup-component
      :isNavbar="true"
      class="overflow-hidden"
      popup-animation="animate-close-pop"
      form-animation="animate-close-menu"
      @closePopup="closeMenu"
  >
    <navbar-item @click="handleShowingProfile">Профиль</navbar-item>
    <navbar-item v-scroll-to="'#operativeInfo'" >Оперативная информация</navbar-item>
    <navbar-item v-scroll-to="'#standards'" >Стандарты</navbar-item>
    <navbar-item v-scroll-to="'#webinars'" >Вебинары</navbar-item>
    <navbar-item>Ресурсная карта</navbar-item>
    <navbar-item>Календарь мероприятий</navbar-item>
    <navbar-item>FAQ</navbar-item>
    <navbar-item>Обмен лидами/клиентами</navbar-item>
    <navbar-item>Полезные ссылки</navbar-item>
  </popup-component>
</template>

<script lang="ts">
import NavbarItem from "@/components/custom-primitives/NavbarItem.vue";
import PopupComponent from "@/components/custom-primitives/PopupComponent.vue";

import { defineComponent } from 'vue';

export default defineComponent({
  components: {
    NavbarItem,
    PopupComponent,
  },

  emits: ["closeMenu", "openProfile"],

  methods: {
    handleShowingProfile() {
      this.$emit("openProfile");
    },
    closeMenu() {
      this.$emit("closeMenu");
    }
  },


  beforeMount() {
    document.body.style.overflowX = "hidden";
  }



})
</script>