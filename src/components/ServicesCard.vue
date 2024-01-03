<template>
  <div class="service-wrap">
    <div class="left">
      <img src="" alt="">
    </div>
    <div class="right">
      <div class="info-wrap">
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

  @screen lg {
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

  @screen lg {
    .text-box {
      max-width:  400px !important;
    }
  }

  .left {
    @apply w-full order-2;
    background: #EBFCF1;

    @screen lg {
      @apply w-1/2 order-1
    }
  }

  .right {
    @apply w-full  items-center justify-center py-6 px-4 order-1;

    @screen md {
      @apply py-10 px-14;
    }

    @screen lg {
      @apply w-1/2 order-2;
    }

    .info-wrap {
      @apply max-w-[550px] flex flex-col gap-10 ;

      @screen md{
        @apply max-w-[500px];
      }
    }

    .text {
      @apply flex flex-col gap-8 text-left items-center ;
     

      // &:first-child {
      //   max-width: 400px;
      // }
    
      h3 {
        @apply text-xl;
        letter-spacing: 6.24px;
        color: #D9D9D9;
        @screen md {
          @apply text-2xl
        }
      }
      h2 {
        font-size: 25px;
        font-weight: 700;
        @screen md {
          font-size: 44px;
        }
      }
      p {
        font-size: 16px;
        line-height: 24px;
        letter-spacing: 0.02px;
      }
    }

    .action {
      @apply flex gap-3 items-center ; 
      

      @screen md {
        @apply  gap-6;
      }

      @screen lg{
        @apply self-start;
      }
    }
  }
}
</style>