<template>
  <popup-component
      add-class="w-1/3 bg-white items-center md:px-sm space-y-10"
      form-animation="animate-close-forms"
      popup-animation="animate-close-pop"
      :centered="true"
      @closePopup="closeSignInPopup"
  >
    <span>(Логин: Admin Пароль: 12345)</span>
    <h3 class="text-center">Вход</h3>
    <CustomInput placeholder="Логин/электронная почта" @customInput="handleLoginInput"/>
    <custom-input placeholder="Пароль" type="password" @customInput="handlePasswordInput"/>
    <a
        class="text-arda-deep-orange"
        href=""
        @click.prevent="handleForgotPassword"
    >
      забыли пароль?
    </a>
    <button-component
        class="btn btn-outline will-change-transform"
        @click.prevent="handleEntryButton"
    >
      Войти
    </button-component>
  </popup-component>

  <teleport to="body">
    <ForgotPasswordPopup
        v-if="showForgotPasswordPopup"
        @closePopup="closeForgotPasswordPopup"
    />
  </teleport>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import PopupComponent from "@/components/custom-primitives/PopupComponent.vue";
import CustomInput from "@/components/custom-primitives/CustomInput.vue";
import ButtonComponent from "@/components/custom-primitives/ButtonComponent.vue";
import ForgotPasswordPopup from "@/components/popups/ForgotPasswordPopup.vue";

export default defineComponent({
  components: {
    PopupComponent,
    CustomInput,
    ButtonComponent,
    ForgotPasswordPopup,
  },

  emits: ["closePopup"],

  data() {
    return {
      showForgotPasswordPopup: false,
      loginInputValue: '',
      passwordInputValue: '',
    }
  },

  methods: {
    handlePasswordInput(value: string) {
        this.passwordInputValue = value;
      },
    handleLoginInput(value: string) {
      this.loginInputValue = value;
    },
    handleEntryButton() {
      if (this.loginInputValue !== "Admin") return
      if (this.passwordInputValue !== "12345") return
      this.$router.push("/profilePage/operativeInfo");
    },
    closeSignInPopup(id: string) {
      if (this.showForgotPasswordPopup) return
      this.$emit("closePopup");
    },
    handleForgotPassword() {
      this.showForgotPasswordPopup = true;
    },
    closeForgotPasswordPopup(id: string) {
      this.showForgotPasswordPopup = false
    }
  }
});

</script>