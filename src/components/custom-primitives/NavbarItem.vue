<template>
  <li
      class="text-white relative py-3 pl-sm before:content-[''] before:will-change-transform
       before:absolute border-l-2 border-arda-orange w-[70%]
       before:bg-arda-menu-color overflow-hidden before:z-[-1]
       hover:before:animate-menu-item-hover before:h-full cursor-pointer
       before:bottom-0 before:left-[-100%] before:w-full"
  >
    <slot></slot>
  </li>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({

})
</script>