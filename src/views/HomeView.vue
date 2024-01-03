<template>
  <div class="home">

    <div class="home-wrap">
      <div class="welcome-section">
        <div class="left">
          <div class="message">
            <h2>Empowering Local Businesses</h2>
            <p>Easy, fast and convenient loans for growth and sustainability</p>
          </div>
          <div class="action">
            <div class="learn-more">
              <router-link class="lm-txt" :to="{}">Learn more
                <fa-icon class= "" :icon="['fas', 'arrow-right']" />
              </router-link>
            </div>
            <div class="create-account">
              <nav-button>Create Account </nav-button>
            </div>
          </div>
          <div class="license">
            <div class="licensed-by">
              <h3>DEPOSIT INSURED BY</h3>
              <img src="../assets/logo/ndic_small_logo-1 1.png" alt="ndic logo">
            </div>
            <div class="licensed-by">
              <h3>LICENSED BY</h3>
              <div class="cbn">
                <img src="../assets/logo/cbn.png" alt="cbn">
                <h3>Central Bank of Nigeria </h3>
              </div>
            </div>
          </div>
        </div>

        <div class="right">
          <div class="images">
            <div class="first">
              <img src="../assets/display/portrait-african-american-baker-with-fresh-bread-bakery-pastry-chef-holding-small-pastry 2.png" alt="portrait-african-american-baker-with-fresh-bread-bakery-pastry-chef-holding-small-pastry">
            </div>
            <div class="second">
              <img src="../assets/display/front-view-black-woman-running-flower-business 2.png" alt="">
            </div>
            <div class="third">
              <img src="../assets/display/medium-shot-smiley-woman-market 1.png" alt="">
            </div>
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
          <a :href="partner.link" target="_blank" v-for="(partner,index) in partners" :key="index">
            <img :src="require(`../assets/logo/${partner.image}.png`)" alt="">
          </a>
        </div>

      </div>
    </div>

    <div class="testimony-section">
      <our-testimonies />
    </div>
  </div>
</template>

<script>
import { defineAsyncComponent } from 'vue';

const ServicesCard = defineAsyncComponent(() => import('@/components/ServicesCard.vue'));
const OurTestimonies = defineAsyncComponent(() => import('@/components/OurTestimonies.vue'));

import NavButton from '@/components/BaseButton.vue'

export default {
  name: 'HomeView',
  components: {
    NavButton,
    ServicesCard,
    OurTestimonies,
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

      partners: [
        {
          link: "https://nibss-plc.com.ng/",
          image: "Nibbs"
        },
        {
          link: "https://www.remita.net/",
          image: "Remita logo"
        },
        {
          link: "https://crccreditbureau.com/",
          image: "CREDIT bUREAU"
        },
        {
          link: "https://www.creditregistry.ng/",
          image: "Credit registry"
        },
        {
          link: "https://firstcentralcreditbureau.com/?gclid=CjwKCAiA0syqBhBxEiwAeNx9NyJO_HaDh3xnK9SBDUEKLBl3dAwuuFKya9Vwa_n2wchQqAAm94gyjBoC6_cQAvD_BwE",
          image: "First Central"
        },
        {
          link: "https://www.interswitchgroup.com/",
          image: "Interswitch"
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.home {
  @apply flex flex-col;


  .home-wrap {
    @apply px-2 mx-1 mt-16 flex flex-col;

    @screen sm {
      @apply mt-20 px-14 mx-4
    }
    @screen lg {
      @apply mt-24 px-20 mx-8
    }

    .welcome-section {
      @apply flex flex-col gap-10;
      border-bottom: 2px solid ;
      border-bottom-color:rgba(197, 225, 249, 0.72);
      border-width: 70%;

      @screen lg {
        @apply flex-row
      }

      .left {
        @apply  flex flex-col items-center justify-center text-start mb-10 w-full;

        @screen sm {
          @apply items-start;
        }

        @screen lg {
          @apply w-1/2 mb-20;
        }

        .message {
          @apply flex flex-col gap-5;

          h2{
            @apply text-3xl font-bold;
            letter-spacing: 0.32px;
            word-wrap: break-word;

            @screen md {
              @apply text-6xl;
              line-height: 57px;
            }
          }
          p{
            @apply text-lg font-normal leading-6 break-words;
            @screen md {
              @apply text-2xl leading-8;
            }
          }
        }

        .action {
          @apply flex gap-12 justify-center items-center mt-8 ;
          @screen sm {
            @apply gap-20;

            .create-account {
              @apply justify-self-end
            }
          }

          .lm-txt {
            @apply  text-base font-normal;
          }
        }

        .license {
          @apply flex gap-6 mt-14 justify-between;
          @screen sm {
            @apply gap-16
          }

          .licensed-by {
            @apply  flex flex-col  gap-4 w-1/2;
            // @screen sm {
            //   @apply gap-4
            // }
            h3{
              @apply text-xs;
              letter-spacing: 0.04px;
              color: rgba(108.38, 108.38, 108.38, 0.50);
            }

            img {
              @apply w-full h-12;
              @screen md {
                @apply  h-16
              }
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

        @screen lg {
          @apply w-1/2;
        }
        .images {
          @apply grid grid-cols-1 grid-flow-dense w-full h-full gap-5;

          @screen md{
            @apply grid-cols-2 grid-rows-2 
          }
          img {
            @apply object-cover rounded-xl w-full;
            min-height: 250px;
          }

          .first {
            @apply row-span-2 pt-5 pl-0;
            background: rgba(0, 171, 241, 0.10);
            border-radius: 10px;
            // max-height: 550px;
            width: 100%;

            @screen md {
              height: 100%;
            }

            img {
              height: 550px;
            }
          }
          .second {
            background: rgba(255, 0, 116.04, 0.10); border-radius: 10px;
            height: 85%;
            align-self: flex-end;
          }
          .third {
            background: rgba(69.10, 242.45, 128.04, 0.10); border-radius: 10px;
            width: 80%;
            height: 85%;

            img {
              width: 187px;
            }
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
        @apply px-12 flex flex-col flex-wrap flex-1 gap-8 w-full justify-between;

        @screen md {
        @apply flex-row px-32
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

  .testimony-section {
    
  }


}
</style>
