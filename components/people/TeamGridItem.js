import Image from 'next/image';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { disableScrollTeam, enableScrollTeam } from '../../lib/scroll';
export default function TeamGridItem({ teamMember }) {
  const { name, role, image, description } = teamMember;
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
            <i
              className="icon-cancel"
              onClick={() => setTeamMemberActive(false)}
            />
          )}
          <div onClick={handleClick}>
            <div className="img-container">
              <Image src={image} layout="fill" objectFit="cover" />
            </div>
            <div className="text">
              <h5>{name}</h5>
              <p>{role}</p>
            </div>
          </div>
          {teamMemberActive && (
            <div style={{ marginTop: '2rem' }}>
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
  aspect-ratio: 1;
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
    position: relative;
    display: ${(props) => (props.teamMemberActive ? 'flex' : 'block')};
    gap: 5rem;
    i {
      position: absolute;
      top: -1.6rem;
      right: -1.2rem;
      font-size: 1.2rem;
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
  }
  .text {
    padding: 0.75rem;
    border-bottom-right-radius: 0.5rem;
    border-bottom-left-radius: 0.5rem;

    border-top: none;
    text-align: center;
    background: var(--yellow2);
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
`;
