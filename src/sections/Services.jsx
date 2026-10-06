import React from 'react'
import { Orb, Duo, Arrow, Won } from '../components/Brand.jsx'
import { Illust } from '../ThemeContext.jsx'
import naverMark from '../assets/partners/naver-mark.webp'
import yanoljaSm from '../assets/partners/yanolja-sm.webp'
import agodaSm from '../assets/partners/agoda-sm.webp'

function SectionHead({ no, title, children, illust, tight }) {
  return (
    <div className={`sec-head${tight ? ' sec-head--tight' : ''}`}>
      <div className="sec-head__copy">
        <span className="pill pill--lg">SERVICE {no}</span>
        <h2 className={`sec-title${tight ? ' sec-title--tight' : ''}`}>{title}</h2>
        <p className="sec-desc">{children}</p>
      </div>
      {illust && <Illust name={illust} className="sec-head__illust" />}
    </div>
  )
}

/* ───────── SERVICE 01 ───────── */
const FEATURES = [
  ['4대 플랫폼 통합', '여러 채널의 리뷰를 한 화면에 모아 확인'],
  ['호텔 톤앤매너 학습', '숙박업소별 응대 문체를 설정해 일관되게 답변'],
  ['구독형 진입 서비스', '부담 없이 시작해 자연스럽게 매출 데이터 서비스로 연결'],
]
const REVIEWS = [
  { tag: 'NAVER', stars: '★★★★★', text: '방이 깔끔하고 침구가 편안했어요.', note: '“깨끗함·편안함” 중심으로 감사 답글을 작성했습니다.', logo: naverMark, h: 26 },
  { tag: 'YANOLJA', stars: '★★★★☆', text: '체크인이 빨랐고 직원분이 친절했습니다.', note: '“빠른 체크인·친절 응대” 키워드를 반영했습니다.', logo: yanoljaSm, h: 20 },
  { tag: 'AGODA', stars: '★★★★★', text: '출장으로 이용했는데 위치가 정말 좋습니다.', note: '비즈니스 고객 관점의 재방문 유도 문장을 제안했습니다.', logo: agodaSm, h: 26 },
]

export function Service01() {
  return (
    <section className="section section--s1" id="service">
      <div className="container s1">
        <div className="s1__copy">
          <span className="pill pill--lg">SERVICE 01</span>
          <h2 className="sec-title sec-title--tight">우주스테이 AI 자동리뷰댓글</h2>
          <p className="sec-desc">
            가장 자주 반복되는 운영업무부터 AI가 대신합니다. <br />
            네이버를 중심으로 4대 플랫폼 리뷰를 모아 빠르게 답글을 생성하고 관리합니다.
          </p>
          <ul className="features">
            {FEATURES.map(([t, d]) => (
              <li key={t}>
                <span className="features__icon"><Orb /></span>
                <div><strong>{t}</strong><p>{d}</p></div>
              </li>
            ))}
          </ul>
        </div>

        <div className="rv-panel">
          <div className="rv-panel__inner">
            <div className="panel-top">
              <strong>우주스테이 AI자동 리뷰 관리</strong>
              <span className="pill pill--tint">AI ON</span>
            </div>
            <div className="tabs">
              <span className="is-on">전체 84</span><span>미답변 8</span><span>긍정 61</span><span>개선요청 15</span>
            </div>
            <ul className="rv-list">
              {REVIEWS.map((r) => (
                <li key={r.tag}>
                  <div className="rv-list__meta">
                    <span className="rv-list__tag">{r.tag}</span>
                    <span className="rv-list__stars" aria-label="별점">{r.stars}</span>
                    <img src={r.logo} alt="" style={{ height: r.h }} />
                  </div>
                  <p className="rv-list__text">{r.text}</p>
                  <p className="rv-list__note"><Orb /><b>AI</b> {r.note}</p>
                </li>
              ))}
            </ul>
          </div>
          <div className="rv-cta">
            <Illust name="robot" className="rv-cta__robot" alt="AI가 알아서 리뷰에 답변해요" />
            <div>
              <span>고객 획득 포인트</span>
              <strong>“리뷰 업무를 줄여드립니다”로 가입 <Arrow /> 이후 매출 데이터 서비스 확장</strong>
            </div>
            <Duo />
          </div>
        </div>
      </div>
    </section>
  )
}

/* ───────── SERVICE 02 ───────── */
const KPIS = [
  ['총 예약매출', '68,420,000', '+8.4%'],
  ['광고비', '5,760,000', '매출의 8.4%'],
  ['플랫폼 비용', '6,310,000', '평균 9.2%'],
  ['정산 예정', '32,840,000', '14일 이내'],
]
const LINE = [[17, 194], [55, 185], [120, 163], [222, 154], [345, 90], [408, 94], [543, 42], [631, 45], [703, 6], [723, 9]]

// Catmull-Rom → 3차 베지어로 부드러운 곡선 만들기
function smoothPath(pts) {
  let d = `M${pts[0][0]},${pts[0][1]}`
  for (let i = 0; i < pts.length - 1; i++) {
    const p0 = pts[i - 1] || pts[i], p1 = pts[i], p2 = pts[i + 1], p3 = pts[i + 2] || p2
    const c1 = [p1[0] + (p2[0] - p0[0]) / 6, p1[1] + (p2[1] - p0[1]) / 6]
    const c2 = [p2[0] - (p3[0] - p1[0]) / 6, p2[1] - (p3[1] - p1[1]) / 6]
    d += ` C${c1[0].toFixed(1)},${c1[1].toFixed(1)} ${c2[0].toFixed(1)},${c2[1].toFixed(1)} ${p2[0]},${p2[1]}`
  }
  return d
}

function TrendChart() {
  const line = smoothPath(LINE)
  const last = LINE[LINE.length - 1]
  return (
    <div className="trend">
      <span className="trend__title">예약매출 추이</span>
      <div className="trend__plot">
        <svg viewBox="0 0 740 246" preserveAspectRatio="none" aria-hidden="true">
          {[60, 110, 160, 210].map((y) => <line key={y} x1="6" x2="738" y1={y} y2={y} className="trend__grid" vectorEffect="non-scaling-stroke" />)}
          <path d={`${line} L${last[0]},242 L${LINE[0][0]},242 Z`} className="trend__area" />
          <path d={line} className="trend__line" vectorEffect="non-scaling-stroke" />
        </svg>
        {LINE.slice(1, -1).map(([x, y]) => (
          <span key={x} className="trend__dot" style={{ left: `${(x / 740) * 100}%`, top: `${(y / 246) * 100}%` }}><Orb /></span>
        ))}
      </div>
    </div>
  )
}

export function Service02() {
  return (
    <section className="section section--alt">
      <div className="container">
        <SectionHead no="02" title="우주스테이 디지털매출장부" illust="mock-ledger" tight>
          예약·매출·광고비·정산 예정액을 한 화면에서 연결합니다. <br />
          리뷰로 들어온 고객이 실제 매출 흐름까지 관리할 수 있도록 두 번째 구독 서비스를 제공합니다.
        </SectionHead>

        <div className="ledger">
          <div className="panel-top panel-top--plain">
            <strong>9월 경영 대시보드</strong>
            <span className="pill pill--tint pill--date">2026.10</span>
          </div>
          <div className="kpi-row kpi-row--4">
            {KPIS.map(([l, v, s]) => (
              <div className="kpi kpi--lg" key={l}>
                <span className="kpi__label">{l}</span>
                <span className="kpi__value"><Won />{v}</span>
                <span className="kpi__sub kpi__sub--accent">{s}</span>
              </div>
            ))}
          </div>
          <div className="ledger__body">
            <TrendChart />
            <div className="ledger__side">
              <div className="settle">
                <span>정산 캘린더</span>
                <div><strong><Won />12,640,000</strong><em>7일 이내 입금 예정</em></div>
              </div>
              <div className="adeff">
                <span>광고 효율</span>
                <p>광고비 대비 예약매출</p>
                <strong>11.9 <small>X</small></strong>
              </div>
            </div>
          </div>
        </div>

        <div className="bridge">
          <strong>모든 데이터가 쌓이면, 우주스테이의 금융을 연결할 수 있습니다.</strong>
          <span className="bridge__line" aria-hidden="true" />
          <Orb className="bridge__orb" />
        </div>
      </div>
    </section>
  )
}

/* ───────── SERVICE 03 ───────── */
function FinanceCard({ name, desc, label, amount }) {
  return (
    <article className="fin-card">
      <Orb className="fin-card__orb" />
      <h3><span>우주스테이</span> {name}</h3>
      <p className="fin-card__desc">{desc}</p>
      <div className="fin-card__box">
        <span>{label}</span>
        <strong><Won />{amount}</strong>
      </div>
      <p className="fin-card__cap">예약·매출 데이터</p>
      <div className="flow">
        <span className="flow__step">DATA</span><span className="flow__arrow" />
        <span className="flow__step">FINANCE</span><span className="flow__arrow" />
        <span className="flow__step flow__step--on">CASH</span>
      </div>
    </article>
  )
}

export function Service03() {
  return (
    <section className="section section--s3">
      <div className="container">
        <SectionHead no="03" title={<>매출을 기다리는 시간을, <br />운영 가능한 현금흐름으로.</>} illust="mock-finance">
          정산을 기다리는 매출과 앞으로 발생할 매출을 자금 흐름으로 연결합니다. <br />
          금융은 첫 서비스가 아니라, 운영 데이터가 충분히 쌓인 뒤 확장되는 세 번째 축입니다.
        </SectionHead>

        <div className="fin-grid block-narrow">
          <FinanceCard name="매출선정산" label="정산 예정액" amount="32,840,000"
            desc={<>이미 발생한 예약·숙박 매출의 정산 예정액을 기반으로 <br />정산일까지 기다리지 않고 운영자금을 확보하도록 설계합니다.</>} />
          <FinanceCard name="미래매출선지급" label="예상 미래매출" amount="74,200,000"
            desc={<>예약 흐름과 매출 패턴을 기반으로 미래 현금흐름을 예측하고 <br />운영계획에 필요한 자금을 선제적으로 확보하도록 설계합니다.</>} />
        </div>

        <div className="orbit-band block-narrow">
          <span className="orbit-band__label">WOOJOO ORBIT</span>
          <strong>리뷰 <Arrow /> 매출 데이터 <Arrow /> 정산 <Arrow /> 현금흐름</strong>
          <em>숙박업의 현금흐름을 하나의 궤도로</em>
          <Orb />
        </div>
      </div>
    </section>
  )
}

/* ───────── SERVICE 04 ───────── */
const STAFF = [
  ['김', '김지연', '프런트', '176h', '₩2.74M'],
  ['박', '박선우', '하우스키핑', '164h', '₩2.31M'],
  ['이', '이민지', '야간', '152h', '₩2.58M'],
]
const EXPENSES = [
  ['객실용품', 74, '3.12M'],
  ['전기·가스', 60, '2.48M'],
  ['세탁·린넨', 44, '1.86M'],
  ['수도·기타', 28, '1.14M'],
]

export function Service04() {
  return (
    <section className="section section--alt section--s4">
      <div className="container">
        <SectionHead no="04" title="매출을 넘어, 사람과 비용까지." illust="mock-ops">
          숙박업소의 실제 운영을 구성하는 직원과 지출까지 연결합니다. <br />
          우주스테이는 결국 “매출관리 앱”이 아니라 숙박업 경영 전체를 보는 운영 OS로 확장됩니다.
        </SectionHead>

        <div className="ops-grid block-narrow">
          <article className="ops-card ops-card--hr">
            <Orb className="ops-card__orb" />
            <h3><span>우주스테이</span> 인력관리</h3>
            <p>근로계약 · 근퇴관리 · 급여내역을 한 곳에서 연결 <br />직원별 근무 흐름과 인건비를 매출 데이터와 함께 확인</p>
            <div className="ops-panel">
              <strong>이번 달 직원 운영</strong>
              <ul className="staff">
                {STAFF.map(([i, n, r, h, w]) => (
                  <li key={n}>
                    <span className="staff__avatar">{i}</span>
                    <span className="staff__name"><b>{n}</b><small>{r}</small></span>
                    <span className="staff__line" />
                    <span className="staff__num">{h}</span>
                    <span className="staff__num">{w}</span>
                  </li>
                ))}
              </ul>
            </div>
          </article>

          <article className="ops-card ops-card--exp">
            <Orb className="ops-card__orb" />
            <h3><span>우주스테이</span> 지출관리</h3>
            <p>물품·자재비·전기료·수도요금 등 고정·변동비 관리 <br />매출과 비용을 함께 보고 실제 수익구조를 이해</p>
            <div className="ops-panel">
              <strong>9월 주요 지출</strong>
              <ul className="expense">
                {EXPENSES.map(([l, p, a]) => (
                  <li key={l}>
                    <span className="expense__label">{l}</span>
                    <span className="expense__track"><i style={{ width: `${p}%` }} /></span>
                    <span className="expense__amt"><Won /> {a}</span>
                  </li>
                ))}
              </ul>
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}
