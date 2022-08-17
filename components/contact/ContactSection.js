import styled from 'styled-components';
import Container from '../global/Container';
import Title from '../global/Title';
import ContactForm from './ContactForm';
export default function ContactSection() {
  return (
    <Container>
      <StyledContactSection>
        <div>
          <h1>Talk To Us</h1>
          <p>
            If you have a project in mind we&apos;d love to hear from you.
            Please fill in your details or call us using the number below.
          </p>
          <div className="contact-info">
            <i className="icon-mail" />
            <p>help@clydeventures.com</p>
          </div>
          <div className="contact-info">
            <i className="icon-phone" />
            <p>0280 400 3000</p>
          </div>
        </div>
        <ContactForm />
      </StyledContactSection>
    </Container>
  );
}

const StyledContactSection = styled.section`
  display: flex;
  margin: 0 4rem;
  max-width: 1300px;
  margin: 6rem auto 6rem auto;
  h1 {
    font-size: 4rem;
    font-weight: 500;
    margin-bottom: 1rem;
  }
  p {
    font-size: 1.2rem;
    margin-bottom: 0;

    max-width: 550ch;
    color: var(--dark-grey);
    margin-left: 0.2rem;
    margin-bottom: 2rem;
  }
  .contact-info {
    display: flex;
    align-items: center;
    margin: 0.5rem 0 0 0;
    p {
      margin: 0;
      font-weight: 500;
    }
    i {
      margin: 0;
      margin-right: 0.5rem;
      margin-bottom: 0.12rem;
      font-size: 1.4rem;
    }
  }
  @media only screen and (min-width: 1600px) {
    p {
      font-size: 1.2rem;
    }
  }
`;
