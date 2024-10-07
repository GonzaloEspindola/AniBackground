import { design1CSS } from './css/design1'
import { design2CSS } from './css/design2'
import { design3CSS } from './css/design3'

const designMap: Record<number, string> = {
  1: design1CSS,
  2: design2CSS,
  3: design3CSS,
}

export const getCssCode = (design: number) => {
  const codeCanvas = document.getElementById('codeCanvas')

  if (codeCanvas) {
    codeCanvas.innerHTML = ''
  }

  const cssCode = designMap[design]
  navigator.clipboard
    .writeText(cssCode)
    .then(() => {
      if (codeCanvas) {
        formatCSSAsSpans(cssCode).forEach((span) => {
          codeCanvas.appendChild(span)
        })
      }
    })
    .catch((err) => {
      console.error('Error al copiar el CSS:', err)
    })
}

const splitCssToken = (token: string) => {
  const regex = /(\{|}|;|:|\s+|[a-zA-Z0-9-#.%]+(?:\([^)]*\))?|\@media[^{]+|,)/g

  const matches = token.match(regex)

  const spanStructure: HTMLSpanElement[] = []

  matches?.reduce((prevToken, token) => {
    const span = document.createElement('span')

    span.className = 'span-value'

    if (token === ';' || token === ':') {
      span.className = 'span-semicolon'
    }

    if (!prevToken && (!token.startsWith('#') || !token.startsWith('.'))) {
      span.className = 'span-property ident'
    }

    if (token === '{' || token === '}') {
      span.className = 'span-bracket'
    }

    if (token.startsWith('#') || token.startsWith('.')) {
      span.className = 'span-selector'
    }

    span.textContent = token
    spanStructure.push(span)

    return token
  }, '')

  return spanStructure
}

const formatCSSAsSpans = (css: string) => {
  css = css.replace(/\s+/g, '')
  const rules = css.split(/(?<=})|(?<={)|(?<=;)\s*/g)

  const spansWithContent = rules.map((rule) => {
    const spanLine = document.createElement('span')
    spanLine.classList.add('span-line')

    splitCssToken(rule).forEach((span) => {
      spanLine.appendChild(span)
    })

    return spanLine
  })

  const formattedContent: HTMLSpanElement[] = []
  spansWithContent.forEach((spanLine) => {
    formattedContent.push(spanLine)
    if (spanLine.textContent?.trim() === '}') {
      const extraSpace = document.createElement('br')
      formattedContent.push(extraSpace)
    }
  })

  return formattedContent
}
