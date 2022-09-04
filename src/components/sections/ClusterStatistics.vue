<template>
  <div class="flex flex-col w-full mb-md p-[2rem] border-[2px] border-arda-grey rounded-[6px]">
    <div class="flex w-full md:flex-col justify-between md:items-center mb-sm">
      <QuantityPattern number="300" title="агенств-участников"/>
      <QuantityPattern number="25" title="городов РФ"/>
      <QuantityPattern number="4000" title="сотрудников в агентствах-участниках"/>
    </div>

    <div class="flex w-full ml-auto md:justify-center justify-end">
        <button-component
            class="btn btn-outline flex"
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