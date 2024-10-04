<script setup lang="ts">
const { controls, updateColor, updateTransparency } = inject('controls')
</script>

<template>
  <section class="flex flex-col gap-2 py-4">
    <p class="text-sm font-medium text-neutral-900 dark:text-neutral-200">
      Colores
    </p>

    <article class="flex flex-col gap-4">
      <div
        v-for="color in controls.colors.value.colors"
        :key="color.color"
        class="bg-[#dcdcdc] dark:bg-[#111111] rounded-md p-2"
      >
        <div class="w-full flex justify-center">
          <input
            type="color"
            name="color"
            class="w-full rounded-md z-20"
            @change="updateColor($event.target.value, color.id)"
            :value="color.color"
            :style="{ opacity: color.transparency }"
          />
          <img
            src="@/assets/images/transparent.png"
            alt="Color Picker background"
            class="h-[40px] w-[95%] rounded-md absolute top-0 opacity-100 z-10 object-contain"
          />
        </div>
        <input
          id="default-range"
          type="range"
          @input="updateTransparency(Number($event.target.value), color.id)"
          :value="color.transparency * 100"
          min="0"
          max="100"
          class="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
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
