<template>
  <div
      class="fixed flex flex-col animate-pop will-change-transform w-full h-full items-center top-0 left-0 overflow-hidden bg-popup z-10"
      :class="{'justify-center': $props.centered, 'overflow-y-scroll': $props.needOwnScrollbar}"
      @click="handlePopupClick"
      ref="popup"
  >
    <button
        class="absolute top-[10px] z-30 right-[10px] cursor-pointer after:z-40
             after:absolute after:top-0 after:bottom-0 after:left-0 after:right-0"
        @click="handlePopupClick">
      <BIconXLg
          class="text-[4rem] w-max text-white"
      />
    </button>
    <form
        v-if="!isNavbar"
        action=""
        ref="form"
        class=" flex-col absolute rounded-lg will-change-transform animate-form sm:w-[95%] flex px-lg py-md"
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
          class="flex flex-col justify-center items-center animate-menu bg-arda-black
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

export default defineComponent({
  props: {
    needOwnScrollbar: Boolean,
    addClass: String,
    isNavbar: Boolean,
    popupAnimation: {
      type: String,
      required: true,
    },
    formAnimation: {
      type: String,
      required: true,
    },
    centered: Boolean,
  },

  emits: ["closePopup"],

  methods: {
    toggleAnimationClasses() {
      (this.$refs.popup as HTMLDivElement).classList.toggle(this.$props.popupAnimation);
      (this.$refs.form as HTMLFormElement).classList.toggle(this.$props.formAnimation);
    },

    removePopupOpeningAnimations() {
      this.popup.classList.remove("animate-pop");
    },

    removeFormOpeningAnimations() {
      this.form.classList.remove("animate-form");
      this.form.classList.remove("animate-menu");
    },

    closePopup() {
      this.startAnimation();
      window.addEventListener("animationend", this.clearContainer);
    },

    startAnimation() {
      this.toggleAnimationClasses();
    },

    clearContainer() {
      this.toggleAnimationClasses();
      this.$emit("closePopup");
    },

    handleMenuClick() {
      this.closePopup();
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
    form() {
      return (this.$refs.form as HTMLFormElement);
    }
  },

  beforeUnmount() {
    document.body.style.overflowY = "auto";
    window.removeEventListener("animationend", this.clearContainer);
    window.removeEventListener("keydown", this.handleEscClick);
    this.popup.removeEventListener("animationend", this.removePopupOpeningAnimations);
    this.form.removeEventListener("animationend", this.removeFormOpeningAnimations);
  },

  mounted() {
    this.popup.addEventListener("animationend", this.removePopupOpeningAnimations);
    this.form.addEventListener("animationend", this.removeFormOpeningAnimations);
  },

  beforeMount() {
    window.addEventListener("keydown", this.handleEscClick);
    if(!this.needOwnScrollbar) return
    document.body.style.overflowY = "hidden";
  }
});

</script>