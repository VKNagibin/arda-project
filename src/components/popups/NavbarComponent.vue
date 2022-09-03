<template>
  <popup-component
      :isNavbar="true"
      add-class="overflow-hidden bg-black"
      popup-animation="hide-popup"
      form-animation="hide-menu"
      @closePopup="closeMenu"
  >
    <navbar-item to="profile">Профиль</navbar-item>
    <navbar-item to="operativeInfo" >Оперативная информация</navbar-item>
    <navbar-item to="standards">Стандарты</navbar-item>
    <navbar-item to="webinars">Вебинары</navbar-item>
    <navbar-item to="resourceCard">Ресурсная карта</navbar-item>
<!--    <navbar-item>Календарь мероприятий</navbar-item>-->
<!--    <navbar-item>FAQ</navbar-item>-->
<!--    <navbar-item>Обмен лидами/клиентами</navbar-item>-->
<!--    <navbar-item>Полезные ссылки</navbar-item>-->
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
    closeMenu() {
      this.$emit("closeMenu");
    }
  },

  beforeMount() {
    document.body.style.overflowX = "hidden";
  }

})
</script>