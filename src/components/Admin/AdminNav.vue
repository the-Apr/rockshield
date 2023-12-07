<template>
<div class="admin-nav">
  <!-- rs logo -->
  <div class="branding">
    <router-link class="link" :to="{name: 'home'}">
      <img src="../../assets/logo/RSPryLogoHor 1.png" alt="">
    </router-link>
  </div>

  <!-- profile initials -->
  <div v-if="user" @click="toggleProfileMenu" class="profile" ref="profile">
    <span>{{ this.$store.state.profileInitials }}</span>
    <div class="profile-menu" v-show="profileMenu">
      <div class="info">
        <p class="initials"> {{ this.$store.state.profileInitials}}</p>
        <div class="right">
          <p>{{this.$store.state.profileFirstName}} {{this.$store.state.profileLastName}}</p>
          <p>{{this.$store.state.profileUserName}}</p>
          <p>{{this.$store.state.profileEmail}}</p>
        </div>
      </div>

      <div class="options">
        <div class="option">
          <router-link class="option" to="">
              <fa-icon class="icon" :icon="['fas', 'user']" />
              <p>Profile</p>
          </router-link>
        </div>
        <div class="option">
          <router-link class="option" to="">
              <fa-icon class="icon" :icon="['fas', 'user-secret']" />
              <p>Admin</p>
          </router-link>
        </div>
        <div @click="signOut" class="option">
            <fa-icon class="icon" :icon="['fas', 'arrow-right-from-bracket']" />
            <p>Sign Out</p>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import { auth } from '@/firebase/firebaseInit';
import { signOut } from 'firebase/auth';
export default {
  data() {
    return {
      profileMenu: null,
    }
  },

  computed : {
    user() {
      return this.$store.state.user
    }
  },

  methods: {
    toggleProfileMenu(e) {
      if (e.target === this.$refs.profile){
        this.profileMenu = !this.profileMenu
      }
    },
  
    signOut() {
      signOut(auth)
      window.location.reload()
    }
  }
}
</script>

<style lang="scss" scoped>

.admin-nav {
  @apply flex justify-between px-20 py-6 items-center;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06) ;

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

  .profile {
    @apply relative cursor-pointer flex items-center justify-center w-10 h-10 ml-4;
    border-radius: 50%;
    color: #fff;
    background-color: #00ABF1;

    span {
      @apply uppercase;
      pointer-events: none;
    }

    .profile-menu {
      @apply absolute top-14 right-0;
      width: 250px;
      background-color: #303030;
      box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06) ;

      .info{
        @apply flex items-center p-4;
        border-bottom: 1px solid #fff;

        .initials {
          @apply w-10 h-10 bg-white flex items-center justify-center; 
          color: #000;
          position: initial;
          border-radius: 50%;
        }

        .right {
          @apply flex-1 ml-6;

          p:nth-child(1){
            font-size: 14px;
          }

          p:nth-child(2),
          p:nth-child(3){
            font-size: 12px;
          }
        }
      }

      .options {
        padding: 15px;

        .option {
          @apply flex items-start mb-3;
          color: #fff;
          text-decoration: none;

          .icon {
            @apply w-4 h-auto
          }
          p{
            @apply text-sm ml-3
          }
          &:last-child {
            margin-bottom: 0px;
          }
        }
      }
    }
  }
}

</style>