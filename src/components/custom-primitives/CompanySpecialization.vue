<template>
    <custom-list>
      <template v-slot:heading>
        <h4 class="bg-arda-orange w-max">
          {{ $props.heading }}
        </h4>
      </template>
      <CompanyCard
          class="hover:bg-arda-grey cursor-pointer"
          v-for="company in $props.companies"
          :cities="company.cities"
          :technologies-stack="company.technologiesStack"
          :name="company.name"
          :site="company.site"
          :markType="company.markType"
      />
    </custom-list>
</template>

<script lang="ts">
import CompanyCard from "@/components/custom-primitives/CompanyCard.vue";
import CustomList from "@/components/custom-primitives/CustomList.vue";

export default {
  components: {
    CustomList,
    CompanyCard,
  },

  props: {
    heading: {
      type: String,
      required: true,
    },
    companies: {
      type: Array,
      required: true,
    },
  },
}
</script>