import Image from 'next/image';
import styled from 'styled-components';
import Container from '../global/Container';
import ContactForm from './ContactForm';
export default function ContactSection() {
  return (
    <StyledContactSection>
      <div>
        <h1>Talk To Us</h1>
        <p>
          If you have a project in mind we&apos;d love to hear from you. Please
          fill in your details or call us using the number below.
        </p>

        <div className="contact-info">
          <div className="contact-info-item">
            <div className="i-container">
              <i className="icon-mail-alt" />
            </div>
            <p>help@clydeventures.com</p>
          </div>
          <div className="contact-info-item">
            <div className="i-container">
              <i className="icon-phone phone" />
            </div>
            <p>0280 400 3000</p>
          </div>
        </div>

        <div className="location">
          <p className="address">
            <i className="icon-location" /> Suite 505 , Baltic Chambers , 50
            Wellington Street , Glasgow G2 6HJ.{' '}
          </p>
          <div className="button">View Map</div>
          {/* <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2239.1857617219857!2d-4.262758483768697!3d55.85944338058209!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4888469c4ab77db9%3A0x6832134b166626db!2sBaltic%20Chambers!5e0!3m2!1sen!2suk!4v1660838655068!5m2!1sen!2suk"
            className="map"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe> */}
        </div>
      </div>
      <ContactForm />
    </StyledContactSection>
  );
}

const StyledContactSection = styled.section`
  display: flex;
  max-width: 1800px;
  margin: 0 auto;
  padding: 6rem 5rem;
  h1 {
    font-weight: 500;
    margin-bottom: 1.2rem;
  }

  p {
    font-size: 1.2rem;
    margin-bottom: 0;

    max-width: 55ch;
    color: var(--dark-grey);
    margin-left: 0.2rem;
    margin-bottom: 1.2rem;
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
      .i-container {
        background: var(--yellow2);
        border-radius: 50%;
        height: 2.2rem;
        width: 2.2rem;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-right: 0.65rem;
        margin-bottom: 0.12rem;
        i {
          font-size: 0.85rem;
        }
        .phone {
          font-size: 1rem;
          margin-bottom: 0rem;
          margin-top: 0.2rem;
        }
      }
    }
  }
  .map {
    margin-top: 2rem;
    border: none;
    border-radius: 0.4rem;
    box-sizing: border-box;
    height: 18rem;
    width: 40rem;
  }

  .location {
    margin-top: 0.5rem;
    .button {
      color: var(--dark-grey);
      font-size: 0.8rem;
      border: 1px solid var(--yellow2);
      padding: 0.3rem 1.2rem;
      border-radius: 2rem;
      font-weight: 500;
      width: fit-content;
      margin-left: 0;
      margin-top: 1rem;
    }
    i {
      font-size: 1.3rem;
      margin-bottom: 0;
    }
    p {
      padding-top: 0.25rem;
      font-size: 1rem;
    }
  }

  @media only screen and (min-width: 1600px) {
    display: flex;
    justify-content: center;
    p {
      max-width: 65ch;
    }
  }
`;
