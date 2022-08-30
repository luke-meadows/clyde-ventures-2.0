import Image from 'next/image';
import styled from 'styled-components';
import Logo from '../../public/1.png';
export default function ContactForm() {
  return (
    <StyledContactForm>
      <div className="logo-container">
        <Image src={Logo} layout="responsive" objectFit="contain" />
      </div>
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
      <button type="submit">Send</button>
    </StyledContactForm>
  );
}

const StyledContactForm = styled.form`
  width: 50%;
  margin-left: 2.5rem;
  background: var(--white2);
  padding: 1.4rem 2rem 1.4rem 2rem;
  padding: 2rem;
  border-radius: 1rem;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 20px;
  position: relative;
  height: fit-content;
  .logo-container {
    position: relative;
    width: 4rem;
    margin-bottom: 1.2rem;
  }
  input,
  textarea {
    border: none;
    outline: none;
    width: 100%;
    resize: none;
    border: 1px solid var(--grey2);
    background: var(--white);
    color: var(--dark-grey);
    font-size: 0.9rem;
    border-radius: 2rem;
    ::placeholder {
      /* Chrome, Firefox, Opera, Safari 10.1+ */
      color: var(--medium-grey);
      /* font-weight: 500; */
      opacity: 1; /* Firefox */
    }
  }
  input {
    /* padding: 0 0.2rem 1.1rem 0.2rem; */
    padding: 0.5rem 1rem;
  }
  textarea {
    margin: 0;
    padding: 1rem;
    height: 12rem;
    border-radius: 1.2rem;
  }
  .top {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1.4rem;
    margin-bottom: 1.4rem;
  }
  button {
    margin-top: 1.1rem;
    background: var(--yellow2);
    border: none;
    font-size: 0.9rem;
    font-weight: 500;
    color: var(--black);
    padding: 0.55rem 3rem;
    transition: background 0.1s ease;
    &:hover {
      background: var(--grey);
      /* color: var(--); */
    }
  }
`;
