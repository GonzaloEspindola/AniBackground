<template>
  <header
    class="flex items-center justify-between px-4 py-2 rounded-md bg-[#f0f0f0] shadow-md dark:bg-[#1c1c1e]"
  >
    <a href="/" class="flex items-center gap-2 cursor-pointer hover:sepia">
      <picture>
        <img
          src="@/assets/images/logo.png"
          alt="Logo de AniBackground"
          class="h-6 w-6"
        />
      </picture>

      <h1 class="">
        <span class="text-md font-bold text-gray-700 dark:text-white">Ani</span>
        <span class="text-neutral-900 dark:text-white">Background</span>
      </h1>
    </a>

    <ThemeToggle />
  </header>
</template>
