import styled from 'styled-components';
import MissionBannerCard from './MissionBannerCard';
export default function MissionBanner() {
  return (
    <StyledMissionBanner>
      <MissionBannerCard blurb="Designing and delivering innovative revenue streams..." />
      <div className="spacer" />
      <MissionBannerCard blurb="Opening new markets..." />
      <div className="spacer" />
      <MissionBannerCard blurb="Creating sustainable value from waste..." />
    </StyledMissionBanner>
  );
}

const StyledMissionBanner = styled.div`
  background-color: var(--white-banner);
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  display: flex;
  /* padding: 0.5rem 0; */
  .spacer {
    height: 50px;
    width: 1px;
    background: var(--dark-grey);
    opacity: 0.5;
    margin: auto 0;
  }
`;
