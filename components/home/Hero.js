import Link from 'next/link';
import styled from 'styled-components';
import MissionBanner from './MissionBanner';
export default function Hero() {
  return (
    <StyledHero>
      <HeroVideo
        autoPlay
        muted
        loop
        webkit-playsinline="true"
        playsInline={true}
        src={require('../../public/HERO.mp4')}
        type="video/mp4"
      />
      <MissionBanner />
      <Link href="/circular-solutions">
        <LearnMore>
          Learn About Circular Solutions
          <i
            className={'icon-angle-right'}
            style={{ marginRight: '-0.6rem' }}
          />
        </LearnMore>
      </Link>
    </StyledHero>
  );
}

const StyledHero = styled.div`
  position: relative;
  height: calc(100vh - 3rem);
  @media only screen and (max-width: 1170px) {
    height: calc(50vh);
  }
`;

const HeroVideo = styled.video`
  height: 100%;
  width: 100vw;
  object-fit: cover;
  pointer-events: none;
`;

const LearnMore = styled.button`
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%) translateY(50%);
  background: var(--yellow2);
  border: 2px solid var(--yellow2);
  font-size: 1rem;
  transition: all 0.2s ease-in-out;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  font-size: 0.9rem;
  font-weight: 500;
  width: fit-content;
  display: flex;
  align-items: center;
  padding: 0.8rem 2rem;
`;
