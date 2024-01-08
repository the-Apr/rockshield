<template>
<div class="wrap">
  <div class="loading-bar">
    <img class="" src="../assets/rs-fotor-bg-remover-20230704114329.png" alt="" srcset="">
  </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.wrap{
  top: 0;
  z-index: 101;
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
}
.loading-bar {
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 110px;
  height: 110px;
  background:#000;
  border: px solid #3c3c3c;
  border-radius: 50%;
  text-align: center;
  line-height: 111px;
  font-family: sans-serif;
  font-size: 15px;
  /* color: #00ABF1; */
  letter-spacing: 3px;
  text-transform: uppercase;
  /* text-shadow: 0 0 20px #fff000; */
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
}

.loading-bar:before {
  content: "";
  position: absolute;
  top: -3px;
  left: -3px;
  width: 100%;
  height: 100%;
  border: 3px solid transparent;
  border-top: 3px solid #00ABF1;
  border-right: 3px solid #00ABF1;
  border-radius: 50%;
  animation: animateC 2s linear infinite;
}

@keyframes animateC {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}

@keyframes animate {
  0% {
    transform: rotate(45deg);
  }

  100% {
    transform: rotate(405deg);
  }
}

</style>