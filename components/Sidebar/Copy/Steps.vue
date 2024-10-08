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
      class="flex items-center space-x-2.5 rtl:space-x-reverse cursor-pointer text-light-textSecondary dark:text-dark-textSecondary hover:scale-105 transition-transform duration-200"
      @click="updateStepSelected(index + 1)"
    >
      <span
        class="flex items-center justify-center w-8 h-8 border border-gray-500 rounded-full shrink-0 dark:border-gray-400"
        :class="{
          'text-light-primary dark:text-dark-primary border-1 border-light-primary dark:border-dark-primary bg-light-primary/15 dark:bg-dark-primary/15':
            index + 1 === stepSelected,
        }"
      >
        {{ index + 1 }}
      </span>
      <span
        :class="{
          'text-light-primary dark:text-dark-primary':
            index + 1 === stepSelected,
        }"
      >
        <h3 class="font-medium leading-tight">{{ step.title }}</h3>
        <p class="text-sm">{{ step.description }}</p>
      </span>
    </li>
  </ol>
</template>
