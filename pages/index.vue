<script setup lang="ts">
import SidebarAside from '@/components/Sidebar/Aside.vue'
import { createControlsProvider } from '@/providers/createControlsProviders'

createControlsProvider()
</script>

<template>
  <section class="flex gap-2 min-h-screen bg-[#dcdcdc] dark:bg-[#0d0d0d]">
    <SidebarAside />
    <MainPreviewContainer />
  </section>
</template>
