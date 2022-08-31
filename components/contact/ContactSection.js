import Image from 'next/image';
import { useState } from 'react';
import styled from 'styled-components';
import Container from '../global/Container';
import ContactForm from './ContactForm';
export default function ContactSection() {
  const [showMap, setShowMap] = useState(false);

  return (
    <StyledContactSection>
      <div className="container">
        <h2>Talk To Us</h2>
        <p>
          To find out more please fill in your details or call us using the
          number below.
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
            <p>0141 375 1472</p>
          </div>
        </div>

        <div className="location">
          <p className="address">
            <i className="icon-location" /> Suite 505 , Baltic Chambers , 50
            Wellington Street , Glasgow, G2 6HJ.
          </p>
          {!showMap && (
            <div className="button" onClick={() => setShowMap(true)}>
              View Map
            </div>
          )}
          {showMap && (
            <div className="map-container">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2239.1857617219857!2d-4.262758483768697!3d55.85944338058209!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4888469c4ab77db9%3A0x6832134b166626db!2sBaltic%20Chambers!5e0!3m2!1sen!2suk!4v1660838655068!5m2!1sen!2suk"
                className="map"
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
              <i className="icon-cancel" onClick={() => setShowMap(false)} />
            </div>
          )}
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
  padding: 8rem 5rem;
  .container {
    margin-right: 2.5rem;
    width: 50%;
  }
  h2 {
    font-weight: 500;
    margin-bottom: 1.2rem;
    padding-top: 1rem;
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
        aspect-ratio: 1;
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
  .map-container {
    position: relative;
    i {
      position: absolute;
      top: 1rem;
      right: 1rem;

      cursor: pointer;
    }
  }
  .map {
    margin-top: 0.5rem;
    border: none;
    border-radius: 0.4rem;
    box-sizing: border-box;
    height: 14rem;
    width: 100%;
    border: 2px solid var(--yellow2);
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
      cursor: pointer;
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
    p {
      max-width: 65ch;
    }
  }
`;
