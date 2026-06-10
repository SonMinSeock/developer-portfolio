import styled from 'styled-components';
import { motion } from 'framer-motion';
import { projects, workExperienceProjects } from '../data/projects';
import ProjectCard from '../components/projects/ProjectCard';

function Projects() {
  return (
    <Container>
      {/* Work Experience Projects Section */}
      <Section>
        <Header
          as={motion.div}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Title>Work Experience Projects</Title>
          <Description>
            오마이컴퍼니 인턴 기간 동안 수행한 프론트엔드 및 백엔드 프로젝트입니다.
          </Description>
        </Header>

        <Grid>
          {workExperienceProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </Grid>
      </Section>

      {/* Personal Projects Section */}
      <Section>
        <Header
          as={motion.div}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Title>Personal Projects</Title>
          <Description>
            실제 문제를 해결하며 설계와 구조를 고민한 개인 프로젝트들입니다.
          </Description>
        </Header>

        <Grid>
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </Grid>
      </Section>
    </Container>
  );
}

export default Projects;

const Container = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  padding: ${({ theme }) => theme.spacing.xl} ${({ theme }) => theme.spacing.md};
  min-height: calc(100vh - 64px);
`;

const Section = styled.section`
  margin-bottom: ${({ theme }) => theme.spacing['3xl']};

  &:last-child {
    margin-bottom: 0;
  }
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing.xl};
`;

const Title = styled.h1`
  font-size: ${({ theme }) => theme.typography.fontSize['4xl']};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  color: ${({ theme }) => theme.colors.textMain};
  margin-bottom: ${({ theme }) => theme.spacing.md};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: ${({ theme }) => theme.typography.fontSize['3xl']};
  }
`;

const Description = styled.p`
  font-size: ${({ theme }) => theme.typography.fontSize.lg};
  color: ${({ theme }) => theme.colors.textSub};
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: ${({ theme }) => theme.spacing.lg};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`;