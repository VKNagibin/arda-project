<template>
  <div
      class="fixed flex flex-col animate-pop will-change-transform w-full h-full
             items-center top-0 left-0 bg-popup z-10 overflow-x-hidden"
      :class="{'justify-center': $props.centered, 'overflow-y-hidden': !$props.needOwnScrollbar}"
      @click="handlePopupClick"
      ref="popup"
  >
    <img :src="crossImage"
         class="absolute w-[60px] top-[10px] z-30 right-[10px] cursor-pointer after:z-40
             after:absolute after:top-0 after:bottom-0 after:left-0 after:right-0"
         @click="handlePopupClick">

    <slot></slot>

  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import crossImage from "@/assets/images/arda-style-components/13.png"

export default defineComponent({
  props: {
    needOwnScrollbar: Boolean,
    popupAnimation: {
      type: String,
      required: true,
    },
    centered: Boolean,
  },

  emits: ["closePopup"],

  data() {
    return {
      crossImage,
    }
  },

  methods: {
    toggleAnimationClasses() {
      this.popup.classList.toggle(this.$props.popupAnimation);
    },

    removePopupOpeningAnimations() {
      this.popup.classList.remove("animate-pop");
    },

    closePopup() {
      this.startAnimation();
      this.popup.addEventListener("animationend", this.clearContainer);
    },

    startAnimation() {
      this.toggleAnimationClasses();
    },

    clearContainer() {
      this.toggleAnimationClasses();
      this.$emit("closePopup");
    },

    handlePopupClick(e: MouseEvent): void {
      if ( e.target !== e.currentTarget ) return
      this.closePopup();
    },

    handleEscClick(e: KeyboardEvent): void {
      if (e.key !== "Escape") return;
      this.closePopup();
    },
  },

  computed: {
    popup() {
      return (this.$refs.popup as HTMLDivElement);
    },
  },

  beforeUnmount() {
    document.body.style.overflowY = "auto";
    this.popup.removeEventListener("animationend", this.clearContainer);
    window.removeEventListener("keydown", this.handleEscClick);
    this.popup.removeEventListener("animationend", this.removePopupOpeningAnimations);
  },

  mounted() {
    this.popup.addEventListener("animationend", this.removePopupOpeningAnimations);
  },

  beforeMount() {
    window.addEventListener("keydown", this.handleEscClick);
    if(!this.needOwnScrollbar) return
    document.documentElement.style.overflowY = "hidden";
  }
});

</script>