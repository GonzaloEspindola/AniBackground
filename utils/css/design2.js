const design2CSS = `.scene {
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
}`
