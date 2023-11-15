<template>
<div class="app">
  <navigation />
  <transition name="fade" mode="out-in">
    <router-view />
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

   mounted() {
    console.log('Footer component mounted');
  },
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

fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
}


</style>
