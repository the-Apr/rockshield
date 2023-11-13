<template>
  <div class="home">
    <div class="welcome-section">
      <div class="left">
        <div class="message">
          <h2>Empowering <br>Local Businesses</h2>
          <p>Easy, fast and convenient loans for <br> growth and sustainability</p>
        </div>
        <div class="action">
          <div class="learn-more">
            <router-link class="lm-txt" :to="{}">Learn more
              <fa-icon class= "" :icon="['fas', 'arrow-right']" />
            </router-link>
          </div>
          <div class="create-account">
            <nav-button/>
          </div>
        </div>
        <div class="license">
          <div class="licensed-by">
            <h3>DEPOSIT INSURED BY</h3>
            <img src="../assets/ndic_small_logo-1 1.png" alt="ndic logo">
          </div>
          <div class="licensed-by">
            <h3>LICENSED BY</h3>
            <div class="cbn">
              <img src="../assets/cbn.png" alt="">
              <h3>Central Bank of Nigeria </h3>
            </div>
          </div>
        </div>
      </div>

      <div class="right">
        <div class="images">
          <div class="first"></div>
          <div class="second"></div>
          <div class="third"></div>
        </div>
      </div>
    </div>

    <div class="key-figures">
      <h3>Key Figures</h3>
      <div class="figures-wrap">
        <div class="figures">
          <h3>700+ million</h3>
          <p>Loan Disbursed</p>
        </div>
        <div class="figures">
          <h3>500k+</h3>
          <p>Business</p>
        </div>
        <div class="figures">
          <h3>13+ years</h3>
          <p>Experience</p>
        </div>
        <div class="figures">
          <h3>1 million+</h3>
          <p>Business Empowered</p>
        </div>
        
      </div>
    </div>

    <services-card :service= "service" v-for="(service, index) in servicesPost" :key="index" :isFirst="index === 0" />

    <div class="our-partners">
      <h2>Our Partners</h2>
      <div class="partners-wrap">
        <img src="../assets/Nibbs.png" alt="NIBBS">
        <img src="../assets/Remita logo.png" alt="remita">
        <img src="../assets/CREDIT bUREAU.png" alt="credit bureau">
        <img src="../assets/Credit registry.png" alt="Credit registry">
        <img src="../assets/First Central.png" alt="First Central">
        <img src="../assets/Interswitch.png" alt="Interswitch">
      </div>
    </div>



  </div>
</template>

<script>
import NavButton from '@/components/NavButton.vue'
import ServicesCard from '@/components/ServicesCard.vue'

export default {
  name: 'HomeView',
  components: {
    NavButton,
    ServicesCard
  },

  data() {
    return {
      servicesPost: [
        {
          title: "LOANS",
          catchPhrase: "Easy and Fast Pay day Loans",
          body: "Our loans of up to ₦3,000,000 can assist you fulfill your demands whether you are employed or operate your own business.",
          coverPhoto: "workspace"
        },
        {
          title: "DEPOSIT",
          catchPhrase: "Increase your income with fixed deposit",
          body: "Our loans of up to ₦3,000,000 can assist you fulfill your demands whether you are employed or operate your own business.",
          coverPhoto: "workspace"
        },
        {
          title: "SAVINGS",
          catchPhrase: "Increase your income with fixed deposit",
          body: "Our loans of up to ₦3,000,000 can assist you fulfill your demands whether you are employed or operate your own business.",
          coverPhoto: "workspace"
        },
        
      ],
    }
  }
}
</script>

<style lang="scss" scoped>
.home {
  @apply px-8 mt-16 flex flex-col;

  @screen md {
    @apply mt-24 px-16
  }

  .welcome-section {
    @apply flex flex-col gap-10;
    border-bottom: 2px solid ;
    border-bottom-color:rgba(197, 225, 249, 0.72);
    border-width: 70%;

    @screen md {
      @apply flex-row
    }

    .left {
      @apply  flex flex-col items-start justify-center text-start mb-10 w-full;

      @screen md {
        @apply w-1/2 mb-20;
      }

      .message {
        @apply flex flex-col gap-5;

        h2{
          @apply text-6xl font-bold;
          line-height: 57px;
          letter-spacing: 0.32px;
          word-wrap: break-word
        }
        p{
          @apply text-2xl font-normal leading-8 break-words
        }
      }

      .action {
        @apply flex justify-center items-center mt-8 gap-20;

        .lm-txt {
          @apply  text-base font-normal;
          
          
        }
      }

      .license {
        @apply flex gap-16 mt-14;

        .licensed-by {
          @apply  flex flex-col gap-4;
          h3{
            @apply text-xs;
            letter-spacing: 0.04px;
            color: rgba(108.38, 108.38, 108.38, 0.50);
          }

          img {
            @apply w-full h-16
          }

          .cbn {
            @apply flex gap-4 items-center;

            img {
              width: 40px;
              height: 50px;
            }
          }
        }
      }
    }

    .right {
      @apply mb-20 flex w-full;

      @screen md {
        @apply w-1/2;
      }
      .images {
        @apply grid grid-cols-2 grid-rows-2 grid-flow-dense w-full h-full gap-5;

        .first {
          @apply row-span-2;
          background: rgba(0, 171, 241, 0.10);
          border-radius: 10px;
          height: 150px;
          width: 100%;

          @screen md {
            height: 100%;
          }
        }
        .second {
          background: rgba(255, 0, 116.04, 0.10); border-radius: 10px;
          height: 85%;
          align-self: flex-end;
        }
        .third {
          background: rgba(69.10, 242.45, 128.04, 0.10); border-radius: 10px;
          width: 70%;
          height: 85%;
        }
      }
    }
  }

  .key-figures {
    @apply my-16 flex flex-col gap-14 items-center justify-center;

    @screen md {
      @apply my-28
    }

    h3 {
      @apply text-2xl;
      color: #D9D9D9;
    }

    .figures-wrap {
      @apply px-32 flex flex-col flex-wrap flex-1 gap-8 w-full justify-between;

      @screen md {
      @apply flex-row
    }

      .figures {
        // @apply flex flex-row gap-4 items-center justify-center;

        // @screen md {
        //   @apply flex-col
        // }
        h3 {
          @apply text-2xl;
          color: #033549
        }
        p {
          @apply text-sm;
          color: #00ABF1;
          letter-spacing: 0.09px;
        }
      }
    }
  }

  .our-partners {
    @apply my-16 flex flex-col gap-10;

    @screen md {
      @apply mt-32
    }

    h2 {
      @apply text-2xl font-medium
    }

    .partners-wrap {
      @apply px-10 py-3 flex flex-col flex-wrap justify-center items-center gap-4;
      border-radius: 20px; 
      border: 1px rgba(76.50, 75.86, 75.86, 0.10) solid; 

      @screen md {
        @apply flex-row
      }

      img {
        max-width: 185px;
        max-height: 110px;
      }
    }

  }

}
</style>
