<template>
  <popup-component
      add-class="text-[1rem] w-1/2 px-[2rem] lg:w-2/3 md:w-[90%]
         space-y-5 bg-white rounded-md relative z-20 flex flex-col mt-[10vh] mb-[10vh]"
      form-animation="animate-close-forms"
      popup-animation="animate-close-pop"
      :need-own-scrollbar="true"
          >
      <div>
        <h2 class="text-[1.5rem] text-center">
          ВСТУПИТЬ В ИТ-КЛАСТЕР
        </h2>
        <span class="block text-center font-roboto">
          Заполните заявку, чтобы присоединиться к сообществу
        </span>
      </div>

      <CustomInput type="email" placeholder="E-mail"/>
      <CustomInput placeholder="Имя"/>
      <CustomInput placeholder="Фамилия"/>
      <CustomInput placeholder="Должость"/>
      <CustomInput placeholder="Название компании"/>
      <CustomInput placeholder="Ссылка на сайт компании"/>

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
          class="btn btn-outline text-white uppercase rounded-xl"
          @click.prevent
      >
        Отправить заявку
      </button-component>

  </popup-component>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import CustomInput from "@/components/custom-primitives/CustomInput.vue";
import CustomRadio from "@/components/custom-primitives/CustomRadio.vue";
import CustomRange from "@/components/custom-primitives/CustomRange.vue";
import ButtonComponent from "@/components/custom-primitives/ButtonComponent.vue";
import CustomCheckbox from "@/components/custom-primitives/CustomCheckbox.vue";
import PopupComponent from "@/components/custom-primitives/PopupComponent.vue";

export default defineComponent({
  components: {
    ButtonComponent,
    CustomInput,
    CustomRadio,
    CustomRange,
    CustomCheckbox,
    PopupComponent,
  },
})
</script>
