<template>
<header>
  <nav class="nav-wrap">

    <!-- RS logo -->
    <div class="branding">
      <router-link class="" :to="{name: 'home'}">
        <img src="../assets/logo/RSPryLogoHor 1.png" alt="">
      </router-link>
    </div>

    <!-- nav links -->
    <div class="nav-links">
      <ul v-show="!mobile">
        <router-link class="link" :to="{}">Products</router-link>
        <router-link class="link" :to="{}">Media</router-link>
        <router-link class="link" :to="{name: 'about'}">About Us</router-link>
        <router-link class="link" :to="{}">Help</router-link>
      </ul>
    </div>
    <div class="nav-button" v-show="!mobile">
      <router-link :to="{name: 'create-account'}">
        <nav-button>Create Account </nav-button>
      </router-link>
    </div>
  </nav>

  <fa-icon 
    :icon="['fas', 'bars']" 
    class="menu-icon" 
    @click="toggleNav" 
    v-show="mobile"
  />
  <transition name="mobile-nav" >
    <div class="mobile-wrap" v-show="mobileNav">

      <!-- rockshield logo -->
      <div class="branding">
        <router-link class="" :to="{name: 'home'}">
          <img src="../assets/logo/RSPryLogoHor 1.png" alt="">
        </router-link>
      </div>

      <!-- navigation -->
      <div class="mobile-nav">
        <ul>
          <router-link class="link" :to="{}">Products</router-link>
          <router-link class="link" :to="{}">Media</router-link>
          <router-link class="link" :to="{name: 'about'}">About Us</router-link>
          <router-link class="link" :to="{}">Help</router-link>
        </ul>
      </div> 

      <!-- social media -->
      <div class="socials">
        <a href="https://www.instagram.com/rockshieldmfb/?igshid=YmMyMTA2M2Y%3D" target="_blank">
          <fa-icon :icon="['fab', 'instagram']" class="icon" />
        </a>
        <a href="https://www.facebook.com/RockshieldMFB" target="_blank">
          <fa-icon :icon="['fab', 'facebook']" class="icon" />
        </a>
        <a href="https://twitter.com/rockshieldmfb" target="_blank">
          <fa-icon :icon="['fab', 'x-twitter']" class="icon" />
        </a>
        <a href="https://www.linkedin.com/in/rockshieldmfb/" target="_blank">
          <fa-icon :icon="['fab', 'linkedin']" class="icon" />
        </a>
      </div>
    </div>
  </transition>
</header> 
</template>

<script>
import NavButton from '@/components/NavButton.vue'

export default {
  name: 'navigation',

  components: {
    NavButton,
  },

  data() {
    return {
      mobile: null,
      mobileNav: null,
      windowWidth: null,
    }
  },

  created() {
    window.addEventListener('resize', this.checkScreen);
    this.checkScreen();
  },

  computed : {},

  methods: {
    checkScreen() {
      this.windowWidth = window.innerWidth;
      if (this.windowWidth <= 980) {
        this.mobile = true;
        return;
      }
      this.mobile = false;
      this.mobileNav = false;
      return;
    },

    toggleNav() {
      this.mobileNav = !this.mobileNav
    },
  }
} 
</script>

<style lang="scss" scoped>
header {
  @apply bg-white;
  z-index: 99;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06) ;

  .nav-wrap {
    @apply flex items-center justify-between px-4 py-3;

    @screen md{
      @apply py-6 px-16
    }
  }
}

.link{
  @apply font-medium py-0 px-2 no-underline;
  transition: .3s color ease-in;
  color: #000;

  &:hover {
    color: #1eb8b8;
  }
}

.branding {
  @apply flex items-center;

  img {
    @apply object-cover;
    height: 35px;

    @screen md {
      height: 40px;
    }
  }
}
.header {
  @apply font-semibold text-lg text-black
}

.nav-links {
  @apply relative flex items-center justify-center flex-1;

  ul {
    .link {
      margin-right: 32px
    }
    .link:last-child {
      margin-right: 0;
    }
  }
}


.menu-icon {
  @apply cursor-pointer absolute top-4 right-12 h-6 w-auto;

  @screen md {
    @apply top-7 right-16 
  }
}

.mobile-wrap {
  @apply flex flex-col p-5 w-4/6 fixed h-full top-0 left-0 gap-y-8;
  background-color: #303030;
  z-index: 99;
  max-width: 270px;

  .mobile-nav {
    @apply mt-5;
    ul{
      @apply  flex flex-col;
      
      .link {
        @apply py-4 text-white
      }
    } 
  }

  .socials {
    @apply justify-center justify-items-end flex gap-4;

    .icon{
      @apply h-5 w-5;
      color: white;
    }
  }
  
}

// .mobile-overlay {
//   @apply fixed top-0 left-0 w-full bg-transparent;
//   height: 100%;
//   z-index: 2;
//   // background-color: rgba(0, 0, 0, 0.5);
// }



.mobile-nav-enter-active,
.mobile-nav-leave-active {
  transition: all 1s ease;
}

.mobile-nav-enter-from {
  transform: translateX(-250px);
}
.mobile-nav-enter-to {
  transform: translateX(0);
}
.mobile-nav-leave-to {
  transform: translateX(-250px);
}
</style>
