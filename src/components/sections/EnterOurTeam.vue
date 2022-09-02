<template>
  <h3 class="text-center default-content mb-lg">
    Если вы разделяете принципы, и ваша компания подходит по вышеприведенным критериям, то мы будем рады видеть вас среди участников!
  </h3>
  <button
      class="btn btn-outline uppercase mb-lg"
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
import EntryForm from "@/components/popups/EntryClusterPopup.vue";

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

});
</script>