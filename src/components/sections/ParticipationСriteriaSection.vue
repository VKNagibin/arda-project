<template>
  <card-component class="mb-md w-full xl:mb-sm" >
    <template v-slot:heading>
      <h2 class="font-oswald w-full pb-sm">Критерии участия</h2>
    </template>
    <template v-slot:default>
      <custom-list>
        <custom-list-item>
          наличие наемных сотрудников-программистов и готовность это подтвердить;
        </custom-list-item>
        <custom-list-item>
          действующее юрлицо, код ОКВЭД 62, работа в рамках законодательства РФ;
        </custom-list-item>
        <custom-list-item>
          на сайте четко перечислен стек технологий, разработка — ключевая услуга;
        </custom-list-item>
        <custom-list-item>
          подтверждение владения кодом: кейсы, открытые решения на GitHub, статьи на Хабре;
        </custom-list-item>
        <custom-list-item>
          понимание вреда white-label моделей и стремление работать с прямым заказчиком без посредников;
        </custom-list-item>
        <custom-list-item>
          членство в Ассоциации развития диджитал-агентств ARDA.
        </custom-list-item>
      </custom-list>
    </template>
  </card-component>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import CardComponent from "@/components/custom-primitives/CardComponent.vue";
import CustomListItem from "@/components/custom-primitives/CustomListItem.vue";
import CustomList from "@/components/custom-primitives/CustomList.vue";

export default defineComponent({
  components: {
    CardComponent,
    CustomListItem,
    CustomList,
  }
})
</script>
