import React from 'react'
import { THEMES } from '../themes.js'

/** 화면 하단에 떠 있는 칼라 시안 전환 버튼 */
export default function ThemeSwitcher({ current, onChange }) {
  const idx = THEMES.findIndex((t) => t.id === current.id)
  const next = THEMES[(idx + 1) % THEMES.length]
  return (
    <div className="switcher" role="group" aria-label="칼라 시안 전환">
      <div className="switcher__dots">
        {THEMES.map((t) => (
          <button
            key={t.id}
            type="button"
            className={`switcher__dot${t.id === current.id ? ' is-on' : ''}`}
            onClick={() => onChange(t.id)}
            aria-pressed={t.id === current.id}
            aria-label={`${t.code} 시안 · ${t.name}`}
            title={`${t.code} · ${t.name}`}
          >
            <i style={{ background: `conic-gradient(${t.swatch[0]} 0 50%, ${t.swatch[1]} 0 75%, ${t.swatch[2]} 0)` }} />
            <span>{t.code}</span>
          </button>
        ))}
      </div>
      <div className="switcher__info" aria-live="polite">
        <strong>{current.code === '원본' ? '원본 시안' : `${current.code}안`} · {current.name}</strong>
        <span>{current.desc}</span>
      </div>
      <button type="button" className="switcher__next" onClick={() => onChange(next.id)}>
        시안 바꾸기
        <svg viewBox="0 0 20 16" aria-hidden="true"><path d="M1 8h16M11 2l7 6-7 6" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" /></svg>
      </button>
    </div>
  )
}
