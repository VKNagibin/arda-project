<template>
  <div class="flex flex-col relative items-center mb-md">
    <div class="flex items-center w-min">
      <span class="translate-y-[10px] translate-x-[-5px]">
        <ChevronRight class="fill-arda-orange" />
        <ChevronRight
            class="fill-arda-black absolute top-0 right-0 bottom-0 left-1" width="70px" height="70px"
        />
      </span>
      <div class="text-[8rem] 2xl:text-[10rem] sm:text-[6rem] flex items-start font-roboto-bold relative text-arda-orange font-bold leading-none">
        {{ $props.number }}
        <div class="text-gray-900 absolute top-0 right-0 bottom-0 left-[-6px] font-normal">
          {{ $props.number }}
        </div>
      </div>
    </div>
    <span class="text-[2rem] w-full font-oswald text-center">{{ $props.title }}</span>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ChevronRight from "@/components/ChevronRight.vue";

export default defineComponent({
  components: {
    ChevronRight
  },
  props: {
    number: String,
    title: String,
  }
});

</script>