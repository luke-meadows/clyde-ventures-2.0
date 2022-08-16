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
  grid-template-columns: repeat(3, 1fr);
  gap: 4rem;
  margin: 10rem auto 0 auto;
  max-width: 1000px;
`;
