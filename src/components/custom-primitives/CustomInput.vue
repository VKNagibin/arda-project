<template>
  <label v-if="$props.needLabel" for="$props.id"></label>
  <input
      :type="inputType"
      :placeholder="placeholder"
      class="font-roboto-bold text-[1.5rem] font-bold input py-2.5 text-arda-black bg-[white] input-bordered input-warning w-full"
      @input="handleInput"
  />
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    type: String,
    content: String,
    needLabel: Boolean,
    id: String,
  },

  methods: {
    handleInput(e: KeyboardEvent) {
      const value = (e.currentTarget as HTMLInputElement).value;
      this.$emit("customInput", value);
    }
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
