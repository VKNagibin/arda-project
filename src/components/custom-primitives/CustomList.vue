<template>
  <div
      class="flex gap-[1.5rem] flex-col"
  >
    <h3 class="section-heading">
      <slot name="heading"></slot>
    </h3>
    <ol
        class="flex gap-[1rem]"
        :class="$props.row ? 'flex-row' : 'flex-col w-full'"
    >
      <slot></slot>
    </ol>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    row: Boolean,
    heading: String,
  },
})
</script>
