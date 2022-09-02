<template>
  <div class="flex flex-col w-full">
    <slot name="heading"></slot>
    <ol class="flex flex-col gap-5">
      <slot></slot>
    </ol>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    heading: String,
  },
})
</script>
