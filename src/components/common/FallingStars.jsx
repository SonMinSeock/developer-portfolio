import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useMemo } from 'react';

/**
 * 유성 데이터 생성 함수
 * @param {number} count - 생성할 유성 개수
 * @returns {Array} 유성 데이터 배열
 */
function generateStars(count = 20) {
  const stars = [];

  for (let i = 0; i < count; i++) {
    stars.push({
      id: i,
      left: `${Math.random() * 100}%`,         // 0-100% 전체 화면
      top: `${Math.random() * 100}%`,          // 0-100% 전체 높이에서 시작
      delay: Math.random() * 8,                 // 0-8초 시작 딜레이 (더 분산)
      duration: Math.random() * 3 + 3,          // 3-6초 애니메이션 시간
      distance: Math.random() * 500 + 800,      // 800-1300px 이동 거리
      size: Math.random() * 2 + 1,              // 1-3px 별 크기
      repeatDelay: Math.random() * 2,           // 0-2초 반복 대기 (짧게)
    });
  }

  return stars;
}

function FallingStars() {
  // 유성 데이터를 메모이제이션하여 리렌더링 시 재생성 방지
  const stars = useMemo(() => {
    const starCount = Math.floor(Math.random() * 21) + 30; // 30-50개로 증가
    return generateStars(starCount);
  }, []);

  return (
    <StarsContainer>
      {stars.map((star) => (
        <ShootingStar
          key={star.id}
          as={motion.div}
          $left={star.left}
          $top={star.top}
          $size={star.size}
          animate={{
            x: [0, -star.distance],  // 왼쪽으로 이동
            y: [0, star.distance],   // 아래로 이동
            opacity: [0, 0.8, 0.8, 0],
          }}
          transition={{
            duration: star.duration,
            delay: star.delay,
            repeat: Infinity,
            repeatDelay: star.repeatDelay,
            ease: 'linear',
          }}
        />
      ))}
    </StarsContainer>
  );
}

export default FallingStars;

/* =====================
   스타일 정의
===================== */

const StarsContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  pointer-events: none; /* 클릭 이벤트 차단 */
  z-index: ${({ theme }) => theme.zIndex.base}; /* z-index: 1 */
  overflow: hidden;
`;

const ShootingStar = styled.div`
  position: absolute;
  top: ${({ $top }) => $top};
  left: ${({ $left }) => $left};
  width: ${({ $size }) => $size}px;
  height: ${({ $size }) => $size}px;

  /* 유성 본체: 밝은 원형 */
  background: ${({ theme }) => theme.colors.primaryLight};
  border-radius: 50%;

  /* 유성 꼬리 효과 */
  box-shadow:
    0 0 10px ${({ theme }) => theme.colors.primaryLight},
    -20px -20px 40px 8px rgba(94, 234, 212, 0.4),
    -40px -40px 70px 12px rgba(94, 234, 212, 0.2),
    -60px -60px 100px 15px rgba(94, 234, 212, 0.1);

  /* 유성 꼬리를 위한 추가 요소 (::before 사용) */
  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 80px;
    height: 3px;
    background: linear-gradient(
      90deg,
      ${({ theme }) => theme.colors.primaryLight},
      ${({ theme }) => theme.colors.primary}33,
      transparent
    );
    transform: translate(-50%, -50%) rotate(-45deg);
    transform-origin: center;
    opacity: 0.7;
  }

  /* GPU 가속 */
  transform: translateZ(0);
  will-change: transform, opacity;

  /* 부드러운 블렌딩 */
  mix-blend-mode: screen;

  /* 모바일 대응 */
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: ${({ $size }) => $size * 0.7}px;
    height: ${({ $size }) => $size * 0.7}px;

    &::before {
      width: 50px;
      height: 2px;
    }
  }
`;