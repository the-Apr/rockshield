<template>
  <div class="about">
    <div class="first-mssg">
      <div class="message">
        <h2> We are here to build  a  lasting relationship with our customers </h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et nibh urna in proin dui purus bibendum cras. Morbi cursus nunc.</p>
      </div>
      <div class="image">
        <img :src= "image.link" alt="" v-for="(image, index) in aboutImages" :key="index">
      </div>
      <div class="v-mission">
        <div class="wrap">
          <div class="head">
            <h2>Vision</h2>
          </div>
          <p>Our vision is to be one of the top best three Microfinance banks in the state</p>
        </div>
        <div class="wrap">
          <div class="head">
            <h2>Mission</h2>
          </div>
          <p>To provide quality service in a conducive environment enhanced by motivated professionals using the state of art technology to achieve high returns to shareholders while being conscious of our social responsibilities </p>
        </div>
      </div>
    </div>

    <div class="what-drives-us">
      <h2>What drives us</h2>
      <drives-card :cardDetails="cardDetails"/>

    </div>

    <div class="our-story">
      <h2>Our Story</h2>
      <div class="story-body">
        <div class="story-text">
          <p>ROCKSHIELD Microfinance Bank Limited duly incorporated on the 19th of June 2008 as a private limited company. A provisional license was obtained from Central Bank of Nigeria to transact business as a Microfinance Bank on the 3rd of October 2008</p>

          <p>Rockshield Micro Finance Bank Nigeria is committed to its passion of helping to improve business opportunities for small businesses, and Entrepreneurs. <br>
          We offer credit facilities to individuals and businesses. <br>
          Our saving accounts offer fantastic interest rates on savings and high interest rate on fixed deposit accounts. </p>

          <p>We are committed to reducing the number of unbanked individuals as well as promote a healthy saving culture among new customers and existing ones. <br>
          As a licensed Microfinance Bank, our depositors’ funds are fully insured by Nigeria Deposit Insurance Corporation (NDIC).</p>

          <p>We operate from our corporate head office located at 79, Ladipo Street Matori-Mushin, Lagos, Nigeria.</p>

          <p>We boast of top-notch professionals in various fields and endeavor. <br>
          We are also committed to the social and economic empowerment of our customers through the provision of formidable and responsive financial services.</p>
        </div>
        <div class="image">
          <img src="../assets/display/Success 1.png" alt="">
        </div>
      </div>
    </div>

    <div class="mgt-team">
      <h2>Management Team</h2>
      <div class="mgt-cards">
        <mgt-card/>
      </div>
    </div>
  </div>
</template>

<script>
import { defineAsyncComponent } from 'vue';

const DrivesCard = defineAsyncComponent(() => import('@/components/DrivesCard.vue'));
const MgtCard = defineAsyncComponent(() => import('@/components/MgtCard.vue'));


export default {
  name: 'About',
  components: { DrivesCard, MgtCard },

  data() {
    return {
      aboutImages: [
        { link: require('../assets/display/happy-workers.png') },
        { link: require("../assets/display/portrait-young-happy-african-man-woman-showing-thumbs-up 1.png") },
        { link: require("../assets/display/group-afro-americans-working-together 2.png") }
      ],
      cardDetails: [
        {
          title : "Team",
          image: require("../assets/icons/Vector.png"),
          body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et nibh urna in proin dui purus bibendum cras. Morbi cursus nunc."
        },
        {
          title : "Integrity",
          image: require("../assets/icons/integrity.png"),
          body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et nibh urna in proin dui purus bibendum cras. Morbi cursus nunc."
        },
        {
          title : "Service",
          image: require("../assets/icons/service.png"),
          body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et nibh urna in proin dui purus bibendum cras. Morbi cursus nunc."
        },
        {
          title : "Excellence",
          image: require("../assets/icons/badge 1.png"),
          body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et nibh urna in proin dui purus bibendum cras. Morbi cursus nunc."
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.about {
  @apply px-2 mx-1 mt-16 flex flex-col;

  @screen sm {
    @apply mt-20 px-12 mx-4
  }
  @screen lg {
    @apply mt-24 px-20 mx-8
  }

  .first-mssg {
    @apply flex flex-col justify-center items-center gap-20;

    @screen lg {
      @apply gap-28
    }

    .message {
      @apply flex flex-col items-center gap-4;
      h2{
        @apply w-auto text-center text-3xl font-medium leading-[normal];

        @screen lg {
          @apply w-[726px] text-center text-[45px] font-normal leading-[normal]
        }
      }
      p{
        @apply w-[479px] text-center text-sm font-normal leading-5 tracking-[0.035px]
      }
    }

    .image {
      @apply grid grid-cols-1 gap-y-3;

      @screen md {
        @apply grid-cols-3 gap-4;
      }

      img {
        @apply object-cover rounded-xl;
        min-height: 300px;
      }
    }

    .v-mission{
      @apply flex flex-col gap-10 mx-2;

      @screen lg {
        @apply flex-row gap-16 mx-20;
      }

      .wrap {
        @apply flex flex-col items-center gap-8;

        @screen lg{
          @apply mb-10 items-center gap-14
        }

        .head {
          @apply w-[157px] h-4;
          background: rgba(21, 207, 116, 0.36);

          h2{
            @apply text-[32px] font-normal leading-10 tracking-[8.32px] uppercase;
            
          }
        }

        p{
          min-width: 300px;
        }
      }
    }
  }

  .what-drives-us {
    @apply flex flex-col my-24 py-6 gap-14;

    h2{
      @apply  text-[45px] font-medium leading-[normal]
    }
  }

  .our-story {
    @apply flex flex-col my-16 mx-4 gap-8;

    @screen lg {
      @apply my-28 mx-10 gap-10
    }

    h2{
      @apply text-4xl font-semibold leading-[44px] text-start;
    }

    .story-body {
      @apply flex flex-col gap-8 items-center;

      @screen lg {
        @apply flex-row gap-14 items-center justify-between;
      }

      .story-text {
        @apply text-start;

        p{
          @apply w-full text-base font-normal leading-6 tracking-[0.024px] mb-3;

          @screen lg {
            @apply  w-[600px] mb-2
          }
        }
      }

      .image {
        @apply object-cover;

        img {
          @apply w-full h-[486px] shrink-0;
        }

      }
    }

  }

  .mgt-team {
    @apply flex flex-col justify-center items-center gap-16 my-20 py-16;

    h2{
      @apply  text-[45px] font-normal leading-[normal];
    }

    .mgt-cards{
      @apply mt-2;
    }
  }
}
</style>