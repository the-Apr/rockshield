<template>
  <div class="service-wrap">
    <div class="left">
      <img src="" alt="">
    </div>
    <div class="right">
      <div class="text" :class="{'text-box' : isFirst}">
        <h3>{{service.title}}</h3>
        <h2>{{service.catchPhrase}}</h2>
        <p>{{service.body}}</p>

      </div>
      <div class="action">
        <router-link :to="{}">Learn more</router-link>
        <fa-icon class="arrow" :icon="['fas', 'arrow-right']" />

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ServicesCard',

  props: ['service', 'isFirst']
}
</script>

<style lang="scss" scoped>
.service-wrap {
  @apply mb-10 flex flex-col gap-8 w-full h-full;

  @screen md {
    @apply flex-row my-20 gap-14;
  }

  &:nth-child(even) {
    .left {
      order: 2;

    }
    .right {
      order: 1;
    }
  }

  .text-box {
    h2 {
      max-width:  400px !important;
    }
  }

  @screen md {
    .text-box {
      max-width:  400px !important;
    }
  }

  .left {
    @apply w-full order-2;
    background: #EBFCF1;

    @screen md {
      @apply w-1/2 order-1
    }
  }

  .right {
    @apply w-full flex flex-col items-center justify-center gap-10 py-10 order-1;

    @screen md {
      @apply w-1/2 order-2;
    }

    .text {
      @apply flex flex-col gap-8 text-left items-center ;
      max-width: 550px;
      

      @screen md {
        max-width: 500px;
      }

      // &:first-child {
      //   max-width: 400px;
      // }
    
      h3 {
        @apply text-2xl;
        letter-spacing: 6.24px;
        color: #D9D9D9;
      }
      h2 {
        font-size: 45px;
        font-weight: 700;
      }
      p {
        font-size: 16px;
        line-height: 24px;
        letter-spacing: 0.02px;
      }
    }

    .action {
      @apply flex gap-6 items-center;
    }
  }
}
</style>