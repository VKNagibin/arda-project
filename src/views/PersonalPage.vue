<template>
  <div class="flex flex-col w-screen items-center min-h-screen">
    <HeaderSection :signedIn="true" />

    <page-container>
      <template v-slot:heading>
        <h1 class="page-heading">Гид по IT-кластеру ARDA</h1>
      </template>

      <template v-slot:default>
        <ITClusterSection />
        <ClusterAimsSection id="operativeInfo"/>
        <AlreadyDoneSection />
        <StandardsListSection/>
        <WebinarsSection/>
      </template>
    </page-container>

    <FooterSection />
  </div>

</template>

<script lang="ts">
import { defineComponent } from 'vue';
import HeaderSection from "@/components/sections/HeaderSection.vue";
import FooterSection from "@/components/sections/FooterSection.vue";
import ITClusterSection from "@/components/sections/ITClusterSection.vue";
import ClusterAimsSection from "@/components/sections/ClusterAimsSection.vue";
import AlreadyDoneSection from "@/components/sections/AlreadyDoneSection.vue";
import StandardsListSection from "@/components/sections/StandardsListSection.vue";
import WebinarsSection from "@/components/sections/WebinarsSection.vue";

import PageContainer from "@/components/custom-primitives/PageContainer.vue";

export default defineComponent({
  components: {
    HeaderSection,
    FooterSection,
    ITClusterSection,
    PageContainer,
    ClusterAimsSection,
    AlreadyDoneSection,
    StandardsListSection,
    WebinarsSection,
  }
});

</script>