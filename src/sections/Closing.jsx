import React from 'react'
import { Logo, Orb, Duo, Arrow } from '../components/Brand.jsx'
import { Illust } from '../ThemeContext.jsx'

const Icon = ({ children }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{children}</svg>
)
const ICONS = {
  book: <Icon><path d="M12 6.5C10.5 5.3 8.3 4.8 5 5v12.5c3.3-.2 5.5.3 7 1.5 1.5-1.2 3.7-1.7 7-1.5V5c-3.3-.2-5.5.3-7 1.5Z" /><path d="M12 6.5V19" /></Icon>,
  wallet: <Icon><rect x="4" y="6.5" width="16" height="11.5" rx="2.5" /><path d="M20 10.5h-4.5a2 2 0 0 0 0 4H20" /><circle cx="15.8" cy="12.5" r=".4" fill="currentColor" /></Icon>,
  people: <Icon><circle cx="9" cy="8.5" r="2.5" /><circle cx="16" cy="9.5" r="2" /><path d="M4.5 18c.3-2.7 2.2-4.3 4.5-4.3s4.2 1.6 4.5 4.3M14 14.2c.6-.3 1.3-.5 2-.5 1.9 0 3.3 1.3 3.6 3.3" /></Icon>,
  receipt: <Icon><path d="M7 4.5h10a1 1 0 0 1 1 1V20l-2.2-1.5L13.6 20 12 18.5 10.4 20l-2.2-1.5L6 20V5.5a1 1 0 0 1 1-1Z" /><path d="M9 9h6M9 12.5h6" /></Icon>,
}

const STEPS = [
  { no: '01', badge: 'NOW', name: 'AI 자동리뷰댓글', meta: ['구독', '고객획득'], icon: null },
  { no: '02', badge: 'NEXT', name: '디지털매출장부', meta: ['구독', '데이터'], icon: 'book' },
  { no: '03', name: '매출선정산', meta: ['금융', '현금흐름'], icon: 'wallet' },
  { no: '04', name: '미래매출선지급', meta: ['금융', '예측'], icon: 'wallet' },
  { no: '05', name: '인력관리', meta: ['운영', '인건비'], icon: 'people' },
  { no: '06', name: '지출관리', meta: ['운영', '비용'], icon: 'receipt' },
]
const GROWTH = [['join', '가입'], ['data', '데이터'], ['finance', '금융'], ['ops', '운영'], ['revisit', '재방문']]

export function Roadmap() {
  return (
    <section className="roadmap">
      <div className="container">
        <span className="pill pill--lg pill--road">WOOJOOSTAY&nbsp; ROADMAP</span>
        <h2 className="roadmap__title">서비스는 순서대로 커집니다</h2>
        <p className="roadmap__desc">
          한 번에 모든 기능을 파는 것이 아니라, “자주 쓰는 업무”에서 시작해 <br />
          데이터와 신뢰가 쌓일수록 금융과 경영관리로 확장합니다.
        </p>
      </div>

      <div className="roadmap__track">
        <div className="container">
          <ol className="steps">
            {STEPS.map((s, i) => (
              <li key={s.no} className={`step${i === 0 ? ' step--now' : ''}${i < 2 ? ' step--lit' : ''}`}>
                <span className="step__dot">{s.no}</span>
                <div className="step__card">
                  <span className={`step__badge${s.badge ? '' : ' is-empty'}`}>{s.badge}</span>
                  <strong>우주스테이 <br />{s.name}</strong>
                  <span className="step__meta">{s.meta[0]} <br />{s.meta[1]}</span>
                  <span className="step__icon">{s.icon ? ICONS[s.icon] : <Orb />}</span>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>

      <div className="container">
        <div className="growth">
          <span className="growth__label">GROWTH LOGIC</span>
          <strong className="growth__text">리뷰로 가입 <Arrow /> 매출 데이터 축적 <Arrow /> 금융 연결 <Arrow /> 운영관리 확장</strong>
          <ol className="growth__flow">
            {GROWTH.map(([icon, label]) => (
              <li key={label}>
                <span className="growth__node"><Illust name={icon} /><em>{label}</em></span>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}

const VALUES = [
  ['01', '쉽게 시작', '리뷰 답글이라는 명확한 문제부터 해결', '구독으로 진입 장벽을 낮춥니다.'],
  ['02', '데이터가 쌓임', '예약·매출·광고비·정산 데이터를 연결', '경영 판단에 필요한 기준을 만듭니다.'],
  ['03', '운영 전체로 확장', '현금흐름·인력·지출까지 연결', '숙박업 운영 OS로 성장합니다.'],
]

export function Closing() {
  return (
    <section className="section closing" id="value">
      <div className="container">
        <span className="pill pill--sm">WOOJOO STAY</span>
        <h2 className="closing__title">숙박업 사장님의 하루를 <br />데이터로 더 가볍게.</h2>
        <p className="sec-desc">
          우주스테이의 핵심은 기능을 많이 넣는 것이 아니라, <br />
          숙박업의 실제 업무 흐름을 끊기지 않게 연결하는 것입니다.
        </p>

        <ul className="values">
          {VALUES.map(([no, t, a, b]) => (
            <li key={no}>
              <span className="pill pill--tint pill--num">{no}</span>
              <strong>{t}</strong>
              <p>{a} <br />{b}</p>
              <Orb />
            </li>
          ))}
        </ul>

        <div className="final-band block-narrow">
          <div>
            <span>WOOJOO STAY</span>
            <strong>리뷰부터 매출·정산·인력·지출까지, 숙박업의 모든 흐름을 한 궤도에.</strong>
          </div>
          <Duo />
        </div>
      </div>
    </section>
  )
}

export function Footer() {
  return (
    <footer className="footer" id="partner">
      <div className="container">
        <div className="footer__top block-narrow">
          <div>
            <Logo footer />
            <p className="footer__os">Hospitality Business OS</p>
          </div>
          <a href="#partner" className="btn btn--grad btn--xl"><Duo /> 파트너 도입 문의</a>
        </div>
        <p className="footer__tag">리뷰에서 시작해, 숙박업의 모든 경영을 한 궤도에. <br /><b>AI · DATA · FINANCE · OPERATION</b></p>
        <p className="footer__copy">WOOJOO STAY. All rights reserved.</p>
      </div>
    </footer>
  )
}
