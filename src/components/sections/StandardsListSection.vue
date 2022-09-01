<template>
  <card-component id="standards">

    <template v-slot:heading>
      <h2 class="font-oswald w-full pb-sm">Разработка отраслевого стандарта по аутстаффингу сотрудников:</h2>
    </template>

    <template v-slot:default>
      <custom-list>
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
    </template>
  </card-component>
  <WantToArdaForm />
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import standards from "@/configs/clusterStandards";
import ClusterStandardsItem from "@/components/custom-primitives/ClusterStandardsItem.vue";
import CardComponent from "@/components/custom-primitives/CardComponent.vue";
import CustomListItem from "@/components/custom-primitives/CustomListItem.vue";
import CustomList from "@/components/custom-primitives/CustomList.vue";
import WantToArdaForm from "@/components/custom-primitives/WantToArdaForm.vue";

export default defineComponent({
  components: {
    ClusterStandardsItem,
    CardComponent,
    CustomListItem,
    CustomList,
    WantToArdaForm,
  },

  data() {
    return {
      standards,
    }
  }
})
</script>