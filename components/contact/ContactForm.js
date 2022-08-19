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
  height: fit-content;
  /* margin: auto 0 auto 6rem; */
  /* background: var(--dark-grey); */
  padding: 3rem 2rem 3rem 2rem;
  border-radius: 0.5rem;
  /* box-shadow: rgba(0, 0, 0, 0.2) 0px 4px 20px; */
  position: relative;

  input,
  textarea {
    border: none;
    outline: none;
    width: 100%;
    resize: none;
    /* background: var(--grey); */
    border-bottom: 2px solid var(--light-grey);
    color: var(--grey);
    font-size: 0.9rem;
    ::placeholder {
      /* Chrome, Firefox, Opera, Safari 10.1+ */
      color: var(--dark-grey);
      opacity: 1; /* Firefox */
    }
  }
  input {
    /* padding: 0 0.2rem 1.1rem 0.2rem; */
    padding: 0.5rem 0;
  }
  textarea {
    margin-top: 8rem;
    padding: 0.5rem -1rem;
  }
  .top {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: 1rem;
  }
  .message {
    margin: 0rem 0;
    padding: 1rem 0;
  }
  button {
    margin-top: 1.5rem;
    background: var(--yellow2);
    border: none;
    font-size: 1rem;
    font-weight: 500;
    color: var(--dark-grey);
    padding: 0.55rem 3rem;
    transition: background 0.1s ease;

    &:hover {
      background: var(--dark-grey);
      color: var(--yellow2);
    }
  }

  @media only screen and (min-width: 1600px) {
    margin-left: 6rem;
    max-width: 80rem;
  }
`;
