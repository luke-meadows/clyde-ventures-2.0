import styled from 'styled-components';
import MissionBannerCard from './MissionBannerCard';
export default function MissionBanner() {
  return (
    <StyledMissionBanner>
      <div className="text-container">
        <h1>Creating sustainable value from waste...</h1>
        <h1>Opening new markets...</h1>
        <h1>Designing and delivering innovative revenue streams...</h1>
      </div>
    </StyledMissionBanner>
  );
}

const StyledMissionBanner = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  .text-container {
    padding: 0 5rem;

    h1 {
      color: var(--dark-grey);
      background: var(--white-transparent);
      font-size: 2.4rem;
      padding: 1.2rem 3rem;
      margin: 2rem 0;
      width: fit-content;
      border-radius: 3rem;
      font-weight: 500;
    }
  }

  @media only screen and (min-width: 1600px) {
    .text-container {
      h1 {
        font-size: 2rem;
      }
    }
  }
`;
