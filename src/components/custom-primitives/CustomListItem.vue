<template>
    <li class="flex default-content text-left items-center gap-3">
        <img v-if="!hideMarkers" class="w-[20px]" :src="image" />
      <slot></slot>
    </li>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import image from "@/assets/images/arda-style-components/12.png"

export default defineComponent({
  data() {
    return {
      image: image,
    }
  },
  props: {
    hideMarkers: Boolean,
  }
})
</script>
