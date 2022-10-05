import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';
export default function HeroWithBackgroundImg({
  image,
  buttonText = null,
  header,
  blurb,
  iconDirection = 'down',
  buttonUrl = null,
}) {
  return (
    <StyledHero>
      <BackgroundImage>
        <div className="inner-background">
          <Image
            src={image}
            layout="fill"
            objectFit="cover"
            objectPosition="center"
          />
        </div>
      </BackgroundImage>
      <div className="hero">
        <div className="hero-inner">
          <h1>{header}</h1>
          <p>{blurb}</p>
        </div>
      </div>
      {buttonUrl && (
        <Link href={buttonUrl} alt="sub-page">
          <LearnMore>
            {buttonText}
            <i
              className={'icon-angle-' + iconDirection}
              style={{ marginRight: '-0.6rem' }}
            />
          </LearnMore>
        </Link>
      )}
    </StyledHero>
  );
}

const StyledHero = styled.div`
  height: 30rem;
  position: relative;
  .hero {
    padding: 12rem 5rem 5rem 5rem;
    position: relative;
    .hero-inner {
      max-width: 1600px;
      margin: 0 auto;
    }
    h1 {
      margin: 0 auto;
      font-size: 4rem;
      margin-bottom: 1rem;
      font-weight: 500;
    }
    p {
      font-size: 1.2rem;
      margin-bottom: 0;
      max-width: 90ch;
      margin-left: 0.2rem;
    }
  }
  @media only screen and (max-width: 1170px) {
    .hero {
      padding: 10rem 2rem 5rem 2rem;
      h1 {
        font-size: 3.3rem;
      }
    }
  }
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
  box-shadow: rgba(0, 0, 0, 0.2) 0px 4px 12px;
  font-size: 0.9rem;
  font-weight: 500;
`;

const BackgroundImage = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 30rem;
  z-index: 0;
  background: var(--sky-blue);
  .inner-background {
    position: relative;
    width: 100%;
    height: 100%;
  }
  @media only screen and (min-width: 1600px) {
    height: 100%;
  }
`;
