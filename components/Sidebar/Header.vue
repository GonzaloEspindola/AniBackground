<template>
  <header
    class="flex items-center justify-between px-4 py-2 rounded-sm bg-light-backgroundSecondary dark:bg-dark-backgroundSecondary border border-light-border dark:border-dark-border"
  >
    <a href="/" class="flex items-center gap-2 cursor-pointer">
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
