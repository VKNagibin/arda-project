<template>
  <popup-component
      add-class="w-1/4 bg-white justify-self-center overflow-hidden p-[40px] z-21 items-center space-y-10"
      :centered="true"
      form-animation="hide-form"
      popup-animation="hide-popup"
  >
    <span class="text-center">Оставьте заявку на it@arda.digital для восстановления пароля</span>
  </popup-component>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import PopupComponent from "@/components/custom-primitives/PopupComponent.vue";

export default defineComponent({
  components: {
    PopupComponent,
  }
})
</script>
