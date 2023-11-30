import SEO from '@bradgarropy/next-seo';
import styled from 'styled-components';
import OurStory from '../components/about/OurStory';
import HeroWithBackgroundImg from '../components/global/HeroWithBackgroundImg';
import AboutBackground from '../public/about-hero.jpg';

export default function About() {
  return (
    <PageContainer>
      <SEO
        title="Clyde Ventures - About us"
        description="Learn about the company and how we started."
      />
      <div className="spacer"></div>

      <HeroWithBackgroundImg
        image={AboutBackground}
        header="About us"
        blurb="Born from operations. Our team comes from multiple sectors and have
        delivered large scale project transformations and tangible value."
        buttonText={'Meet the team'}
        buttonUrl="/people"
        iconDirection="right"
      />
      <OurStory />
    </PageContainer>
  );
}

const PageContainer = styled.main``;
