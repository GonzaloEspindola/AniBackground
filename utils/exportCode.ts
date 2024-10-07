import { toast } from 'vue3-toastify'
import 'vue3-toastify/dist/index.css'
import { design1CSS } from './css/design1'
import { design2CSS } from './css/design2'
import { design3CSS } from './css/design3'
import { design1JS } from './js/design1'
import { design2JS } from './js/design2'
import { design3JS } from './js/design3'

type ToastTheme = 'light' | 'dark'

const theme: ToastTheme = localStorage.getItem('theme') as ToastTheme

const designMap: Record<number, any> = {
  1: {
    css: design1CSS,
    js: design1JS,
  },
  2: {
    css: design2CSS,
    js: design2JS,
  },
  3: {
    css: design3CSS,
    js: design3JS,
  },
}

export const copyBackgroundHTML = () => {
  try {
    const backgroundElement = document.getElementById('codeCanvas')

    if (backgroundElement) {
      const backgroundHTML = backgroundElement.textContent

      if (backgroundHTML) {
        navigator.clipboard.writeText(backgroundHTML).then(() => {
          toast.success('HTML copiado exitosamente.', {
            autoClose: 1000,
            position: 'bottom-right',
            theme: theme,
          })
        })
      }
    }
  } catch (error) {
    toast.error('Error al copiar el HTML.', {
      autoClose: 1000,
      position: 'bottom-right',
      theme: theme,
    })
  }
}

export const copyBackgroundCSS = (design: number) => {
  try {
    navigator.clipboard.writeText(designMap[design].css).then(() => {
      toast.success('CSS copiado exitosamente.', {
        autoClose: 1000,
        position: 'bottom-right',
        theme: theme,
      })
    })
  } catch (error) {
    toast.error('Error al copiar el CSS.', {
      autoClose: 1000,
      position: 'bottom-right',
      theme: theme,
    })
  }
}

export const copyTailwindConfig = (design: number) => {
  try {
    navigator.clipboard.writeText(designMap[design].js).then(() => {
      toast.success('tailwind.config.js copiado exitosamente.', {
        autoClose: 1000,
        position: 'bottom-right',
        theme: theme,
      })
    })
  } catch (error) {
    toast.error('Error al copiar el tailwind.config.js.', {
      autoClose: 1000,
      position: 'bottom-right',
      theme: theme,
    })
  }
}
