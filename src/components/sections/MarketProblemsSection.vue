<template>
  <card-component class="mb-lg" >
    <template v-slot:heading>
      <h2 class="font-oswald w-full pb-sm">Проблемы рынка</h2>
    </template>
    <template v-slot:default>
      <custom-list>
        <custom-list-item >
          Нет согласованности между поставщиками: под одними и теми же названиями скрывается разное понимание форматов оказания услуг;
        </custom-list-item>
        <custom-list-item >
          Посредничество без добавленной ценности: агентства-брокеры продают специалистов от партнеров под видом штатных (white-label);
        </custom-list-item>
        <custom-list-item >
          Субподрядные цепочки в несколько звеньев: специалистов перепродают по завышенным ставкам, что подрывает доверие заказчиков услуги;
        </custom-list-item>
        <custom-list-item >
          Отсутсвие внутренней конкурениции: все чаще заказчик выбирает не между поставщиками, а между аутсорсингом услуги и наймом в штат;
        </custom-list-item>
      </custom-list>
    </template>
  </card-component>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import CardComponent from "@/components/CardComponent.vue";
import CustomListItem from "@/components/CustomListItem.vue";
import CustomList from "@/components/CustomList.vue";

export default defineComponent({
  components: {
    CardComponent,
    CustomListItem,
    CustomList,
  }
})
</script>
