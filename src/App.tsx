import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const en = {
  header: {
    title: 'This is the title',
    tools: {
      bookmark: 'Bookmark',
      share: 'Share',
      more: 'More'
    }
  },
  welcome: 'Welcome to our app',
  footer: {
    text: 'This is the footer text'
  }
}

type Copies = typeof en

const es: Copies = {
  header: {
    title: 'Éste es el título',
    tools: {
      bookmark: 'Guardar',
      share: 'Compartir',
      more: 'Más'
    }
  },
  welcome: 'Bienvenido a nuestra app',
  footer: {
    text: 'Éste es el texto del pie de página'
  }
}

// Utility type to compute all valid dot-joined key paths
// e.g., 'header', 'header.title', 'header.tools.bookmark', etc.
type DotJoinedKeys<T, Prev extends string = ''> = {
  [K in keyof T & (string)]: T[K] extends object
  ? (Prev extends '' ? K : `${Prev}.${K}`) | DotJoinedKeys<T[K], Prev extends '' ? K : `${Prev}.${K}`>
  : (Prev extends '' ? K : `${Prev}.${K}`)
}[keyof T & string]

const tFactory = (lang: 'en' | 'es') => {
  const copies = lang === 'en' ? en : es

  return (key: DotJoinedKeys<Copies>): string => {
    const keys = key.split('.')
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let current: any = copies

    for (const k of keys) {
      current = current[k]
    }

    return current
  }
}

function App() {
  const [count, setCount] = useState(0)

  const t = tFactory('es')

  return (
    <>
      <header>
        <div>
          <a href="https://vite.dev" target="_blank">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
        <h1>{t('header.title')}</h1>
        <nav>
          <ul>
            <li>{t('header.tools.bookmark')}</li>
            <li>{t('header.tools.share')}</li>
            <li>{t('header.tools.more')}</li>
          </ul>
        </nav>
      </header>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          {t('welcome')}
        </p>
      </div>
      <footer>
        <p className="read-the-docs">
          {t('footer.text')}
        </p>
      </footer>
    </>
  )
}

export default App
