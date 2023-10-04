import { useState } from 'react';
import styled from 'styled-components';
import ContactForm from './ContactForm';
export default function ContactSection() {
  const [showMap, setShowMap] = useState(false);

  return (
    <StyledContactSection>
      <div className="container">
        <h2 className="talk-to-us-header">Talk to us</h2>
        <p>Please fill in your details or call us using the number below.</p>

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
            <i className="icon-location" /> Suite 405-407 , Baltic Chambers , 50
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
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1366.5072134739378!2d-4.261696877197055!3d55.85944262609022!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4888469c4a915fdb%3A0xc7ff2fc91b9c4e!2sBaltic%20Chambers%2C%20Glasgow!5e0!3m2!1sen!2suk!4v1696427281858!5m2!1sen!2suk"
                className="map"
                allowFullScreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
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
  padding: 5rem;
  .container {
    margin-right: 2.5rem;
    width: 50%;
  }
  h2 {
    font-weight: 500;
    padding-right: 0.25rem;
    width: fit-content;
    padding-bottom: 0.25rem;
    border-bottom: 3px solid var(--yellow2);
    font-size: 2.4rem;
  }
  .talk-to-us-header {
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
  @media only screen and (max-width: 1170px) {
    flex-direction: column;
    padding: 2rem 0 0 0;
    background-color: white;
    .container {
      margin-right: 0;
      width: 100%;
      padding: 0 2rem;
    }
    .contact-info {
      flex-direction: column;
      gap: 1rem;
    }
  }
`;
