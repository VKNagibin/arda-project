<template>
  <div
      class="flex items-start flex-col gap-1 w-full p-sm border-2"
      :class="{'border-arda-orange': (marker === 'member'), 'border-arda-yellow': marker === 'broker'}"
      @click="handleCompanyCardClick"
  >
    <h4>
      {{ $props.name }}
    </h4>
    <ul class="flex gap-4">
      <li class="border-2 p-[4px] bg-arda-yellow" v-for="technology in $props.technologiesStack" :key="nanoid()">
        {{ technology }}
      </li>
    </ul>
    <ul  class="flex gap-3">
      <li  v-for="city in $props.cities" :key="nanoid()">
        {{ city }}
      </li>
    </ul>
    <a class="underline" :href="$props.site">
      {{ $props.site }}
    </a>
  </div>

</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { nanoid } from "nanoid";
import CardComponent from "@/components/custom-primitives/CardComponent.vue";

export default defineComponent({
  components: {
    CardComponent,
  },

  methods: {
    nanoid() {
      return nanoid();
    },

    handleCompanyCardClick() {
      console.log("here");
    }
  },

  props: {
    name: {
      type: String,
      required: true,
    },
    technologiesStack: {
      type: Array,
      required: true,
    },
    cities: {
      type: Array,
      required: true,
    },
    site: {
      type: String,
      required: true,
    },
    markType: String,
  },

  computed: {
    marker() {
      return this.$props.markType || null;
    }
  },

})

</script>