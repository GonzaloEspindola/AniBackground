<script setup lang="ts">
import { useControls } from '~/composable/useControls'

const { controls, updateCount } = useControls()
</script>

<template>
  <section class="flex flex-col gap-2 py-4">
    <p class="text-sm font-medium text-neutral-900 dark:text-neutral-200">
      Contador
    </p>

    <div class="flex items-center gap-2">
      <label
        for="default-range"
        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >{{ controls.count }}
      </label>
      <input
        id="default-range"
        type="range"
        :value="controls.count.value"
        @input="updateCount(Number(($event.target as HTMLInputElement).value))"
        min="1"
        max="100"
        class="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
      />
    </div>
  </section>
</template>
