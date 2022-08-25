<template>
  <button>
    <slot name="leftIcon"></slot>
    <slot></slot>
    <slot name="rightIcon"></slot>
  </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    scale: {
      required: false,
    },
    hoverTransform: {
      type: String,
      required: false,
    }
  },

  computed: {
    buttonScale() {
      return this.$props.scale || '1';
    }
  },
})
</script>
