<template>
  <card-component class="w-50%" :resetMargins="true">
    <custom-list-item :hide-markers="true">
      <div class="flex md:text-center flex-col gap-y-sm">

        <h3>
          <slot name="title"></slot>
        </h3>

        <a class="arda-link" :href="link">
          смотреть вебинар
        </a>

        <span>{{ $props.duration }}</span>

        <slot name="description"></slot>

      </div>
    </custom-list-item>
  </card-component>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import CustomListItem from "@/components/custom-primitives/CustomListItem.vue";
import CardComponent from "@/components/custom-primitives/CardComponent.vue";

export default defineComponent({
  props: {
    link: String,
    duration: String,
  },

  components: {
    CustomListItem,
    CardComponent,
  }
})
</script>
