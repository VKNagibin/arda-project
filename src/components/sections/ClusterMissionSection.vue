<template>
  <card-component class="mb-lg" >
    <template v-slot:heading>
      <h2 class="font-oswald w-full pb-sm">Миссия кластера</h2>
    </template>
    <template v-slot:default>
      <custom-list>
        <custom-list-item>
          Консолидация рынка;
        </custom-list-item>
        <custom-list-item>
          Снижение влияния посредников;
        </custom-list-item>
        <custom-list-item>
          Обучение клиента;
        </custom-list-item>
        <custom-list-item>
          Повышение престижа на кадровом рынке;
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
