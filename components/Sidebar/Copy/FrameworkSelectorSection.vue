<template>
  <article class="flex gap-2">
    <SidebarCopyFrameworkSelector text="HTML - CSS">
      <div class="flex gap-2 py-4 grow">
        <img src="/svg/html.svg" alt="Icono de HTML" class="w-6 h-6" />
        <img src="/svg/css.svg" alt="Icono de CSS" class="w-6 h-6" />
      </div>
    </SidebarCopyFrameworkSelector>

    <SidebarCopyFrameworkSelector text="TailwindCSS">
      <img
        src="/svg/tailwind.config.js.svg"
        alt="Icono de Tailwind"
        class="w-8 h-8 grow"
      />
    </SidebarCopyFrameworkSelector>
  </article>
</template>
