import Image from 'next/image';
import styled from 'styled-components';
import hero from '../../public/hero2.jpg';
import MissionBanner from './MissionBanner';
export default function Hero() {
  return (
    <StyledHero>
      <Image
        src={hero}
        layout="fill"
        objectFit="cover"
        objectPosition="center"
      />
      <MissionBanner />
      <LearnMore>Learn More</LearnMore>
    </StyledHero>
  );
}

const StyledHero = styled.div`
  position: relative;
  height: calc(100vh - 13rem);
`;

const LearnMore = styled.button`
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%) translateY(50%);
  background: var(--white);
  border: 2px solid var(--yellow2);
  color: var(--yellow2);
  font-size: 1rem;
`;
