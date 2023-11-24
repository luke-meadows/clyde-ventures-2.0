import Image from 'next/image';
import { useRef, useState } from 'react';
import styled from 'styled-components';
import useForm from '../../lib/useForm';
import Logo from '../../public/1.png';
import { useRouter } from 'next/router';

const ButtonIcon = (variant) => {
  return <i className={`icon-${variant}`} />;
};

export default function ContactForm() {
  const router = useRouter();
  const [buttonStatus, setButtonStatus] = useState({
    content: 'Send',
    className: 'unsent-button-bg',
    disabled: false,
  });

  const { inputs, handleChange, clearForm } = useForm({
    firstName: '',
    surname: '',
    email: '',
    company: '',
    telephone: '',
    interest: 'Area of Interest',
    message: '',
  });

  const firstNameRef = useRef();
  const surnameRef = useRef();
  const emailRef = useRef();
  const companyRef = useRef();
  const interestRef = useRef();
  const telephoneRef = useRef();
  const messageRef = useRef();
  const checkboxRef = useRef();

  const refMap = {
    firstName: firstNameRef,
    surname: surnameRef,
    email: emailRef,
    company: companyRef,
    telephone: telephoneRef,
    interest: interestRef,
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
          className: 'sent-button-bg',
          disabled: true,
        });
        if (inputs.interest !== 'Other') {
          fetch('/api/webToLead', {
            method: 'post',
            body: JSON.stringify(inputs),
          });
        }
        clearForm();
      } else {
        setButtonStatus({
          content: ButtonIcon('cancel'),
          className: 'error-button-bg',
          disabled: true,
        });
      }
    });
  }

  function handleSelectChange(e) {
    console.log(e.target.value);
    if (e.target.value === 'Area of Interest') {
      e.target.classList.add('default-value');
      e.target.classList.remove('selected-value');
    }
    if (e.target.value !== 'Area of Interest') {
      e.target.classList.add('selected-value');
      e.target.classList.remove('default-value');
    }
    handleChange(e);
  }

  function validateForm(e) {
    e.preventDefault();
    // Check if all fields are populated
    let blankFields = [];

    Object.keys(inputs).forEach((input) => {
      if (input === 'telephone') return;
      if (!inputs[input].length || inputs[input] === 'Area of Interest') {
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
      id="contact_us"
      onSubmit={validateForm}
      buttonStatus={buttonStatus}
      onKeyDown={() =>
        setButtonStatus({
          content: 'Send',
          className: 'unsent-button-bg',
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
          name="firstName"
          value={inputs.firstName}
          placeholder="First Name (required)"
          type="text"
          onChange={handleChange}
          ref={firstNameRef}
        />
        <input
          name="surname"
          value={inputs.surname}
          placeholder="Surname (required)"
          type="text"
          onChange={handleChange}
          ref={surnameRef}
        />
        <input
          name="email"
          value={inputs.email}
          placeholder="Email (required)"
          type="email"
          onChange={handleChange}
          ref={emailRef}
        />
        <input
          name="company"
          value={inputs.company}
          placeholder="Company (required)"
          type="text"
          onChange={handleChange}
          ref={companyRef}
        />

        <input
          name="telephone"
          value={inputs.telephone}
          placeholder="Telephone (optional)"
          type="tel"
          onChange={handleChange}
          ref={telephoneRef}
        />
        <select
          name="interest"
          value={inputs.interest}
          placeholder="Area of Interest (required)"
          type="dropdown"
          onChange={handleSelectChange}
          ref={interestRef}
        >
          <option>Area of Interest (required)</option>
          <option>Consultancy</option>
          <option>Integration</option>
          <option>Manufacturing</option>
          <option>Education</option>
          <option>Other</option>
        </select>
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
          </a>{' '}
          <span style={{ color: 'red' }}>*</span>
        </p>
      </div>
      <button type="submit" className={buttonStatus.className}>
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
  border-radius: 3px;
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
  textarea,
  select {
    border: none;
    outline: none;
    width: 100%;
    resize: none;
    border: 1px solid var(--grey2);
    background: var(--white);
    color: var(--dark-grey);
    font-size: 0.9rem;
    transition: all 0.5s ease;
    max-width: 45rem;
    border-radius: 4px;
    &.warning {
      color: var(--red);
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
  select {
    padding: 0.5rem 0.75rem;
    color: #767676;
    transition: all 0s ease;

    &.default-value {
      color: #767676;
    }
    &.selected-value {
      color: #404040;
    }
  }
  textarea {
    margin: 0;
    padding: 1rem;
    height: 12rem;
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
    border: none;
    font-size: 0.9rem;
    font-weight: 500;
    color: var(--black);
    padding: 0.55rem 0rem;
    transition: all 1s ease;
    pointer-events: ${(props) =>
      props.buttonStatus.disabled ? 'none' : 'all'};
  }
  .unsent-button-bg {
    background: var(--yellow2);
  }
  .sent-button-bg {
    background: var(--green);
  }
  .error-button-bg {
    background: var(--red);
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
    button,
    select {
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
