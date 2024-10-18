export const createCssStructure = async (design: number) => {
  const codeCanvas = document.getElementById('codeCanvas')

  if (codeCanvas) {
    codeCanvas.innerHTML = ''
  }

  const cssCode = await fetch(`/design/${design}/styles.css`).then((res) =>
    res.text(),
  )

  if (codeCanvas) {
    formatCSSAsSpans(cssCode).forEach((span) => {
      codeCanvas.appendChild(span)
    })
  }

  return cssCode
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
