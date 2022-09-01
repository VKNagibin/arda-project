<template>
  <card-component class="mb-lg w-full" >

    <template v-slot:heading>
      <h2 class="font-oswald w-full pb-sm">Что уже сделано</h2>
    </template>

    <template v-slot:default>
      <custom-list>
        <custom-list-item>
          Анонсировали создание кластера в августе 2021;
        </custom-list-item>
        <custom-list-item>
          +23 IT-компаний официально вступили в ассоциацию;
        </custom-list-item>
        <custom-list-item>
          +67 участников в телеграм чате руководителей IT-компаний;
        </custom-list-item>
        <custom-list-item>
          Запустили блог ассоциации на VC
        </custom-list-item>
        <custom-list-item>
          4 онлайн-митапа;
        </custom-list-item>
        <custom-list-item>
          4 встречи пилотной рабочей группы;
        </custom-list-item>
        <custom-list-item>
          Релиз первой версии глоссария;
        </custom-list-item>
        <custom-list-item>
          Релиз первой версии отраслевого стандарта.
        </custom-list-item>
      </custom-list>
    </template>

  </card-component>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import CardComponent from "@/components/custom-primitives/CardComponent.vue";
import CustomList from "@/components/custom-primitives/CustomList.vue";
import CustomListItem from "@/components/custom-primitives/CustomListItem.vue";

export default defineComponent({
  components: {
    CardComponent,
    CustomList,
    CustomListItem,
  }
});
</script>