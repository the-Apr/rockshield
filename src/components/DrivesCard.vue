<template>
  <div class="drives-card">
    <div class="card" v-for="(card,index) in cardDetails" :key="index">
      <div class="left">
        <img :src= "card.image" alt="">
      </div>
      <div class="right">
        <h2>{{card.title}}</h2>
        <p>{{card.body}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DrivesCard',

  props: ['cardDetails']
}
</script>

<style lang="scss" scoped>
.drives-card {
  @apply grid grid-cols-1 gap-4;

  @screen lg {
    @apply grid-cols-2
  }

  .card {
    @apply px-8 py-10 flex flex-row gap-8 h-[260px] items-start shadow-[0px_16px_24px_0px_rgba(18,156,234,0.07)] rounded-3xl;
    border: 1px solid #91DBF9;

    @screen lg{
      @apply px-10 py-12 gap-10
    }

    .left {
      @apply p-2;
      border-radius: 50%;
      border: 1px solid #91DBF9;
      // background: #91DBF9;

      img{
        @apply w-12 h-12 p-1;
        border-radius: 50%;
        background: #91DBF9;
      }
    }

    .right {
      @apply flex flex-col gap-6 text-start;
      h2{
        @apply text-2xl font-normal leading-8;
      }
      p{
        @apply w-[402px] text-sm font-normal leading-5 tracking-[0.035px];
      }

    }
  }
}
</style>