<script setup lang="ts"></script>

<template>
  <aside
    class="flex flex-col gap-2 pl-3 pt-3 pb-3 w-[248px] absolute h-full z-40"
  >
    <SidebarHeader />

    <article
      class="flex flex-col p-2 px-4 rounded-md grow shadow-md divide-y-[1px] bg-light-backgroundSecondary dark:bg-dark-backgroundSecondary divide-light-border dark:divide-dark-border"
    >
      <SidebarControlDesignPanel />
      <SidebarControlCountPanel />
      <SidebarControlColorsPanel />
      <SidebarCopyPanel />
    </article>
  </aside>
</template>
