<script setup lang="ts">
import type { Component } from 'vue'
import SidebarControlDesignPanel from '@/components/Sidebar/Control/Design/Panel.vue'
import SidebarControlCountPanel from '@/components/Sidebar/Control/Count/Panel.vue'
import SidebarControlColorsPanel from '@/components/Sidebar/Control/Colors/Panel.vue'
import SidebarControlDurationPanel from '@/components/Sidebar/Control/Duration/Panel.vue'
import { useControls } from '~/composable/useControls'

const { controls } = useControls()

const options: Record<number, Component> = {
  1: [
    SidebarControlDesignPanel,
    SidebarControlCountPanel,
    SidebarControlColorsPanel,
  ],
  2: [
    SidebarControlDesignPanel,
    SidebarControlCountPanel,
    SidebarControlColorsPanel,
  ],
  3: [
    SidebarControlDesignPanel,
    SidebarControlCountPanel,
    SidebarControlColorsPanel,
  ],
  4: [
    SidebarControlDesignPanel,
    SidebarControlColorsPanel,
    SidebarControlDurationPanel,
  ],
}
</script>

<template>
  <aside
    class="flex flex-col gap-2 pl-3 pt-3 pb-3 w-[248px] absolute h-full z-40"
  >
    <SidebarHeader />

    <article
      class="flex flex-col rounded-sm grow divide-y-[1px] border border-light-border dark:border-dark-border bg-light-backgroundSecondary dark:bg-dark-backgroundSecondary divide-light-border dark:divide-dark-border"
    >
      <p
        class="text-sm font-light text-light-textSecondary text-center p-2 dark:text-dark-textPrimary"
      >
        Personaliza tu background
      </p>

      <component
        v-for="(panel, index) in options[controls.designId.value]"
        :is="panel"
        :key="index"
        :index="index"
      />
      <SidebarCopyPanel />
    </article>
  </aside>
</template>
