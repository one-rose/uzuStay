import React from 'react'
import { Logo, Orb } from '../components/Brand.jsx'
import { Illust } from '../ThemeContext.jsx'
import { Won } from '../components/Brand.jsx'
import yanolja from '../assets/partners/yanolja.webp'
import yeogi from '../assets/partners/yeogi.webp'
import agoda from '../assets/partners/agoda.webp'
import naverBooking from '../assets/partners/naver-booking.webp'
import chYanolja from '../assets/partners/ch-yanolja.webp'
import chYeogi from '../assets/partners/ch-yeogi.webp'
import chNaver from '../assets/partners/ch-naver.webp'
import chAgoda from '../assets/partners/ch-agoda.webp'
import chKkul from '../assets/partners/ch-kkul.webp'
import chBear from '../assets/partners/ch-bear.webp'
import chAirbnb from '../assets/partners/ch-airbnb.webp'

export function Header() {
  return (
    <header className="header">
      <div className="container header__inner">
        <a href="#top" className="header__logo"><Logo /></a>
        <nav className="header__nav" aria-label="주요 메뉴">
          <a href="#service">서비스</a>
          <a href="#value">핵심 가치</a>
          <a href="#partner">파트너</a>
        </nav>
        <a href="#partner" className="btn btn--grad btn--sm">도입 문의하기</a>
      </div>
    </header>
  )
}

const ORBIT = [
  { icon: 'chat', title: 'AI REVIEW', sub: '리뷰자동답변', x: -40, y: -154 },
  { icon: 'ledger', title: '매출장부', sub: '실시간 매출관리', x: -126, y: -81 },
  { icon: 'wallet', title: '선정산', sub: '빠른 정산 지원', x: -143, y: 22 },
  { icon: 'people', title: '인력관리', sub: '스케줄근태관리', x: -84, y: 109 },
  { icon: 'receipt', title: '지출관리', sub: '비용을 한 눈에', x: 40, y: 134 },
]

const BARS = [
  { h: 55, icon: chYanolja, name: '야놀자' },
  { h: 87, icon: chYeogi, name: '여기어때' },
  { h: 67, icon: chNaver, name: '네이버 예약' },
  { h: 113, icon: chAgoda, name: '아고다' },
  { h: 81, icon: chKkul, name: '꿀스테이' },
  { h: 123, icon: chBear, name: '기타 채널' },
  { h: 97, icon: null, name: '' },
  { h: 135, icon: chAirbnb, name: '에어비앤비' },
]

function HeroDashboard() {
  return (
    <div className="hero-dash">
      <div className="hero-dash__card">
        <div className="hero-dash__top">
          <strong className="hero-dash__brand">WOOJOO STAY</strong>
          <span className="pill pill--soft">LIVE DATA</span>
        </div>

        <div className="kpi-row kpi-row--3">
          <div className="kpi">
            <span className="kpi__label">오늘 예약매출</span>
            <span className="kpi__value"><Won />4,820,000</span>
            <span className="kpi__sub">어제 대비 +12.4%</span>
          </div>
          <div className="kpi">
            <span className="kpi__label">리뷰 미답변</span>
            <span className="kpi__value">8<small>건</small></span>
            <span className="kpi__sub">AI 답글 생성 가능</span>
          </div>
          <div className="kpi">
            <span className="kpi__label">정산 예정</span>
            <span className="kpi__value"><Won />12,640,000</span>
            <span className="kpi__sub kpi__sub--soft">7일 이내</span>
          </div>
        </div>

        <div className="hero-dash__body">
          <div className="bars">
            <strong className="bars__title">채널별 예약매출</strong>
            <div className="bars__plot">
              {BARS.map((b, i) => (
                <div className="bars__col" key={i}>
                  <span className="bars__bar" style={{ height: b.h }} />
                  {b.icon ? <img className="bars__icon" src={b.icon} alt={b.name} /> : <span className="bars__icon" />}
                </div>
              ))}
            </div>
          </div>

          <div className="ai-card">
            <div className="ai-card__title"><Orb /> AI REVIEW</div>
            <p className="ai-card__quote">객실이 깨끗하고 <br />직원분들이 친절해요</p>
            <div className="ai-card__reply">
              <span>AI 답글</span>
              <p>소중한 후기 감사합니다. <br />편안한 투숙이 되셨다니 <br />저희도 기쁩니다.</p>
            </div>
            <button type="button" className="btn btn--grad btn--xs">답글 게시하기</button>
          </div>
        </div>
      </div>

      <div className="float-card float-card--step">
        <span>STEP 01</span>
        <strong>AI 리뷰로 고객을 연결</strong>
      </div>
      <div className="float-card float-card--next">
        <span>NEXT</span>
        <strong>매출 데이터가 쌓입니다</strong>
      </div>
    </div>
  )
}

export function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero__rings" aria-hidden="true"><i /><i /></div>
      <div className="container hero__inner">
        <div className="hero__copy">
          <span className="pill pill--lg">HOSPITALITY BUSINESS OS</span>
          <h1 className="hero__title">리뷰에서 시작해, <br />숙박업의 모든 경영을 <br />한 궤도에.</h1>
          <p className="hero__lead">
            AI 리뷰 자동댓글로 쉽게 시작하고, 예약·매출 데이터를 쌓아 <br />
            선정산·미래매출·인력·지출까지 연결하는 숙박업 운영 플랫폼
          </p>

          <div className="orbit-slot">
            <div className="orbit" aria-label="우주스테이 서비스 구성">
              <i className="orbit__ring orbit__ring--1" /><i className="orbit__ring orbit__ring--2" />
              <Orb className="orbit__core" />
              {ORBIT.map((o) => (
                <div className="orbit__item" key={o.title} style={{ '--x': `${o.x}px`, '--y': `${o.y}px` }}>
                  <Illust name={o.icon} />
                  <strong>{o.title}</strong>
                  <span>{o.sub}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="hero__cta">
            <a href="#service" className="btn btn--grad">무료로 시작하기</a>
            <a href="#service" className="btn btn--ghost">서비스 보기</a>
          </div>
        </div>

        <HeroDashboard />
      </div>
    </section>
  )
}

export function Platforms() {
  const chips = [
    { src: yanolja, alt: '야놀자', h: 24 },
    { src: yeogi, alt: '여기어때', h: 16 },
    { src: agoda, alt: '아고다', h: 32 },
    { src: naverBooking, alt: '네이버예약', h: 30 },
  ]
  return (
    <section className="platforms">
      <div className="container platforms__inner">
        <p className="platforms__text">4대 <b>예약 플랫폼 리뷰</b>부터 시작</p>
        <ul className="platforms__list">
          {chips.map((c) => (
            <li key={c.alt}><img src={c.src} alt={c.alt} style={{ height: c.h }} /></li>
          ))}
        </ul>
      </div>
    </section>
  )
}
