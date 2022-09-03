<template>
  <div class="flex w-full justify-between lg:flex-col lg:items-center w-full mb-lg lg:space-y-sm lg:space-y-md">
    <div class="flex flex-col basis-1/2 w-full xl:space-y-sm mb-sm">
      <h2 class="important-content uppercase">
        arda вам приносит пользу?
      </h2>
      <span class="block uppercase font-roboto-bold text-arda-orange text-[1.5rem] lg:text-center xl:text-[1rem]">поддержите ассоциацию! членских взносов у нас нет, встречи бесплатны :)</span>
    </div>
    <div  class="basis-1/2 flex items-center justify-end" >
      <button-component
          class="uppercase btn btn-outline"
      >
        хочу дать денег
      </button-component>
    </div>

  </div>

</template>


<script lang="ts">
import { defineComponent } from 'vue'
import ButtonComponent from "@/components/custom-primitives/ButtonComponent.vue";

export default defineComponent({
  components: {
    ButtonComponent,
  }
})
</script>
