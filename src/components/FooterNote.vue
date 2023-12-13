<template>
  <div class="footer-note">
    <div class="footer-wrap">
      <div class="logo">
        <router-link class="link" :to="{name: 'home'}">
          <img src="../assets/logo/RSPryLogoHor 1.png" alt="">
        </router-link>
      </div>

      <div class="info">
        <div class="info-wrap">
          <div class="product">
            <h2>Products</h2>
            <p>Shield Save</p>
            <p>Loans</p>
            <p>Savings</p>
            <p>Shield Note</p>
            <p>Shield Lock</p>
          </div>
          <div class="company">
            <h2>Company</h2>
            <p>About Us</p>
            <p>Blogs</p>
            <p>Join Us</p>
          </div>
          <div class="legal">
            <h2>Legal</h2>
            <p>Terms and Conditions</p>
            <p>Privacy</p>
            <p>Security</p>
          </div>
        </div>

        <div class="right-reserved hidden">
          <p>All rights reserved. © 2022 Rockshield Microfinance Bank Limited</p>
        </div>
      </div>

      <div class="contact">
        <div class="contact-details">
          <h2 class="">Connect</h2>
          <div class="socials">
            <a href="https://www.instagram.com/rockshieldmfb/?igshid=YmMyMTA2M2Y%3D" target="_blank">
               <fa-icon :icon="['fab', 'instagram']" class="icon" />
            </a>
            <a href="https://www.facebook.com/RockshieldMFB" target="_blank">
               <fa-icon :icon="['fab', 'facebook']" class="icon" />
            </a>
            <a href="https://twitter.com/rockshieldmfb" target="_blank">
               <fa-icon :icon="['fab', 'x-twitter']" class="icon" />
            </a>
            <a href="https://www.linkedin.com/in/rockshieldmfb/" target="_blank">
               <fa-icon :icon="['fab', 'linkedin']" class="icon" />
            </a>
            
          </div>
          <a href="https://www.google.com/maps/place/Rockshield+MicroFinance+Bank/@6.5356417,3.3320732,14.34z/data=!4m19!1m12!4m11!1m3!2m2!1d3.3457169!2d6.5374944!1m6!1m2!1s0x103b8d3622137e91:0xe86c3b6bf61a254f!2s79+Ladipo+St,+Matori+100253,+Lagos!2m2!1d3.3458931!2d6.5380127!3m5!1s0x103b8d3622137e91:0xe86c3b6bf61a254f!8m2!3d6.5380127!4d3.3458931!16s%2Fg%2F11t7xz2bc4?entry=ttu">
            <p>79, Ladipo Street Matori-Mushin,
            Mushin Lagos, Nigeria.</p>
          </a>
          <a href="mailto:help@rockshieldmfb.com">help@rockshieldmfb.com</a>
          <a href="tel:070 103 537 04">070 103 537 04</a>
        </div>

        <div class="app-store"></div>
      </div>

      <div class="right-reserved">
          <p>All rights reserved. © 2022 Rockshield Microfinance Bank Limited</p>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'footerNote',
}
</script>

<style lang="scss" scoped>
.footer-note {
  @apply px-10 py-5 mt-12;
  border-top: 2px solid ;
  border-top-color:rgba(197, 225, 249, 0.72);
  border-width: 70%;

  @screen lg {
    @apply px-14 py-10 mt-32
  }

  p{
    @apply text-[#4C4C4C] 
  }
  h2{
    @apply uppercase text-base mb-4 font-semibold leading-6 tracking-[0.024px];
  }
  a{
    @apply text-[#00ABF1] text-sm font-normal leading-5 tracking-[0.035px];
  }

  .footer-wrap {
    @apply grid grid-cols-1 gap-8 mb-6;

    @screen lg {
      @apply grid-cols-4
    }

    .logo{
      img {
        @apply object-cover;
        height: 40px;

        @screen lg{
          height: 40px;
        }
      }
    }

    .info {
      @apply flex flex-col gap-16 justify-start items-start col-span-2;

      .info-wrap {
        @apply grid grid-cols-3 gap-4;

        .product,
        .company,
        .legal {
          @apply flex flex-col gap-2 text-start;

          p{
            @apply text-sm font-normal leading-5 tracking-[0.035px];
          }
        }
      }

      .right-reserved {
      }
    }
    .contact {
      @apply flex flex-col gap-10 col-span-2;

      @screen lg {
        @apply flex flex-col gap-20 col-span-1;
      }

      .contact-details {
        @apply flex flex-col gap-3 text-end;

        @screen lg {
          @apply gap-6;
        }

        .socials {
          @apply flex gap-6 flex-1 justify-end;

          .icon{
            @apply h-6
          }
        }
      }
    }

    .right-reserved{
      @screen lg {
        @apply col-span-4
      }
    }
  }

}
</style>