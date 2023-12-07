<template>
  <div>
    <router-link class="invoice flex" :to="{ name: 'customer-form', params: {accountId: form.accountId} }">
      <div class="left flex">
        <span class="tracking-number">#{{form.accountId}}</span>
        <span class="due-date">{{form.formDate}}</span>
        <span class="person">{{ fullName }}</span>
      </div>

      <div class="right flex">
        <span class="price">{{form.occupation}}</span>
        <div 
        class="status-button flex" 
        :class="{paid: form.formDone, 
        draft: form.formInit, 
        pending: form.formPending}">
          <span v-if="form.formDone">Done</span>
          <span v-if="form.formInit">Init</span>
          <span v-if="form.formPending">Pending</span>
        </div>
        <div class="icon">
         <fa-icon :icon="['fas', 'arrow-right']" />
        </div>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "AcctForm",
  props: ["form"],

  computed : {
    fullName() {
      return this.form.lastName + " " + this.form.firstName;
    }
  },

}
</script>

<style lang="scss" scoped>
.invoice {
  @apply cursor-pointer gap-4 mb-4 py-7 px-8 items-center;
  text-decoration: none;
  color: #fff;
  border-radius: 20px;
  background-color: #1e2139;

  span {
    font-size: 13px;

  }

  .left {
    @apply items-center gap-4 basis-3/5;

    span {
      flex: 1;
    }

    .tracking-number {
      text-transform: uppercase;
    }
  }

  .right {
    @apply gap-4 basis-2/5 items-center;

    .price {
      flex: 1;
      font-size: 16px;
      font-weight: 600px;
    }
  }

}
</style>