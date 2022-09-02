<template>
  <popup-component
      form-animation="animate-close-forms"
      popup-animation="animate-close-pop"
      add-class="p-40px gap-y-md bg-white"
      :centered="true"
      @closePopup="handleClosePopup"
  >
    <h3 class="font-roboto-bold text-center">Изменить пароль</h3>
    <div class="flex flex-col gap-y-sm">
      <custom-input id="oldPassword" type="password" label="Старый пароль:" placeholder="старый пароль"/>
      <custom-input id="newPassword" type="password" label="Новый пароль:" placeholder="новый пароль"/>
      <custom-input id="newPasswordAgain" type="password" label="Новый пароль ещё раз:" placeholder="новый пароль ещё раз"/>
      </div>
    <button
        type="button"
        class="btn"
        @click="handleClosePopup"
    >Принять</button>
  </popup-component>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import PopupComponent from "@/components/custom-primitives/PopupComponent.vue";
import CustomInput from "@/components/custom-primitives/CustomInput.vue";

export default defineComponent({
  components: {
    PopupComponent,
    CustomInput,
  },

  emits: ["closePopup"],

  methods: {
    handleClosePopup() {
      this.$emit("closePopup");
    }
  }

})
</script>