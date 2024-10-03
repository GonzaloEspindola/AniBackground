<script setup lang="ts">
import SideBarAside from '@/components/Sidebar/Aside.vue'

const controls = {
  designId: ref(1),
  count: ref(10),
}

const updateDesignId = (newDesignId: number) => {
  controls.designId.value = newDesignId
}

const updateCount = (newCount: number) => {
  controls.count.value = newCount
}

provide('controls', {
  controls,
  updateDesignId,
  updateCount,
})
</script>

<template>
  <section class="flex gap-2 min-h-screen bg-[#dcdcdc] dark:bg-[#0d0d0d]">
    <SideBarAside />
    <MainPreviewContainer />
  </section>
</template>
