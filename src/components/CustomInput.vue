<template>
  <input :type="inputType" :placeholder="placeholder" class="font-roboto-bold text-[1.5rem] font-bold input py-2.5 text-arda-black bg-[white] input-bordered input-warning w-full" />
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    type: String,
    content: String,
  },

  computed: {
    inputType(): string {
      return this.$props.type ? this.$props.type : "text";
    },
    placeholder(): string {
      return this.$props.content ? this.$props.content : "";
    }
  }
})
</script>
