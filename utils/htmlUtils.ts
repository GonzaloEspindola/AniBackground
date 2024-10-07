export const getHtmlCode = () => {
  const codeCanvas = document.getElementById('codeCanvas')

  if (codeCanvas) {
    codeCanvas.innerHTML = ''
  }

  const backgroundElement = document.querySelector('.scene')
  if (backgroundElement) {
    const backgroundHTML = backgroundElement.outerHTML
    navigator.clipboard
      .writeText(backgroundHTML)
      .then(() => {
        if (codeCanvas) {
          formatHTMLAsSpans(backgroundHTML).forEach((span) => {
            codeCanvas.appendChild(span)
          })
        }
      })
      .catch((err) => {
        console.error('Error al copiar el HTML:', err)
      })
  }
}

const splitHtmlTag = (spanValue: string) => {
  const regex = /(<|\/|>|\w+\s*|=|"(.*?)")/g
  const matches = spanValue.match(regex)
  const spanStructure: HTMLSpanElement[] = []

  matches?.reduce((prevToken, token) => {
    if (/^data-v-/.test(token)) {
      return prevToken
    }

    const span = document.createElement('span')

    if (token === '<' || token === '>' || token === '/') {
      span.className = 'span-decoration'
    } else if (token === '=') {
      span.className = 'span-decoration'
    } else if (prevToken === '<' || prevToken === '/') {
      span.className = 'span-tag'
    } else if (token === 'class') {
      span.className = 'span-attr'
    } else {
      span.className = 'span-attr-value'
    }

    span.textContent = token
    spanStructure.push(span)

    return token
  }, '')

  return spanStructure
}

const formatHTMLAsSpans = (html: string) => {
  const spans = html.split(/(<\/?[a-zA-Z]+(?:\s+[^>]+)?>)/g).filter(Boolean)
  let indentLevel = 0

  spans.forEach((span, index) => {
    spans[index] = span.replace(/\bdata\S*\s?/g, '')
  })

  const spansWithContent = spans.map((value) => {
    const spanLine = document.createElement('span')
    spanLine.classList.add('span-line')

    spanLine.style.marginLeft = `${indentLevel * 20}px`

    if (value.startsWith('<')) {
      if (value.startsWith('</')) {
        indentLevel = Math.max(indentLevel - 1, 0)
        spanLine.style.marginLeft = `${indentLevel * 20}px`
      }
      splitHtmlTag(value).forEach((span) => {
        spanLine.appendChild(span)
      })
      if (!value.startsWith('</') && !value.endsWith('/>')) {
        indentLevel++
      }
    } else {
      const valueTag = document.createElement('span')
      valueTag.classList.add('span-content')
      valueTag.textContent = value
      spanLine.appendChild(valueTag)
    }

    return spanLine
  })

  return spansWithContent
}
