<template>
  <div class="form-wrap">
    <form action="" class="register">
      <p class="login-register">
        Already have an account?
        <router-link class="router-link" :to="{name: 'admin-login'}">Login</router-link>
      </p>
      <h2>Create Your Rockshield Admin Account</h2>
      <div class="inputs">
        <div class="input">
          <input type="text" placeholder="First Name" v-model="firstName">
          <fa-icon class="icon" :icon="['fas', 'user']" />
        </div>

        <div class="input">
          <input type="text" placeholder="Last Name" v-model="lastName">
          <fa-icon class="icon" :icon="['fas', 'user']" />
        </div>

        <div class="input">
          <input type="text" placeholder="Username" v-model="username">
          <fa-icon class="icon" :icon="['fas', 'user']" />
        </div>

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
      
      <button @click.prevent="register">Sign Up</button>
      <div class="angle"></div>
    </form>
    <div class="background"></div>
  </div>
</template>

<script>
import { auth, db } from "../../firebase/firebaseInit";
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { collection, doc, setDoc } from "firebase/firestore";

export default {
  name: "Register",

  data() {
    return {
      firstName: "",
      lastName: "",
      username: "",
      email: "",
      password: "",
      error: null,
      errorMsg: "",
      id: null
    }
  },

  methods: {
    async register() {
      if(
        this.email !== "" &&
        this.password !== "" &&
        this.firstName !== "" &&
        this.lastName !== "" &&
        this.username !== "" 
      ) {
        this.error = false;
        this.errorMsg = "";
        
        try { 
          const createUser = await createUserWithEmailAndPassword(auth, this.email, this.password);
          const result = await createUser;
          // console.log(result.user.uid)

          // Reference to the 'users' collection
          const usersCollection = collection(db, "users");

          // Reference to the document using the user's UID
          const userDoc = doc(usersCollection, result.user.uid);

          // Set document data
          await setDoc(userDoc, {
            id: result.user.uid,
            firstName: this.firstName,
            lastName: this.lastName,
            username: this.username,
            email: this.email,
          });

          this.$router.push({name:"admin-login"})
          return;
          
        } catch (error) {
          console.error("Error while creating user or setting document data:", error);
          this.error = true;
          this.errorMsg = "An error occurred while creating the user.";
        }
      } else {
          this.error = true;
          this.errorMsg = "Please fill out all the fields";
        }
    }
  }
}
</script>

<style lang="scss" scoped>
.register {
  h2 {
    max-width: 350px;
  }
}
</style>