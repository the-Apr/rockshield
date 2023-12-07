<template>
<div class="account-list">
  <modal content="sucessfully submiutted"></modal>
  <!-- header -->
  <admin-nav/>

  <!-- body -->
   <div class="home box">
    <div class="header flex">
      <div class="left flex flex-col">
        <h1>Submitted Forms</h1>
        <span v-if="formData.length == 1">There is {{formData.length}} total submitted form</span>
        <span v-else>There are {{formData.length}} total submitted forms</span>
        
      </div>
      <div class="right flex">
        <div @click="toggleFilterMenu" class="filter flex">
          <span>Filter by status <span v-if="filteredForm">: {{filteredForm}}</span></span>
          <fa-icon class="icon" :icon="['fas', 'caret-down']" />
          <ul v-show="filterMenu" class="filter-menu">
            <li @click="filteredForms">New</li>
            <li @click="filteredForms">Pending</li>
            <li @click="filteredForms">Done</li>
            <li @click="filteredForms">Clear Filter</li>
          </ul>
        </div>
      </div>
    </div>

    <div v-if="formData.length &gt; 0">
      <acct-form v-for="(form, index) in formData" :form= "form" :key="index"/>
    </div>
    <div v-else class="empty flex flex-col">
      <img src="../../assets/display/Wavy_Gen-03_Single-01.jpg" alt="empty">
      <h3>This is nothing here</h3>
    </div>
  </div>


</div>
</template>

<script>

import AdminNav from '@/components/Admin/AdminNav.vue';
import { mapState, mapActions } from 'vuex';
import AcctForm from '@/components/Admin/AcctForm.vue'
import Modal from '@/components/Modal.vue';

export default {
	components: { AdminNav, AcctForm, Modal },

  data() {
    return {
      filterMenu: null,
      filteredForm: null
    }
  },

  computed: {
    ...mapState(['formData', 'formsLoaded']),

    filteredData() {
      return this.formData.filter(customerForm => {
        if(this.filteredForm === 'New') {
          return customerForm.formInit === true;
        }
        if(this.filteredForm === 'Pending') {
          return customerForm.formPending === true;
        }
        if(this.filteredForm === 'Done') {
          return customerForm.formDone === true;
        }
        return customerForm;
      });
    }
  },

  created(){
    this.getForms();
  },

  methods: {
    ...mapActions(['getForms']),

    toggleFilterMenu() {
      this.filterMenu = !this.filterMenu
    },

    filteredForms(e) {
      if(e.target.innerText === 'Clear Filter') {
        this.filteredForm =null;
        return;
      }
      this.filteredForm = e.target.innerText;
    }
  },
}
</script>

<style lang="scss" scoped>
.account-list{
  @apply mt-4
}

$box-shadow:  0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);

.home {
  color: #fff;
  background-color: #141625;
  @apply px-8;

  .header {
    margin-bottom: 65px;

    .left,
    .right {
      flex: 1;
    }

    .left{
      @apply items-start ;

      h1{
        @apply text-2xl font-bold
      }

      span{
        @apply text-xs
      }
    }

    .right{
      @apply justify-end items-center;

      .button,
      .filter {
        @apply items-center;

        span {
          font-size: 12px;
        }
      }

      .filter {
        @apply relative mr-10 cursor-pointer;

        .icon {
          @apply ml-3
        }

        .filter-menu{
          @apply absolute list-none top-6;
          width: 120px;
          background-color: #1e2139;
          box-shadow: $box-shadow;

          li{
            @apply cursor-pointer text-xs py-3 px-7;

            &:hover {
              color: #1e2139;
              background-color: #fff
            }
          }
        }
      }

      .button{
        @apply py-2 px-3;
        background-color: #7c5dfa;
        border-radius: 40px;

        .inner-button {
          @apply mr-2 p-2 items-center justify-center;
          border-radius: 50%;
          background-color: #fff;
        }
      }
    }
  }

  .empty {
    @apply mt-40 items-center;

    img {
      @apply w-56 h-52;
    }

    h3 {
      @apply text-xl mt-10;
    }

    p {
      @apply text-center text-xs font-light mt-4;
      max-width: 224px;
    }
  }
}
</style>