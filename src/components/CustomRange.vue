<template>
    <input
        type="range"
        min="0"
        max="10"
        :value="inputValue"
        class="range relative range-xs"
        step="1"
    />
    <div class="flex justify-between text-xs">
      <span v-for="(i, index) in [...Array(11)] ">{{ index }}</span>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    type: String,
    content: String,
    min: {
      type: Number,
      required: true,
    },
    max: {
      type: Number,
      required: true,
    },
  },

  data() {
    return {
      inputValue: (this.$props.max - this.$props.min) / 2
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
