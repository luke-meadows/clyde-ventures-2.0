import styled from 'styled-components';
import TeamGridItem from './TeamGridItem';
export default function TeamGrid() {
  return (
    <StyledTeamGrid>
      <TeamGridItem />
      <TeamGridItem />
      <TeamGridItem />
      <TeamGridItem />
      <TeamGridItem />
      <TeamGridItem />
      <TeamGridItem />
      <TeamGridItem />
      <TeamGridItem />
      <TeamGridItem />
      <TeamGridItem />
      <TeamGridItem />
    </StyledTeamGrid>
  );
}

const StyledTeamGrid = styled.section`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 5rem 3rem;
  margin: 6rem auto 0 auto;
  max-width: 1600px;
`;
