<script setup lang="ts">
const isDark = ref(false)

const themeToggle = () => {
  const savedTheme = localStorage.getItem('theme') || 'light'
  const newTheme = savedTheme === 'dark' ? 'light' : 'dark'

  localStorage.setItem('theme', newTheme)
  document.documentElement.classList.remove('dark', 'light')
  document.documentElement.classList.add(newTheme)

  isDark.value = newTheme === 'dark'
}

onMounted(() => {
  const savedTheme = localStorage.getItem('theme') || 'light'
  isDark.value = savedTheme === 'dark'
})
</script>

<template>
  <button @click="themeToggle" class="flex items-center">
    <img
      v-if="isDark"
      src="@/assets/svg/light.svg"
      alt="Light mode"
      class="h-6 w-6"
    />
    <img v-else src="@/assets/svg/dark.svg" alt="Dark mode" class="h-6 w-6" />
  </button>
</template>
