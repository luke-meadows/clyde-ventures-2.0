import styled from 'styled-components';
import ContactSection from '../../components/contact/ContactSection';
import InsightsBackgroundImage from '../../public/insights-background.jpg';
import HeroWithBackgroundImg from '../../components/global/HeroWithBackgroundImg';
import InsightGrid from '../../components/insights/InsightGrid';
export default function insights() {
  return (
    <StyledInsightsPage>
      <div className="spacer"></div>

      <HeroWithBackgroundImg
        image={InsightsBackgroundImage}
        header="Insights"
        bg={true}
      />
      <InsightGrid />
      <ContactSection />
    </StyledInsightsPage>
  );
}
const StyledInsightsPage = styled.section`
  .spacer {
    padding-top: 7.5rem;
  }
  @media only screen and (max-width: 1170px) {
    .spacer {
      padding-top: 3rem;
    }
  }
`;
