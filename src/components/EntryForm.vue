<template>
    <div
        class="fixed flex flex-col animate-popup will-change-transform items-center top-0 right-0 bottom-0 left-0 overflow-y-scroll bg-popup z-10"
        @click="(e) => closePopupOnClick(e)"
        ref="popup"
    >
      <button
          class="absolute top-[10px] z-30 right-[10px] cursor-pointer
           after:absolute after:top-0 after:bottom-0 after:left-0 after:right-0"
          @click="(e) => closePopupOnClick(e)">
          <BIconXLg
              class="text-[4rem]  w-max text-white"
          />
      </button>

      <form
          name="enterOurTeam"
          action=""
          class="text-[1rem] w-1/2 mt-[10vh] will-change-transform animate-form mb-[10vh] sm:w-[95%]  flex xl:px-sm lg:w-2/3 md:w-[90%] flex-col space-y-5 px-lg  py-md bg-white rounded-md relative z-20 flex flex-col"
          ref="form"
      >
        <div>
          <h2 class="font-oswald text-[2rem] sm:text-[1.5rem] text-center">
            ВСТУПИТЬ В ИТ-КЛАСТЕР
          </h2>
          <span class="block text-center font-roboto">
            Заполните заявку, чтобы присоединиться к сообществу
          </span>
        </div>
        <CustomInput type="email" content="E-mail"/>
        <CustomInput content="Имя"/>
        <CustomInput content="Фамилия"/>
        <CustomInput content="Должость"/>
        <CustomInput content="Название компании"/>
        <CustomInput content="Ссылка на сайт компании"/>
        <h4 class="font-bold font-roboto-bold" >
          Программисты составляют бОльшую долю штата наемных сотрудников?
        </h4>
        <CustomRadio :options="['Да', 'Нет']"/>
        <h4 class="font-bold font-roboto-bold" >
          Оцените, насколько стабильность вашей компании зависит от посредников?
        </h4>
        <span>
          0 — совсем не зависит, есть свой отдел продаж, и 10 — совсем не налажен маркетинг и продажи, полностью зависит.
        </span>
        <CustomRange :min="0" :max="10"/>
        <h4 class="font-bold font-roboto-bold" >
          Есть ли у вас опыт работы по модели аутстаффинг в роли поставщика или заказчика?
        </h4>
        <CustomRadio :options="['Да', 'Нет']"/>
        <h4 class="font-bold font-roboto-bold" >
          Есть ли у вас опыт работы по модели аутстаффинг в роли поставщика или заказчика?
        </h4>
        <span>0 — негативно, не работаю с перекупщиками, а 10 — положительно, не вижу проблем.</span>
        <CustomRange  :min="0" :max="10"/>
        <div class="flex h-[40px] space-x-[20px] items-center">
          <custom-checkbox>
            Я согласен с политикой конфиденциальности
          </custom-checkbox>
        </div>
        <button-component
            class="btn bg-arda-black text-white uppercase p-3 rounded-xl"
            @click.prevent
        >
          Отправить заявку
        </button-component>
      </form>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import CustomInput from "@/components/CustomInput.vue";
import CustomRadio from "@/components/CustomRadio.vue";
import CustomRange from "@/components/CustomRange.vue";
import ButtonComponent from "@/components/ButtonComponent.vue";
import CustomCheckbox from "@/components/CustomCheckbox.vue";

export default defineComponent({
  components: {
    ButtonComponent,
    CustomInput,
    CustomRadio,
    CustomRange,
    CustomCheckbox,
  },

  emits: ["closePopup"],

  methods: {
    toggleAnimationClasses() {
      (this.$refs.popup as HTMLDivElement).classList.toggle("animate-close-popup");
      (this.$refs.form as HTMLFormElement).classList.toggle("animate-close-form");
    },

    closePopup() {
      this.toggleAnimationClasses();
      setTimeout(() => {
        this.toggleAnimationClasses();
        this.$emit("closePopup");
        document.body.style.overflow = "auto";
      }, 400);
    },

    closePopupOnClick(e: MouseEvent) {
      if ( e.target !== e.currentTarget ) return
      this.closePopup();
    },

    handleEscClick(e: KeyboardEvent): void {
      if (e.key !== "Escape") return;
      this.closePopup();
    },
  },

  beforeUnmount() {
    window.removeEventListener("keydown", this.handleEscClick);
  },

  mounted() {
    window.addEventListener("keydown", this.handleEscClick);
  }


})
</script>
