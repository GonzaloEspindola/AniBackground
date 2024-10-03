<script setup lang="ts"></script>

<template>
  <aside
    class="flex flex-col gap-2 pl-3 pt-3 pb-3 w-[248px] absolute h-full z-40"
  >
    <SidebarHeader />

    <article
      class="flex flex-col p-2 px-4 rounded-md grow gap-4 bg-[#f0f0f0] shadow-md dark:bg-[#1c1c1e]"
    >
      <SidebarControlDesignPanel />
      <SidebarControlCountPanel />
    </article>
  </aside>
</template>
