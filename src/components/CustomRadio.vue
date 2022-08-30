<template>
    <div class="form-control w-[70px]" v-for="option in $props.options">
      <label class="label cursor-pointer flex items-center">
        <input type="radio" name="radio-6" class="mr-1.5 radio checked:bg-arda-orange border-2 border-arda-black" checked/>
        <span class="label-text font-roboto text-[1rem]">{{ option }}</span>
      </label>
    </div>

</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    options: Array,
  },
})
</script>