import styled from 'styled-components';
import Container from '../global/Container';
import Title from '../global/Title';
import ContactForm from './ContactForm';
export default function ContactSection() {
  return (
    <StyledContactSection>
      <Container>
        <Title>Talk To Us</Title>
        <p>
          If you have a project in mind we&apos;d love to hear from you. Please
          fill in the details below and a team member will get back to you
          shortly.
        </p>
        <ContactForm />
      </Container>
    </StyledContactSection>
  );
}

const StyledContactSection = styled.section`
  background: var(--white);
  display: flex;
  flex-direction: column;
  align-items: center;
  p {
    font-size: 1.2rem;
    text-align: center;
    width: 70ch;
    margin: 3rem auto;
  }
`;
