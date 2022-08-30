<template>
  <a :href="$props.href" class="block p-[10px_10px] border-[1px] rounded-md">
    <slot></slot>
  </a>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    href: {
      type: String,
      required: true,
    },
  }
})
</script>
