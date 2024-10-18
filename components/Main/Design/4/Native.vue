<script setup lang="ts">
import { useControls } from '~/composable/useControls'
import '~/public/design/4/styles.css'
const { controls } = useControls()
</script>

<template>
  <div class="scene">
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      x="0px"
      y="0px"
      width="100%"
      height="100%"
      viewBox="0 0 1600 1000"
      preserveAspectRatio="xMidYMax slice"
    >
      <defs>
        <linearGradient id="bg">
          <stop
            offset="0%"
            :style="{ stopColor: `${controls.colors.value.colors[0].color}` }"
          ></stop>
          <stop
            offset="50%"
            :style="{
              stopColor: `${controls.colors.value.colors[1].color}`,
            }"
          ></stop>
          <stop
            offset="100%"
            :style="{ stopColor: `${controls.colors.value.colors[2].color}` }"
          ></stop>
        </linearGradient>
        <path
          id="wave"
          fill="url(#bg)"
          d="M-363.852,502.589c0,0,236.988-41.997,505.475,0
	s371.981,38.998,575.971,0s293.985-39.278,505.474,5.859s493.475,48.368,716.963-4.995v560.106H-363.852V502.589z"
        />
      </defs>
      <g>
        <use
          xlink:href="#wave"
          :opacity="controls.colors.value.colors[0].transparency"
        >
          <animateTransform
            attributeName="transform"
            attributeType="XML"
            type="translate"
            :dur="(controls.duration.value / 100) * 20"
            calcMode="spline"
            values="270 230; -334 180; 270 230"
            keyTimes="0; .5; 1"
            keySplines="0.42, 0, 0.58, 1.0;0.42, 0, 0.58, 1.0"
            repeatCount="indefinite"
          />
        </use>
        <use
          xlink:href="#wave"
          :opacity="controls.colors.value.colors[1].transparency"
        >
          <animateTransform
            attributeName="transform"
            attributeType="XML"
            type="translate"
            :dur="(controls.duration.value / 100) * 16"
            calcMode="spline"
            values="-270 230;243 220;-270 230"
            keyTimes="0; .6; 1"
            keySplines="0.42, 0, 0.58, 1.0;0.42, 0, 0.58, 1.0"
            repeatCount="indefinite"
          />
        </use>
        <use
          xlink:href="#wave"
          :opacity="controls.colors.value.colors[2].transparency"
        >
          <animateTransform
            attributeName="transform"
            attributeType="XML"
            type="translate"
            :dur="(controls.duration.value / 100) * 12"
            calcMode="spline"
            values="0 230;-140 200;0 230"
            keyTimes="0; .4; 1"
            keySplines="0.42, 0, 0.58, 1.0;0.42, 0, 0.58, 1.0"
            repeatCount="indefinite"
          />
        </use>
      </g>
    </svg>
  </div>
</template>
