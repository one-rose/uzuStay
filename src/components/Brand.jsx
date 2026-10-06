import React, { useId } from 'react'
import { BRAND_LOGO, ORIGINAL_LOGO, ORB_MARK, DUO_MARK } from '../logoPaths.js'
import { useTheme } from '../ThemeContext.jsx'

function Mark({ data, className, title, bodyFill = 'currentColor', starFill = 'currentColor', gradient }) {
  const gid = useId().replace(/:/g, '')
  const fill = gradient ? `url(#${gid})` : bodyFill
  return (
    <svg className={className} viewBox={`0 0 ${data.w} ${data.h}`} role={title ? 'img' : undefined} aria-label={title} aria-hidden={title ? undefined : true}>
      {gradient && (
        <defs>
          <linearGradient id={gid} x1="0" y1="0" x2={data.w} y2="0" gradientUnits="userSpaceOnUse">
            {gradient.map((c, i) => <stop key={c} offset={i / (gradient.length - 1)} stopColor={c} />)}
          </linearGradient>
        </defs>
      )}
      {data.body.map((d, i) => <path key={i} d={d} fill={fill} />)}
      {data.star.map((d, i) => <path key={`s${i}`} d={d} fill={gradient ? fill : starFill} />)}
    </svg>
  )
}

/** 워드마크. 원본 시안은 홈페이지 로고, A~E 안은 칼라시스템의 로고를 쓴다. */
export function Logo({ footer = false, className = '' }) {
  const theme = useTheme()
  const data = theme.logo === 'original' ? ORIGINAL_LOGO : BRAND_LOGO
  return (
    <Mark
      data={data}
      title="WOOJOO STAY"
      className={`logo logo--${theme.logo} ${className}`}
      bodyFill={footer ? 'var(--logo-footer)' : 'var(--logo)'}
      starFill={footer ? 'var(--logo-footer-star)' : 'var(--logo-star)'}
      gradient={!footer && theme.logoGradient}
    />
  )
}

/** 로고의 'O' 한 글자 — 사이트 전반의 아이콘으로 쓰인다 */
export const Orb = ({ className = '' }) => <Mark data={ORB_MARK} className={`orb ${className}`} />

/** 'OO' 두 글자 마크 */
export const Duo = ({ className = '' }) => <Mark data={DUO_MARK} className={`duo ${className}`} />

export const Arrow = ({ className = '' }) => (
  <svg className={`arrow ${className}`} viewBox="0 0 20 16" aria-hidden="true">
    <path d="M1 8h16M11 2l7 6-7 6" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

export const Won = () => <span className="won">₩</span>
