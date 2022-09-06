import styled from 'styled-components';
import MissionBannerCard from './MissionBannerCard';
export default function MissionBanner() {
  return (
    <StyledMissionBanner>
      <div className="banner-inner">
        <MissionBannerCard blurb="Designing and delivering innovative revenue streams..." />
        <div className="spacer" />
        <MissionBannerCard blurb="Opening new markets..." />
        <div className="spacer" />
        <MissionBannerCard blurb="Creating sustainable value from waste..." />
      </div>
    </StyledMissionBanner>
  );
}

const StyledMissionBanner = styled.div`
  background-color: var(--white-banner);
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  .banner-inner {
    display: flex;
    max-width: 1800px;
    margin: 0 auto;
  }
  .spacer {
    height: 50px;
    width: 1px;
    background: var(--dark-grey);
    opacity: 0.5;
    margin: auto 0;
  }
  @media only screen and (max-width: 1170px) {
    /* background-color: transparent; */
    .banner-inner {
      padding-top: 1.8rem;
      display: grid;
      grid-template-columns: repeat(1, 1fr);
      grid-auto-rows: 1fr;
      margin-bottom: 2rem;
    }
    .spacer {
      display: none;
    }
  }
`;
