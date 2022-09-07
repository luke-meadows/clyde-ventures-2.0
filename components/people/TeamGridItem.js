import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { disableScrollTeam, enableScrollTeam } from '../../lib/scroll';
import LinkedInLogo from '../../public/linked-in.png';
export default function TeamGridItem({ teamMember }) {
  const { name, role, image, description, linkedIn } = teamMember;
  const [teamMemberActive, setTeamMemberActive] = useState(false);
  useEffect(() => {
    if (teamMemberActive) {
      disableScrollTeam();
    } else {
      enableScrollTeam();
    }
  }, [teamMemberActive]);

  function handleClick(e) {
    console.log(e.currentTarget);
    setTeamMemberActive(true);
  }

  return (
    <StyledTeamGridItem teamMemberActive={teamMemberActive}>
      <div className="outer" />
      <div className="inner team-item">
        <div className="container">
          {teamMemberActive && (
            <>
              <i
                className="icon-cancel exit"
                onClick={() => setTeamMemberActive(false)}
              />

              <a target="blank" href={linkedIn}>
                <div className="linked-in">
                  <Image
                    src={LinkedInLogo}
                    layout="responsive"
                    objectFit="contain"
                  />
                </div>
              </a>
            </>
          )}
          <div onClick={handleClick} className="image-and-name">
            <div className="img-container">
              <Image src={image} layout="fill" objectFit="cover" />
            </div>
            <div className="text">
              <h5>{name}</h5>
              <p>{role}</p>
            </div>
          </div>
          {teamMemberActive && (
            <div style={{ marginTop: '1.5rem' }}>
              {description.map((p, i) => (
                <p key={i} style={{ marginBottom: '1rem' }}>
                  {p}
                </p>
              ))}
            </div>
          )}
        </div>
      </div>
    </StyledTeamGridItem>
  );
}

const StyledTeamGridItem = styled.div`
  background: var(--white);
  position: relative;
  cursor: pointer;
  .outer {
    transition: all 0.3s ease;
    background: var(--dark-grey-transparent);
    height: 100vh;
    width: 100vw;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 3;
    opacity: ${(props) => (props.teamMemberActive ? '1' : '0')};
    pointer-events: ${(props) => (props.teamMemberActive ? 'initial' : 'none')};
  }
  .inner {
    border-radius: 0.5rem;
    position: ${(props) => (props.teamMemberActive ? 'fixed' : 'initial')};
    background: ${(props) => (props.teamMemberActive ? 'var(--grey)' : 'none')};
    left: ${(props) => (props.teamMemberActive ? '50%' : '50%')};
    top: ${(props) => (props.teamMemberActive ? '50%' : '50%')};
    transform: ${(props) =>
      props.teamMemberActive ? 'translate(-50%, -50%);' : ''};
    width: ${(props) =>
      props.teamMemberActive ? 'calc(100% - 12rem);' : '100%'};
    max-width: calc(1200px);
    padding: ${(props) => (props.teamMemberActive ? '3rem' : '0')};
    z-index: ${(props) => (props.teamMemberActive ? '3' : '1')};
  }
  .container {
    height: 100%;

    position: relative;
    display: ${(props) => (props.teamMemberActive ? 'flex' : 'block')};
    .exit {
      position: fixed;
      top: 1rem;
      right: 1rem;
      font-size: 1.2rem;
    }
  }

  .linked-in {
    position: absolute;
    bottom: -1.6rem;
    right: -0.85rem;
    width: 5rem;
    a {
      width: fit-content;
      margin: 0 0 0 auto;
      display: flex;
      align-items: center;
      i {
        font-size: 1.2rem;
      }
    }
  }
  .img-container {
    overflow: hidden;
    position: relative;
    aspect-ratio: 1;
    border-bottom: none;
    border-top-right-radius: 0.5rem;
    border-top-left-radius: 0.5rem;
    width: ${(props) => (props.teamMemberActive ? '20rem' : '100%')};
    margin-right: ${(props) => (props.teamMemberActive ? '2.5rem' : '0')};
  }
  .text {
    padding: 0.5rem;
    border-bottom-right-radius: 0.5rem;
    border-bottom-left-radius: 0.5rem;
    border-top: none;
    text-align: center;
    background: var(--yellow2);
    margin-right: ${(props) => (props.teamMemberActive ? '2.5rem' : '0')};
    h5 {
      font-size: 1.3rem;
    }
    p {
      margin-bottom: 0;
    }
  }
  p {
    font-size: 0.9rem;
  }

  @media only screen and (max-width: 1170px) {
    .inner {
      border-radius: ${(props) => (props.teamMemberActive ? '0' : '0.5rem')};
      width: ${(props) => (props.teamMemberActive ? 'calc(100%);' : '100%')};
      height: ${(props) => (props.teamMemberActive ? 'calc(100%);' : '100%')};
      padding: ${(props) => (props.teamMemberActive ? '2rem' : '0')};
      overflow-y: ${(props) => (props.teamMemberActive ? 'scroll' : 'none')};
    }
    .container {
      flex-direction: column;
      .exit {
        top: 1.2rem;
        right: 2rem;
      }
    }
    .text {
      width: 100%;
    }
    .image-and-name {
      width: ${(props) => (props.teamMemberActive ? 'fit-content' : '100%')};
      margin-top: 2.5rem;
    }
    .img-container {
      margin-right: 0;
      width: calc(100vw - 4rem);
    }
    .linked-in {
      top: -0.5rem;
      left: 0rem;

      height: fit-content;
      bottom: initial;
    }
  }
`;
