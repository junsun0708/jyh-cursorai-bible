# 프론트엔드 구조 분석

## 1. 기술 스택
- Next.js 15.1.0
- React 19.0.0
- TypeScript
- Tailwind CSS
- Framer Motion (애니메이션)

## 2. 프로젝트 구조
### 주요 디렉토리

src/
├── app/
│ ├── globals.css
│ ├── layout.tsx
│ └── page.tsx
└── components/
├── Header.tsx
├── Hero.tsx
├── Features.tsx
├── CTA.tsx
├── Pricing.tsx
├── Testimonials.tsx
└── Footer.tsx


## 3. 주요 컴포넌트 구성

### 레이아웃 (layout.tsx)
- Inter 폰트 적용
- 메타데이터 설정
- 전역 스타일 적용

### 메인 페이지 (page.tsx)
- 단일 페이지 구성
- 컴포넌트 조합: Header, Hero, Features, CTA, Footer

### 주요 섹션별 특징
1. **Hero 섹션**
   - Framer Motion을 활용한 애니메이션 효과
   - 반응형 디자인 (모바일/데스크톱)
   - 호버/탭 인터랙션

2. **Features 섹션**
   - 그리드 레이아웃 (1열/3열 반응형)
   - 순차적 애니메이션 효과
   - 카드 스타일 UI

3. **Pricing 섹션**
   - Intersection Observer를 활용한 스크롤 애니메이션
   - 3단계 요금제 구성
   - 호버 효과가 적용된 CTA 버튼

4. **Testimonials 섹션**
   - 사용자 후기 그리드 레이아웃
   - 스크롤 시 페이드인 효과
   - 반응형 디자인

## 4. 스타일링 특징
- Tailwind CSS 기반 스타일링
- CSS 변수를 활용한 테마 시스템
- 다크모드 지원
- 반응형 디자인 구현
- 커스텀 애니메이션

## 5. 성능 최적화
- Next.js의 자동 이미지 최적화
- 컴포넌트 레벨의 코드 스플리팅
- 클라이언트/서버 컴포넌트 분리

## 6. 접근성
- 시맨틱 HTML 구조
- ARIA 레이블 지원
- 키보드 네비게이션 지원

## 7. 인터랙션
- Framer Motion을 활용한 부드러운 애니메이션
- 스크롤 기반 애니메이션
- 호버/클릭 효과
- apple.com 스타일의 인터랙션 참조

## 8. 개선 가능한 부분
- SEO 최적화
- 이미지 최적화
- 성능 메트릭스 개선
- 접근성 강화
- 테스트 코드 추가
