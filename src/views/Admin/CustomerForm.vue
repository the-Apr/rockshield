<template>
<div class="wrap">
   <div v-if="currentForm" class="form-view box"> 
    
    <router-link class="nav-link flex" :to="{name: 'account-list'}">
      <fa-icon class="icon" :icon="['fas', 'arrow-left']" /> Go Back
    </router-link>
    <div class="header flex">
      <!-- <loading v-show="loading"/> -->
      <div class="left flex">
        <span>Status</span>
        <div 
          class="status-button flex" 
          :class="{
            done: currentForm.formDone, 
            init: currentForm.formInit, 
            pending: currentForm.formPending}"
          >
          <span v-if="currentForm.formDone">Done</span>
          <span v-if="currentForm.formInit">New</span>
          <span v-if="currentForm.formPending">Pending</span>
        </div>
      </div>

      <div class="right flex">
        
        <button v-if="currentForm.formPending" @click="updateStatusToDone(currentForm.docId)" class="green btn">Mark as Done</button>
        <button v-if="currentForm.invoiceInit || currentForm.formDone" @click="updateStatusToPending(currentForm.docId)" class="orange btn">Mark as Pending</button>
      </div>
    </div>

    <!-- Customer Details -->
    <div class="invoice-details flex flex-col">
      <div class="form-details">
        <h2>Name</h2>
        <p>{{fullName}}</p>
      </div>
      <div class="form-details">
        <h2>BVN</h2>
        <p>{{currentForm.bvn}}</p>
      </div>
      
    </div>
  </div>
</div>  
</template>

<script>
import { mapActions, mapMutations, mapState } from 'vuex';
export default {
  name: "CustomerForm",

  data() {
    return{
      currentForm: null,
    }
  },

  created () {
    this.getCurrentForm();
  },

  methods: {
    ...mapMutations(['setCurrentForm']),

    ...mapActions(['DELETE_Invoice', 'updateStatusToDoneSt', 'updateStatusToPendingSt']),

    getCurrentForm() {
      this.setCurrentForm(this.$route.params.accountId);
      this.currentForm = this.currentFormArray[0];
    },

    // async deleteInvoice(docId) {
    //   this.loading = true;
    //   await this.DELETE_Invoice(docId);
    //   this.$router.push({name: 'home'});
    //   this.loading = false;
    // },

    updateStatusToDone(docId) {
      this.updateStatusToDoneSt(docId)
    },

    updateStatusToPending(docId) {
      this.updateStatusToPendingSt(docId)
    },
  },

  computed: {
    ...mapState(['currentFormArray']),

    fullName() {
     this.currentForm.lastName + " " +this.currentForm.firstName
    }
  },

}
</script>

<style lang="scss" scoped>
.wrap{
  background-color: #141625;
  min-height: 100vh;
  color: #fff
}

.form-view {
  
  .nav-link {
    @apply mb-8 items-center text-white text-xs no-underline;

    .icon {
      @apply mr-4 w-2 h-3
    }
  }

  .header,
  .invoice-details{
    background-color: #1e2139;
    border-radius: 20px;
  }

  .header {
    @apply items-center py-6  px-8 text-xs;

    .left {
      align-items: center;

      span {
        color: #dfe3fa;
        margin-right: 16px;
      }
    }

    .right {
      flex: 1;
      justify-content: flex-end;

      button {
        color: #fff;
      }
    }
  }

  .invoice-details {
    @apply p-12 mt-6;
  }
}
</style>