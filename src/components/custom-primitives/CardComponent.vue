<template>
  <div
      class="card relative z-[-1] w-full h-full md:text-center items-center justify-center bg-base-100
       box-content shadow-xl xl:flex-col xl:h-min mb-lg md:mb-md"
      :class="{'card-side': $props.imageSrc, 'mb-0 md:mb-0': $props.resetMargins}"
  >
    <div
        class="card-body xl:px-4 xl:w-full xl:text-center"
        :class="$props.imageSrc ? 'w-[50%]' : 'w-full'"
    >
      <slot class="card-title" name="heading"></slot>
      <div class="flex flex-col w-full gap-y-10">
        <slot></slot>
      </div>
    </div>
    <figure class="w-[500px] sm:w-full self-center">
      <img class="w-[100%] object-contain object-center" v-if="$props.imageSrc" :src="imageSrc" :alt="$props.imageAlt">
    </figure>
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