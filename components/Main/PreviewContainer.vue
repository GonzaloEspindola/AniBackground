<script setup lang="ts">
const { controls } = inject('controls')
import SidebarControlDesign1 from '@/components/Sidebar/Control/Design/1.vue'
import SidebarControlDesign2 from '@/components/Sidebar/Control/Design/2.vue'
import SidebarControlDesign3 from '@/components/Sidebar/Control/Design/3.vue'

const designMap = {
  1: SidebarControlDesign1,
  2: SidebarControlDesign2,
  3: SidebarControlDesign3,
}

const currentComponent = computed(
  () => designMap[controls.designId.value] || null,
)
</script>

<template>
  <main class="flex flex-1">
    <keep-alive>
      <component :is="currentComponent" />
    </keep-alive>
  </main>
</template>
