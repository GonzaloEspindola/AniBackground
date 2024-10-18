import type { Colors, Controls } from '~/types/types'

export const createControlsProvider = () => {
  const colorsCountMap: Record<number, Colors> = {
    1: {
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
    },
    2: {
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
    },
    3: {
      count: 1,
      colors: [
        {
          id: 1,
          color: '#f0f0f0',
          transparency: 1,
        },
      ],
    },
    4: {
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
          color: '#053532',
          transparency: 0.9518445288519037,
        },
      ],
    },
  }

  const controls: Controls = {
    designId: ref(1),
    count: ref(10),
    duration: ref(50),
    colors: ref(colorsCountMap[1]),
  }

  const updateDesignId = (newDesignId: number) => {
    controls.designId.value = newDesignId
    controls.colors.value = colorsCountMap[newDesignId]
  }

  const updateCount = (newCount: number): void => {
    controls.count.value = newCount
  }

  const updateDuration = (newDuration: number): void => {
    controls.duration.value = newDuration
  }

  const updateColor = (newColor: string, id: number): void => {
    controls.colors.value.colors[id - 1].color = newColor
  }

  const updateTransparency = (newTransparency: number, id: number): void => {
    controls.colors.value.colors[id - 1].transparency = newTransparency / 100
  }

  const frameworkSelected: Ref<string> = ref('HTML - CSS')
  const stepSelected: Ref<number> = ref(1)

  const updateFrameworkSelected = (framework: string): void => {
    frameworkSelected.value = framework
    stepSelected.value = 1
  }

  const updateStepSelected = (step: number): void => {
    stepSelected.value = step
  }

  provide('controls', {
    controls,
    updateDesignId,
    updateCount,
    updateDuration,
    updateColor,
    updateTransparency,
    frameworkSelected,
    stepSelected,
    updateFrameworkSelected,
    updateStepSelected,
  })
}
