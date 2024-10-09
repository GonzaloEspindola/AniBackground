import type { ControlsProvider } from '~/types/types'

export const useControls = () => {
  const controls = inject<ControlsProvider>('controls', {
    controls: {
      designId: ref(1),
      count: ref(10),
      duration: ref(50),
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
    updateDuration: () => {},
    updateColor: () => {},
    updateTransparency: () => {},
    frameworkSelected: ref('HTML - CSS'),
    stepSelected: ref(1),
    updateFrameworkSelected: () => {},
    updateStepSelected: () => {},
  })

  return controls
}
