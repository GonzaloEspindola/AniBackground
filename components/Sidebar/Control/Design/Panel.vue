<script setup lang="ts">
import { designs } from '@/utils/designs'
import { useControls } from '~/composable/useControls'

const { controls, updateDesignId } = useControls()
</script>

<template>
  <section class="flex flex-col gap-2 py-4">
    <p
      class="text-sm font-light text-light-textSecondary dark:text-dark-textPrimary"
    >
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
            'outline-light-primary dark:outline-dark-primary':
              design.id === controls.designId.value,
          }"
          class="h-[50px] w-full rounded-md outline outline-1 outline-light-border dark:outline-dark-border"
        >
          <img
            :src="design.image"
            :alt="design.description"
            class="object-cover h-full w-full rounded-md shadow-lg hover:opacity-75 transition-opacity duration-200"
          />
        </section>

        <p
          class="text-xs text-center text-light-textSecondary dark:text-dark-textSecondary"
          :class="{
            'font-medium text-light-primary dark:text-dark-primary':
              design.id === controls.designId.value,
          }"
        >
          {{ design.name }}
        </p>
      </li>
    </ul>
  </section>
</template>
