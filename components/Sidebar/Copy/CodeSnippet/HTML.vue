<script setup lang="ts">
import { ref, onMounted, nextTick } from 'vue'

const htmlCode = ref('')

const getHtmlCode = () => {
  const backgroundElement = document.querySelector('.scene')
  if (backgroundElement) {
    const backgroundHTML = backgroundElement.outerHTML
    htmlCode.value = backgroundHTML
    navigator.clipboard
      .writeText(backgroundHTML)
      .then(() => {
        console.log('HTML copiado exitosamente.')
      })
      .catch((err) => {
        console.error('Error al copiar el HTML:', err)
      })
  }
}

const formatHtmlWithSpans = (rawHtml: any) => {
  let output = ''

  // Regex para capturar etiquetas, atributos, valores, y texto
  const tagRegex = /<\/?[\w\s="'-:;.%]+>/g
  const attrRegex = /([\w-]+)(=)("[^"]*")/g
  const textRegex = />([^<]+)</g

  // Proceso cada parte del HTML
  rawHtml.replace(tagRegex, (tag) => {
    let tagOutput = `<span class="token-line">
    `

    // Etiquetas de apertura o cierre
    tag.replace(/<\/?(\w+)/, (match, p1) => {
      tagOutput += `<span class="token token-punctuation">&lt;</span>
      <span class="token token-tag">${p1}</span>`
    })

    // Procesamos los atributos si existen
    tag.replace(attrRegex, (match, attrName, equalSign, attrValue) => {
      tagOutput += `<span class="token token-attr">${attrName}</span>
      <span class="token token-punctuation">${equalSign}</span>
      <span class="token token-attr-value">${attrValue}</span>`
    })

    // Cerramos la etiqueta
    if (tag.endsWith('/>')) {
      tagOutput += '<span class="token token-punctuation">/&gt;</span>'
    } else {
      tagOutput += '<span class="token token-punctuation">&gt;</span>'
    }

    tagOutput += '</span>'
    output += tagOutput
  })

  // Agrega el texto que no está dentro de etiquetas
  rawHtml.replace(textRegex, (match, textContent) => {
    output += `<span class="token-line"><span class="token token-text">${textContent.trim()}</span></span>`
  })

  return output
}

// Ejemplo de uso:
const rawHtml = `<div class="flex flex-1"><p>Hello World</p></div>`
const result = formatHtmlWithSpans(rawHtml)
console.log(result)

const formattedHtmlCode = ref('')

onMounted(() => {
  nextTick(() => {
    getHtmlCode()
    formattedHtmlCode.value = formatHtmlWithSpans(rawHtml)
  })
})
</script>

<template>
  <section
    class="shadow-lg rounded-md border border-[#2e343b] dark:border-[#2e343b]"
  >
    <div class="flex justify-between items-center bg-[#2e343b]">
      <div class="flex gap-2 items-center bg-[#21272f] px-2 py-1 rounded-t-md">
        <img src="@/assets/svg/html.svg" alt="Icono de HTML" class="w-3 h-3" />
        <h2 class="text-xs text-white">app.html</h2>
        <span class="text-xs text-white">x</span>
      </div>
      <div class="flex gap-2 items-center bg-[#33383f] px-2 py-1 rounded-md">
        <h2 class="text-xs text-white">Copiar</h2>
        <img
          src="@/assets/svg/copy.svg"
          alt="Icono de copiar"
          class="w-3 h-3 color-white"
        />
      </div>
    </div>
    <pre class="w-full h-full bg-[#21272f]">
        <code id="codeCanvas" :v-html="formattedHtmlCode">
        </code>
    </pre>
  </section>
</template>
