<template>
<div class="app">
  <navigation />
  <transition name="scale-fade" mode="out-in" >
    <div v-if="showContent" class="app-wrap">
     <router-view />
    </div>
  </transition>

  <footer-note />
</div>
</template>

<script>
import Navigation from '@/components/Navigation.vue'
import FooterNote from '@/components/FooterNote.vue'

export default {
  components: {
    Navigation,
    FooterNote,
  },

  data() {
    return {
      showContent: false,
    }
  },

  mounted() {
    this.showContent = true;

    
  },

  beforeRouteLeave(_to, _from, next) {
   this.routerViewKey += 1;
    next();
    

    // setTimeout(() => next(), 500); 
  },

  // beforeRouteEnter(_to, _from, next) {
  //   this.showContent = true;
  //   console.log(this.showContent)
  //   next();
  // },
}
</script>

<style>
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

.app-wrap {
  @apply lg:container;
}

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

</style>
