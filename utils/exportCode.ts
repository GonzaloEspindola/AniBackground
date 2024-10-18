import { toast } from 'vue3-toastify'
import 'vue3-toastify/dist/index.css'

type ToastTheme = 'light' | 'dark'

const theme: ToastTheme = localStorage.getItem('theme') as ToastTheme

export const copyCode = (content: string, extension: string) => {
  try {
    navigator.clipboard.writeText(content).then(() => {
      toast.success(`${extension} copiado exitosamente`, {
        autoClose: 1000,
        position: 'bottom-right',
        theme: theme,
      })
    })
  } catch (error) {
    toast.error(`Error al copiar el ${extension}`, {
      autoClose: 1000,
      position: 'bottom-right',
      theme: theme,
    })
  }
}
