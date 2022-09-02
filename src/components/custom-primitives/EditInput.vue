<template>
  <teleport to="body">
    <popup-component
        add-class="flex flex-col space-y-2.5"
        :centered="true"
        @closePopup="handleCloseInput"
        form-animation="animate-close-forms"
        popup-animation="animate-close-pop"
    >
      <custom-input
          class="h-[4rem]"
          type="text"
          @keydown.enter.prevent
          v-model="inputValue"
      />
      <div class="flex w-full justify-end space-x-2.5">
        <button-component
            @click.prevent="handleSaveButton"
        >
          Сохранить
        </button-component>

        <button-component
            class="btn btn-outline bg-white"
            @click.prevent="handleCloseInput"
        >
          Отмена
        </button-component>
      </div>
    </popup-component>
  </teleport>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import ButtonComponent from "@/components/custom-primitives/ButtonComponent.vue";
import PopupComponent from "@/components/custom-primitives/PopupComponent.vue";
import CustomInput from "@/components/custom-primitives/CustomInput.vue";

export default defineComponent({
  components: {
    CustomInput,
    ButtonComponent,
    PopupComponent,
  },
  props: {
    content: String
  },
  emits: ["closeEditInput", "saveInputContent"],

  data() {
    return {
      inputValue: this.$props.content,
    }
  },
  methods: {
    handleSaveButton() {
      this.$emit("saveInputContent", this.inputValue);
    },
    handleCloseInput() {
      this.$emit("closeEditInput");
    }
  },
})

</script>