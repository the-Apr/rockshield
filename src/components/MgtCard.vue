<template>
  <div class="mgt-gallery">
    <div class="mgt-team">
      <div class="team-card" v-for="(mgt, index) in mgtDetails" :key="index">
        <div class="image">
          <img :src="mgt.image" alt="">
        </div>
        <div class="details">
          <h2>{{mgt.name}}</h2>
          <h3>{{mgt.position}}</h3>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MgtCard',

  data() {
    return {
      mgtDetails: [
        {
          name: "Tomi Omojuwa",
          position: "Managing Director",
          image: require('../assets/mgt team/Tomi Omojuwa 1.png')
        },
        {
          name: "Salami Oladipupo",
          position: "Internal Audit",
          image: require('../assets/mgt team/OLADIPUPO SALAMI 1.png')
        },
        {
          name: "Fumilola Fashoyin",
          position: "Operation, Head",
          image: require('../assets/mgt team/Funmilola Fashoyin 1.png')
        },
        {
          name: "Olusoji Aderinto",
          position: "Finance, Head",
          image: require('../assets/mgt team/OLADIPUPO SALAMI 1.png')
        },
        {
          name: "Bolaji Alani",
          position: "Information Technology, Head",
          image: require('../assets/mgt team/BOLAJI OLATUNDE.png')
        },
        {
          name: "Enitan Daniels",
          position: "Human Resource, Head",
          image: require('../assets/mgt team/ENITAN DANIELS ST 1.png')
        },
        {
          name: "Seyi Odukoya",
          position: "Recovery, Head",
          image: require('../assets/mgt team/OLUWASEYI MICHAEL ODUKOYA.png')
        },
        {
          name: "Bukunmi Quadri",
          position: "Legal, Head",
          image: require('../assets/mgt team/OLUBUKUNMI QUADRI.png')
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.mgt-gallery {
  @apply p-2;

  .mgt-team{
    @apply grid grid-cols-2 gap-6 pb-10 w-full;

    @screen lg {
      @apply grid-cols-4 gap-4 gap-y-12 pb-20
    }

    .team-card {
      @apply rounded-2xl flex flex-col pb-6 shadow-[0px_16px_24px_0px_rgba(55,55,55,0.14)] w-full;

      min-height: 200px;
      max-height: 370px;
      transition: .5s ease all;
      
      @screen sm{
        min-height: 200px;
        max-height: 400px;
      }

      &:hover {
        transform: rotateZ(-1deg) scale(1.01);
        box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
      }

      .image {
        @apply object-cover w-full;

        img{
          @apply block object-cover w-full min-h-[218px] max-h-[318px];
          z-index: 1;
          // border-radius: 8px 8px 0 0;

          @screen lg {
            @apply w-[302px] h-[218px];
          }
        }
      }

      .details {
        @apply p-3 flex flex-col gap-1 text-start items-start justify-start;

        h2{
          @apply text-2xl not-italic font-semibold leading-8
        }
        h3{
          @apply text-[rgba(3,53,73,0.50)] text-base not-italic font-medium leading-6 tracking-[0.024px];
        }
      }
    }
  }
}
</style>