import Head from 'next/head';
import styled from 'styled-components';
import OurStory from '../components/about/OurStory';
import HeroWithBackgroundImg from '../components/global/HeroWithBackgroundImg';
import AboutBackground from '../public/about-hero.jpg';
export default function About() {
  return (
    <PageContainer>
      <Head>
        <title>Clyde Ventures - About us</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
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
