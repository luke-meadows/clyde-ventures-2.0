import styled from 'styled-components';
import TeamGridItem from './TeamGridItem';
import { teamData } from '../../lib/teamData';

export default function TeamGrid() {
  return (
    <StyledTeamGrid>
      <TeamGridItem teamMember={teamData.paulRichards} />
      <TeamGridItem teamMember={teamData.rossBern} />
      <TeamGridItem teamMember={teamData.joshMontgomery} />
      <TeamGridItem teamMember={teamData.amberMorton} />
      <TeamGridItem teamMember={teamData.leanneMcguigan} />
    </StyledTeamGrid>
  );
}

const StyledTeamGrid = styled.section`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 5rem 3rem;
  margin: 0rem auto 0 auto;
  max-width: 1600px;
  @media only screen and (min-width: 1600px) {
    grid-template-columns: repeat(5, 1fr);
  }
`;
