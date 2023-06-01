import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { downloadFile } from '../../lib/downloadFile';
import { disableScrollTeam, enableScrollTeam } from '../../lib/scroll';
import useForm from '../../lib/useForm';
export default function DownloadBrochureModal({ setDownloadModalActive }) {
  useEffect(() => {
    disableScrollTeam();
    return () => enableScrollTeam();
  }, []);

  const { inputs, handleChange, clearForm } = useForm({
    name: '',
    email: '',
    telephone: '',
  });
  const nameRef = useRef();
  const emailRef = useRef();
  const telephoneRef = useRef();
  const checkboxRef = useRef();
  const buttonRef = useRef();

  const refMap = {
    name: nameRef,
    email: emailRef,
    telephone: telephoneRef,
  };

  function submitForm(inputs) {
    buttonRef.current.disabled = true;
    fetch('/api/brochure', {
      method: 'post',
      body: JSON.stringify(inputs),
    }).then((res) => {
      if (res.status === 200) {
        checkboxRef.current.checked = false;
        clearForm();
        setDownloadModalActive(false);
        downloadFile();
      } else {
        buttonRef.current.innerHTML = 'Please refresh and try again';
        buttonRef.current.style.background = 'var(--red)';
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

  function handleClose(e) {
    if (e.target.id !== 'outer-modal') return;
    setDownloadModalActive(false);
  }

  return (
    <StyledModal onClick={handleClose} id="outer-modal">
      <div className="inner-modal">
        <h3>Download the course brochure</h3>
        <form onSubmit={validateForm}>
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
            name="telephone"
            value={inputs.number}
            placeholder="Telephone"
            type="telephone"
            onChange={handleChange}
            ref={telephoneRef}
          />
          <div className="privacy-checkbox">
            <div className="checkbox-container">
              <input ref={checkboxRef} type="checkbox" className="checkbox" />
            </div>
            <p>
              I confirm I accept the Clyde Ventures{' '}
              <a
                href="https://www.clydeventures.com/privacy-policy"
                target="blank"
              >
                privacy policy
              </a>{' '}
              and agree to be contacted regarding the course.
            </p>
          </div>
          <button ref={buttonRef}>Download</button>
        </form>
      </div>
      <i
        className="icon-cancel"
        onClick={() => setDownloadModalActive(false)}
      />
    </StyledModal>
  );
}

const StyledModal = styled.div`
  z-index: 3;
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background: var(--dark-grey-transparent);
  height: 100vh;
  width: 100vw;
  .inner-modal {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: 3;
    background: white;
    border-radius: 0.5rem;
    padding: 2.5rem;
  }
  h3 {
    margin-bottom: 1.2rem;
  }
  input {
    border: none;
    outline: none;
    width: 100%;
    resize: none;
    border: 1px solid var(--grey2);
    background: var(--white);
    color: var(--dark-grey);
    font-size: 0.9rem;
    border-radius: 0.5rem;
    transition: all 0.5s ease;
    max-width: 45rem;
    padding: 0.5rem 1rem;
    margin: 0.3rem 0;
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

  .privacy-checkbox {
    display: flex;
    margin-top: 1rem;

    .checkbox-container {
      display: flex;
      align-items: center;
      justify-content: center;
      height: fit-content;
    }
    .checkbox {
      width: fit-content;
      margin-right: 0.5rem;
      margin-left: 0.2rem;
      margin-top: 0.15rem;
    }
    p {
      margin-bottom: 0;
      font-size: 0.8rem !important;
      line-height: 1rem;
    }
    a {
      text-decoration: underline;
      color: blue;
    }
  }

  i {
    position: fixed;
    top: 1.5rem;
    right: 2rem;
    font-size: 1.4rem;
    cursor: pointer;
    z-index: 3;
    color: white;
  }
  @media only screen and (max-width: 1170px) {
    .inner-modal {
      min-width: 30rem;
    }
  }
`;
