export const design3CSS = `.scene {
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
}

.circle {
  position: absolute;
  border-radius: 50%;
  animation: float 10s infinite ease-in-out;
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
`
