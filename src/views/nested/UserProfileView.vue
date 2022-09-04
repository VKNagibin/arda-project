<template>
  <div class="flex section-heading w-full h-full flex-col mb-[4rem] gap-[1rem]">
    <h3 class="text-[1.5rem] text-left">
      Профиль
    </h3>

    <custom-list class="flex w-[50%] md:w-full p-[1rem]">
      <li
          v-for="(profileFieldValue, profileField) in user"
          class="flex w-full text-center items-center justify-between text-[1.3rem] gap-[1rem]"
      >

        <span class="md:text-center text-left basis-1/2">
          {{ profileField }}:
        </span>
        <span class="md:text-center text-left basis-1/2">
          {{ profileFieldValue }}
        </span>

      </li>
    </custom-list>

    <div class="flex gap-sm md:flex-col lg:self-center self-end">
      <button-component class="btn btn-outline text-[1rem] will-change-transform">
        Редактировать профиль
      </button-component>
      <button-component class="btn btn-outline will-change-transform">
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
