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
    <div class="light-beams">
      <div
        class="light-beam"
        style="--hue: 255; --duration: 12; --delay: 0"
      ></div>
      <div
        class="light-beam"
        style="--hue: 200; --duration: 10; --delay: 4"
      ></div>
      <div
        class="light-beam"
        style="--hue: 290; --duration: 15; --delay: 6"
      ></div>
      <div
        class="light-beam"
        style="--hue: 220; --duration: 8; --delay: 3"
      ></div>
      <div
        class="light-beam"
        style="--hue: 180; --duration: 18; --delay: 2"
      ></div>
    </div>
  </div>
</template>

<style>
:root {
  --hue-1: 255;
  --hue-2: 200;
  --hue-3: 290;
  --alpha-1: 0.3;
  --alpha-2: 0.6;
  --alpha-3: 0.4;
}

body {
  margin: 0;
  overflow: hidden;
  background: #000;
}

.scene {
  height: 100vh;
  width: 100vw;
  position: relative;
  overflow: hidden;
}

.light-beams {
  position: absolute;
  width: 100vw;
  height: 100vh;
  display: flex;
  filter: blur(80px);
}

.light-beam {
  flex: 1;
  background: linear-gradient(
    180deg,
    hsla(var(--hue), 100%, 50%, 0) 0%,
    hsla(var(--hue), 100%, 50%, var(--alpha-1)) 40%,
    hsla(var(--hue), 100%, 50%, var(--alpha-2)) 60%,
    hsla(var(--hue), 100%, 50%, var(--alpha-3)) 100%
  );
  background-size: 100% 200%;
  animation: moveBeam calc(var(--duration) * 1s) calc(var(--delay) * -1s)
    infinite ease-in-out;
  transform-origin: center bottom;
}

@keyframes moveBeam {
  0%,
  100% {
    transform: translateY(0) scaleY(1);
  }
  50% {
    transform: translateY(-50vh) scaleY(1.2);
  }
}
</style>
