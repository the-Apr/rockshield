<template>
  <div class="create-acct">
  <modal content="sucessfully submiutted" :show= "isSuccessful" @close="close"></modal>
    <div class="acct-wrap">
      <form @submit.prevent="submitForm">
        
        <h3>Account Opening Form</h3>

        <!-- bvn -->
        <div class="form-group">
          <label for="bvn">BVN
            <span class="required-field"></span>
          </label>
          <input required type="text" placeholder="Enter BVN" maxlength="11" autocomplete="off" name="bvn" id="bvn" v-model="bvn">
        </div>

        <!-- firstname -->
        <div class="form-group">
          <label for="firstname">Firstname</label>
          <input type="text" placeholder="Firstname" name="" id="firstname" required   v-model="firstName">
        </div>

        <!-- lastname -->
        <div class="form-group">
          <label for="lastname">Lastname</label>
          <input type="text" placeholder="Lastname" name="" id="lastname" required v-model="lastName">
        </div>

        <!-- gender -->
        <div class="form-group">
          <label for="title">Gender</label>
          <select name="gender" id="gender" required v-model="gender">
            <option value>--Select--</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="others">Others</option>
          </select>
          
        </div>

        <!-- email address -->
        <keep-alive>
        <div class="form-group">
          <label for="email">Email</label>
          <input type="email" placeholder="Email" name="" id="email" v-model="email">
        </div>
        </keep-alive>

        <!-- occupation -->
        <div class="form-group">
          <label for="occupation">Occupation</label>
          <input type="text" required name="" id="occupation" v-model="occupation">
        </div>

        <!-- work address -->
        <div class="form-group">
          <label for="workAddress">Work Address</label>
          <input type="text" name="" id="workAddress" v-model="workAddress">
        </div>

        <!-- residential Address -->
        <div class="form-group">
          <label for="resAddress">Residential Address</label>
          <input type="text" name="" id="resAddress" v-model="resAddress">
        </div>

        <!-- country of residence -->
        <div class="form-group">
          <label for="resState">Country of Residence</label>
          <select name="" id="resState" v-model="resCountry" @change="handleCountryChange">
            <option value="" disabled selected>Select your country</option>
            <option v-for="country in countries" :key="country.cioc" :value="country.alpha2Code">{{ country.name.common }}</option>
          </select>
        </div>

        <!-- state of residence -->
        <div class="form-group">
          <label for="resState">State of Residence</label>
          <select name="" id="resState" v-model="resState">
            <option value="" disabled selected>Select your state</option>

          </select>
        </div>

        <!-- city of residence -->
        <div class="form-group">
          <label for="resCity">City of Residence</label>
          <input type="text" name="" id="resCity" v-model="resCity">
        </div>

        <!-- marital status -->
        <div class="form-group">
          <label for="maritalStatus">Marital Status</label>
          <select name="" id="maritalStatus" v-model="maritalStatus">
            <option value="" disabled selected>--Select--</option>
            <option value="married">Married</option>
            <option value="divorced">Divorced</option>
            <option value="single">Single</option>
            <option value="complicated">Complicated</option>
          </select>
        </div>  

        <!-- id type -->
        <div class="form-group">
          <label for="idType">ID Type</label>
          <select required name="" id="idType" v-model="idType">
            <option value="" selected disabled>--Select--</option>
            <option value="passport">International Passport</option>
            <option value="ndl">Drivers License</option>
            <option value="nin">National Identification Number</option>
            <option value="pvc">Permanent Voter's Card</option>
          </select>
        </div> 

         <!-- id number  -->
        <div class="form-group">
          <label for="bvn">ID Number</label>
          <input type="text" name="" id="idNum" v-model="idNum">
        </div>  

        <!-- next of kin fullname -->
        <div class="form-group">
          <label for="nokFullName">Next of Kin Full Name</label>
          <input type="text" name="" id="nokFullName" v-model="nokFullName">
        </div>

        <!-- next of kin phone number -->
        <div class="form-group">
          <label for="nokPhoneNum">Next of Kin Contact</label>
          <input type="text" name="" id="nokPhoneNum" v-model="nokPhoneNum">
        </div>

        <!-- next of kin Address -->
        <div class="form-group">
          <label for="nokAddress">Next of Kin Address</label>
          <input type="text" name="" id="nokAddress" v-model="nokAddress">
        </div>

        <!-- form Date -->
        <div class="form-group">
          <label for="formDate">Account Date</label>
          <input disabled type="text" name="" id="formDate" v-model="formDate">
        </div>

        <!-- otp -->
        <div class="form-group">
          <label for="otp">OTP</label>
          <input type="text" placeholder="Eenter OTP Generated" required maxlength="6" minlength="6" name="" id="otp" v-model="otp">
        </div>

        <!-- consent -->
        <div class="consent">
         
            <input type="checkbox" id="chkTerms" v-model="chkTerms">
            <label for="chkTerm">
            I agree I understand Rockshield MFB
            <a href="">privacy Policy</a>
             and consent to the processing of my personal Information for account opening
             </label>
          
        </div>
        
        <div class="error-msg">
        <fa-icon :icon="['fas', 'circle-exclamation']" style="color: #eb0f25;"  class="icon"/>
        <p class="text-red-500">Kindly fill out all input fields.</p>
        </div>

        <!-- submit button -->
        <div class="open-account">
          <button @click="publishForm" class="blue btn">Open Account</button>
        </div>
      </form>
    </div>

  </div>

  <!-- submitted successfully -->
  
</template>

<script>
import {defineAsyncComponent} from 'vue';
import { collection, doc, setDoc } from "firebase/firestore";
import { db } from '../firebase/firebaseInit';
import { uid } from 'uid';

const NavButton = defineAsyncComponent(() => import('@/components/NavButton.vue'));
import Loading from '@/components/Loading.vue'

export default {

  components: {
    NavButton,
    Loading
  },

  data () {
    return {
      isSuccessful: null,
      formDate: null,
      formDateUnix: null,
      dateOptions: { year: "numeric", month: "short", day: "numeric" },
      formPending: null,
      formInit: null,
      countries: [],
      loading: null,
      bvn: null,
      lastName: null,
      firstName: null,
      gender: null,
      email: null,
      occupation: null,
      workAddress: null,
      resAddress: null,
      resCountry: null,
      resState: null,
      resCity: null,
      maritalStatus: null,
      idType: null,
      idNum: null,
      nokFullName: null,
      nokPhoneNum: null,
      nokAddress: null,
      otp: null,
      chkTerms: null
    }
  },

  created() {
    this.formDateUnix = Date.now();
    this.formDate = new Date(this.formDateUnix).toLocaleDateString("en-us",this.dateOptions);
  },

  mounted() {
    this.fetchCountries();
  },

  methods: {

    close() {
      this.isSuccessful= null;
    },

    publishForm() {
      this.formInit = true;
    },

    fetchCountries() {
      fetch("https://restcountries.com/v3.1/all")
        .then((response) => response.json())
        .then((data) => {
          this.countries = data;
          this.resCountry = data[0].alpha2Code; // Set an initial selected country
          this.handleCountryChange();
        });
    },

    handleCountryChange() {
      this.selectedCountryData = this.countries.find((country) => this.selectedCountry === country.alpha2Code);
    },

    submitForm() {
      this.uploadForm();
    },

    async uploadForm() {
      this.loading = true;

      const customerCollection = collection(db, 'account-forms');
      const newAccountDoc = doc(customerCollection);

      const formData = {
        accountId: uid(6),
        formDate: this.formDate,
        bvn: this.bvn,
        lastName: this.lastName,
        firstName: this.firstName,
        gender: this.gender,
        email: this.email,
        occupation: this.occupation,
        workAddress: this.workAddress,
        resAddress: this.resAddress,
        resState: this.resState,
        resCity: this.resCity,
        maritalStatus: this.maritalStatus,
        idType: this.idType,
        idNum: this.idNum,
        nokFullName: this.nokFullName,
        nokPhoneNum: this.nokPhoneNum,
        nokAddress: this.nokAddress,
        otp: this.otp,
        chkTerms: this.chkTerms,
        formInit: this.formInit,
        formPending: true,
        formDone: null,
        formDate: null,
      }; 

      try {
        await setDoc(newAccountDoc, formData);

        this.loading = false;

        this.isSuccessful = true;
      } catch (error) {
        console.error("Error uploading your information:", error);
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.create-acct{
  // @apply fixed top-0 left-0 w-full overflow-scroll bg-transparent;
  // height: 100vh;
  // z-index: 1;
  // &::-webkit-scrollbar
  //   display: none;
  // }

  @apply mt-10 mx-6 flex items-center justify-center;

  @screen lg{
   @apply mx-20
  }
  
  .acct-wrap {
    @apply relative p-4;
    // max-width: 700px;
    background-color: #141625;
    color: #fff;
    box-shadow:  10px 4px 6px -1px rgba(0, 0, 0, 0.2), 0 2px 4px -1px rgba(0, 0, 0, 0.06);

    @screen lg {
      @apply p-14
    }

    h3{
      @apply mb-6 text-lg font-semibold tracking-wider
    }
  }

  .form-group {
    @apply mb-6 flex flex-col;

    label {
      @apply text-xs mb-2 text-start;

      .required-field::after {
        content: "*";
        color: red;
      }
    }

    input,
    select {
      @apply w-full p-3  shadow-sm ring-1 ring-inset ring-gray-300 outline-none;
      // border: 1px solid #ced4da;
      background-color: #1e2139;
      border-radius: 4px;
      text-align: left;

      &:focus {
      @apply ring-2 ring-inset ring-indigo-600 transition ease-in-out duration-500;
      }

    }
  }


 

  input:read-only {
    background-color: #e9ecef;
    opacity: 1;
    color: #495057;
  }

  .error-msg {
    @apply flex gap-3 items-center my-2;
  }

  .consent {
    @apply mb-4 text-start
  }

  .open-account {
    @apply my-4 ;
  }
} 

form{
  @apply max-w-[700px]
}


</style>

