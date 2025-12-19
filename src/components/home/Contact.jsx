import styled from "styled-components";
import {motion} from "framer-motion";
import {contact} from "../../data/projects";

function Contact() {
  return (
      <Section id="contact">
        <Container>
          <SectionTitle
              as={motion.h2}
              initial={{opacity: 0, y: 20}}
              whileInView={{opacity: 1, y: 0}}
              viewport={{once: true}}
              transition={{duration: 0.5}}
          >
            Contact
          </SectionTitle>

          <Description
              as={motion.p}
              initial={{opacity: 0, y: 20}}
              whileInView={{opacity: 1, y: 0}}
              viewport={{once: true}}
              transition={{duration: 0.5, delay: 0.1}}
          >
            함께 일하고 싶으신가요? 편하게 연락주세요.
          </Description>

          <ContactList
              as={motion.div}
              initial={{opacity: 0, y: 20}}
              whileInView={{opacity: 1, y: 0}}
              viewport={{once: true}}
              transition={{duration: 0.5, delay: 0.2}}
          >
            <ContactItem
                href={`mailto:${contact.email}`}
                target="_blank"
                rel="noopener noreferrer"
            >
              <ContactLabel>Email</ContactLabel>
              <ContactValue>{contact.email}</ContactValue>
            </ContactItem>

            {contact.phone && (
                <ContactItem
                    target="_blank"
                    rel="noopener noreferrer"
                >
                  <ContactLabel>Phone Number</ContactLabel>
                  <ContactValue>{contact.phone}</ContactValue>
                </ContactItem>
            )}

            <ContactItem
                href={contact.github}
                target="_blank"
                rel="noopener noreferrer"
            >
              <ContactLabel>GitHub</ContactLabel>
              <ContactValue>{contact.github}</ContactValue>
            </ContactItem>

            {contact.blog && (
                <ContactItem
                    href={contact.blog}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                  <ContactLabel>Blog</ContactLabel>
                  <ContactValue>{contact.blog}</ContactValue>
                </ContactItem>
            )}
          </ContactList>
        </Container>
      </Section>
  );
}

export default Contact;

const Section = styled.section`
  padding: ${({theme}) => theme.spacing["3xl"]} 0;
  background-color: ${({theme}) => theme.colors.background};
`;

const Container = styled.div`
  max-width: 800px;
  width: 100%;
  margin: 0 auto;
  padding: 0 ${({theme}) => theme.spacing.md};
  text-align: center;
`;

const SectionTitle = styled.h2`
  font-size: ${({theme}) => theme.typography.fontSize["3xl"]};
  font-weight: ${({theme}) => theme.typography.fontWeight.bold};
  color: ${({theme}) => theme.colors.textMain};
  margin-bottom: ${({theme}) => theme.spacing.lg};
`;

const Description = styled.p`
  font-size: ${({theme}) => theme.typography.fontSize.lg};
  color: ${({theme}) => theme.colors.textSub};
  margin-bottom: ${({theme}) => theme.spacing.xl};
`;

const ContactList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: ${({theme}) => theme.spacing.md};
  margin-top: ${({theme}) => theme.spacing.xl};
`;

const ContactItem = styled.a`
  display: block;
  padding: ${({theme}) => theme.spacing.lg};
  background-color: ${({theme}) => theme.colors.surface};
  border: 1px solid ${({theme}) => theme.colors.border};
  border-radius: 12px;
  transition: all ${({theme}) => theme.transition.normal};
  text-align: left;

  &:hover {
    transform: translateY(-4px);
    border-color: ${({theme}) => theme.colors.primary};
    background-color: ${({theme}) => theme.colors.hover};
  }
`;

const ContactLabel = styled.div`
  font-size: ${({theme}) => theme.typography.fontSize.sm};
  color: ${({theme}) => theme.colors.textSub};
  margin-bottom: ${({theme}) => theme.spacing.xs};
  font-weight: ${({theme}) => theme.typography.fontWeight.medium};
  text-transform: uppercase;
  letter-spacing: 0.05em;
`;

const ContactValue = styled.div`
  font-size: ${({theme}) => theme.typography.fontSize.base};
  color: ${({theme}) => theme.colors.primary};
  font-weight: ${({theme}) => theme.typography.fontWeight.medium};
  word-break: break-all;
`;