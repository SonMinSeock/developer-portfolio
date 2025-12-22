import styled from 'styled-components';
import { motion } from 'framer-motion';
import { experience } from '../../data/projects';

function Experience() {
  return (
    <Section id="experience">
      <Container>
        <SectionTitle
          as={motion.h2}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Experience
        </SectionTitle>

        <Card
          as={motion.div}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <CardHeader>
            <CompanyInfo>
              <Company>{experience.company}</Company>
              <Position>{experience.position}</Position>
            </CompanyInfo>
            <Period>{experience.period}</Period>
          </CardHeader>

          <Description>{experience.description}</Description>

          <HighlightList>
            {experience.highlights.map((item, index) => (
              <HighlightItem key={index}>
                <HighlightTitle>{item.title}</HighlightTitle>
                <HighlightDetail>{item.detail}</HighlightDetail>
              </HighlightItem>
            ))}
          </HighlightList>
        </Card>
      </Container>
    </Section>
  );
}

export default Experience;

const Section = styled.section`
  padding: ${({ theme }) => theme.spacing['3xl']} 0;
`;

const Container = styled.div`
  max-width: 1000px;
  width: 100%;
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.spacing.md};
`;

const SectionTitle = styled.h2`
  font-size: ${({ theme }) => theme.typography.fontSize['3xl']};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  color: ${({ theme }) => theme.colors.textMain};
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  text-align: center;
`;

const Card = styled.div`
  background-color: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 12px;
  padding: ${({ theme }) => theme.spacing.xl};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: ${({ theme }) => theme.spacing.lg};
  }
`;

const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: ${({ theme }) => theme.spacing.md};
  gap: ${({ theme }) => theme.spacing.md};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    flex-direction: column;
  }
`;

const CompanyInfo = styled.div`
  flex: 1;
`;

const Company = styled.h3`
  font-size: ${({ theme }) => theme.typography.fontSize['2xl']};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  color: ${({ theme }) => theme.colors.textMain};
  margin-bottom: ${({ theme }) => theme.spacing.xs};
`;

const Position = styled.p`
  font-size: ${({ theme }) => theme.typography.fontSize.lg};
  color: ${({ theme }) => theme.colors.primary};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
`;

const Period = styled.span`
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  color: ${({ theme }) => theme.colors.textSub};
  font-family: ${({ theme }) => theme.typography.fontFamily.mono};
`;

const Description = styled.p`
  font-size: ${({ theme }) => theme.typography.fontSize.base};
  line-height: ${({ theme }) => theme.typography.lineHeight.relaxed};
  color: ${({ theme }) => theme.colors.textSub};
  margin-bottom: ${({ theme }) => theme.spacing.xl};
`;

const HighlightList = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.lg};
`;

const HighlightItem = styled.div`
  padding-left: ${({ theme }) => theme.spacing.md};
  border-left: 3px solid ${({ theme }) => theme.colors.primary};
`;

const HighlightTitle = styled.h4`
  font-size: ${({ theme }) => theme.typography.fontSize.lg};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
  color: ${({ theme }) => theme.colors.textMain};
  margin-bottom: ${({ theme }) => theme.spacing.xs};
`;

const HighlightDetail = styled.p`
  font-size: ${({ theme }) => theme.typography.fontSize.base};
  line-height: ${({ theme }) => theme.typography.lineHeight.relaxed};
  color: ${({ theme }) => theme.colors.textSub};
`;