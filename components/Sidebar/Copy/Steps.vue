<script setup lang="ts">
import { useControls } from '~/composable/useControls'
import type { Step } from '~/types/types'

interface Props {
  steps: Step[]
}

const { stepSelected, updateStepSelected } = useControls()

const props = defineProps<Props>()
</script>

<template>
  <ol
    class="flex justify-center items-center w-full space-y-4 sm:flex sm:space-x-8 sm:space-y-0 rtl:space-x-reverse"
  >
    <li
      v-for="(step, index) in props.steps"
      :key="step.title"
      class="flex items-center text-gray-500 dark:text-gray-400 space-x-2.5 rtl:space-x-reverse"
      @click="updateStepSelected(index + 1)"
    >
      <span
        class="flex items-center justify-center w-8 h-8 border border-gray-500 rounded-full shrink-0 dark:border-gray-400"
        :class="{
          activeStep: index + 1 === stepSelected,
        }"
      >
        {{ index + 1 }}
      </span>
      <span
        :class="{
          activeStep: index + 1 === stepSelected,
        }"
      >
        <h3 class="font-medium leading-tight">{{ step.title }}</h3>
        <p class="text-sm">{{ step.description }}</p>
      </span>
    </li>
  </ol>
</template>

<style>
.activeStep {
  color: #0ed7b5;
  border-color: #0ed7b5 !important;
}
</style>
