import styled from 'styled-components';
import TeamGridItem from './TeamGridItem';
import { teamData } from '../../lib/teamData';

export default function TeamGrid() {
  return (
    <StyledTeamGrid>
      <TeamGridItem teamMember={teamData.paulRichards} />
      <TeamGridItem teamMember={teamData.amberMorton} />
      <TeamGridItem teamMember={teamData.rossBern} />
      <TeamGridItem teamMember={teamData.leanneMcguigan} />
      <TeamGridItem teamMember={teamData.joshMontgomery} />
      <TeamGridItem teamMember={teamData.davePhilipson} />
      <TeamGridItem teamMember={teamData.grahamMathie} />
    </StyledTeamGrid>
  );
}

const StyledTeamGrid = styled.section`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 3rem;
  margin: 2.5rem auto 1rem auto;
  max-width: 1600px;
  width: 100%;
  @media only screen and (min-width: 1600px) {
    grid-template-columns: repeat(5, 1fr);
  }
  @media only screen and (max-width: 1000px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
  }
  @media only screen and (max-width: 600px) {
    grid-template-columns: repeat(1, 1fr);
    gap: 0;
  }
`;
