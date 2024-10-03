<script setup lang="ts">
const { controls } = inject('controls')

const getRandomDuration = () => (Math.random() * (15 - 7) + 7).toFixed(2)
const getRandomDelay = () => (Math.random() * (10 - 4) + 4).toFixed(2)
const getRandomX = () => (Math.random() * 5).toFixed(2)
const getRandomY = () => (Math.random() * 10).toFixed(2)
const getRandomScale = () => (Math.random() * 0.1).toFixed(2)

const getStyle = () => {
  return {
    '--duration': `${getRandomDuration()}`,
    '--delay': `${getRandomDelay()}`,
    '--x': getRandomX(),
    '--y': getRandomY(),
    '--scale': getRandomScale(),
  }
}
</script>

<template>
  <div class="scene">
    <div class="northen-lights">
      <div
        v-for="index in controls.count.value"
        :key="index"
        class="northen-light"
        :style="getStyle()"
      ></div>
    </div>
  </div>
</template>

<style>
:root {
  --hue: 220;
  --hue-1: 286;
  --hue-2: 183;
  --hue-3: 191;
  --alpha-1: 0.2710713367756439;
  --alpha-2: 0.9518445288519037;
  --alpha-3: 0.3517331987451342;
}

.scene {
  height: 100vh;
  width: 100vw;
  left: 0;
  z-index: 1;
  overflow: hidden;
}

.northen-lights,
.scene {
  position: absolute;
  top: 0;
}

.northen-lights {
  width: 200vmax;
  height: 100vmax;
  left: 50%;
  transform: translate(-20%, -55%) rotate(30deg);
  display: flex;
  filter: blur(75px);
}

.northen-light {
  flex: 1;
  --color-one: hsla(220, 100%, 50%, 0.271);
  --color-two: hsla(var(--hue-2), 100%, 50%, 0.2710713367756439);
  --color-three: hsla(var(--hue-3), 100%, 50%, 0.2710713367756439);
  --up: calc(var(--y, 10) * 2vmax);
  --left: calc(var(--x, 2) * 2vmax);
  background-image: linear-gradient(
    0deg,
    transparent,
    var(--color-one) 10%,
    transparent,
    var(--color-two) 40%,
    transparent,
    var(--color-three) 60%
  );
  background-size: 100% 40vmax;
  background-position: bottom;
  background-repeat: no-repeat;
  transform: translate(var(--left), var(--up)) scale(1);
  animation: shift calc(var(--duration, 2) * 1s) calc(var(--delay, 0) * -1s)
    infinite ease;
}

@media (max-width: 768px) {
  .northen-light {
    --up: calc(var(--y, 10) * 2vmax);
    --left: calc(var(--x, 2) * 2vmax);
  }
}

@keyframes shift {
  50% {
    transform: translate(0) scale(1);
  }
}

@keyframes flicker {
  0%,
  50%,
  to {
    transform: scale(1);
  }

  25% {
    transform: scale(0);
  }
}
</style>
