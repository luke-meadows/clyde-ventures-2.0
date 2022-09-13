import Image from 'next/image';
import { useRef, useState } from 'react';
import styled from 'styled-components';
import useForm from '../../lib/useForm';
import Logo from '../../public/1.png';

const ButtonIcon = (variant) => {
  return <i className={`icon-${variant}`} />;
};

export default function ContactForm() {
  const [buttonStatus, setButtonStatus] = useState({
    content: 'Send',
    bg: 'var(--yellow2)',
    disabled: false,
  });

  const { inputs, handleChange, clearForm } = useForm(
    {
      name: '',
      email: '',
      confEmail: '',
      subject: '',
      message: '',
    },
    setButtonStatus
  );

  const nameRef = useRef();
  const emailRef = useRef();
  const confEmailRef = useRef();
  const subjectRef = useRef();
  const messageRef = useRef();
  const checkboxRef = useRef();

  const refMap = {
    name: nameRef,
    email: emailRef,
    confEmail: confEmailRef,
    subject: subjectRef,
    message: messageRef,
  };

  function submitForm(inputs) {
    setButtonStatus({ ...buttonStatus, content: 'Sending', disabled: true });
    fetch('/api/mail', {
      method: 'post',
      body: JSON.stringify(inputs),
    }).then((res) => {
      checkboxRef.current.checked = false;
      if (res.status === 200) {
        setButtonStatus({
          content: ButtonIcon('check'),
          bg: 'var(--green)',
          disabled: true,
        });
        clearForm();
      } else {
        setButtonStatus({
          content: ButtonIcon('cancel'),
          bg: 'var(--red)',
          disabled: true,
        });
      }
    });
  }

  function validateForm(e) {
    e.preventDefault();
    // Check if all fields are populated
    let blankFields = [];
    Object.keys(inputs).forEach((input) => {
      if (!inputs[input].length) {
        blankFields.push(refMap[input]);
      }
    });
    // If not make red outline
    if (blankFields.length || !checkboxRef.current.checked) {
      blankFields.forEach((field) => {
        field.current.classList.add('warning');
      });
      return;
      // If so submit form
    } else {
      submitForm(inputs);
    }
  }

  return (
    <StyledContactForm
      onSubmit={validateForm}
      buttonStatus={buttonStatus}
      onKeyDown={() =>
        setButtonStatus({
          content: 'Send',
          bg: 'var(--yellow2)',
          disabled: false,
        })
      }
    >
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
          ref={nameRef}
        />
        <input
          name="email"
          value={inputs.email}
          placeholder="Email"
          type="email"
          onChange={handleChange}
          ref={emailRef}
        />
        <input
          name="confEmail"
          value={inputs.confEmail}
          placeholder="Confirm Email"
          type="text"
          onChange={handleChange}
          ref={confEmailRef}
        />
        <input
          name="subject"
          value={inputs.subject}
          placeholder="Subject"
          type="text"
          onChange={handleChange}
          ref={subjectRef}
        />
      </div>
      <textarea
        name="message"
        value={inputs.message}
        placeholder="Type your message here"
        className="message"
        type="text"
        onChange={handleChange}
        ref={messageRef}
      />
      <div className="privacy-checkbox">
        <div className="checkbox-container">
          <input ref={checkboxRef} type="checkbox" className="checkbox" />
        </div>
        <p>
          I confirm I accept the Clyde Ventures{' '}
          <a href="https://www.clydeventures.com/privacy-policy" target="blank">
            privacy policy
          </a>
        </p>
      </div>
      <button type="submit" onClick={() => console.log('click')}>
        {buttonStatus.content}
      </button>
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
    transition: all 0.5s ease;
    max-width: 45rem;
    &.warning {
      ::placeholder {
        color: var(--red);
      }
    }
    ::placeholder {
      color: var(--medium-grey);
      opacity: 1; /* Firefox */
    }
  }
  input {
    padding: 0.5rem 1rem;
  }
  textarea {
    margin: 0;
    padding: 1rem;
    height: 12rem;
    border-radius: 1.2rem;
  }
  .privacy-checkbox {
    display: flex;
    margin-top: 1rem;
    .checkbox-container {
      display: flex;
      align-items: center;
      justify-content: center;
      min-height: 100%;
    }
    .checkbox {
      width: fit-content;
      margin-right: 0.3rem;
      margin-left: 0.2rem;
      margin-top: -0.2rem;
    }
    p {
      margin-bottom: 0;
      font-size: 0.8rem;
    }
    a {
      text-decoration: underline;
      color: blue;
    }
  }
  .top {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1.4rem;
    margin-bottom: 1.4rem;
  }
  button {
    width: 8rem;
    display: block;
    margin-top: 1.1rem;
    background: ${(props) => props.buttonStatus.bg};
    border: none;
    font-size: 0.9rem;
    font-weight: 500;
    color: var(--black);
    padding: 0.55rem 0rem;
    transition: all 1s ease;
    pointer-events: ${(props) =>
      props.buttonStatus.disabled ? 'none' : 'all'};
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
      margin-bottom: 1.8rem;
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
    .checkbox {
      margin-right: 0.5rem !important;
    }
  }
`;
