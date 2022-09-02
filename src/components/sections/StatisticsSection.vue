<template>
  <div class="flex flex-col w-full mb-md p-[40px] border-[2px] border-arda-grey rounded-[6px]">
    <div class="flex w-full 2xl:flex-col justify-between md:items-center mb-sm">
      <QuantityPattern class="basis-1/3" number="300" title="агенств-участников" />
      <QuantityPattern class="basis-1/3" number="25" title="городов РФ" />
      <QuantityPattern class="basis-1/3" number="4000" title="сотрудников в агентствах-участниках" />
    </div>

    <div class="flex w-full ml-auto 2xl:justify-center justify-end">
        <button-component
            class="btn btn-outline flex py-sm text-[1.5rem]"
        >
          <a href="https://arda.digital/">
            Подробнее
          </a>
        </button-component>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import QuantityPattern from "@/components/custom-primitives/QuantityPattern.vue";
import ButtonComponent from "@/components/custom-primitives/ButtonComponent.vue";

export default defineComponent({
  components: {
    ButtonComponent,
    QuantityPattern,
  }
});
</script>