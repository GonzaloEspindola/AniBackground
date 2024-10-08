<script setup lang="ts">
import { useControls } from '~/composable/useControls'
const { controls, updateColor, updateTransparency } = useControls()
</script>

<template>
  <section class="flex flex-col gap-2 py-4">
    <p
      class="text-sm font-light text-light-textSecondary dark:text-dark-textPrimary"
    >
      Colores
    </p>

    <article class="flex flex-col gap-4">
      <div
        v-for="color in controls.colors.value.colors"
        :key="color.color"
        class="rounded-md p-2 outline-dashed outline-1 outline-light-border dark:outline-dark-border"
      >
        <div class="w-full flex justify-center">
          <input
            type="color"
            name="color"
            class="w-full rounded-md z-20"
            @change="
              updateColor(($event.target as HTMLInputElement).value, color.id)
            "
            :value="color.color"
            :style="{ opacity: color.transparency }"
          />
          <img
            src="@/assets/images/transparent.png"
            alt="Color Picker background"
            class="h-[40px] w-[95%] rounded-md absolute top-0 opacity-[15%] z-10 object-contain"
          />
        </div>
        <input
          id="default-range"
          type="range"
          @input="
            updateTransparency(
              Number(($event.target as HTMLInputElement).value),
              color.id,
            )
          "
          :value="color.transparency * 100"
          min="0"
          max="100"
          class="w-full h-2 rounded-lg appearance-none cursor-pointer bg-light-border dark:bg-dark-border"
        />
      </div>
    </article>
  </section>
</template>

<style>
input[type='color'] {
  border: none;
  background-color: transparent;
  height: 40px;
}
</style>
