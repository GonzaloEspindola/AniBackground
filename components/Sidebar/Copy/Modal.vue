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
    class="px-4 py-2 grow text-[#111111] bg-[#dcdcdc] dark:bg-[#111111] dark:text-white rounded-md text-md"
    @click="openModal"
  >
    Copiar código
  </button>

  <dialog
    ref="copyModal"
    class="rounded-lg p-0 overflow-hidden shadow-lg bg-[#dcdcdc] w-[50rem] dark:bg-[#1c1c1e]"
  >
    <div
      class="dark:bg-[#111111] text-white px-4 py-2 flex justify-between items-center"
    >
      <h2 class="text-md">Copia el código de tu background</h2>
      <button @click="closeModal" class="text-white text-2xl font-bold">
        &times;
      </button>
    </div>

    <div class="flex flex-col gap-6 px-4 py-6 cursor-pointer max-h-[40rem]">
      <Transition name="fade" mode="out-in">
        <SidebarCopyFrameworkSelectorSection />
      </Transition>
      <SidebarCopySteps :steps="stepByFramework!" />

      <SidebarCopyCodeSnippetContainer />
    </div>
  </dialog>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
