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
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 4rem;
  p {
    font-size: 1rem;
    text-align: center;
    width: 70ch;
    margin: 2rem auto;
  }
  @media only screen and (min-width: 1600px) {
    p {
      font-size: 1.2rem;
    }
  }
`;
