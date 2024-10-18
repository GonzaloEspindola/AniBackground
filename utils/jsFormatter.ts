import { design1JS } from './js/design1'
import { design2JS } from './js/design2'
import { design3JS } from './js/design3'

const designMap: Record<number, string> = {
  1: design1JS,
  2: design2JS,
  3: design3JS,
}

export const createJsStructure = (design: number) => {
  const codeCanvas = document.getElementById('codeCanvas')

  if (codeCanvas) {
    codeCanvas.innerHTML = ''
  }

  const jsCode = designMap[design]

  if (codeCanvas) {
    formatJSAsSpans(jsCode).forEach((span) => {
      codeCanvas.appendChild(span)
    })
  }

  return jsCode
}

const splitJsToken = (token: string) => {
  const regex =
    /({|}|\[|\]|,|:|;|\(|\)|'[^']*'|"[^"]*"|\b\d+\.?\d*\b|true|false|null|undefined|\b[a-zA-Z_$][\w$]*\b|=>)/g

  const matches = token.match(regex)

  console.log('matches', matches)

  const spanStructure: HTMLSpanElement[] = []

  matches?.reduce((prevToken, token) => {
    const span = document.createElement('span')

    if (/^[a-zA-Z_$][\w$]*$/.test(token)) {
      span.className = 'span-identifier'
    } else if (/^\d+\.?\d*$/.test(token)) {
      span.className = 'span-value'
    } else if (/^'[^']*'$|^"[^"]*"$/.test(token)) {
      span.className = 'span-value'
    } else if (/^(true|false|null|undefined)$/.test(token)) {
      span.className = 'span-value'
    } else if (token === ':' || token === ',') {
      span.className = 'span-punctuation'
    } else if (
      token === '{' ||
      token === '}' ||
      token === '(' ||
      token === ')' ||
      token === '[' ||
      token === ']'
    ) {
      span.className = 'span-bracket'
    } else {
      span.className = 'span-default'
    }

    span.textContent = token
    spanStructure.push(span)
    return token
  }, '')

  return spanStructure
}

const formatJSAsSpans = (jsCode: string) => {
  const lines = jsCode.split(/\n/)
  let indentLevel = 0

  const spansWithContent = lines.map((line) => {
    const trimmedLine = line.trim()
    const spanLine = document.createElement('span')
    spanLine.classList.add('span-line')

    if (trimmedLine.startsWith('}') || trimmedLine.startsWith('},')) {
      indentLevel = Math.max(indentLevel - 1, 0)
    }

    spanLine.style.marginLeft = `${indentLevel * 20}px`

    splitJsToken(line).forEach((span) => {
      spanLine.appendChild(span)
    })

    if (trimmedLine.endsWith('{') && !trimmedLine.includes('}')) {
      indentLevel++
    }

    return spanLine
  })

  return spansWithContent
}
