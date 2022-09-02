<template>
  <div class="flex flex-col items-center w-screen min-h-screen">
    <Header/>
    <page-container>
      <template v-slot:heading>
        <h1 class="page-heading">
          кластер сервисных it-компаний, работающих по аутсорс- и аутстафф-форматам
        </h1>
      </template>

      <template v-slot:default>
        <ITCluster />
        <Agenda />
        <MarketProblems />
        <ClusterMission />
        <YourBenefit />
        <ParticipationCriteria />
        <EnterOurTeam />
        <ClusterMembers />
        <Statistics />
        <ARDABenefits />
      </template>

    </page-container>

    <Footer />
  </div>

</template>

<script lang="ts">
import Header from "@/components/sections/Header.vue";
import Agenda from "@/components/sections/Agenda.vue";
import MarketProblems from "@/components/sections/MarketProblems.vue";
import ITCluster from "@/components/sections/ITCluster.vue";
import ClusterMission from "@/components/sections/ClusterMission.vue";
import YourBenefit from "@/components/sections/YourBenefit.vue";
import ParticipationCriteria from "@/components/sections/ParticipationСriteria.vue";
import EnterOurTeam from "@/components/sections/EnterOurTeam.vue";
import Statistics from "@/components/sections/ClusterStatistics.vue";
import Footer from "@/components/sections/Footer.vue";
import ClusterMembers from "@/components/sections/СlusterMembers.vue";
import ARDABenefits from "@/components/sections/ARDABenefits.vue";

import PageContainer from "@/components/custom-primitives/PageContainer.vue";
import CustomList from "@/components/custom-primitives/CustomList.vue";
import CustomListItem from "@/components/custom-primitives/CustomListItem.vue";
import ButtonComponent from "@/components/custom-primitives/ButtonComponent.vue";
import QuantityPattern from "@/components/custom-primitives/QuantityPattern.vue";

import EntryForm from "@/components/popups/EntryClusterPopup.vue";


import { defineComponent } from 'vue';

export default defineComponent({
  components: {
    Header,
    CustomList,
    CustomListItem,
    ITCluster,
    Agenda,
    MarketProblems,
    ClusterMission,
    YourBenefit,
    ParticipationCriteria,
    ButtonComponent,
    ARDABenefits,
    QuantityPattern,
    EnterOurTeam,
    Statistics,
    Footer,
    EntryForm,
    ClusterMembers,
    PageContainer,
  },
});
</script>