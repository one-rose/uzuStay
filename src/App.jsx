import React, { useEffect, useLayoutEffect, useState } from 'react'
import { THEMES, DEFAULT_THEME, getTheme } from './themes.js'
import { ThemeContext } from './ThemeContext.jsx'
import ThemeSwitcher from './components/ThemeSwitcher.jsx'
import { Header, Hero, Platforms } from './sections/Hero.jsx'
import { Service01, Service02, Service03, Service04 } from './sections/Services.jsx'
import { Roadmap, Closing, Footer } from './sections/Closing.jsx'

const STORAGE_KEY = 'woojoostay-color-scheme'

function readSaved() {
  try { return localStorage.getItem(STORAGE_KEY) || DEFAULT_THEME } catch { return DEFAULT_THEME }
}

export default function App() {
  const [themeId, setThemeId] = useState(readSaved)
  const theme = getTheme(themeId)

  // 선택한 시안의 토큰을 :root 에 주입
  useLayoutEffect(() => {
    const root = document.documentElement
    for (const [k, v] of Object.entries(theme.vars)) root.style.setProperty(k, v)
    root.dataset.scheme = theme.id
    try { localStorage.setItem(STORAGE_KEY, theme.id) } catch { /* 저장 불가 환경은 무시 */ }
  }, [theme])

  // ← → 방향키로도 시안 전환
  useEffect(() => {
    const onKey = (e) => {
      if (e.key !== 'ArrowRight' && e.key !== 'ArrowLeft') return
      if (/input|textarea|select/i.test(e.target.tagName)) return
      const i = THEMES.findIndex((t) => t.id === themeId)
      const n = (i + (e.key === 'ArrowRight' ? 1 : THEMES.length - 1)) % THEMES.length
      setThemeId(THEMES[n].id)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [themeId])

  return (
    <ThemeContext.Provider value={theme}>
      <Header />
      <main>
        <Hero />
        <Platforms />
        <Service01 />
        <Service02 />
        <Service03 />
        <Service04 />
        <Roadmap />
        <Closing />
      </main>
      <Footer />
      <ThemeSwitcher current={theme} onChange={setThemeId} />
    </ThemeContext.Provider>
  )
}
