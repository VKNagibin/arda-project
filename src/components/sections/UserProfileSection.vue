<template>
  <div class="flex w-full h-full flex-col gap-md xl:gap-md">
      <h2>Профиль</h2>
    <custom-list class="flex flex-col justify-around h-full w-[100%] border-2 p-md md:p-sm">
      <li class="flex items-end text-[2rem] lg:text-[1.7rem] sm:text-[1.3rem] md:flex-col lg:items-start gap-5">
        Электронная почта: <span>{{ user["e-mail"] }}</span>
      </li>
      <li class="flex items-end text-[2rem] lg:text-[1.7rem] sm:text-[1.3rem]  md:flex-col lg:items-start gap-5">
        Имя: <span>{{ user.name }}</span>
      </li>
      <li class="flex items-end text-[2rem] lg:text-[1.7rem] sm:text-[1.3rem] md:flex-col lg:items-start gap-5">
        Фамилия: <span>{{ user.surname }}</span>
      </li>
      <li class="flex items-end text-[2rem] lg:text-[1.7rem] sm:text-[1.3rem] md:flex-col lg:items-start gap-5">
        Компания: <span>{{ user.company }}</span>
      </li>
      <li class="flex items-end text-[2rem] lg:text-[1.7rem] sm:text-[1.3rem] md:flex-col lg:items-start gap-5">
        Должность: <span>{{ user.position }}</span>
      </li>
    </custom-list>
    <div class="flex gap-sm md:flex-col lg:self-center self-end">
      <button-component class="btn btn-outline py-3 text-[1rem] box-content text-[1.5rem] will-change-transform">
        Редактировать профиль
      </button-component>
      <button-component class="btn btn-outline py-3 text-[1rem] box-content text-[1.5rem] will-change-transform">
        Изменить пароль
      </button-component>
    </div>

  </div>

</template>

<script lang="ts">
import { defineComponent } from 'vue';
import CustomList from "@/components/custom-primitives/CustomList.vue";
import ButtonComponent from "@/components/custom-primitives/ButtonComponent.vue";

import user from "@/configs/userData";

export default defineComponent({
  components: {
    ButtonComponent,
    CustomList,
  },

  emits: ["closeProfile"],

  data() {
    return {
      showChangingPasswordForm: false,
      user,
    }
  },

  methods: {
    handleCloseProfile() {
      if (this.showChangingPasswordForm) return
      this.$emit("closeProfile");
    },
  }
})
</script>
