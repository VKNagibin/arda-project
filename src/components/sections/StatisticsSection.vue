<template>
  <div class="flex flex-col w-full mb-md p-[40px] border-[2px] border-arda-grey rounded-[6px]">
    <div class="flex w-full 2xl:flex-col justify-between md:items-center mb-sm">
      <QuantityPattern class="basis-1/3" number="300" title="агенств-участников" />
      <QuantityPattern class="basis-1/3" number="25" title="городов РФ" />
      <QuantityPattern class="basis-1/3" number="4000" title="сотрудников в агентствах-участниках" />
    </div>

    <div class="flex w-full ml-auto 2xl:justify-center justify-end">
        <a
            class="text-[2rem] flex hover:scale-[103%] transition-transform will-change-transform duration-200 items-center justify-center
            bg-black text-arda-orange border-[2px] border-arda-black"
            href="https://arda.digital/"
        >
          Подробнее
        </a>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import QuantityPattern from "@/components/custom-primitives/QuantityPattern.vue";

export default defineComponent({
  components: {
    QuantityPattern,
  }
});
</script>