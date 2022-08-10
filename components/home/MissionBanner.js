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
  background-color: var(--white-transparent);
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  display: flex;
  .spacer {
    height: 120px;
    width: 2px;
    background: var(--medium-grey);
    opacity: 0.5;
    margin: auto 0;
  }
`;
