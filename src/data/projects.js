export const projects = [
  {
    id: "omc-admin",
    title: "오마이컴퍼니 Admin 리뉴얼",
    summary: "운영 중인 관리자 페이지의 UI/UX와 코드 구조를 개선한 프로젝트",
    thumbnail: "/images/omc-admin.png",
    period: "2025.06 - 2025.11",
    team: "프론트엔드 2명",

    problem: {
      title: "문제 상황",
      description: "레거시 Admin은 페이지별로 중복 코드가 많고, 상태 관리가 분산되어 있어 기능 추가 시 사이드 이펙트가 자주 발생했습니다. 또한 일관되지 않은 UI로 인해 운영팀의 학습 비용이 높았습니다."
    },

    solution: {
      title: "해결 방법",
      items: [
        {
          subtitle: "도메인 단위 설계",
          detail: "기능별로 분산된 코드를 도메인(회원, 주문, 정산) 단위로 재구성. 각 도메인의 상태와 로직을 응집도 높게 관리하여 수정 범위를 명확히 했습니다."
        },
        {
          subtitle: "재사용 가능한 컴포넌트",
          detail: "Table, Form, Modal 등을 Compound Component 패턴으로 설계. props drilling을 줄이고 컴포넌트 조합만으로 다양한 케이스를 처리할 수 있게 했습니다."
        },
        {
          subtitle: "MSW 기반 개발",
          detail: "API 개발 전 MSW로 Mock Server를 구축하여 프론트엔드 개발을 먼저 진행. 실제 API 연동 시 핸들러만 교체하는 방식으로 병렬 작업을 가능하게 했습니다."
        }
      ]
    },

    myRole: [
      "기존 Admin 분석 후 도메인 구조 설계 및 문서화",
      "Recoil 기반 전역 상태 관리 설계 (atom family 활용)",
      "Compound Component 패턴 기반 공통 컴포넌트 라이브러리 구축",
      "MSW를 활용한 Mock API 환경 구성 및 개발 워크플로우 수립"
    ],

    tech: ["React", "Recoil", "styled-components", "MSW", "React Query"],

    links: {
      // github: 'https://github.com/...',
      // demo: 'https://...'
    }
  },

  {
    id: "omatase",
    title: "오마타세 (Omatase)",
    summary: "일본 식당 예약 대행 서비스 - 언어 장벽 없이 간편하게 예약",
    thumbnail: "/images/omatase.png",
    period: "2024.02.05 - 2024.02.25",
    team: "프론트엔드 1명, 프로젝트 리드 1명",

    problem: {
      title: "문제 상황",
      description: "일본을 방문하는 한국인 관광객들은 언어 장벽으로 식당 예약에 어려움을 겪습니다. 대부분의 일본 식당은 전화 예약만 가능하고, 영어 지원이 제한적이며, 예약 문화 차이로 인해 직접 예약이 부담스러웠습니다."
    },

    solution: {
      title: "해결 방법",
      items: [
        {
          subtitle: "다중 시간대 예약 시스템",
          detail: "1지망, 2지망, 3지망 시간대를 선택할 수 있는 시스템을 구현. 예약 가능성을 높이고 사용자의 선택권을 확대했습니다. react-datepicker를 활용한 직관적인 날짜/시간 선택 UI를 제공했습니다."
        },
        {
          subtitle: "고객-관리자 양방향 인터페이스",
          detail: "고객용 예약 신청 페이지와 관리자용 예약 처리 페이지를 분리 설계. 관리자는 일본어로 예약 내용을 작성하고, 고객은 한국어로 상태를 확인할 수 있도록 이중 언어를 지원했습니다."
        },
        {
          subtitle: "Firebase 실시간 상태 관리",
          detail: "Firebase Realtime Database를 활용해 예약 상태('요청 중', '확인 대기', '확정', '불가능') 변경을 실시간으로 동기화. 성인/어린이 인원 정보와 선호 시간대를 구조화하여 저장했습니다."
        }
      ]
    },

    myRole: [
      "고객용 예약 신청 폼 UI/UX 설계 및 구현 (다중 시간대, 인원 선택)",
      "관리자용 예약 처리 인터페이스 개발 (상태 관리, 일본어 입력)",
      "Recoil 기반 전역 상태 관리 및 Firebase 연동 로직 구현",
      "react-datepicker 커스터마이징 및 반응형 UI 구현",
      "GitHub 브랜치 전략(master/develop/feature) 수립 및 버전 관리"
    ],

    tech: ["React", "JavaScript", "Recoil", "styled-components", "Firebase", "react-datepicker", "Netlify"],

    links: {
      github: "https://github.com/SonMinSeock/table-check-project",
      demo: "https://omatase.netlify.app/"
    }
  },

  {
    id: "running-crew",
    title: "러닝 크루",
    summary: "지역 기반 러닝 크루 매칭 및 기록 관리 서비스",
    thumbnail: "/images/running-crew.png",
    period: "2024.12 - 2024.12",
    team: "프론트엔드 1명",

    problem: {
      title: "문제 상황",
      description: "Vue 3 Composition API로 개발하면서 공통 로직(인증, API 호출 등)이 컴포넌트마다 반복되고, 타입 안정성이 부족하여 런타임 에러가 자주 발생했습니다."
    },

    solution: {
      title: "해결 방법",
      items: [
        {
          subtitle: "Composable 패턴",
          detail: "useAuth, useFetch 등 공통 로직을 Composable로 추출. 인증 상태와 API 호출 로직의 중복을 제거하고 테스트 가능한 단위로 분리했습니다."
        },
        {
          subtitle: "TypeScript 도입",
          detail: "API 응답 타입을 인터페이스로 정의하고, Composable의 반환 타입을 명시. 컴파일 타임에 에러를 잡아 런타임 안정성을 확보했습니다."
        },
        {
          subtitle: "Firebase 활용 설계",
          detail: "Authentication, Firestore, Storage를 역할별로 분리하여 서비스 레이어 구성. 각 기능의 의존성을 명확히 하고 교체 가능하게 설계했습니다."
        }
      ]
    },

    myRole: [
      "Vue 3 Composition API 기반 프로젝트 구조 설계",
      "TypeScript 타입 시스템 설계 및 API 인터페이스 정의",
      "Composable 패턴으로 재사용 로직 분리 (useAuth, useFetch, useMap)",
      "Firebase 연동 및 실시간 데이터 동기화 구현"
    ],

    tech: ["Vue 3", "TypeScript", "Pinia", "Firebase", "Google Maps API"],

    links: {
      github: "https://github.com/SonMinSeock/running-crew",
      demo: "https://running-crew.netlify.app/"

    }
  }
];

export const experience = {
  company: "미래 청년 일자리 - 오마이컴퍼니",
  position: "플랫폼 개발자 인턴",
  period: "2025.06 - 2025.12",
  description: "B2B SaaS 제품의 관리자 페이지와 사용자 대시보드 개발을 담당하고 있습니다.",

  highlights: [
    {
      title: "Admin UI/UX 리뉴얼",
      detail: "운영팀 피드백을 반영해 관리자 페이지 전체를 재설계. 도메인 단위 구조로 전환하여 기능 추가 시 개발 시간을 평균 30% 단축했습니다."
    },
    {
      title: "컴포넌트 설계",
      detail: "Compound Component 패턴으로 재사용 가능한 UI 라이브러리 구축. 새로운 페이지 개발 시 기존 컴포넌트 조합만으로 80% 이상 구현 가능하게 했습니다."
    },
    {
      title: "유지보수성 개선",
      detail: "레거시 코드의 중복 로직을 Custom Hook으로 추출하고, 상태 관리를 Recoil로 통일. 코드 리뷰 시 사이드 이펙트 발생 빈도를 크게 줄였습니다."
    }
  ]
};

export const contact = {
  email: "zonins3@gmail.com",
  phone: "010-2274-2538",
  github: "https://github.com/SonMinSeock",
  blog: "https://velog.io/@alstjr2538/posts",
};