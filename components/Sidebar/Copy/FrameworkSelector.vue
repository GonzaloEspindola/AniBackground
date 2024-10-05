<script setup lang="ts">
import type { ModalControls } from '~/types/types'

interface Props {
  text: string
}

const { frameworkSelected, updateFrameworkSelected } = inject<ModalControls>(
  'modalControls',
  {
    frameworkSelected: ref(''),
    updateFrameworkSelected: () => {},
    stepSelected: ref(1),
    updateStepSelected: () => {},
  },
)

const props = defineProps<Props>()
</script>

<template>
  <div
    @click="updateFrameworkSelected(props.text)"
    class="group flex flex-col items-center rounded-md border border-neutral-200 p-4 transition-colors duration-100 hover:bg-neutral-100/80 dark:border-neutral-800 dark:hover:bg-neutral-800/20"
    :class="{
      active: props.text === frameworkSelected,
    }"
  >
    <slot />
    <p class="text-xs text-center text-[#111111] dark:text-neutral-400">
      {{ props.text }}
    </p>
  </div>
</template>
