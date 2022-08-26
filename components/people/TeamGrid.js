import styled from 'styled-components';
import TeamGridItem from './TeamGridItem';
import TeamGridItem2 from './TeamGridItem2';
import { teamData } from '../../lib/teamData';
export default function TeamGrid() {
  return (
    <StyledTeamGrid>
      <TeamGridItem2 teamMember={teamData.paulRichards} />
      <TeamGridItem2 teamMember={teamData.rossBern} />
      <TeamGridItem2 teamMember={teamData.joshMontgomery} />
      <TeamGridItem2 teamMember={teamData.amberMorton} />
      <TeamGridItem2 teamMember={teamData.leanneMcguigan} />
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
