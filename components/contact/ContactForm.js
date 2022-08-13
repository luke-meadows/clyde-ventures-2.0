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
      </div>
      <textarea
        name="message"
        value=""
        placeholder="Type your message here"
        className="message"
        type="text"
      />
      <button type="submit">Submit</button>
    </StyledContactForm>
  );
}

const StyledContactForm = styled.form`
  max-width: 65rem;
  margin: 0 auto;
  background: var(--white);
  padding: 4rem;
  border-radius: 2rem;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  position: relative;
  input,
  textarea {
    border: none;
    outline: none;
    border-bottom: 1px solid var(--medium-grey);
    width: 100%;
    resize: none;
  }
  input {
    padding: 0 0.2rem 1.1rem 0.2rem;
  }
  textarea {
    padding: 0 0.2rem;
  }
  .top {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 3rem;
  }
  .message {
    margin: 3rem 0;
  }
  button {
    background: var(--yellow2);
    border: 1px solid var(--yellow2);
    padding-left: 4rem;
    padding-right: 4rem;
  }

  @media only screen and (min-width: 1600px) {
    max-width: 80rem;
  }
`;
