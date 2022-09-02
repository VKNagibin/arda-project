<template>
  <card-component class="w-full">

    <template v-slot:heading>
      <h3 class="-heading">Цели кластера</h3>
    </template>

    <template v-slot:default>
      <custom-list>
        <custom-list-item>
          Консолидировать рынок;
        </custom-list-item>
        <custom-list-item>
          Обучить клиента;
        </custom-list-item>
        <custom-list-item>
          Выделить IT-поставщиков на рынке заказной разработки;
        </custom-list-item>
        <custom-list-item>
          Сократить влияние посредников;
        </custom-list-item>
        <custom-list-item>
          Повысить престиж сервисных компаний на рынке кадров;
        </custom-list-item>
      </custom-list>
      <span>
        Подробнее можно ознакомиться на сайте:
        <a class="text-arda-deep-orange" href=" https://arda.digital/">
          https://arda.digital/
        </a>
      </span>

    </template>
  </card-component>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import CustomList from "@/components/custom-primitives/CustomList.vue";
import CustomListItem from "@/components/custom-primitives/CustomListItem.vue";
import CardComponent from "@/components/custom-primitives/CardComponent.vue";

export default defineComponent({
  components: {
    CardComponent,
    CustomList,
    CustomListItem,
  }

})
</script>


