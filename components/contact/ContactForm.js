import Image from 'next/image';
import styled from 'styled-components';
import useForm from '../../lib/useForm';
import Logo from '../../public/1.png';
export default function ContactForm() {
  const { inputs, handleChange, resetForm, clearForm } = useForm({
    name: '',
    email: '',
    confEmail: '',
    subject: '',
    message: '',
  });

  return (
    <StyledContactForm>
      <div className="logo-container">
        <Image src={Logo} layout="responsive" objectFit="contain" />
      </div>
      <h2>Send a message</h2>
      <div className="top">
        <input
          name="name"
          value={inputs.name}
          placeholder="Name"
          type="text"
          onChange={handleChange}
        />
        <input
          name="email"
          value={inputs.email}
          placeholder="Email"
          type="text"
          onChange={handleChange}
        />
        <input
          name="confEmail"
          value={inputs.confEmail}
          placeholder="Confirm Email"
          type="text"
          onChange={handleChange}
        />
        <input
          name="subject"
          value={inputs.subject}
          placeholder="Subject"
          type="text"
          onChange={handleChange}
        />
      </div>
      <textarea
        name="message"
        value={inputs.message}
        placeholder="Type your message here"
        className="message"
        type="text"
        onChange={handleChange}
      />
      <button type="submit">Send</button>
    </StyledContactForm>
  );
}

const StyledContactForm = styled.form`
  width: 50%;
  margin-left: 2.5rem;
  background: var(--white2);
  padding: 2rem;
  border-radius: 1rem;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 20px;
  position: relative;
  height: fit-content;
  h2 {
    font-weight: 500;
    padding-right: 0.25rem;
    width: fit-content;
    padding-bottom: 0.25rem;
    border-bottom: 3px solid var(--yellow2);
    display: none;
  }

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
    transition: all 0.3s ease;
    &:hover {
      background: var(--dark-grey);
      color: var(--yellow2);
    }
  }
  @media only screen and (max-width: 1170px) {
    width: 100%;
    margin-left: 0;
    margin-top: 1rem;
    border-radius: 0rem;
    box-shadow: none;
    padding: 2rem 2rem 4rem 2rem;
    h2 {
      display: block;
      margin-bottom: 1.6rem;
    }
    input,
    textarea,
    button {
      font-size: 16px;
    }
    input,
    textarea {
      border-radius: 0.5rem;
    }
    .top {
      grid-template-columns: repeat(1, 1fr);
      gap: 1.5rem;
    }
    .logo-container {
      display: none;
    }
  }
`;
