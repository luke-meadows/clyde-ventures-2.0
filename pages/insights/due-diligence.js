import styled from 'styled-components';
import ContactSection from '../../components/contact/ContactSection';
import InsightBackgroundImage from '../../public/case-study-background.jpg';
import HeroWithBackgroundImg from '../../components/global/HeroWithBackgroundImg';
import Image from 'next/image';
import Link from 'next/link';
import ContactButton from '../../components/global/ContactButton';
import RossAvatar from '../../public/ross-avatar.png';
import CaseStudyGrid from '../../components/CaseStudyGrid';

export default function InsightPage() {
  return (
    <StyledInsightsPage>
      <div className="spacer"></div>
      <HeroWithBackgroundImg
        image={InsightBackgroundImage}
        header="Conducted financial and operational due diligence on a technology
        led, energy retailer to provide assurance to support our client’s
        proposed $20m investment"
        bg={true}
        smallOnPhone={true}
        transparent={true}
      />
      <div className="insight-content-container">
        <div className="author-and-date">
          <div className="avatar-container">
            <Image src={RossAvatar} layout="fill" objectFit="cover" />
          </div>
          <p>Ross Bern</p>
        </div>
        <p>
          Clyde Ventures were approached by a global Technology provider to
          undertake financial and operational due diligence on a prospective
          investment target. Over a two week engagement we were able to provide
          the necessary assurance and recommended risk mitigation actions to
          enable the client to proceed with their investment by:
        </p>

        <ul>
          <li>
            Creating cash flow models and developing various scenarios to stress
            test the seller&apos;s assumptions
          </li>
          <li>
            Analysing the company&apos;s management accounts and forecasts to
            produce financial performance metrics
          </li>
          <li>
            Critiquing the viability of the business model and the
            transferability of the associated Technology across different
            continents
          </li>
          <li>
            Conducting peer group analysis and reviewed operational performance
            against industry benchmarks
          </li>
          <li>
            Challenging the current hedging strategies and proposing a number of
            interventions to mitigate investment risk
          </li>
          <li>
            Critiquing the validity of the seller&apos;s customer unit economics
            and lifetime value projections
          </li>
          <li>
            Ultimately producing a company valuation and a clear recommendation
            to enable the client to proceed with their investment
          </li>
        </ul>

        <div className="button-container"></div>
      </div>
      <div className="button-container">
        <CaseStudyGrid />
      </div>
      <ContactSection />
    </StyledInsightsPage>
  );
}
export const StyledInsightsPage = styled.section`
  .spacer {
    padding-top: 7.5rem;
  }
  .insight-content-container {
    padding: 3rem 5rem 0 3rem;
    max-width: 1000px;
    margin: 0 auto;
  }
  h2 {
    font-weight: 500;
    margin-bottom: 1.2rem;
  }
  ul {
    list-style-position: inside;
    margin-bottom: 1rem;
    font-size: 1.2rem;
  }
  li {
    margin-bottom: 1rem;
    font-size: 1rem;
  }
  .small-bullets {
    font-size: 1rem;
  }
  h3 {
    margin-bottom: 0.8rem;
    font-weight: 500;
  }
  h4 {
    margin-bottom: 0.8rem;
    font-weight: 500;
  }
  .author-and-date {
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 1rem;
  }
  .avatar-container {
    position: relative;
    width: 6rem;
    height: 6rem;
  }
  .link {
    color: blue;
    text-decoration: underline;
  }
  .button-container {
    margin: 2rem 0;
    width: fit-content;
  }
  @media only screen and (max-width: 1170px) {
    .spacer {
      padding-top: 3rem;
    }
    .insight-content-container {
      padding: 2rem 5rem 0 2rem;
    }
  }
`;
