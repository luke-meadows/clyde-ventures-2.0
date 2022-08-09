import Image from 'next/image';
import styled from 'styled-components';
import hero from '../../public/hero.jpg';
import MissionBanner from './MissionBanner';
export default function Hero() {
  return (
    <StyledHero>
      <Image
        src={hero}
        layout="fill"
        objectFit="cover"
        objectPosition="bottom"
      />
      <MissionBanner />
    </StyledHero>
  );
}

const StyledHero = styled.div`
  position: relative;
  height: 35rem;
`;
