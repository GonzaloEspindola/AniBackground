<template>
  <header
    class="flex items-center justify-between px-4 py-2 rounded-md bg-light-backgroundSecondary shadow-md dark:bg-dark-backgroundSecondary"
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
        <span
          class="text-md font-bold text-light-textPrimary dark:text-dark-textPrimary"
          >Ani</span
        >
        <span class="text-light-textSecondary dark:text-dark-textSecondary"
          >Background</span
        >
      </h1>
    </a>

    <ThemeToggle />
  </header>
</template>
