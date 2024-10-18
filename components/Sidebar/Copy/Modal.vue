<script setup lang="ts">
import type { FrameworkSteps } from '~/types/types'
import { useControls } from '~/composable/useControls'

const { frameworkSelected, controls } = useControls()

const copyModal = ref<HTMLDialogElement | null>(null)

const withAnimation = [
  { title: 'Paso 1', description: 'Copiar el HTML' },
  { title: 'Paso 2', description: 'Agregar animación a configuración' },
]

const withoutAnimation = [{ title: 'Paso 1', description: 'Copiar el HTML' }]

const stepByDesignMap: Record<
  number,
  { title: string; description: string }[]
> = {
  1: withAnimation,
  2: withAnimation,
  3: withAnimation,
  4: withoutAnimation,
}

const frameworkSteps = computed<FrameworkSteps[]>(() => [
  {
    framework: 'HTML - CSS',
    steps: [
      { title: 'Paso 1', description: 'Copiar el HTML' },
      { title: 'Paso 2', description: 'Copiar el CSS' },
    ],
  },
  {
    framework: 'TailwindCSS',
    steps: stepByDesignMap[controls.designId.value],
  },
])

const stepByFramework = computed(() => {
  return frameworkSteps.value.find(
    (framework) => framework.framework === frameworkSelected.value,
  )?.steps
})

const openModal = () => {
  if (copyModal.value) {
    copyModal.value.showModal()
  }
}

const closeModal = () => {
  if (copyModal.value) {
    copyModal.value.close()
  }
}
</script>

<template>
  <button
    id="openModal"
    class="px-4 py-2 grow text-sm text-light-E0E0E0 dark:text-dark-textSecondary bg-light-border dark:bg-dark-border hover:font-bold"
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
      <SidebarCopySteps v-if="stepByFramework" :steps="stepByFramework" />
      <SidebarCopyCodeSnippetContainer />
    </div>
  </dialog>
</template>
