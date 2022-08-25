<template>
  <div class="flex flex-col items-center fl h-screen">
    <PageHeader />
    </div>
</template>

<script lang="ts">
import PageHeader from "@/components/PageHeader.vue";
import { defineComponent } from 'vue';

export default defineComponent({
  components: {
    PageHeader,
  },
});
</script>