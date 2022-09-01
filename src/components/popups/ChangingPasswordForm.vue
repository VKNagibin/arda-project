<template>
  <popup-component
      popupAnimation="animate-close-popup"
      formAnimation="animate-close-form"
      add-class="p-40px gap-y-md bg-white"
      :centered="true"
  >
    <h3 class="font-roboto-bold text-center">Изменить пароль</h3>
    <div class="flex flex-col gap-y-sm">
      <label for="oldPassword">Старый пароль:</label>
        <custom-input id="oldPassword" type="password" label="Старый пароль:" placeholder="старый пароль"/>

      <label for="newPassword">Новый пароль:</label>
        <custom-input id="newPassword" type="newPassword" placeholder="новый пароль"/>

      <label for="newPasswordAgain">Новый пароль ещё раз:</label>
        <custom-input id="newPasswordAgain" type="password" placeholder="новый пароль ещё раз"/>
    </div>

    <button type="button" class="btn">Принять</button>
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
  }

})
</script>
