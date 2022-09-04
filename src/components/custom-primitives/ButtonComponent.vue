<template>
  <button class="flex default-content p-[.3rem_.6rem] items-center justify-center font-roboto">
    <slot name="leftIcon"></slot>
    <slot></slot>
    <slot name="rightIcon"></slot>
  </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({

})
</script>
