<script setup lang="ts">
import { designs } from '@/utils/designs'
const { controls, updateDesignId } = inject('controls')
</script>

<template>
  <section class="flex flex-col gap-2">
    <p class="text-sm font-medium text-neutral-900 dark:text-neutral-200">
      Diseños
    </p>

    <ul class="grid grid-cols-3 gap-3">
      <li
        v-for="design in designs"
        :key="design.id"
        class="flex flex-col gap-1 cursor-pointer"
        @click="updateDesignId(design.id)"
      >
        <section
          :class="{
            active: design.id === controls.designId.value,
          }"
          class="h-[50px] w-full rounded-md outline outline-1 outline-neutral-400 dark:outline-neutral-600"
        >
          <img
            :src="design.image"
            :alt="design.description"
            class="object-cover h-full w-full rounded-md"
          />
        </section>

        <p class="text-xs text-center text-neutral-400">
          {{ design.name }}
        </p>
      </li>
    </ul>
  </section>
</template>

<style>
.active {
  outline: solid 1.5px rgba(255, 255, 255, 1) !important;
}
</style>
