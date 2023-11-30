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
  bg = false,
  center = false,
}) {
  return (
    <StyledHero bg={bg} center={center}>
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
  height: 24rem;
  position: relative;
  .hero {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 24rem;

    .hero-inner {
      max-width: 1600px;
      text-align: center;
    }
    h1 {
      font-size: 4rem;
      margin-bottom: 1rem;
      font-weight: 500;
      background: ${(props) => (props.bg ? 'rgba(255, 255, 255, 1)' : '')};
      margin-bottom: ${(props) => (props.bg ? '0rem' : '1rem')};
      padding: ${(props) => (props.bg ? '1rem 2rem' : '0')};
      border-radius: 50rem;
    }
    p {
      font-size: 1.2rem;
      margin-bottom: 0;
      max-width: 90ch;
      margin: 0 auto;
    }
  }
  @media only screen and (max-width: 1170px) {
    .hero {
      padding: 10rem 2rem 5rem 2rem;
      h1 {
        font-size: 3.3rem;
      }
    }
    padding-top: 0rem;
    p {
      display: none;
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
  bottom: 0;
  width: 100%;
  height: 24rem;
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
