<template>
<div class="app">
  <navigation v-if="!hideNav"/>
  <transition name="scale-fade" mode="out-in" >
    <div v-if="showContent" class="app-wrap">
     <router-view />
    </div>
  </transition>

  <footer-note v-if="!hideNav"/>
</div>
</template>

<script>
import Navigation from '@/components/Navigation.vue'
import FooterNote from '@/components/FooterNote.vue'
import { auth } from "@/firebase/firebaseInit";
import { onAuthStateChanged } from 'firebase/auth';

export default {
  components: {
    Navigation,
    FooterNote,
  },

  data() {
    return {
      showContent: false,
      hideNav: null
    }
  },

  created () {

    this.checkRoute();

     onAuthStateChanged(auth, async (user) =>{
      this.loading = true;
      await this.$store.commit("updateUser", user);
      this.loading = false;
      if(user){
        // this.loading = true;
        await this.$store.dispatch("getCurrentUser", user);
        this.loading = false;
      }
    })
  },

  mounted() {
    this.showContent = true;
  },

  watch: {
  $route() {
    this.checkRoute();
  },
  },

  // beforeRouteLeave(_to, _from, next) {
  //  this.routerViewKey += 1;
  //   next();
  //   // setTimeout(() => next(), 500); 
  // },

  methods: {
    checkRoute() {
      if (
        this.$route.name === "admin-login" ||
        this.$route.name === "admin-register" ||
        this.$route.name === "account-list" ||
        this.$route.name === "customer-form" 
      ) {
        this.hideNav = true;
        return;
      }
      this.hideNav = false;
    }
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400&display=swap');

#app {
  margin: 0;
  padding: 0;
  font-family: 'Montserrat', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #033549;
}

.app {
 max-width: 100%;
 overflow-x: hidden;
}

/* .app-wrap {
  @apply lg:container;
} */

/* .fade-enter-active, 
.fade-leave-active {
  transition: opacity 0.8s,
  transform 0.8s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
  transform: translateY(30px);
} */

.scale-fade-enter-active,
.scale-fade-leave-active {
  transition: transform 1s ease, opacity 1s ease;
}

.scale-fade-enter-from {
  /* transform: scale(0.8); */
  transform: translateY(20px);
  opacity: 0;
}

/* general styling */
button,
.btn{
  @apply  text-white text-base text-center
  px-8 py-2 cursor-pointer border-none rounded-[30px] w-full;

  &:hover {
    @apply saturate-50;
  }

  @screen md {
    @apply w-auto
  }
}

// status button styling
.status-button {
  &::before {
    content: "";
    width: 10px;
    height: 10px;
    border-radius: 50%;
    margin-right: 8px;
  }
  font-size: 12px;
  margin-right: 30px;
  align-items: center;
  padding: 8px 30px;
  border-radius: 10px;
}
.red{
 @apply text-red-700
}

.blue {
  @apply bg-[#00ABF1];
}
.green {
  background-color: #33d69f;
}

.orange {
  background-color: #ff8f00;
}

.done {
  &::before {
    background-color: #33d69f;
  }
  color: #33d69f;
  background-color: rgba(51, 214, 160, 0.1);
}

.pending {
  &::before {
    background-color: #ff8f00;
  }
  color: #ff8f00;
  background-color: rgba(255, 145, 0, 0.1);
}

.init {
  &::before {
    background-color: #dfe3fa;
  }
  color: #dfe3fa;
  background-color: rgba(223, 227, 250, 0.1);
}

.box {
  width: 100%;
  padding: 40px 10px;
  max-width: 850px;
  margin: 0 auto;

  @media (min-width: 900px) {
    padding-top: 72px;
  }
}

</style>
