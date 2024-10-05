<script setup lang="ts">
import type { ControlsProvider, FrameworkSteps, Step } from '~/types/types'
const { controls } = inject<ControlsProvider>('controls', {
  controls: {
    designId: ref(1),
    count: ref(10),
    colors: ref({
      count: 3,
      colors: [
        {
          id: 1,
          color: '#c300ff',
          transparency: 0.2710713367756439,
        },
        {
          id: 2,
          color: '#00f2ff',
          transparency: 0.9518445288519037,
        },
        {
          id: 3,
          color: '#00d0ff',
          transparency: 0.3517331987451342,
        },
      ],
    }),
  },
  updateDesignId: () => {},
  updateCount: () => {},
  updateColor: () => {},
  updateTransparency: () => {},
})

const frameworkSelected: Ref<string> = ref('HTML - CSS')
const stepSelected: Ref<number> = ref(1)
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

const updateFrameworkSelected = (framework: string): void => {
  frameworkSelected.value = framework
}

const updateStepSelected = (step: number): void => {
  stepSelected.value = step
}

const openModal = () => {
  copyModal.value.showModal()
}

const closeModal = () => {
  copyModal.value.close()
}

provide('modalControls', {
  frameworkSelected,
  updateFrameworkSelected,
  stepSelected,
  updateStepSelected,
})
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
    class="rounded-lg p-0 overflow-hidden shadow-lg bg-[#dcdcdc] dark:bg-[#1c1c1e]"
  >
    <div
      class="dark:bg-[#111111] text-white px-4 py-2 flex justify-between items-center"
    >
      <h2 class="text-lg">Copia el código de tu background</h2>
      <button @click="closeModal" class="text-white text-2xl font-bold">
        &times;
      </button>
    </div>

    <div class="flex flex-col gap-4 px-4 py-6 cursor-pointer">
      <SidebarCopyFrameworkSelectorSection />
      <SidebarCopySteps :steps="stepByFramework!" />

      <SidebarCopyCodeSnippetContainer />
    </div>
  </dialog>
</template>
