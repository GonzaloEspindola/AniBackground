<script setup lang="ts">
import { useControls } from '~/composable/useControls'

const { controls, updateCount } = useControls()
</script>

<template>
  <section class="flex flex-col gap-2 py-4">
    <p
      class="text-sm font-light text-light-textSecondary dark:text-dark-textPrimary"
    >
      Contador
    </p>

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
  </section>
</template>
