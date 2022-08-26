import styled from 'styled-components';
import OurStory from '../components/about/OurStory';
import ContactSection from '../components/contact/ContactSection';
export default function About() {
  return (
    <PageContainer>
      <div className="hero">
        <div className="hero-inner">
          <h1>About us</h1>
          <p>
            Born from operations. Our team comes from multiple sectors and have
            delivered large scale project transformations and tangable value.
          </p>
          <LearnMore>Meet the team</LearnMore>
        </div>
      </div>
      <OurStory />
      <ContactSection />
    </PageContainer>
  );
}

const PageContainer = styled.main`
  background: var(--white);
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
      color: var(--dark-grey);
      margin-left: 0.2rem;
    }
  }
  @media only screen and (min-width: 1600px) {
    .hero {
      padding: 14rem 5rem 6rem 5rem;
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
