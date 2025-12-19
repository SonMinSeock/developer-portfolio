import { useParams, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { projects } from '../data/projects';

function ProjectDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <Container>
        <NotFound>프로젝트를 찾을 수 없습니다.</NotFound>
        <BackButton onClick={() => navigate('/projects')}>
          목록으로 돌아가기
        </BackButton>
      </Container>
    );
  }

  return (
    <Container>
      <BackButton onClick={() => navigate('/projects')}>
        ← 목록으로
      </BackButton>

      <Header
        as={motion.div}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Title>{project.title}</Title>
        <Meta>
          <Period>{project.period}</Period>
          <Team>{project.team}</Team>
        </Meta>
        <Summary>{project.summary}</Summary>
      </Header>

      <Section
        as={motion.section}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <SectionTitle>{project.problem.title}</SectionTitle>
        <Description>{project.problem.description}</Description>
      </Section>

      <Section
        as={motion.section}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <SectionTitle>{project.solution.title}</SectionTitle>
        <SolutionList>
          {project.solution.items.map((item, index) => (
            <SolutionItem key={index}>
              <SolutionSubtitle>{item.subtitle}</SolutionSubtitle>
              <SolutionDetail>{item.detail}</SolutionDetail>
            </SolutionItem>
          ))}
        </SolutionList>
      </Section>

      <Section
        as={motion.section}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <SectionTitle>내가 한 일</SectionTitle>
        <RoleList>
          {project.myRole.map((role, index) => (
            <RoleItem key={index}>{role}</RoleItem>
          ))}
        </RoleList>
      </Section>

      <Section
        as={motion.section}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <SectionTitle>기술 스택</SectionTitle>
        <TechStack>
          {project.tech.map((tech, index) => (
            <TechTag key={index}>{tech}</TechTag>
          ))}
        </TechStack>
      </Section>

      {(project.links.github || project.links.demo) && (
        <LinkSection
          as={motion.section}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {project.links.github && (
            <LinkButton
              href={project.links.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub 보기
            </LinkButton>
          )}
          {project.links.demo && (
            <LinkButton
              href={project.links.demo}
              target="_blank"
              rel="noopener noreferrer"
            >
              Live Demo
            </LinkButton>
          )}
        </LinkSection>
      )}
    </Container>
  );
}

export default ProjectDetail;

const Container = styled.div`
  max-width: 900px;
  width: 100%;
  margin: 0 auto;
  padding: ${({ theme }) => theme.spacing.xl} ${({ theme }) => theme.spacing.md};
  min-height: calc(100vh - 64px);
`;

const NotFound = styled.div`
  text-align: center;
  padding: ${({ theme }) => theme.spacing['3xl']} 0;
  font-size: ${({ theme }) => theme.typography.fontSize.xl};
  color: ${({ theme }) => theme.colors.textSub};
`;

const BackButton = styled.button`
  display: inline-flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xs};
  padding: ${({ theme }) => theme.spacing.xs} ${({ theme }) => theme.spacing.sm};
  color: ${({ theme }) => theme.colors.textSub};
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  border-radius: 6px;
  transition: all ${({ theme }) => theme.transition.normal};
  margin-bottom: ${({ theme }) => theme.spacing.lg};

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
    background-color: ${({ theme }) => theme.colors.primaryAlpha};
  }
`;

const Header = styled.header`
  margin-bottom: ${({ theme }) => theme.spacing['2xl']};
  padding-bottom: ${({ theme }) => theme.spacing.xl};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
`;

const Title = styled.h1`
  font-size: ${({ theme }) => theme.typography.fontSize['4xl']};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  color: ${({ theme }) => theme.colors.textMain};
  margin-bottom: ${({ theme }) => theme.spacing.md};
  line-height: ${({ theme }) => theme.typography.lineHeight.tight};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: ${({ theme }) => theme.typography.fontSize['3xl']};
  }
`;

const Meta = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.xs};
  margin-bottom: ${({ theme }) => theme.spacing.md};
  align-items: flex-start;
`;

const Period = styled.span`
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  color: ${({ theme }) => theme.colors.textSub};
  font-family: ${({ theme }) => theme.typography.fontFamily.mono};
`;

const Team = styled.span`
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  color: ${({ theme }) => theme.colors.textSub};
`;

const Summary = styled.p`
  font-size: ${({ theme }) => theme.typography.fontSize.lg};
  line-height: ${({ theme }) => theme.typography.lineHeight.relaxed};
  color: ${({ theme }) => theme.colors.primary};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
`;

const Section = styled.section`
  margin-bottom: ${({ theme }) => theme.spacing['2xl']};
`;

const SectionTitle = styled.h2`
  font-size: ${({ theme }) => theme.typography.fontSize['2xl']};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  color: ${({ theme }) => theme.colors.textMain};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`;

const Description = styled.p`
  font-size: ${({ theme }) => theme.typography.fontSize.base};
  line-height: ${({ theme }) => theme.typography.lineHeight.relaxed};
  color: ${({ theme }) => theme.colors.textSub};
`;

const SolutionList = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.xl};
`;

const SolutionItem = styled.div`
  padding: ${({ theme }) => theme.spacing.lg};
  background-color: ${({ theme }) => theme.colors.surface};
  border-left: 3px solid ${({ theme }) => theme.colors.primary};
  border-radius: 6px;
`;

const SolutionSubtitle = styled.h3`
  font-size: ${({ theme }) => theme.typography.fontSize.lg};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
  color: ${({ theme }) => theme.colors.textMain};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`;

const SolutionDetail = styled.p`
  font-size: ${({ theme }) => theme.typography.fontSize.base};
  line-height: ${({ theme }) => theme.typography.lineHeight.relaxed};
  color: ${({ theme }) => theme.colors.textSub};
`;

const RoleList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.sm};
`;

const RoleItem = styled.li`
  padding-left: ${({ theme }) => theme.spacing.md};
  font-size: ${({ theme }) => theme.typography.fontSize.base};
  line-height: ${({ theme }) => theme.typography.lineHeight.relaxed};
  color: ${({ theme }) => theme.colors.textSub};
  position: relative;

  &::before {
    content: '•';
    position: absolute;
    left: 0;
    color: ${({ theme }) => theme.colors.primary};
    font-weight: bold;
  }
`;

const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing.sm};
`;

const TechTag = styled.span`
  padding: ${({ theme }) => theme.spacing.xs} ${({ theme }) => theme.spacing.sm};
  background-color: ${({ theme }) => theme.colors.primaryAlpha};
  color: ${({ theme }) => theme.colors.primaryLight};
  border-radius: 6px;
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  border: 1px solid ${({ theme }) => theme.colors.primary}33;
`;

const LinkSection = styled.section`
  display: flex;
  gap: ${({ theme }) => theme.spacing.md};
  padding-top: ${({ theme }) => theme.spacing.xl};
  border-top: 1px solid ${({ theme }) => theme.colors.border};
  flex-wrap: wrap;
`;

const LinkButton = styled.a`
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.lg};
  background-color: ${({ $primary, theme }) =>
    $primary ? theme.colors.primary : theme.colors.surface};
  color: ${({ $primary, theme }) =>
    $primary ? theme.colors.background : theme.colors.textMain};
  border: 1px solid
    ${({ $primary, theme }) => ($primary ? 'transparent' : theme.colors.border)};
  border-radius: 8px;
  font-size: ${({ theme }) => theme.typography.fontSize.base};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  transition: all ${({ theme }) => theme.transition.normal};
  text-align: center;

  &:hover {
    transform: translateY(-2px);
    background-color: ${({ $primary, theme }) =>
      $primary ? theme.colors.primaryDark : theme.colors.hover};
  }
`;