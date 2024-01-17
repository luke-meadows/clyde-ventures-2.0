import Image from 'next/image';
import styled from 'styled-components';
import HeroBackgroundImage from '../../public/new/iStock-1393466215.jpg';
import HeroSecondaryImage from '../../public/new/CRMPolygon.png';
export default function Hero() {
  return (
    <StyledHero>
      <div className="background-image">
        <Image src={HeroBackgroundImage} layout="responsive" />
        {/* <div className="secondary-image">
          <div className="secondary-image-inner">
            <Image
              src={HeroSecondaryImage}
              layout="responsive"
              objectFit="cover"
            />
          </div>
        </div> */}
      </div>
    </StyledHero>
  );
}
const StyledHero = styled.section`
  padding-top: 8rem;
  margin-bottom: 2rem;
  .background-image {
    position: relative;
    height: 60vh;
  }
  .secondary-image {
    position: absolute;
    right: 0;
    top: 0;
  }
  .secondary-image-inner {
    position: relative;
    height: calc(60vh + 1px);
    aspect-ratio: 1;
  }
`;
