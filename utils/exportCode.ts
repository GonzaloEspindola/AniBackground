import { toast } from 'vue3-toastify'
import 'vue3-toastify/dist/index.css'

import { design1CSS } from './css/design1'

export const copyBackgroundHTML = () => {
  try {
    const backgroundElement = document.querySelector('.scene')
    if (backgroundElement) {
      const backgroundHTML = backgroundElement.outerHTML
      navigator.clipboard
        .writeText(backgroundHTML)
        .then(() => {
          console.log('HTML copiado exitosamente.')
        })
        .catch((err) => {
          console.error('Error al copiar el HTML:', err)
        })
    }

    toast.success('HTML copiado exitosamente.', {
      autoClose: 1000,
      position: 'bottom-right',
    })
  } catch (error) {
    toast.error('Error al copiar el HTML.', {
      autoClose: 1000,
      position: 'bottom-right',
    })
  }
}

export const copyBackgroundCSS = () => {
  try {
    navigator.clipboard.writeText(design1CSS).then(() => {
      toast.success('CSS copiado exitosamente.', {
        autoClose: 1000,
        position: 'bottom-right',
      })
    })
  } catch (error) {
    toast.error('Error al copiar el CSS.', {
      autoClose: 1000,
      position: 'bottom-right',
    })
  }
}
