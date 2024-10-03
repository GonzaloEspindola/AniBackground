<template>
  <div class="background">
    <div class="circle"></div>
    <div class="circle"></div>
    <div class="circle"></div>
    <div class="circle"></div>
    <div class="circle"></div>
    <div class="circle"></div>
    <div class="circle"></div>
  </div>
</template>

<style>
.background {
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
}

.circle {
  position: absolute;
  width: 50px;
  height: 50px;
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  animation: float 10s infinite ease-in-out;
  opacity: 0.6;
}

.circle:nth-child(1) {
  width: 80px;
  height: 80px;
  top: 20%;
  left: 10%;
  animation-duration: 12s;
  animation-delay: -3s;
}

.circle:nth-child(2) {
  width: 40px;
  height: 40px;
  top: 50%;
  left: 30%;
  animation-duration: 14s;
  animation-delay: -5s;
}

.circle:nth-child(3) {
  width: 60px;
  height: 60px;
  top: 70%;
  left: 20%;
  animation-duration: 10s;
  animation-delay: -2s;
}

.circle:nth-child(4) {
  width: 100px;
  height: 100px;
  top: 30%;
  left: 70%;
  animation-duration: 15s;
  animation-delay: -6s;
}

.circle:nth-child(5) {
  width: 50px;
  height: 50px;
  top: 80%;
  left: 50%;
  animation-duration: 11s;
  animation-delay: -4s;
}

.circle:nth-child(6) {
  width: 70px;
  height: 70px;
  top: 40%;
  left: 80%;
  animation-duration: 13s;
  animation-delay: -1s;
}

.circle:nth-child(7) {
  width: 90px;
  height: 90px;
  top: 60%;
  left: 60%;
  animation-duration: 16s;
  animation-delay: -7s;
}

@keyframes float {
  0%,
  100% {
    transform: translateY(0) translateX(0);
  }
  50% {
    transform: translateY(-20px) translateX(20px);
  }
}
</style>
