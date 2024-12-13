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
   - 소셜 후기 그리드 레이아웃 추가
   - 실제 사용자 프로필과 후기 내용 표시
   - Framer Motion을 활용한 스크롤 애니메이션
   - 반응형 디자인 (모바일: 1열, 데스크톱: 3열)

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

## 8. 변경사항
- 로고를 FiCodesandbox 아이콘으로 교체
- 영문 텍스트를 한글로 전면 수정
- 소셜 후기 섹션 신규 추가
- UI/UX 개선 및 사용자 경험 향상

## 9. 비디오 섹션 구현 가이드

### 추천 영상 컨셉

1. **헤더 아래 (Hero 섹션)**
- 코드 에디터에서 타이핑되는 모습
- AI가 코드를 자동완성하는 애니메이션
- 추상적인 데이터 흐름이나 신경망 시각화
- 개발자들이 협업하는 모습
- 추천 키워드: "code typing", "AI visualization", "data flow", "developer workspace"

2. **하단부 (Footer 위)**
- 부드러운 그라데이션이 있는 추상적 배경
- 기술적인 입자나 선들이 연결되는 모습
- 현대적인 UI/UX 인터페이스 데모
- 추천 키워드: "tech particles", "digital connection", "modern interface"

### 구현 방법

1. **비디오 파일 준비**
- 무료 스톡 비디오 사이트 추천:
  - Pexels: https://www.pexels.com/videos/
  - Pixabay: https://pixabay.com/videos/
  - Coverr: https://coverr.co/
- 다운로드한 비디오는 public/videos/ 디렉토리에 저장

2. **최적화 고려사항**
- 파일 형식: MP4 (H.264 코덱)
- 해상도: 1920x1080 이하 권장
- 파일 크기: 섹션당 2-3MB 이하 권장
- 길이: 10-15초 루프 영상 권장

3. **비디오 컴포넌트 구현**
typescript
// components/VideoBackground.tsx
'use client'
interface VideoBackgroundProps {
src: string
className?: string
}
export function VideoBackground({ src, className }: VideoBackgroundProps) {
return (
<div className={relative overflow-hidden ${className}}>
<video
autoPlay
loop
muted
playsInline
className="absolute inset-0 w-full h-full object-cover"
>
<source src={src} type="video/mp4" />
</video>
</div>
)
}


4. **사용 예시**

typescript
// components/Hero.tsx
import { VideoBackground } from './VideoBackground'
export default function Hero() {
return (
<section className="relative h-screen">
<VideoBackground
src="/videos/hero-background.mp4"
className="absolute inset-0 z-0"
/>
<div className="relative z-10">
{/ 기존 Hero 컨텐츠 /}
</div>
</section>
)
}

5. **성능 최적화 팁**
- lazy loading 적용
- 모바일에서는 이미지로 대체
- 비디오 preload 속성 활용
- 저해상도 버전 준비

6. **접근성 고려사항**
- 배경 비디오는 순수 장식용으로만 사용
- 콘텐츠 가독성 확보
- 자동 재생 및 루프 설정
- 불필요한 사운드 제거

7. **반응형 처리**
css
@media (max-width: 768px) {
.video-background {
background-image: url('/images/mobile-fallback.jpg');
}
.video-background video {
display: none;
}
}


### 주의사항
- 페이지 로딩 속도 고려
- 모바일 데이터 사용량 고려
- 브라우저 호환성 확인
- 성능 모니터링 필요