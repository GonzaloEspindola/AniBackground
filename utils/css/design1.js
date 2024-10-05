export const design1CSS = `
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
  --up: calc(var(--y, 10) * 2vmax);
  --left: calc(var(--x, 2) * 2vmax);
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
}`
