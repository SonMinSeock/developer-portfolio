import styled from "styled-components";
import {motion} from "framer-motion";
import {useTypingEffect} from "../../hooks/useTypingEffect";

function Hero() {
  const {displayedText, showCursor, isComplete} = useTypingEffect("손민석입니다", 100);

  return (
      <Section id="hero">
        <Container>
          <ContentWrapper
              as={motion.div}
              initial={{opacity: 0, x: -30}}
              animate={{opacity: 1, x: 0}}
              transition={{duration: 0.6}}
          >
            <Greeting>
              안녕하세요,&nbsp;
              <TypedName>
                {displayedText}
                {showCursor && <Cursor>|</Cursor>}
              </TypedName>
            </Greeting>

            {isComplete && (
              <>
                <Title
                    as={motion.h1}
                    initial={{opacity: 0, y: 20}}
                    animate={{opacity: 1, y: 0}}
                    transition={{duration: 0.5}}
                >
                  구조와 판단을 고민하는
                  <br/>
                  프론트엔드 개발자입니다
                </Title>

                <Description
                    as={motion.p}
                    initial={{opacity: 0, y: 20}}
                    animate={{opacity: 1, y: 0}}
                    transition={{duration: 0.5, delay: 0.2}}
                >
                  단순히 기능을 구현하는 것을 넘어, <strong>왜 이렇게 설계했는지</strong>를 설명할 수 있는 개발자가 되고자 합니다.
                  유지보수 가능한 코드와 확장 가능한 구조를 만들기 위해 고민합니다.
                </Description>

                <TagList
                    as={motion.div}
                    initial={{opacity: 0, y: 20}}
                    animate={{opacity: 1, y: 0}}
                    transition={{duration: 0.5, delay: 0.4}}
                >
                  <Tag>React</Tag>
                  <Tag>Vue 3</Tag>
                  <Tag>TypeScript</Tag>
                  <Tag>NodeJS</Tag>
                  <Tag>Python</Tag>
                  <Tag>Fast API</Tag>
                  <Tag>MySQL</Tag>
                </TagList>
              </>
            )}
          </ContentWrapper>

          <ImageWrapper
              as={motion.div}
              initial={{opacity: 0, x: 30}}
              animate={{opacity: 1, x: 0}}
              transition={{duration: 0.6, delay: 0.2}}
          >
            <ProfileImage src="/images/profile.jpg" alt="Profile"/>
          </ImageWrapper>
        </Container>
      </Section>
  );
}

export default Hero;

const Section = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding: ${({theme}) => theme.spacing.xl} 0;
  position: relative;
  overflow: hidden;
`;

const Container = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  padding: 0 ${({theme}) => theme.spacing.md};
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${({theme}) => theme.spacing["2xl"]};
  align-items: center;

  @media (max-width: ${({theme}) => theme.breakpoints.desktop}) {
    grid-template-columns: 1fr;
    gap: ${({theme}) => theme.spacing.xl};
    text-align: center;
  }
`;

const ContentWrapper = styled.div`
  @media (max-width: ${({theme}) => theme.breakpoints.desktop}) {
    order: 2;
  }
`;

const Greeting = styled.p`
  font-size: ${({theme}) => theme.typography.fontSize["3xl"]};
  font-weight: ${({theme}) => theme.typography.fontWeight.bold};
  color: ${({theme}) => theme.colors.textMain};
  margin-bottom: ${({theme}) => theme.spacing.md};

  @media (max-width: ${({theme}) => theme.breakpoints.desktop}) {
    font-size: ${({theme}) => theme.typography.fontSize["2xl"]};
  }

  @media (max-width: ${({theme}) => theme.breakpoints.tablet}) {
    font-size: ${({theme}) => theme.typography.fontSize.xl};
  }
`;

const TypedName = styled.span`
  color: ${({theme}) => theme.colors.primary};
`;

const Cursor = styled.span`
  color: ${({theme}) => theme.colors.primary};
  animation: blink 0.7s infinite;

  @keyframes blink {
    0%, 50% {
      opacity: 1;
    }
    51%, 100% {
      opacity: 0;
    }
  }
`;

const ImageWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-end;

  @media (max-width: ${({theme}) => theme.breakpoints.desktop}) {
    order: 1;
    justify-content: center;
  }
`;

const ProfileImage = styled.img`
  width: 100%;
  max-width: 320px;
  height: auto;
  object-fit: cover;
  border-radius: 20px;

  @media (max-width: ${({theme}) => theme.breakpoints.desktop}) {
    max-width: 280px;
  }

  @media (max-width: ${({theme}) => theme.breakpoints.tablet}) {
    max-width: 240px;
  }
`;

const Title = styled.h1`
  font-size: ${({theme}) => theme.typography.fontSize["5xl"]};
  font-weight: ${({theme}) => theme.typography.fontWeight.bold};
  line-height: ${({theme}) => theme.typography.lineHeight.tight};
  margin-bottom: ${({theme}) => theme.spacing.lg};
  color: ${({theme}) => theme.colors.textMain};

  @media (max-width: ${({theme}) => theme.breakpoints.desktop}) {
    font-size: ${({theme}) => theme.typography.fontSize["4xl"]};
  }

  @media (max-width: ${({theme}) => theme.breakpoints.tablet}) {
    font-size: ${({theme}) => theme.typography.fontSize["3xl"]};
  }
`;

const Description = styled.p`
  font-size: ${({theme}) => theme.typography.fontSize.lg};
  line-height: ${({theme}) => theme.typography.lineHeight.relaxed};
  color: ${({theme}) => theme.colors.textSub};
  margin-bottom: ${({theme}) => theme.spacing.xl};

  strong {
    color: ${({theme}) => theme.colors.primary};
    font-weight: ${({theme}) => theme.typography.fontWeight.semibold};
  }

  @media (max-width: ${({theme}) => theme.breakpoints.tablet}) {
    font-size: ${({theme}) => theme.typography.fontSize.base};
  }
`;

const TagList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({theme}) => theme.spacing.sm};

  @media (max-width: ${({theme}) => theme.breakpoints.desktop}) {
    justify-content: center;
  }
`;

const Tag = styled.span`
  padding: ${({theme}) => theme.spacing.xs} ${({theme}) => theme.spacing.sm};
  background-color: ${({theme}) => theme.colors.primaryAlpha};
  color: ${({theme}) => theme.colors.primaryLight};
  border-radius: 6px;
  font-size: ${({theme}) => theme.typography.fontSize.sm};
  font-weight: ${({theme}) => theme.typography.fontWeight.medium};
  border: 1px solid ${({theme}) => theme.colors.primary}33;
`;