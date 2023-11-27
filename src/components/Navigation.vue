<template>
<header>
  <nav class="nav-wrap">
    <div class="branding">
      <router-link class="link" :to="{name: 'home'}">
        <img src="../assets/logo/RSPryLogoHor 1.png" alt="">
      </router-link>
    </div>
    <div class="nav-links">
      <ul v-show="!mobile">
        <router-link class="link" :to="{}">Products</router-link>
        <router-link class="link" :to="{}">Media</router-link>
        <router-link class="link" :to="{name: 'about'}">About Us</router-link>
        <router-link class="link" :to="{}">Help</router-link>
      </ul>
    </div>
    <div class="nav-button" v-show="!mobile" @click="toggleAccount">
      <router-link :to="{name: 'create-account'}">
         <nav-button />
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
    <ul v-show="mobileNav" class="mobile-nav">
      <router-link class="link" :to="{}">Home</router-link>
      <router-link class="link" :to="{}">Blogs</router-link>
      <router-link class="link" to="#">Create Post</router-link>
      <router-link class="link" :to="{}">Login/Register</router-link>
    </ul>
  </transition>
</header> 
</template>

<script>
import {mapState} from 'vuex';
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

  computed : {
  ...mapState(['accountModalActive'])
},

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

    toggleAccount() {
      this.accountModalActive = !this.accountModalActive;
    }
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

.mobile-nav {
  @apply p-5 w-4/6 flex flex-col fixed h-full top-0 left-0 items-start;
  max-width: 250px;
  background-color: #303030;
  z-index: 99;

  .link {
    @apply py-4 text-white
  }
}

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
