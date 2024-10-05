export interface Colors {
  count: number
  colors: Color[]
}

export interface Color {
  id: number
  color: string
  transparency: number
}

export interface Controls {
  designId: Ref<number>
  count: Ref<number>
  colors: Ref<Colors>
}

export interface ControlsProvider {
  controls: Controls
  updateDesignId: (newDesignId: number) => void
  updateCount: (newCount: number) => void
  updateColor: (newColor: string, id: number) => void
  updateTransparency: (newTransparency: number, id: number) => void
}

export interface ModalControls {
  frameworkSelected: Ref<string>
  updateFrameworkSelected: (framework: string) => void
  stepSelected: Ref<number>
  updateStepSelected: (step: number) => void
}

export interface FrameworkSteps {
  framework: string
  steps: Step[]
}

export interface Step {
  title: string
  description: string
}
