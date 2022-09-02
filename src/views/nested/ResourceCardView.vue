<template>
  <div class="w-[90vw] flex gap-5">
    <CompanySpecialization
        heading="Аутсорсинг и аутстаффинг"
        :companies="outstaffingAndOutsourcing"
    />
    <CompanySpecialization
        heading="Аутсорсинг"
        :companies="outsorcing"
    />
    <CompanySpecialization
        heading="Аутстаффинг"
        :companies="outstaffing"
    />
  </div>
</template>

<script lang="ts">
import CompanyCard from "@/components/custom-primitives/CompanyCard.vue";
import CustomList from "@/components/custom-primitives/CustomList.vue";
import CompanySpecialization from "@/components/custom-primitives/CompanySpecialization.vue";

import { getOutsourcing, getOutstaffingAndOutsourcing, getOutstaffing } from "@/helpers/companiesSorter";

export default {
  components: {
    CustomList,
    CompanyCard,
    CompanySpecialization,
  },

  data() {
    return {
      outsorcing: getOutsourcing(),
      outstaffing: getOutstaffing(),
      outstaffingAndOutsourcing: getOutstaffingAndOutsourcing(),
    }
  },
}
</script>