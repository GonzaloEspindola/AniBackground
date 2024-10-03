<script setup lang="ts">
let isDark = false

const initTheme = () => {
  let savedTheme = localStorage.getItem('theme')

  if (!savedTheme) {
    isDark = window.matchMedia('(prefers-color-scheme: dark)').matches
  } else {
    isDark = savedTheme === 'dark'
  }

  const theme = isDark ? 'dark' : 'light'
  localStorage.setItem('theme', theme)

  document.documentElement.classList.remove('dark', 'light')
  document.documentElement.classList.add(theme)
}

initTheme()
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
