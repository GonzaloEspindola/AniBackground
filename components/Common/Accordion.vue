<script setup lang="ts">
import SVGDesign from '@/components/SVG/Design.vue'
import SVGCount from '@/components/SVG/Count.vue'
import SVGColors from '@/components/SVG/Colors.vue'
import Duration from '~/components/SVG/Duration.vue'
import type { Component } from 'vue'

interface Props {
  text: string
  icon: string
  index: number
}

const props = defineProps<Props>()

const currentSVG: Record<string, Component> = {
  design: SVGDesign,
  count: SVGCount,
  colors: SVGColors,
  duration: Duration,
}

const toggleAccordion = (index: number) => {
  const content = document.getElementById(`content-${index}`)
  const icon = document.getElementById(`icon-${index}`)

  const downSVG = `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="w-4 h-4">
        <path fill-rule="evenodd" d="M4.22 6.22a.75.75 0 0 1 1.06 0L8 8.94l2.72-2.72a.75.75 0 1 1 1.06 1.06l-3.25 3.25a.75.75 0 0 1-1.06 0L4.22 7.28a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" />
      </svg>
    `

  const upSVG = `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="w-4 h-4">
        <path fill-rule="evenodd" d="M11.78 9.78a.75.75 0 0 1-1.06 0L8 7.06 5.28 9.78a.75.75 0 0 1-1.06-1.06l3.25-3.25a.75.75 0 0 1 1.06 0l3.25 3.25a.75.75 0 0 1 0 1.06Z" clip-rule="evenodd" />
      </svg>
    `

  if (content && icon) {
    if (content.style.maxHeight && content.style.maxHeight !== '0px') {
      content.style.maxHeight = '0'
      icon.innerHTML = upSVG
    } else {
      content.style.maxHeight = content.scrollHeight + 'px'
      icon.innerHTML = downSVG
    }
  }
}
</script>

<template>
  <div class="bg-light-backgroundSecondary dark:bg-dark-backgroundSecondary">
    <button
      @click="toggleAccordion(props.index)"
      class="w-full flex justify-between items-center py-5 text-sm font-light px-4 text-light-textSecondary dark:text-dark-textPrimary"
    >
      <section class="flex items-center gap-2">
        <component :is="currentSVG[icon]" />
        <span
          class="text-xs font-light text-light-textSecondary text-center dark:text-dark-textPrimary"
          >{{ props.text }}</span
        >
      </section>
      <span
        :id="`icon-${props.index}`"
        class="text-light-textSecondary text-center dark:text-dark-textPrimary transition-transform duration-300"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          fill="currentColor"
          class="w-4 h-4"
        >
          <path
            fill-rule="evenodd"
            d="M11.78 9.78a.75.75 0 0 1-1.06 0L8 7.06 5.28 9.78a.75.75 0 0 1-1.06-1.06l3.25-3.25a.75.75 0 0 1 1.06 0l3.25 3.25a.75.75 0 0 1 0 1.06Z"
            clip-rule="evenodd"
          />
        </svg>
      </span>
    </button>

    <div
      :id="`content-${props.index}`"
      class="max-h-0 overflow-hidden transition-all duration-300 ease-in-out bg-light-background dark:bg-dark-background"
    >
      <div class="px-4 py-5">
        <slot />
      </div>
    </div>
  </div>
</template>
