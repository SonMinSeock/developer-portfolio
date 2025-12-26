export const projects = [
  {
    id: "omatase",
    title: "오마타세 (Omatase)",
    summary: "일본 식당 예약 대행 서비스 - 언어 장벽 없이 간편하게 예약",
    thumbnail: "./images/omatase.png",
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
    thumbnail: "./images/running-crew.png",
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
  description: "크라우드펀딩 서비스의 프론트엔드 리뉴얼과 백엔드 API 개발을 담당했습니다.",
  retrospectiveLink: "https://toothsome-raft-e05.notion.site/2cb952c99360806c910efe84ba41b6fc?source=copy_link",

  highlights: [
    {
      title: "Admin 리뉴얼 (Frontend)",
      detail: "기존 관리자 화면을 Vue 3 Composition API로 전면 재구축. Main/Projects, Board, Stats, Member 영역 퍼블리싱 및 기능 구현. Chart.js 기반 통계 대시보드와 공통 컴포넌트 라이브러리를 구축했습니다."
    },
    {
      title: "스토어 데이터 수집 시스템 (Backend)",
      detail: "네이버 검색 API 기반 스토어 정보 자동 수집 시스템 개발. JPA Specification을 활용한 고급 검색 기능, Company CRUD API, 이메일/메시지 일괄 발송 시스템을 구현하여 영업 효율을 향상시켰습니다."
    },
    {
      title: "RAG 챗봇 API (Backend)",
      detail: "GPT-4o-mini + LangChain 기반 RAG 챗봇 백엔드 개발. Upstage API로 PDF/HWP/이미지 문서 처리, 대화 맥락 기반 쿼리 재작성, 펀딩 유형 자동 분류(신뢰도 0.7 이하 시 되묻기), ChromaDB 메타데이터 필터링, SSE 스트리밍 응답을 구현했습니다."
    }
  ]
};

export const workExperienceProjects = [
  {
    id: "omc-admin-work",
    title: "Admin 리뉴얼 (Frontend)",
    summary: "크라우드펀딩 서비스 관리자 화면 Vue 3 + TypeScript 기반 전면 리뉴얼",
    thumbnail: "./images/omc-admin.png",
    period: "2025.07 - 2025.12",
    team: "프론트엔드 2명",

    problem: {
      title: "문제 상황",
      description: "기존 관리자 화면은 기술 스택 노후화, 화면 구조 일관성 부족, 유지보수 난이도 증가 등의 문제가 있었습니다. Spring Boot + JPA 기반 백엔드는 유지한 상태에서 프론트엔드만 개선이 필요했습니다."
    },

    solution: {
      title: "해결 방법",
      items: [
        {
          subtitle: "Vue 3 Composition API 기반 리뉴얼",
          detail: "백엔드는 그대로 유지하고 프론트엔드를 Vue 3로 전면 재구축. Composition API와 <script setup> 문법으로 컴포넌트 구조를 설계하여 가독성과 재사용성을 높였습니다."
        },
        {
          subtitle: "Composable 패턴으로 로직 분리",
          detail: "API 호출 로직을 Composable 패턴으로 분리하여 코드 중복을 제거. 공통 컴포넌트(Button, Input, Modal)를 재사용 가능하게 설계하여 개발 속도를 향상시켰습니다."
        },
        {
          subtitle: "MSW 기반 모킹 환경 구축",
          detail: "MSW 핸들러로 모든 REST API를 모킹하여 백엔드 의존성 없이 독립적인 프론트엔드 개발 환경을 구축. 개발 단계에서 API 응답을 시뮬레이션하여 병렬 개발을 가능하게 했습니다."
        },
        {
          subtitle: "Chart.js 기반 통계 시각화",
          detail: "연간/일간 통계 데이터를 Chart.js로 시각화. vue-chartjs를 활용해 재사용 가능한 차트 컴포넌트를 구성하고, 관리자가 데이터를 직관적으로 파악할 수 있게 했습니다."
        }
      ]
    },

    myRole: [
      "Main/Projects, Board, Stats, Member 화면 퍼블리싱 및 기능 구현",
      "Vue 3 Composition API 기반 컴포넌트 설계 및 개발",
      "JPA 기반 REST API 연동 및 데이터 처리 로직 구현",
      "Chart.js를 활용한 통계 대시보드 차트 컴포넌트 개발",
      "공통 컴포넌트 라이브러리 구축 및 코드 컨벤션 적용"
    ],

    tech: ["Vue 3", "TypeScript", "Composition API", "Vue Router", "Vite", "Axios", "Bootstrap 5", "SCSS", "Chart.js",
      "MSW"],

    links: {}
  },
  {
    id: "store-collection-work",
    title: "스토어 데이터 수집 시스템 (Backend)",
    summary: "네이버 검색 API 기반 스토어 정보 자동 수집 및 관리 시스템",
    thumbnail: "./images/store-collection.png",
    period: "2025.06 - 2025.09",
    team: "프론트엔드 1명, 백엔드 1명",

    problem: {
      title: "문제 상황",
      description: "영업팀이 잠재 고객 발굴을 위해 수동으로 스토어 정보를 수집하고 관리해야 했습니다. 검색, 필터링, 일괄 연락 등 반복 작업이 많아 효율성이 낮았고, 데이터 일관성 유지가 어려웠습니다."
    },

    solution: {
      title: "해결 방법",
      items: [
        {
          subtitle: "네이버 검색 API 기반 자동 수집",
          detail: "키워드 검색 시 네이버 API로 스마트스토어만 필터링(site:smartstore.naver.com)하여 수집. HTML 태그 제거 및 URL 정규화를 통해 데이터를 정제하고, 기존 DB와 비교하여 중복 제거 후 저장했습니다."
        },
        {
          subtitle: "JPA Specification 기반 고급 검색",
          detail: "동적 쿼리 생성이 가능한 JPA Specification 패턴 도입. 지역, 업종, 상태 등 다양한 조건을 조합한 복잡한 검색을 유연하게 처리했습니다."
        },
        {
          subtitle: "이메일/메시지 일괄 발송",
          detail: "회원별 이메일/메시지 템플릿 저장 및 재사용 기능 구현. JWT 토큰 기반 수신거부 링크를 자동 생성하고, URL을 앵커 태그로 변환하는 등 HTML 콘텐츠를 자동 처리했습니다. 발송 이력을 별도 테이블에 기록하여 추적 가능하도록 설계했습니다."
        }
      ]
    },

    myRole: [
      "네이버 검색 API 연동 및 스토어 정보 자동 수집 기능 구현",
      "JPA Specification을 활용한 동적 검색 쿼리 설계 및 개발",
      "Company CRUD API 및 필터링 기능 구현",
      "이메일/메시지 일괄 발송 시스템 개발",
      "Spring Boot 기반 RESTful API 설계 및 구현"
    ],

    tech: ["Spring Boot", "JPA", "Specification", "MySQL", "Naver Search API", "Java"],

    links: {}
  },
  {
    id: "rag-chatbot-work",
    title: "RAG 챗봇 API (Backend)",
    summary: "GPT-4o-mini 기반 크라우드펀딩 고객지원 챗봇 백엔드",
    thumbnail: "./images/rag-chatbot.png",
    period: "2025.10 - 2025.12",
    team: "프론트 1명, 백엔드 1명",

    problem: {
      title: "문제 상황",
      description: "크라우드펀딩 플랫폼 가이드 문서(PDF, HWP, 공지사항 등)가 200페이지 이상으로 방대하여 고객이 필요한 정보를 찾기 어려웠습니다. 특히 '후원형', '증권형', '광고' 등 펀딩 유형별로 다른 규정이 적용되어 잘못된 정보 제공 위험이 있었고, '그거는 어떻게 해요?'처럼 대화 맥락에 의존한 질문에는 검색이 실패했습니다."
    },

    solution: {
      title: "해결 방법",
      items: [
        {
          subtitle: "Upstage API 기반 멀티 포맷 문서 처리",
          detail: "Upstage Document Parse API로 PDF/HWP를 Markdown으로 변환하고, OCR API로 이미지 문서를 텍스트화했습니다. 모든 문서에 메타데이터(제목, 출처 URL, 펀딩 유형)를 자동 추가하여 ChromaDB에 저장, 정확한 출처 추적이 가능해졌습니 다."
        },
        {
          subtitle: "LLM 기반 쿼리 전처리 파이프라인",
          detail: "GPT-4o-mini로 질문 유효성 검사 → 대화 맥락 기반 쿼리 재작성 → 펀딩 유형 분류(신뢰도 0.7 이하 시 되묻기) → 동의어 확장 순으로 처리. '그거'를 '후원형 프로젝트 상세 페이지'로 재작성하고, '상세 페이지'에 '스토리' 동의어를  추가하여 검색 정확도를 높였습니다."
        },
        {
          subtitle: "SSE 스트리밍 및 메타데이터 필터링",
          detail: "Server-Sent Events로 토큰 단위 실시간 응답 구현. ChromaDB의 메타데이터 필터링으로 펀딩 유형별 문서만 검색하여 무관한 정보 제공을 방지했습니다. LangSmith 연동으로 사용자 피드백을 자동 수집하여 모델 개선 데이터로 활용했습  다."
        }
      ]
    },

    myRole: [
      "Upstage Document Parse API 기반 PDF/HWP → Markdown 변환 파이프라인 구축",
      "GPT-4o-mini를 활용한 쿼리 재작성 및 펀딩 유형 분류 로직 설계",
      "ChromaDB + Upstage Solar-Embedding 기반 벡터 검색 시스템 구축",
      "SSE 스트리밍 응답 및 LangChain LCEL 체인 구성",
      "FastAPI 기반 RESTful API 설계 (대화 히스토리, 피드백 CRUD)",
      "LangSmith 데이터셋 연동 및 평가 시스템 구축"
    ],

    tech: [
      "Python",
      "FastAPI",
      "GPT-4o-mini",
      "ChromaDB",
      "LangChain",
      "Upstage API",
      "SSE",
      "LangSmith",
      "SQLAlchemy"
    ],

    links: {}
  }
];

export const contact = {
  email: "zonins3@gmail.com",
  phone: "010-2274-2538",
  github: "https://github.com/SonMinSeock",
  blog: "https://velog.io/@alstjr2538/posts",
};