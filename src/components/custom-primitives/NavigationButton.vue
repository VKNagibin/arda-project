<template>
  <div
      class="flex z-100 group justify-center h-full flex-col relative"
      @click="handlePersonalPageButtonClick"
  >
<!--    <button-component class="flex items-center self-center">-->
<!--      <template v-slot:leftIcon>-->
<!--        <BIconPersonSquare class="text-[2rem] md:text-[1.5rem] group-hover:fill-arda-orange will-change-transform group-hover:scale-[103%] transition-all duration-200"/>-->
<!--      </template>-->
<!--    </button-component>-->
    <a
        class="block bg-arda-orange p-2 rounded-lg box-content default-content text-center will-change-transform group-hover:scale-[103%] transition-all duration-200"
        href="#">{{ linkContent }}
    </a>
  </div>
  <teleport to="body">
    <SignInPopup
        v-if="showSignInPopup"
        @closePopup="handleCloseSignInPopup"
    />
  </teleport>

  <teleport to="body">
    <NavbarComponent
        v-if="showMenu"
        @openProfile="handleOpeningProfile"
        @closeMenu="handleCloseMenu"
    />
  </teleport>

  <teleport to="body">
    <div class="w-max fixed z-1000 top-[30px] right-[30px] md:right-[15px] md:top-[15px] h-max bg-white fixed ">
      <BIconPersonSquare
          class=" text-[3rem] cursor-pointer sm:text-[2rem] hover:text-arda-orange will-change-auto hover:scale-[103%] transition-all duration-300"
          v-if="showBurger"
          @click="handlePersonalPageButtonClick"/>
    </div>
  </teleport>

</template>

<script lang="ts">
import { defineComponent } from 'vue';

import SignInPopup from "@/components/popups/SignInPopup.vue";
import ButtonComponent from "@/components/custom-primitives/ButtonComponent.vue";
import NavbarComponent from "@/components/popups/NavbarComponent.vue";

export default defineComponent({
  components: {
    SignInPopup,
    ButtonComponent,
    NavbarComponent,
  },

  props: {
    signedIn: {
      type: Boolean,
    },
  },

  data() {
    return {
      showProfile: false,
      showSignInPopup: false,
      showMenu: false,
      showBurger: false,
    }
  },

  methods: {
    handleCloseProfile() {
      this.showProfile = false;
    },
    handleOpeningProfile() {
      this.showProfile = true;
    },
    handlePersonalPageButtonClick() {
      if (this.$props.signedIn) {
        this.showMenu = !this.showMenu;
        return
      }
      this.showSignInPopup = true;
    },
    handleCloseSignInPopup() {
      this.showSignInPopup = false;
    },
    handleCloseMenu() {
      this.showMenu = false;
    },
    handleScroll() {
      this.showBurger = scrollY > 100
    }
  },

  computed: {
    linkContent() {
      return this.$props.signedIn ? 'Личный кабинет' : 'Войти'
    },
  },

  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  },

  mounted() {
    window.addEventListener('scroll', this.handleScroll)
  },

})
</script>
