import styled from 'styled-components';
import ContactSection from '../../components/contact/ContactSection';
import InsightBackgroundImage from '../../public/case-study-background.jpg';
import HeroWithBackgroundImg from '../../components/global/HeroWithBackgroundImg';
import Image from 'next/image';
import Link from 'next/link';
import ContactButton from '../../components/global/ContactButton';
export default function InsightPage() {
  return (
    <StyledInsightsPage>
      <div className="spacer"></div>
      <HeroWithBackgroundImg
        image={InsightBackgroundImage}
        header="Developed a process control and exceptions management framework "
        bg={true}
        smallOnPhone={true}
        transparent={true}
      />
      <div className="insight-content-container">
        <h3>Background</h3>
        <p>
          Our team were engaged by one of the UK’s largest specialists in
          corporate restructuring to support in their task of processing the
          insolvency of a mid-sized energy company in administration. There
          existed a core of customers with complex data issues and legacy data
          inaccuracies who remained unbilled despite the efforts made with the
          CRM/billing providers which was impacting debt recovery success.
          Access to the operational applications was removed midway through the
          process, so any billing had to be done out with the core systems.
        </p>

        <br />
        <h3>What did we do?</h3>
        <p>
          Clyde Ventures provided a portfolio management team, an exception
          management team and a debt management team to:{' '}
        </p>
        <ul>
          <li>
            Quantify and segment unbilled value and aged debt to enable key
            workstreams to be developed and prioritised.
          </li>
          <li>
            Create a CRM and billing engine to enable bulk and individual
            billing given the legacy systems had been removed
          </li>
          <li>
            Release the remaining 7k bills for previously unbillable accounts
            characterised by legacy migration issues, high complexity or
            limitations in the legacy billing systems.
          </li>
          <li>
            Facilitate Debt collection activity for legacy and current balances.
          </li>
        </ul>
        <br />
        <h3>Benefits Released</h3>
        <ul>
          <li>
            Visibility was created for the portfolio and surfaced via regular
            reporting and dashboards, giving a live view of outstanding
            exceptions, and the value they represented.{' '}
          </li>
          <li>
            Legacy billing exceptions were managed for the portfolio across both
            brands resulting in unbilled clearance for nearly 7k customers with
            complex issues.{' '}
          </li>
          <li>
            This, along with the unbilled workstreams processed prior to the
            administration, facilitated the collection of over £13.3m of debt.{' '}
          </li>
          <li>
            The technical solutions were transferred to our client so they could
            continue to action queries and resolve legacy issues post
            engagement.
          </li>
        </ul>
        {/* BREAK */}
        <br />
        <p>
          With our combination of data expertise and thorough understanding of
          billing systems, Clyde Ventures can help you improve your billed
          position and unlock revenue.
        </p>
        <div className="button-container"></div>
      </div>
      <ContactSection />
    </StyledInsightsPage>
  );
}
const StyledInsightsPage = styled.section`
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
