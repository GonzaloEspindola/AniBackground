<script setup lang="ts">
import { designs } from '@/utils/designs'
import { useControls } from '~/composable/useControls'

const { controls, updateDuration } = useControls()

interface Props {
  index: number
}

const props = defineProps<Props>()
</script>

<template>
  <section class="flex flex-col gap-2">
    <CommonAccordion text="Duración" icon="duration" :index="props.index">
      <div class="flex items-center gap-2">
        <label
          for="default-range"
          class="block text-xs font-light text-light-textSecondary dark:text-dark-textPrimary"
          >{{ controls.duration }}
        </label>
        <input
          id="default-range"
          type="range"
          :value="controls.duration.value"
          @input="
            updateDuration(Number(($event.target as HTMLInputElement).value))
          "
          min="1"
          max="100"
          class="w-full h-2 rounded-lg appearance-none cursor-pointer bg-light-border dark:bg-dark-border"
        />
      </div>
    </CommonAccordion>
  </section>
</template>
