<template>
    <button-component class="btn btn-outline flex">
      Хочу в ARDA
    </button-component>

</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ButtonComponent from "@/components/custom-primitives/ButtonComponent.vue";

export default defineComponent({
  components: {
    ButtonComponent

  }
})
</script>
