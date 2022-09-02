<template>
  <h3 class="-heading">Участники кластера</h3>
  <div class="w-full border-x-[2px] border-arda-grey h-800px sm:mb-[10vh] mb-[20vh]">
    <div
        v-dragscroll="true"
        :class="`w-full h-800px overflow-x-auto custom-scroll border-x-[40px] md:border-x-[20px] border-white p-[40px] outline-1 rounded-lg ${cursor}`"
        @mouseover="handleGrab"
        @mousedown="handleGrabbing"
        @mouseup="handleGrab"
    >
      <div
          class="grid gap-[5rem] w-max overflow-hidden grid-flow-col justify-items-center
         items-center xl:grid-rows-[repeat(3,100px)] md:gap-[2rem] grid-rows-[repeat(3,200px)]
         auto-cols-[200px] xl:auto-cols-[100px]"
      >
        <img v-for="(logo, logoName) in logos" class="block w-[100%] h-[100%] object-contain object-center" :src="logo" :alt="logoName">
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import logos from "../../configs/partnersLogos"

export default defineComponent({
  data() {
    return {
      logos,
      cursor: 'grab',
    }
  },

  methods: {
    handleGrab() {
      this.cursor = "cursor-grab";
    },

    handleGrabbing() {
      this.cursor = "cursor-grabbing";
    }
  },
})
</script>
