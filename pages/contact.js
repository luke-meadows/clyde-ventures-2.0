import SEO from '@bradgarropy/next-seo';
import styled from 'styled-components';
import ContactSection from '../components/contact/ContactSection';
import HeroWithBackgroundImg from '../components/global/HeroWithBackgroundImg';
import ContactBackgroundImage from '../public/contact-background.jpg';

export default function Contact() {
  return (
    <PageContainer>
      <SEO
        title="Clyde Ventures - Contact us"
        description="Our contact information."
      />
      <HeroWithBackgroundImg
        image={ContactBackgroundImage}
        header="Lets Talk"
        blurb="What can we do to help?"
        buttonText={'Submit your information'}
      />
      <div className="section-container">
        <ContactSection />
      </div>
    </PageContainer>
  );
}

const PageContainer = styled.main`
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
      max-width: 70ch;
      margin-left: 0.2rem;
    }
  }
  .section-container {
    padding: 5rem 0;
  }
  @media only screen and (min-width: 1600px) {
  }
  @media only screen and (max-width: 1170px) {
    .hero {
      padding: 10rem 2rem 5rem 2rem;
    }
    .section-container {
      padding: 1rem 0 0 0;
      background-color: var(--white2);
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
  height: 25.3rem;
  z-index: 0;
  background: var(--sky-blue);

  .inner-background {
    position: relative;
    width: 100%;
    height: 100%;
    opacity: 0.8;
  }
  @media only screen and (min-width: 1600px) {
    height: 28.3rem;
  }
`;
