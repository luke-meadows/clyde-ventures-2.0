import Image from 'next/image';
import styled from 'styled-components';
export default function TeamGridItem({ teamMember }) {
  const { name, role, image, description } = teamMember;
  return (
    <StyledTeamGridItem>
      <div className="img-container">
        <Image src={image} layout="fill" objectFit="cover" />
      </div>
      <div className="text">
        <h4>{name}</h4>
        <p>{role}</p>
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
    border-radius: 0;
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
