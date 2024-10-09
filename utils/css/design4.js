export const design4JS = `.scene {
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  grid-template-rows: repeat(10, 1fr);
  overflow: hidden;
  background: #000;
}

.line {
  position: absolute;
  background-color: rgba(0, 255, 0, 0.2);
  animation: animateLine var(--duration, 5s) ease-in-out infinite;
}

.horizontal {
  height: 2px;
  width: 100%;
  top: calc(var(--row, 1) * 10%);
}

.vertical {
  width: 2px;
  height: 100%;
  left: calc(var(--col, 1) * 10%);
}

@keyframes animateLine {
  0%,
  100% {
    opacity: 0.2;
    background-color: rgba(0, 255, 0, 0.2);
  }
  50% {
    opacity: 1;
    background-color: rgba(0, 255, 0, 1);
  }
}
`
