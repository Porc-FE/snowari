# Portfolio 프로젝트 개요

## 기술 스택
- **프레임워크**: React 19.1 + TypeScript
- **빌드 도구**: Vite 7.0
- **스타일링**: Emotion (styled-components)
- **애니메이션**: GSAP (ScrollTrigger 포함)
- **아이콘**: react-icons
- **특수 효과**: react-water-wave

## 프로젝트 구조
```
src/
├── App.tsx              # 메인 앱 컴포넌트 (Global 스타일, 라우팅)
├── main.tsx             # React 엔트리 포인트
├── pages/
│   └── Home.tsx         # 홈 페이지 (히어로 섹션)
├── components/
│   ├── BackgroundWrapper.tsx   # CRT 스캔라인 효과 배경
│   ├── Header/
│   │   ├── Header.tsx          # 헤더 (로고, 시계, 네비게이션)
│   │   └── style.ts            # 헤더 스타일 (미사용)
│   └── ProjectSection/
│       └── Section1.tsx        # 프로젝트 소개 섹션 (GSAP 애니메이션)
├── utils/
│   ├── getCurrentTime.ts       # 현재 시간 포맷팅
│   └── randomChar.ts           # 랜덤 문자 생성 (텍스트 효과용)
└── assets/
    └── fonts/
        └── PPNeueBit-Bold.otf  # 커스텀 폰트
```

## 주요 기능

### 1. CRT 모니터 효과 (BackgroundWrapper)
- 스캔라인 애니메이션
- 비네트 효과
- 오버레이 그라데이션

### 2. 헤더 (Header.tsx)
- **AlienTextEffect**: 마우스 호버 시 글리치/스크램블 텍스트 애니메이션
- **BlinkingDot**: 1초 간격 깜빡이는 빨간 점
- 실시간 시계 표시

### 3. 프로젝트 섹션 (Section1.tsx)
- GSAP ScrollTrigger를 활용한 스크롤 애니메이션
- 이미지와 설명이 좌우에서 슬라이드 인

## 폰트
- PP NeueBit (픽셀 스타일 폰트)

## 현재 상태
- 홈 히어로 섹션 완성
- 프로젝트 섹션 1개 (이때어때) 작업 중
- 반응형 디자인 부분 적용
