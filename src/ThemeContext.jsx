import React, { createContext, useContext } from 'react'
import { THEMES } from './themes.js'

// 테마별로 색조를 맞춘 3D 일러스트 (src/assets/illust/<테마>/<이름>.webp)
const files = import.meta.glob('./assets/illust/*/*.webp', { eager: true, import: 'default' })
const ILLUST = {}
for (const [path, url] of Object.entries(files)) {
  const [, theme, name] = path.match(/illust\/([^/]+)\/([^/]+)\.webp$/)
  ;(ILLUST[theme] ||= {})[name] = url
}

export const ThemeContext = createContext(THEMES[0])
export const useTheme = () => useContext(ThemeContext)

export function Illust({ name, className = '', alt = '' }) {
  const theme = useTheme()
  const src = (ILLUST[theme.id] || ILLUST.purple)[name]
  return <img className={`illust ${className}`} src={src} alt={alt} draggable="false" />
}
