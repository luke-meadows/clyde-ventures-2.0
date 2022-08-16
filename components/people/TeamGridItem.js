import Image from 'next/image';
import styled from 'styled-components';
import TeamPhoto from '../../public/sample-team-photo.jpg';
export default function TeamGridItem() {
  return (
    <StyledTeamGridItem>
      <div className="img-container">
        <Image src={TeamPhoto} layout="fill" objectFit="cover" />
      </div>
      <div className="text">
        <h3>Luke Meadows</h3>
        <p>Salesforce Administrator</p>
      </div>
    </StyledTeamGridItem>
  );
}

const StyledTeamGridItem = styled.div`
  position: relative;
  background: var(--white);
  color: var(--dark-gre);
  /* border: 2px solid var(--yellow); */
  border-radius: 0.5rem;

  .img-container {
    overflow: hidden;
    position: relative;
    width: 100%;
    aspect-ratio: 1;
    border-bottom: none;
    border-top-right-radius: 0.5rem;
    border-top-left-radius: 0.5rem;
    border-radius: 0.5rem;
  }
  .text {
    padding: 1rem;

    border-bottom-right-radius: 0.5rem;
    border-bottom-left-radius: 0.5rem;
  }
  h3 {
    font-weight: 500;
  }
  p {
    margin-bottom: 0;
  }
`;
