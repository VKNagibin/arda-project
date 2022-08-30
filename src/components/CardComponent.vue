<template>
  <div class="card md:text-center w-full items-center card-side justify-center bg-base-100 box-content h-min shadow-xl min-h-min max-h-500px xl:flex-col xl:h-min">
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
    imageSrc: String,
    imageAlt: String
  },
});
</script>