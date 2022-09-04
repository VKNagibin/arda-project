<template>
  <div class="flex flex-col gap-md mb-md">
    <h3 class="-heading">Разработка отраслевого стандарта по аутстаффингу сотрудников:</h3>
    <custom-list class="gap-10">
      <cluster-standards-item
          v-for="standard in standards"
          :link-href="standard.link"
          :date="standard.date"
      >

        <template v-slot:title>
          {{ standard.title }}
        </template>

        <template v-if="standard.date" v-slot:date>
          {{ standard.date }}
        </template>

        <template v-if="standard.description" v-slot:description>
          <div v-html="standard.description"></div>
        </template>

      </cluster-standards-item>
    </custom-list>

    <WantToArdaComponent />
  </div>

</template>

<script lang="ts">
import { defineComponent } from 'vue';

import standards from "@/configs/clusterStandards";
import ClusterStandardsItem from "@/components/custom-primitives/ClusterStandardsItem.vue";
import CardComponent from "@/components/custom-primitives/CardComponent.vue";
import CustomListItem from "@/components/custom-primitives/CustomListItem.vue";
import CustomList from "@/components/custom-primitives/CustomList.vue";
import WantToArdaComponent from "@/components/custom-primitives/WantToArdaComponent.vue";

export default defineComponent({
  components: {
    ClusterStandardsItem,
    CardComponent,
    CustomListItem,
    CustomList,
    WantToArdaComponent,
  },

  data() {
    return {
      standards,
    }
  }
})
</script>