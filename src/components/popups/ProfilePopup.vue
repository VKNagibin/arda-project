<template>
  <popup-component
      form-animation="animate-close-forms"
      popup-animation="animate-close-pop"
      @closePopup="handleCloseProfile"
      :centered="true"
      add-class="bg-white p-[20px] items-center overflow-hidden"
  >
    <div class="flex w-full items-center mb-md">
      <h3 class="w-full text-[3rem] font-bold ">Профиль</h3>
      <button
          type="button"
          class="btn btn-outline text-[1rem]  will-change-transform"
          @click="handleChangePasswordButton"
      >
        Изменить пароль
      </button>
    </div>
    <custom-list class="flex flex-col justify-around h-full w-[100%]">
      <EditableListItem :disabled="true" content="example.com">
        Электронная почта:
      </EditableListItem>
      <EditableListItem content="Иван">
        Имя:
      </EditableListItem>
      <EditableListItem content="Иванов">
        Фамилия:
      </EditableListItem>
      <EditableListItem content="ExampleTeam">
        Компания:
      </EditableListItem>
      <EditableListItem content="Директор филиала">
        Должность:
      </EditableListItem>
    </custom-list>
  </popup-component>

  <teleport to="body">
    <ChangingPasswordForm v-if="showChangingPasswordForm"/>
  </teleport>

</template>

<script lang="ts">
import { defineComponent } from 'vue';
import PopupComponent from "@/components/custom-primitives/PopupComponent.vue";
import CustomList from "@/components/custom-primitives/CustomList.vue";
import EditableListItem from "@/components/custom-primitives/EditableListItem.vue";
import ChangingPasswordForm from "@/components/popups/ChangingPasswordForm.vue";

export default defineComponent({
  components: {
    PopupComponent,
    CustomList,
    EditableListItem,
    ChangingPasswordForm,
  },

  data() {
    return {
      showChangingPasswordForm: false,
    }
  },

  methods: {
    handleCloseProfile() {
      this.$emit("closeProfile");
    },
    handleChangePasswordButton() {
      this.showChangingPasswordForm = true;
    },
  }

})
</script>
