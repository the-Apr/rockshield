<template>
  <div class="form-wrap">
    <form action="" class="login">
      <p class="login-register">
        Don't have an account?
        <router-link class="router-link" :to="{name: 'admin-register'}">Register</router-link>
      </p>
      <h2>Login to Rockshield Admin</h2>
      <div class="inputs">
        <div class="input">
          <input type="text" placeholder="E-mail" v-model="email">
          <fa-icon class="icon" :icon="['fas', 'envelope']" />
        </div>
        <div class="input">
          <input type="password" placeholder="Password" v-model="password">
          <fa-icon class="icon" :icon="['fas', 'lock']" />
        </div>
        <div v-show="error" class="error">{{this.errorMsg}}</div>
      </div>
      <router-link class="forgot-password" :to="{name:  ''}">Forgot your Password?</router-link>
      <button @click.prevent= "signIn">Sign In</button>
      <div class="angle"></div>
    </form>
    <div class="background"></div>
  </div>
</template>

<script>
import { auth } from '../../firebase/firebaseInit'
import { signInWithEmailAndPassword } from 'firebase/auth'

export default {
  name: 'Login',

  data() {
    return {
      email: "",
      password: "",
      error: null,
      errorMsg: ""
    }
  },

  methods: {
    signIn() {
      signInWithEmailAndPassword(auth, this.email, this.password)
      .then(() => {
        this.$router.push({name: "account-list"})
        this.error = false;
        this.errorMsg = "";
      }). catch(err => {
        this.error = true;
        this.errorMsg = err.message; 
      })
    },
  }
}
</script>

<style lang="scss">
.form-wrap {
  overflow: hidden;
  display: flex;
  height: 100vh;
  justify-content: center;
  align-self: center;
  margin: 0 auto;
  width: 90%;

  @screen md {
    width: 100%;
  }

  .login-register {
    margin-bottom: 32px;

    @screen md {
      margin-bottom: 20px;
    }

    .router-link {
      color: #000
    }
  }

  form {
    padding: 0 10px;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex: 1;

    @screen md{
      padding: 0 50px;
    }

    h2 { 
      text-align: center;
      font-size: 30px;
      color: #303030;
      margin-bottom: 40px;

      @screen md {
        font-size: 37px;
      }
    }

    .inputs {
      width: 100%;
      max-width: 350px;

      .input {
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 10px;

        input{
          width: 100%;
          background-color: #f2f7f6;
          padding: 7px 7px 7px 34px;
          border: none;
          border-radius: 10px;
          &:focus{
            outline: none;
          }

        }

        .icon {
          width: 12px;
          position: absolute;
          left: 10px;
        }

      }
    }

    .forgot-password {
      text-decoration: none;
      color: #000;
      cursor: pointer;
      font-size: 14px;
      margin: 16px 0 32px;
      border-bottom: 1px solid transparent;
      transition: 0.5s ease all;

      &:hover {
        border-color: #303030;
      }
    }

    .angle {
      display: none;
      position: absolute;
      background-color: #fff;
      transform: rotateZ(3deg);
      width: 60px;
      right: -30px;
      height: 101%;

      @screen lg {
        display: initial;
      }
    }
  }

  .background {
    display: none;
    flex: 2;
    background-size: cover;
    background-image: url("../../assets/display/happy-workers.png");
    width: 100%;
    height: 100%;
    max-height: 100%;

    @screen lg{
      display: initial;
    
    }
  }
}
</style>