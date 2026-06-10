export const theme = {
  colors: {
    primary: '#2DD4BF',
    primaryLight: '#5EEAD4',
    primaryDark: '#14B8A6',

    background: '#0F172A',
    surface: '#111827',

    textMain: '#E5E7EB',
    textSub: '#9CA3AF',
    border: '#1F2933',

    // 호버 상태
    hover: '#1a1f35',

    // 반투명 색상 (카드 배경 등에 활용)
    primaryAlpha: 'rgba(45, 212, 191, 0.1)',
  },

  // 타이포그래피
  typography: {
    fontFamily: {
      base: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
      mono: '"SF Mono", Monaco, "Cascadia Code", "Roboto Mono", Consolas, monospace',
    },
    fontSize: {
      xs: '0.75rem',      // 12px
      sm: '0.875rem',     // 14px
      base: '1rem',       // 16px
      lg: '1.125rem',     // 18px
      xl: '1.25rem',      // 20px
      '2xl': '1.5rem',    // 24px
      '3xl': '1.875rem',  // 30px
      '4xl': '2.25rem',   // 36px
      '5xl': '3rem',      // 48px
    },
    fontWeight: {
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
    },
    lineHeight: {
      tight: 1.2,
      normal: 1.5,
      relaxed: 1.75,
    },
  },

  // 간격
  spacing: {
    xs: '0.5rem',    // 8px
    sm: '1rem',      // 16px
    md: '1.5rem',    // 24px
    lg: '2rem',      // 32px
    xl: '3rem',      // 48px
    '2xl': '4rem',   // 64px
    '3xl': '6rem',   // 96px
  },

  // 반응형 브레이크포인트
  breakpoints: {
    mobile: '640px',
    tablet: '768px',
    desktop: '1024px',
    wide: '1280px',
  },

  // 애니메이션
  transition: {
    fast: '150ms ease-in-out',
    normal: '250ms ease-in-out',
    slow: '350ms ease-in-out',
  },

  // z-index 레이어
  zIndex: {
    base: 1,
    dropdown: 10,
    sticky: 100,
    navbar: 1000,
    modal: 10000,
  },
};