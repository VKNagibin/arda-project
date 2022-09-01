<template>
    <li class="flex items-center gap-3">
      <span v-if="!hideMarkers">
        <BIconCaretRightFill class="text-[1.5rem] text-arda-orange"/>
      </span>
      <slot></slot>
    </li>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    hideMarkers: Boolean,
  }
})
</script>
