<template>
  <div class="flex flex-col items-center min-h-screen">
    <PageHeader class="mb-lg sm:mb-[5vh]"/>
    <div class="flex flex-col items-center w-[80%] sm:w-[90%] ">
      <h1 class="uppercase font-oswald text-[3rem] sm:text-[1.5rem] text-center mb-md">
        кластер сервисных it-компаний, работающих по аутсорс- и аутстафф-форматам
      </h1>
      <ITClusterSection />
      <AgendaSection />
      <MarketProblemsSection />
      <ClusterMissionSection />
      <YourBenefitSection />
      <ParticipationCriteriaSection />
      <EnterOurTeamSection />
      <ClusterMembers />
      <StatisticsSection />
      <ARDABenefitsSection />
    </div>
    <FooterSection />
  </div>

</template>

<script lang="ts">
import CustomList from "@/components/CustomList.vue";
import PageHeader from "@/components/sections/PageHeader.vue";
import AgendaSection from "@/components/sections/AgendaSection.vue";
import MarketProblemsSection from "@/components/sections/MarketProblemsSection.vue";
import ITClusterSection from "@/components/sections/ITClusterSection.vue";
import CustomListItem from "@/components/CustomListItem.vue";
import ClusterMissionSection from "@/components/sections/ClusterMissionSection.vue";
import YourBenefitSection from "@/components/sections/YourBenefitSection.vue";
import ParticipationCriteriaSection from "@/components/sections/ParticipationСriteriaSection.vue";
import ButtonComponent from "@/components/ButtonComponent.vue";
import ARDABenefitsSection from "@/components/sections/ARDABenefitsSection.vue";
import QuantityPattern from "@/components/QuantityPattern.vue";
import EnterOurTeamSection from "@/components/sections/EnterOurTeamSection.vue";
import StatisticsSection from "@/components/sections/StatisticsSection.vue";
import FooterSection from "@/components/sections/FooterSection.vue";
import EntryForm from "@/components/EntryForm.vue";
import ClusterMembers from "@/components/sections/СlusterMembers.vue"

import { defineComponent } from 'vue';

export default defineComponent({
  components: {
    PageHeader,
    CustomList,
    CustomListItem,
    ITClusterSection,
    AgendaSection,
    MarketProblemsSection,
    ClusterMissionSection,
    YourBenefitSection,
    ParticipationCriteriaSection,
    ButtonComponent,
    ARDABenefitsSection,
    QuantityPattern,
    EnterOurTeamSection,
    StatisticsSection,
    FooterSection,
    EntryForm,
    ClusterMembers,
  },
});
</script>