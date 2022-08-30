import styled from 'styled-components';
import OurStory from '../components/about/OurStory';
import ContactSection from '../components/contact/ContactSection';
import HeroWithBackgroundImg from '../components/global/HeroWithBackgroundImg';
import AboutBackground from '../public/about-hero.jpg';
export default function About() {
  return (
    <PageContainer>
      <HeroWithBackgroundImg
        image={AboutBackground}
        header="About us"
        blurb="Born from operations. Our team comes from multiple sectors and have
        delivered large scale project transformations and tangable value."
        buttonText={'Meet the team'}
        iconDirection="right"
      />
      <OurStory />
      <ContactSection />
    </PageContainer>
  );
}

const PageContainer = styled.main`
  background: var(--white2);
`;
