<template>
  <div class="flex flex-col items-center w-screen min-h-screen">
    <HeaderSection/>
    <page-container>
      <template v-slot:heading>
        <h1 class="page-heading">
          кластер сервисных it-компаний, работающих по аутсорс- и аутстафф-форматам
        </h1>
      </template>

      <template v-slot:default>
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
      </template>

    </page-container>

    <FooterSection />
  </div>

</template>

<script lang="ts">
import HeaderSection from "@/components/sections/HeaderSection.vue";
import AgendaSection from "@/components/sections/AgendaSection.vue";
import MarketProblemsSection from "@/components/sections/MarketProblemsSection.vue";
import ITClusterSection from "@/components/sections/ITClusterSection.vue";
import ClusterMissionSection from "@/components/sections/ClusterMissionSection.vue";
import YourBenefitSection from "@/components/sections/YourBenefitSection.vue";
import ParticipationCriteriaSection from "@/components/sections/ParticipationСriteriaSection.vue";
import EnterOurTeamSection from "@/components/sections/EnterOurTeamSection.vue";
import StatisticsSection from "@/components/sections/StatisticsSection.vue";
import FooterSection from "@/components/sections/FooterSection.vue";
import ClusterMembers from "@/components/sections/СlusterMembers.vue";
import ARDABenefitsSection from "@/components/sections/ARDABenefitsSection.vue";

import PageContainer from "@/components/custom-primitives/PageContainer.vue";
import CustomList from "@/components/custom-primitives/CustomList.vue";
import CustomListItem from "@/components/custom-primitives/CustomListItem.vue";
import ButtonComponent from "@/components/custom-primitives/ButtonComponent.vue";
import QuantityPattern from "@/components/custom-primitives/QuantityPattern.vue";

import EntryForm from "@/components/popups/EntryClusterPopup.vue";


import { defineComponent } from 'vue';

export default defineComponent({
  components: {
    HeaderSection,
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
    PageContainer,
  },
});
</script>