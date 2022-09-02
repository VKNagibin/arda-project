<template>
  <div
      class="card w-full h-full md:text-center items-center
       justify-center bg-base-100 box-content shadow-xl xl:flex-col xl:h-min mb-[4rem]"
      :class="{ 'mb-0 md:mb-0': $props.resetMargins }"
  >
    <div class="bg-white w-full p-[1rem] xl:w-full xl:text-center">
      <h3 class="section-heading">
        <slot name="heading"></slot>
      </h3>
      <div class="flex flex-col w-full gap-y-10">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    resetMargins: Boolean,
    imageSrc: String,
    imageAlt: String
  },
});
</script>