<template>
  <h3 class="text-center xl:text-[1.5rem] mb-lg">
    Если вы разделяете принципы, и ваша компания подходит по вышеприведенным критериям, то мы будем рады видеть вас среди участников!
  </h3>
  <button
      class="btn w-[300px] md:w-[150px] md:text-[1.5rem] md:h-[80px] border-4 uppercase text-[2rem] mb-lg font-roboto h-[100px] btn-outline btn-warning mb-md"
      @click="openPopup"
  >
    Вступить
  </button>
  <div class="w-full h-[2px] bg-arda-grey mb-lg xl:mb-md"></div>

  <teleport to="body">
    <EntryForm v-if="showPopup" @closePopup="closePopup"/>
  </teleport>

</template>

<script lang="ts">
import { defineComponent } from 'vue';
import EntryForm from "@/components/EntryForm.vue";

export default defineComponent({
  components: {
    EntryForm,
  },

  data() {
    return {
      showPopup: false,
    }
  },

  methods: {
    openPopup() {
      this.showPopup = true;
    },
    closePopup() {
      this.showPopup = false;
    },
  },

  watch: {
    showPopup: function(value: boolean) {
      if (!value) return
      document.body.style.overflowY = "hidden";
      }
  },

});
</script>