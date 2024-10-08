<script setup lang="ts">
import { useControls } from '~/composable/useControls'

const { frameworkSelected, updateFrameworkSelected } = useControls()

interface Props {
  text: string
}

const props = defineProps<Props>()
</script>

<template>
  <div
    @click="updateFrameworkSelected(props.text)"
    class="flex flex-col items-center rounded-md border cursor-pointer p-4 transition-colors duration-200 border-light-border dark:border-dark-border hover:border-light-primary dark:hover:border-dark-primary hover:bg-light-primary/10 dark:hover:bg-dark-primary/10"
    :class="{
      'bg-light-primary/10 dark:bg-dark-primary/10 border-light-primary dark:border-dark-primary':
        props.text === frameworkSelected,
    }"
  >
    <slot />
    <p
      class="text-xs text-center text-light-textSecondary dark:text-dark-textSecondary"
    >
      {{ props.text }}
    </p>
  </div>
</template>
