<script setup lang="ts">
import type { FrameworkSteps } from '~/types/types'
import { useControls } from '~/composable/useControls'

const { frameworkSelected } = useControls()

const copyModal: any = ref('copyModal')

const frameworkSteps: FrameworkSteps[] = [
  {
    framework: 'HTML - CSS',
    steps: [
      {
        title: 'Paso 1',
        description: 'Copiar el HTML',
      },
      {
        title: 'Paso 2',
        description: 'Copiar el CSS',
      },
    ],
  },

  {
    framework: 'TailwindCSS',
    steps: [
      {
        title: 'Paso 1',
        description: 'Copiar el HTML',
      },
      {
        title: 'Paso 2',
        description: 'Agregar animación a configuración',
      },
    ],
  },
]

const stepByFramework = computed(() => {
  return frameworkSteps.find(
    (framework) => framework.framework === frameworkSelected.value,
  )?.steps
})

const openModal = () => {
  copyModal.value.showModal()
}

const closeModal = () => {
  copyModal.value.close()
}
</script>

<template>
  <button
    id="openModal"
    class="px-4 py-2 grow rounded-md text-sm text-light-E0E0E0 dark:text-dark-textSecondary bg-light-border dark:bg-dark-border hover:scale-105 transition-transform duration-200"
    @click="openModal"
  >
    Copiar código
  </button>

  <dialog
    ref="copyModal"
    class="rounded-lg p-0 overflow-hidden shadow-lg w-[50rem] bg-light-backgroundSecondary dark:bg-dark-backgroundSecondary"
  >
    <div
      class="px-4 py-2 flex justify-between items-center text-light-textPrimary dark:text-dark-textPrimary bg-light-background/50 dark:bg-dark-background/50"
    >
      <h2 class="text-md">
        Selecciona el framework que mejor se adapte a tu proyecto
      </h2>
      <button @click="closeModal" class="text-2xl font-bold">&times;</button>
    </div>

    <div class="flex flex-col gap-6 px-4 py-6 max-h-[40rem]">
      <SidebarCopyFrameworkSelectorSection />
      <SidebarCopySteps :steps="stepByFramework!" />
      <SidebarCopyCodeSnippetContainer />
    </div>
  </dialog>
</template>
