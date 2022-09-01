<template>
  <div
      class="flex z-100 group justify-center h-full flex-col relative"
      @click="handlePersonalPageButtonClick"
  >
    <button-component class="flex items-center self-center">
      <template v-slot:leftIcon>
        <BIconPersonCircle class="text-[3rem] sm:text-[2rem] group-hover:text-arda-orange will-change-transform group-hover:scale-[103%] transition-all duration-200"/>
      </template>
    </button-component>
    <a
        class=" group-hover:text-arda-orange text-center font-roboto will-change-transform group-hover:scale-[103%] transition-all duration-200 w-full sm:text-[14px]"
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
    <ProfilePopup
        v-if="showProfile"
        @closeProfile="handleCloseProfile"
    />
  </teleport>

  <teleport to="body">
    <NavbarComponent
        v-if="showMenu"
        @openProfile="handleOpeningProfile"
        @closeMenu="handleCloseMenu"
    />
  </teleport>

  <BIconPersonCircle
      class="fixed z-100 text-[7rem] inline cursor-pointer top-[30px] right-[30px] text-[5rem] sm:text-[3rem] hover:text-arda-orange will-change-transform hover:scale-[103%] transition-all duration-200"
      v-if="showBurger"
      @click="handlePersonalPageButtonClick"

  />
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import SignInPopup from "@/components/popups/SignInPopup.vue";
import ButtonComponent from "@/components/custom-primitives/ButtonComponent.vue";
import NavbarComponent from "@/components/popups/NavbarComponent.vue";
import ProfilePopup from "@/components/popups/ProfilePopup.vue";

export default defineComponent({
  components: {
    SignInPopup,
    ButtonComponent,
    NavbarComponent,
    ProfilePopup,
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
