<template>
  <card-component class="mb-lg" >
    <template v-slot:heading>
      <h2 class="font-oswald w-full pb-sm">Какую выгоду вы получаете лично для себя?</h2>
    </template>
    <template v-slot:default>
      <custom-list>
        <custom-list-item>
          качественный нетворкинг: участие в закрытом чате с C-level руководителями сервисных ИТ-компаний;
        </custom-list-item>
        <custom-list-item>
          удобные инструменты для поиска партнеров: канал для обмена непрофильными заявками, ресурсная карта компаний-участниц;
        </custom-list-item>
        <custom-list-item>
          доступ к наработкам сообщества: регламенты, схемы бизнес-процессов;
        </custom-list-item>
        <custom-list-item>
          поддержку ваших PR-активностей: email-рассылки, публикации в блоге ассоциации, посты в соц-сетях;
        </custom-list-item>
        <custom-list-item>
            <span>
              возможность участвовать в рабочих группах по созданию <a href="#" class="pointer text-arda-orange underline">отраслевых стандартов</a>
            </span>
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
