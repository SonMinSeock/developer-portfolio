import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';

function ProjectCard({ project, index }) {
  return (
    <Card
      to={`/projects/${project.id}`}
      as={motion(Link)}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Thumbnail>
        <img src={project.thumbnail} alt={project.title} />
      </Thumbnail>

      <Content>
        <Header>
          <Title>{project.title}</Title>
          <Period>{project.period}</Period>
        </Header>

        <Summary>{project.summary}</Summary>

        <TechStack>
          {project.tech.slice(0, 4).map((tech, i) => (
            <TechTag key={i}>{tech}</TechTag>
          ))}
          {project.tech.length > 4 && <TechTag>+{project.tech.length - 4}</TechTag>}
        </TechStack>
      </Content>
    </Card>
  );
}

export default ProjectCard;

const Card = styled(Link)`
  display: block;
  background-color: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 12px;
  overflow: hidden;
  transition: all ${({ theme }) => theme.transition.normal};

  &:hover {
    transform: translateY(-4px);
    border-color: ${({ theme }) => theme.colors.primary};
  }
`;

const Thumbnail = styled.div`
  width: 100%;
  aspect-ratio: 16 / 9;
  background-color: ${({ theme }) => theme.colors.hover};
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const Content = styled.div`
  padding: ${({ theme }) => theme.spacing.lg};
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: ${({ theme }) => theme.spacing.sm};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`;

const Title = styled.h3`
  font-size: ${({ theme }) => theme.typography.fontSize.xl};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  color: ${({ theme }) => theme.colors.textMain};
`;

const Period = styled.span`
  font-size: ${({ theme }) => theme.typography.fontSize.xs};
  color: ${({ theme }) => theme.colors.textSub};
  font-family: ${({ theme }) => theme.typography.fontFamily.mono};
  white-space: nowrap;
`;

const Summary = styled.p`
  font-size: ${({ theme }) => theme.typography.fontSize.base};
  line-height: ${({ theme }) => theme.typography.lineHeight.relaxed};
  color: ${({ theme }) => theme.colors.textSub};
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing.xs};
`;

const TechTag = styled.span`
  padding: 4px 12px;
  background-color: ${({ theme }) => theme.colors.primaryAlpha};
  color: ${({ theme }) => theme.colors.primaryLight};
  border-radius: 4px;
  font-size: ${({ theme }) => theme.typography.fontSize.xs};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  border: 1px solid ${({ theme }) => theme.colors.primary}33;
`;