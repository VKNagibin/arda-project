<template>
    <button-component class="w-1/3 self-center btn btn-outline font-roboto-bold md:text-[1rem] md:p-2 text-[2rem] box-content p-5 flex justify-center">
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
