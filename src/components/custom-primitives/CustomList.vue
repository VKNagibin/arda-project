<template>
  <div class="flex flex-col w-full gap-[1.5rem]">
    <h3 class="section-heading">
      <slot name="heading"></slot>
    </h3>
    <ol class="flex flex-col gap-[1rem]">
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
