<script setup lang="ts">
import SidebarAside from '@/components/Sidebar/Aside.vue'
import { createControlsProvider } from '@/providers/createControlsProviders'

createControlsProvider()
</script>

<template>
  <section
    class="flex gap-2 min-h-screen bg-light-background dark:bg-dark-background"
  >
    <SidebarAside />
    <MainPreviewContainer />
  </section>
</template>
