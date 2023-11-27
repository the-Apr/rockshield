<template>
  <div class="testimony-wrap">
    <div class="first">
      <div class="header lg:col-span-2">
        <h2> Our Testimonies</h2>
        <h3>We’ve Created a Lasting Relationship with Our Customers</h3>
        <p>What they say about us</p>
      </div>
      <div class="testimony lg:col-span-3 lg:col-end-6">
        <div class="star">
          <img src="../assets/icons/Star.png" alt="" v-for="index in 5" :key="index">
        </div>
        <div class="body">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, dolorem delectus voluptate modi reprehenderit earum. In maiores ab iste itaque officiis, eligendi at tenetur! Vel reprehenderit architecto quos dolores commodi?</p>
        </div>
        <div class="name">William</div>
      </div>
    </div>

    <div class="second">
      <div class="testimony">
        <div class="star">
          <img src="../assets/icons/Star.png" alt="" v-for="index in 5" :key="index">
        </div>
        <div class="body">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, dolorem delectus voluptate modi reprehenderit earum. In maiores ab iste itaque officiis, eligendi at tenetur! Vel reprehenderit architecto quos dolores commodi?</p>
        </div>
        <div class="name">William</div>
      </div>
      <div class="testimony">
        <div class="star">
          <img src="../assets/icons/Star.png" alt="" v-for="index in 5" :key="index">
        </div>
        <div class="body">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, dolorem delectus voluptate modi reprehenderit earum. In maiores ab iste itaque officiis, eligendi at tenetur! Vel reprehenderit architecto quos dolores commodi?</p>
        </div>
        <div class="name">William</div>
      </div>
      <div class="testimony">
        <div class="star">
          <img src="../assets/icons/Star.png" alt="" v-for="index in 5" :key="index">
        </div>
        <div class="body">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, dolorem delectus voluptate modi reprehenderit earum. In maiores ab iste itaque officiis, eligendi at tenetur! Vel reprehenderit architecto quos dolores commodi?</p>
        </div>
        <div class="name">William</div>
      </div>
    </div>
  </div>

  <div class="loan-testimony">
    <div class="left">
      <h2>It all started with a 1million naira loan, the rest they say is history </h2>
      <p>- Ibrahim S.</p>
      <div class="read-more">
        <router-link :to="{}">Read more</router-link>
      </div>
    </div>
    <div class="right">
      <img src="../assets/display/cheerful-small-business-owner-with-open-sign 1.png" alt="">
    </div>
  </div>
</template>

<style lang="scss" scoped>
.testimony-wrap {
  @apply  flex flex-col gap-3 pt-10 px-6 mt-8 pb-16;
    background: rgba(0, 171, 241, 0.1);

  @screen md {
    @apply px-20 pb-32 pt-10 gap-4;
  }
  @screen lg {
    @apply px-32 pb-52 pt-20  mt-16 gap-6;
  }

  .first {
    @apply grid grid-cols-1 gap-y-3;
    @screen lg {
      @apply grid-cols-5 gap-6
    }
  }

  .second {
    @apply grid grid-cols-1 gap-y-3;
    @screen lg {
      @apply grid-cols-3 gap-6
    }
  }

  .header {
    @apply py-3 flex flex-col text-start px-4;
    max-width: 500px;
    @screen md {
      @apply px-8 py-5;
      max-width: 400px;
  
    }
    h2 {
      @apply text-2xl;
      color: #00ABF1;
      letter-spacing: 5.24px;
      @screen md {
        letter-spacing: 6.24px;
      }
    }
    h3 {
      margin-top: 20px;
      font-size: 18px;
      font-weight: 600;
      line-height: 27px;
      @screen md {
        font-size: 24px;
        font-weight: 600;
        line-height: 32px;
      }
    }
    p {
      margin-top: 20px;
      font-size: 16px;
      line-height: 24px;
      letter-spacing: 0.02px;
    }
  }

  .testimony {
    @apply flex flex-col gap-7 p-6 justify-center items-start text-start bg-white rounded-3xl;

    .star {
      @apply flex flex-row gap-1 ml-1;
      @screen md {
        @apply gap-2 ml-3;
      }

      img {
        width: 16.13px; 
        height: 15.51px;
      }
    }
    .body {
      @apply text-black text-sm tracking-wide;
      @screen md {
        @apply tracking-widest;
      }
    }
    .name {
      color: #00ABF1;
      font-size: 16px;
      line-height: 24px;
      letter-spacing: 0.02px;
    }
  }
}

.loan-testimony {
  @apply flex flex-col;
  @screen lg {
    @apply flex-row
  }

  .left {
    @apply px-10 py-8 flex flex-col gap-4 text-start text-white w-full;
    background: #00ABF1;
    @screen lg {
      @apply w-1/2 py-16 px-20
    }
    h2{
      @apply text-xl font-semibold;
      @screen md {
        @apply  text-[40px] font-semibold leading-[55px]
      }
    }
    p{
      @apply text-sm font-light leading-[18px] tracking-[0.021px];
    }
    .read-more {
      @apply mt-auto
    }
  }

  .right {
    @apply w-full;
    @screen lg {
      @apply w-1/2
    }
    img{
      @apply w-full h-full object-cover;
      // background: url('../assets/cheerful-small-business-owner-with-open-sign 1.png'), lightgray 50%;
    }
  }
}
</style>