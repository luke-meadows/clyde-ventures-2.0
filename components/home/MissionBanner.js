import styled from 'styled-components';
import MissionBannerCard from './MissionBannerCard';
export default function MissionBanner() {
  return (
    <StyledMissionBanner>
      <MissionBannerCard blurb="Creating sustainable value from waste..." />
      <div className="spacer" />
      <MissionBannerCard blurb="Opening new markets..." />
      <div className="spacer" />
      <MissionBannerCard blurb="Designing and delivering innovative revenue streams..." />
    </StyledMissionBanner>
  );
}

const StyledMissionBanner = styled.div`
  background-color: rgba(255, 255, 255, 0.8);
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: space-evenly;

  .spacer {
    height: 120px;
    width: 2px;
    background: var(--dark-grey);
    opacity: 0.3;
    margin: auto 0;
  }
`;
