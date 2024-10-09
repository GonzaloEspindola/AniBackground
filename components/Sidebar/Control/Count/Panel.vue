<script setup lang="ts">
import { useControls } from '~/composable/useControls'

const { controls, updateCount } = useControls()

interface Props {
  index: number
}

const props = defineProps<Props>()
</script>

<template>
  <CommonAccordion text="Contador" icon="count" :index="props.index">
    <div class="flex items-center gap-2">
      <label
        for="default-range"
        class="block text-xs font-light text-light-textSecondary dark:text-dark-textPrimary"
        >{{ controls.count }}
      </label>
      <input
        id="default-range"
        type="range"
        :value="controls.count.value"
        @input="updateCount(Number(($event.target as HTMLInputElement).value))"
        min="1"
        max="100"
        class="w-full h-2 rounded-lg appearance-none cursor-pointer bg-light-border dark:bg-dark-border"
      />
    </div>
  </CommonAccordion>
</template>
