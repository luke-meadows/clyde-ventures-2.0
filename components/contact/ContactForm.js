import styled from 'styled-components';
import Logo from '../global/Logo';
export default function ContactForm() {
  return (
    <StyledContactForm>
      <div className="top">
        <input name="name" value="" placeholder="Name" type="text" />
        <input name="email" value="" placeholder="Email" type="text" />
        <input
          name="confEmail"
          value=""
          placeholder="Confirm Email"
          type="text"
        />
        <input name="subject" value="" placeholder="Subject" type="text" />

        <textarea
          name="message"
          value=""
          placeholder="Type your message here"
          className="message"
          type="text"
        />
      </div>
      <button type="submit">Send</button>
    </StyledContactForm>
  );
}

const StyledContactForm = styled.form`
  width: 30rem;
  margin-left: 5rem;
  background: var(--white);
  padding: 2rem;
  border-radius: 0.5rem;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  position: relative;
  input,
  textarea {
    border: none;
    outline: none;
    border: 2px solid var(--grey);
    width: 100%;
    resize: none;
    border-radius: 0.25rem;
  }
  input {
    /* padding: 0 0.2rem 1.1rem 0.2rem; */
    padding: 0.75rem;
  }
  textarea {
    /* padding: 0 0.2rem; */
    min-height: 10rem;
  }
  .top {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: 1rem;
  }
  .message {
    margin: 0rem 0;
    padding: 1rem 0.75rem;
  }
  button {
    margin-top: 1.5rem;
    background: var(--yellow2);
    border: none;
    font-size: 1rem;
    font-weight: 500;
    color: var(--dark-grey);
    padding-left: 3rem;
    padding-right: 3rem;
    transition: background 0.5s ease;
    &:hover {
      background: var(--yellow2);
    }
  }

  @media only screen and (min-width: 1600px) {
    max-width: 80rem;
  }
`;
