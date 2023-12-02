<template>
<div class="account-list">
  <admin-nav/>

</div>
</template>

<script>
import AdminNav from '@/components/Admin/AdminNav.vue';
export default {
	components: { AdminNav },

}
</script>

<style lang="scss" scoped>
.account-list{
@apply mt-4
}

</style>