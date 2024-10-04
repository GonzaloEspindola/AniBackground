<script setup lang="ts">
import SidebarControlDesign1 from '@/components/Sidebar/Control/Design/1.vue'

const copyBackgroundHTML = () => {
  const backgroundElement = document.querySelector('.scene')
  if (backgroundElement) {
    const backgroundHTML = backgroundElement.outerHTML // Copia todo el elemento, no solo su contenido
    navigator.clipboard
      .writeText(backgroundHTML)
      .then(() => {
        console.log('HTML copiado exitosamente.')
      })
      .catch((err) => {
        console.error('Error al copiar el HTML:', err)
      })
  }
}
</script>

<template>
  <section class="flex grow">
    <div class="flex items-end grow">
      <button
        @click="copyBackgroundHTML()"
        type="button"
        class="flex grow gap-2 items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-s-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 452 520"
          class="w-4 h-4"
        >
          <path fill="#e34f26" d="M41 460L0 0h451l-41 460-185 52" />
          <path fill="#ef652a" d="M226 472l149-41 35-394H226" />
          <path
            fill="#ecedee"
            d="M226 208h-75l-5-58h80V94H84l15 171h127zm0 147l-64-17-4-45h-56l7 89 117 32z"
          />
          <path
            fill="#fff"
            d="M226 265h69l-7 73-62 17v59l115-32 16-174H226zm0-171v56h136l5-56z"
          />
        </svg>
        HTML
      </button>
      <button
        @click="copyBackgroundCSS()"
        type="button"
        class="flex grow gap-2 items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-e-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 452 520"
          class="w-4 h-4"
        >
          <path fill="#0c73b8" d="M41 460L0 0h451l-41 460-185 52" />
          <path fill="#30a9dc" d="M226 472l149-41 35-394H226" />
          <path
            fill="#ecedee"
            d="M226 208H94l5 57h127zm0-114H84l5 56h137zm0 261l-124-33 7 60 117 32z"
          />
          <path
            fill="#fff"
            d="M226 265h69l-7 73-62 17v59l115-32 26-288H226v56h80l-6 58h-74z"
          />
        </svg>
        CSS
      </button>
    </div>
  </section>
</template>
