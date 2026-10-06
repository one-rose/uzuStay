# 우주스테이 브랜드 홈페이지 (React 퍼블리싱)

시안 PDF(1440px)를 React + Vite 로 퍼블리싱한 프로젝트입니다.
화면 하단의 **시안 바꾸기** 버튼(또는 ← → 방향키)으로 6개 칼라 시안을 전환합니다.

## 실행

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # dist/ 에 정적 파일 생성
```

## 칼라 시안

| 코드 | 이름 | 구성 |
| --- | --- | --- |
| 원본 | Orbit Purple | 홈페이지 시안 원본 |
| A | Heritage Blue | 헤리티지 블루 #002D72 + 브레스 블루 #0CA4F9 |
| B | Flame Gradient | 플레임 블루 · 플레이풀 핑크 · 퓨처리스틱 시안 |
| C | Morning Deep Blue | 모닝 딥블루 #1B2B45 + 선라이즈 오렌지 |
| D | Blue Violet | #3617CE + 그레이 · 블랙 & 화이트 |
| E | Red & Green | 레드 #E02D2D + 그린 #4AE68E |

## 구조

- `src/themes.js` — 시안별 색상 토큰(CSS 변수). 색을 고치려면 이 파일만 수정하면 됩니다.
- `src/styles.css` — 전체 스타일. 모든 색은 토큰(`var(--…)`)만 참조합니다.
- `src/sections/` — Hero, Services(01~04), Closing(로드맵·마무리·푸터)
- `src/components/` — 로고/아이콘(Brand), 시안 전환 버튼(ThemeSwitcher)
- `src/assets/illust/<시안>/` — 시안 색조에 맞춰 변환한 3D 일러스트
- `src/logoPaths.js` — 시안 PDF에서 추출한 로고 벡터
