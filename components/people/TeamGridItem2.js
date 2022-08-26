import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { disableScrollTeam } from '../../lib/scroll';
export default function TeamGridItem2({ teamMember }) {
  const teamMemberRef = useRef();
  const [containerCoordinates, setContainerCoordinates] = useState({
    top: 0,
    left: 0,
  });
  // useEffect(() => {
  //   const rect = teamMemberRef.current.getBoundingClientRect();
  //   setContainerCoordinates({ top: rect.top, left: rect.left });
  // }, []);
  function handleClick() {
    const rect = teamMemberRef.current.getBoundingClientRect();
    setContainerCoordinates({ top: rect.top, left: rect.left });
    console.log(containerCoordinates);
    setTeamMemberActive(true);
  }
  const { name, role, image, description } = teamMember;
  const [teamMemberActive, setTeamMemberActive] = useState(false);
  return (
    <StyledTeamGridItem
      teamMemberActive={teamMemberActive}
      containerCoordinates={containerCoordinates}
      ref={teamMemberRef}
    >
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
              <h4>{name}</h4>
              <p>{role}</p>
            </div>
          </div>
          {teamMemberActive && (
            <div style={{ marginTop: '2rem' }}>
              {description.map((p) => (
                <p style={{ marginBottom: '1rem' }}>{p}</p>
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

  .outer {
    transition: all 0.5s ease;
    background: var(--dark-grey-transparent);
    height: 100vh;
    width: 100vw;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 2;
    opacity: ${(props) => (props.teamMemberActive ? '1' : '0')};
    pointer-events: ${(props) => (props.teamMemberActive ? 'initial' : 'none')};
  }
  .inner {
    transition: all 0.5s ease;
    border-radius: 0.5rem;
    position: ${(props) => (props.teamMemberActive ? 'fixed' : 'relative')};
    background: ${(props) => (props.teamMemberActive ? 'var(--grey)' : 'none')};
    left: ${(props) =>
      props.teamMemberActive ? '50%' : props.containerCoordinates.left};
    top: ${(props) =>
      props.teamMemberActive ? '50%' : props.containerCoordinates.top};
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
    border-radius: 0;
    width: ${(props) => (props.teamMemberActive ? '20rem' : '100%')};
  }
  .text {
    padding: 0.5rem 0;
    border-bottom-right-radius: 0.5rem;
    border-bottom-left-radius: 0.5rem;
  }
  h3 {
    font-weight: 400;
  }
  p {
    margin-bottom: 0;
    font-size: 0.85rem;
    color: grey;
  }
`;
