<template>
  <div
      class="fixed flex flex-col popup-appear will-change-transform w-full h-full items-center top-0 left-0 overflow-x-hidden bg-popup z-10"
      :class="{'justify-center': $props.centered, 'overflow-y-hidden': !$props.needOwnScrollbar}"
      @click="handlePopupClick"
      ref="popup"
  >
    <img :src="crossImage"
        class="block absolute top-[10px] z-30 right-[10px] w-[50px] cursor-pointer"
        @click="handlePopupClick">

    <form
        v-if="!isNavbar"
        action=""
        ref="form"
        class=" flex-col absolute rounded-lg will-change-transform form-appear sm:w-[95%] flex px-lg py-md"
        :class="$props.addClass"
    >
      <slot></slot>
    </form>

    <div
        v-else
        class="w-full h-full overflow-hidden"
        ref="form"
        @click="handleMenuClick">
      <ul
          @click.stop="handleMenuClick"
          class="flex flex-col justify-center items-center menu-appear bg-arda-black
                 h-full over w-1/3 top-0 right-0 md:w-[90%] fixed space-y-8 z-10"
          :class="$props.addClass"
      >
        <slot></slot>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import crossImage from "@/assets/images/arda-style-components/13.png"

export default defineComponent({
  props: {
    needOwnScrollbar: Boolean,
    addClass: String,
    isNavbar: Boolean,
    formAnimation: {
      type: String,
      required: true,
    },
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
    handlePopupClick(e: MouseEvent): void {
      if (e.target !== e.currentTarget) return
      this.closePopup();
    },

    addAnimationClass(element: HTMLElement, value: string) {
      element.classList.add(value);
    },

    removeAnimationClass(element: HTMLElement, value: string) {
      element.classList.remove(value);
    },

    removeNavbarOpeningAnimation(animationName: string) {
      if (animationName !== 'menu-appear') return
      this.removeAnimationClass(this.form, 'menu-appear');
    },

    removeFormOpeningAnimation(animationName: string) {
      if (animationName !== 'form-appear') return
      this.removeAnimationClass(this.form, 'form-appear');
    },

    removeContentOpeningAnimations(e: AnimationEvent) {
      const animationName = e.animationName;
      this.removeNavbarOpeningAnimation(animationName);
      this.removeFormOpeningAnimation(animationName);
    },

    removePopupOpeningAnimations(e: any) {
      if (e.animationName !== 'popup-appear') return
      this.removeAnimationClass(this.popup, 'popup-appear');
    },

    closePopup() {
      this.addAnimationClass(this.popup, this.$props.popupAnimation);
      this.addAnimationClass(this.form, this.$props.formAnimation);
      window.addEventListener("animationend", this.clearFormContainer);
      window.addEventListener("animationend", this.clearPopupContainer);
    },

    clearFormContainer(e: any) {
      if (e.animationName !== this.$props.formAnimation) return
      this.removeAnimationClass(this.form, this.$props.formAnimation);
      this.$emit("closePopup");

    },

    clearPopupContainer(e: any) {
      if (e.animationName !== this.$props.popupAnimation) return
      this.removeAnimationClass(this.popup, this.$props.popupAnimation);
    },

    handleMenuClick() {
      this.closePopup();
    },

    handleEscClick(e: KeyboardEvent): void {
      if (e.key !== "Escape") return;
      this.closePopup();
    },
  },

  computed: {
    form() {
      return (this.$refs.form as HTMLFormElement);
    },
    popup() {
      return (this.$refs.popup as HTMLFormElement);
    }
  },

  beforeUnmount() {
    document.documentElement.style.overflowY = "auto";
    window.removeEventListener("animationend", this.clearPopupContainer);
    window.removeEventListener("animationend", this.clearFormContainer);
    window.removeEventListener("animationend", this.removePopupOpeningAnimations);
    window.removeEventListener("animationend", this.removeContentOpeningAnimations);
  },

  mounted() {
    window.addEventListener("animationend", this.removePopupOpeningAnimations);
    window.addEventListener("animationend", this.removeContentOpeningAnimations);

    if(!this.needOwnScrollbar) return
    document.documentElement.style.overflowY = "hidden";
  },

  beforeMount() {
    window.addEventListener("keydown", this.handleEscClick);
  }
});

</script>