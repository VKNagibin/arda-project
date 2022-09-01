<template>
  <li class="flex overflow-visible space-x-5 ">
    <div class="flex gap-x-2.5">
      <span
          class="block skew-item font-roboto before:bg-arda-deep-orange "
      >
        <slot></slot>
      </span>
      <div
          class="skew-item text-[2rem] before:border-[2px] before:border-arda-orange"
      >
        <input
            :disabled="$props.disabled"
            class="focus:outline-none disabled:bg-transparent"
            type="text"
            :value="$props.content"
        >
      </div>
    </div>
  </li>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import PopupComponent from "@/components/custom-primitives/PopupComponent.vue";
import CustomList from "@/components/custom-primitives/CustomList.vue";
import EditInput from "@/components/custom-primitives/EditInput.vue";

export default defineComponent({
  components: {
    PopupComponent,
    CustomList,
    EditInput,
  },

  props: {
    disabled: Boolean,
    content: String,
  },

  data() {
    return {
      showEditInput: false,
    }
  },

  methods: {
    handleCloseEditInput() {
      this.showEditInput = false;
    },
    handleEditingItem() {
      this.showEditInput = true;
    }
  }

})
</script>
