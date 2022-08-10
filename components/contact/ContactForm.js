import styled from 'styled-components';
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
  input,
  textarea {
    border: none;
    outline: none;
    border-bottom: 1px solid var(--dark-grey);
    width: 100%;
    resize: none;
  }
  input {
    padding: 0.2rem;
  }
  textarea {
    padding: 0 0.2rem;
  }
  .top {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
  }
  .message {
    margin: 2rem 0;
  }
  button {
    background: var(--yellow2);
    border: 1px solid var(--yellow2);
    color: var(--dark-grey);
  }
`;
