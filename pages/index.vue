<script setup lang="ts">
import SideBarAside from '@/components/Sidebar/Aside.vue'

const colorsCountMap = {
  1: {
    count: 3,
    colors: [
      {
        id: 1,
        color: '#c300ff',
        transparency: 0.2710713367756439,
      },
      {
        id: 2,
        color: '#00f2ff',
        transparency: 0.9518445288519037,
      },
      {
        id: 3,
        color: '#00d0ff',
        transparency: 0.3517331987451342,
      },
    ],
  },
  2: {
    count: 3,
    colors: [
      {
        id: 1,
        color: '#c300ff',
        transparency: 0.2710713367756439,
      },
      {
        id: 2,
        color: '#00f2ff',
        transparency: 0.9518445288519037,
      },
      {
        id: 3,
        color: '#00d0ff',
        transparency: 0.3517331987451342,
      },
    ],
  },
  3: {
    count: 1,
    colors: [
      {
        id: 1,
        color: '#f0f0f0',
        transparency: 1,
      },
    ],
  },
}

const controls = {
  designId: ref(1),
  count: ref(10),
  colors: ref(colorsCountMap[1]),
}

const updateDesignId = (newDesignId: number) => {
  controls.designId.value = newDesignId
  controls.colors.value = colorsCountMap[newDesignId] || {
    count: 3,
    colors: [
      {
        id: 1,
        color: '#c300ff',
        transparency: 0.2710713367756439,
      },
      {
        id: 2,
        color: '#00f2ff',
        transparency: 0.9518445288519037,
      },
      {
        id: 3,
        color: '#00d0ff',
        transparency: 0.3517331987451342,
      },
    ],
  }
}

const updateCount = (newCount: number) => {
  controls.count.value = newCount
}

const updateColor = (newColor: string, id: number) => {
  controls.colors.value.colors[id - 1].color = newColor
}

const updateTransparency = (newTransparency: number, id: number) => {
  controls.colors.value.colors[id - 1].transparency = newTransparency / 100
}

provide('controls', {
  controls,
  updateDesignId,
  updateCount,
  updateColor,
  updateTransparency,
})
</script>

<template>
  <section class="flex gap-2 min-h-screen bg-[#dcdcdc] dark:bg-[#0d0d0d]">
    <SideBarAside />
    <MainPreviewContainer />
  </section>
</template>
