<template>
<transition name="account">
  <div class="create-acct" v-if="accountModalActive">
    <div class="acct-wrap">
      <h3>Account Opening Form</h3>

      <form @submit.prevent="submitForm">

        <!-- bvn -->
        <div class="form-group">
          <label for="bvn">BVN
            <span class="required-field"></span>
          </label>
          <input required type="text" name="bvn" id="bvn" v-model="bvn">
        </div>

        <!-- firstname -->
        <div class="form-group">
          <label for="firstname">Firstname</label>
          <input type="text" placeholder="Firstname" name="" id="firstname" required readonly  v-model="firstName">
        </div>

        <!-- lastname -->
        <div class="form-group">
          <label for="lastname">Lastname</label>
          <input type="text" placeholder="Lastname" name="" id="lastname" required readonly v-model="lastName">
        </div>

        <!-- gender -->
        <div class="form-group">
          <label for="title">Gender</label>
          <select name="" id="gender" v-model="gender">
            <option value="">--Select--</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="others">Others</option>
          </select>
          
        </div>

        <!-- email address -->
        <div class="form-group">
          <label for="email">Email</label>
          <input type="email" placeholder="Email" name="" id="email" v-model="email">
        </div>

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

        <!-- otp -->
        <div class="form-group">
          <label for="otp">OTP</label>
          <input type="text" placeholder="Eenter OTP Generated" required maxlength="6" minlength="6" name="" id="otp" v-model="otp">
        </div>

        <!-- consent -->
        <div class="form-group">
          <span>
            <input type="checkbox" id="chkTerms" v-model="chkTerms">
            I agree I understand Rockshield MFB
            <a href="">privacy Policy</a>
             and consent to the processing of my personal Information for account opening
          </span>
        </div>

        <p>Kindly fill out all input fields.</p>

        <!-- submit button -->
        <div class="open-account">
          <button type="submit">Open Account</button>
        </div>
      </form>
    </div>

  </div>
</transition>
</template>

<script>
import {mapState} from 'vuex';
export default {

  data () {
    return {
      bvn: null,
      lastName: null,
      firstName: null,
      gender: null,
      email: null,
      occupation: null,
      workAddress: null,
      resAddress: null,
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

  computed : {
    ...mapState(['accountModalActive'])
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

  @apply mt-10 mx-20 flex items-center justify-center;

  @screen lg{
    left: 90px;
  }
  
  .acct-wrap {
    @apply relative p-14 w-2/3;
    // max-width: 700px;
    background-color: #141625;
    color: #fff;
    box-shadow:  10px 4px 6px -1px rgba(0, 0, 0, 0.2), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
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

  input:read-only {
    background-color: #e9ecef;
    opacity: 1;
    color: #495057;
  }
}  

.account-enter-active,
.account-leave-active {
  transition: 0.8s ease all;
}

.account-enter-from,
.account-leave-to {
  transform: translateX(-700px);
}

</style>

