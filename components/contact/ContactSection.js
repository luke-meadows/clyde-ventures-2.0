import Image from 'next/image';
import styled from 'styled-components';
import Container from '../global/Container';
import ContactForm from './ContactForm';
export default function ContactSection() {
  return (
    <Container>
      <StyledContactSection>
        <h1>Talk To Us</h1>
        <div className="section-lower">
          <div>
            <p>
              If you have a project in mind we&apos;d love to hear from you.
              Please fill in your details or call us using the number below.
            </p>
            <div className="contact-info">
              <div className="contact-info-item">
                <i className="icon-mail-alt" />
                <p>help@clydeventures.com</p>
              </div>
              <div className="contact-info-item">
                <i className="icon-phone" />
                <p>0280 400 3000</p>
              </div>
            </div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2239.1857617219857!2d-4.262758483768697!3d55.85944338058209!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4888469c4ab77db9%3A0x6832134b166626db!2sBaltic%20Chambers!5e0!3m2!1sen!2suk!4v1660838655068!5m2!1sen!2suk"
              className="map"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <ContactForm />
        </div>
      </StyledContactSection>
    </Container>
  );
}

const StyledContactSection = styled.section`
  display: flex;
  flex-direction: column;
  max-width: 1600px;
  margin: 0 auto;
  padding: 2.5rem 5rem;

  h1 {
    font-size: 4rem;
    font-weight: 500;
    margin-bottom: 2rem;
  }
  .section-lower {
    display: flex;
  }
  p {
    font-size: 1.2rem;
    margin-bottom: 0;

    max-width: 65ch;
    color: var(--dark-grey);
    margin-left: 0.2rem;
    margin-bottom: 2rem;
  }
  .contact-info {
    display: flex;
    gap: 2.4rem;
    .contact-info-item {
      display: flex;
      align-items: center;

      p {
        margin: 0;
        font-weight: 500;
      }
      i {
        margin: 0;
        margin-right: 0.65rem;
        margin-bottom: 0.12rem;
        font-size: 1.2rem;
        color: var;
      }
    }
  }
  .map {
    border: 5px solid var(--grey);
    margin: 2rem auto 0 auto;
    border-radius: 0.8rem;
    box-sizing: border-box;
    height: 15rem;
    width: 30rem;
  }

  @media only screen and (min-width: 1600px) {
    margin: 2rem auto 2rem auto;

    p {
      font-size: 1.2rem;
    }
    .map {
      height: 16rem;
      width: 32rem;
    }
  }
`;
