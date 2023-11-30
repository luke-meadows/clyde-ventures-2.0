import styled from 'styled-components';
import ContactSection from '../../components/contact/ContactSection';
import InsightBackgroundImage from '../../public/domestic-sales-background.jpeg';
import HeroWithBackgroundImg from '../../components/global/HeroWithBackgroundImg';
import AmberAvatar from '../../public/amber-avatar.png';
import Image from 'next/image';
export default function InsightPage() {
  return (
    <StyledInsightsPage>
      <div className="spacer"></div>
      <HeroWithBackgroundImg
        image={InsightBackgroundImage}
        header="£1.95M in Domestic Sales Benefits"
        bg={true}
        smallOnPhone={true}
      />
      <div className="insight-content-container">
        <div className="author-and-date">
          <div className="avatar-container">
            <Image src={AmberAvatar} layout="fill" objectFit="cover" />
          </div>
          <p>Amber Morton - 29/11/2023</p>
        </div>
        <br />
        <h2>
          Identified £1.95m of benefits opportunity within the Domestic Sales
          function of a UK wide fuel distributor as part of a revenue growth
          programme through:
        </h2>
        <ul>
          <li>Improving call abandonment rate by 13% </li>
          <li>Reducing failure demand by 20% </li>
          <li>Improving FCR by 15% without adding to AHT </li>
          <li>Equivalent of 8 FTE released through capacity creation </li>
        </ul>
        <br />
        <h4>Background</h4>
        <p>
          We were engaged by a UK wide fuel distributor to support their
          Domestic Sales function to assess their readiness for winter. Cold
          temperatures historically increased customer contact volumes for our
          client across all channels, voice and digital. Managing the demand had
          proven difficult in previous years with a high call abandonment rate
          leading to poor customer experience, missed sales opportunities and a
          challenging working environment for the team.
        </p>
        <br />
        <h4>What did we do?</h4>
        <p>
          We completed an initial deep-dive into the operation and designed data
          and people workstreams to deliver improved customer experience and to
          mitigate the factors that were leading to missed sales opportunities.
          Within the data workstream, we redesigned the call prioritisation and
          routing strategy, which significantly increased call answer rate
          without requiring additional headcount. The operational reporting was
          overhauled to focus on the key metrics to drive quality and
          conversions.
        </p>
        <p>
          As our team is born from operations, the focus of the people
          workstream was to deliver the operational toolkit to enable the team
          to self-manage. Our consultancy approach is always to upskill and we
          operate with full transparency in terms of our toolkit and analysis.
          We worked closely with all the People Managers to ensure they were
          proficient in the toolkit.
        </p>
        <p>
          We also designed and delivered bespoke Sales training using our
          Commitment based training approach that is grounded in the theories of
          Speech Acts, Language Action and commitment based management. This was
          delivered to the full function over 3 sites and 100% of the employees
          trained confirmed that the new approach would result in an improved
          customer experience, leading to better sales conversations.
        </p>
        <br />
        <h4>The Clyde Ventures Approach</h4>
        <p>
          Our approach is to move with pace and to take the team on the journey
          with us. We delivered the full scope of the Data and People
          workstreams within an 8 week period with measurable benefits delivered
          from week 3 onwards.
        </p>
        <p>
          The Sales function has a full toolkit delivered to support them to
          manage peak demand with a better customer experience this year to
          support the delivery of the sales targets and margins.
        </p>
        <p>
          The client recognised that not only did we deliver the full scope on
          time and within budget, that everyone we came into contact with
          benefited from our decades of operational experience.
        </p>
        <p>
          If you want to discuss how our approach can help you, please contact
          Kerry Moran or Amber Morton.
        </p>
        <a
          href="mailto:Kerry.moran@clydeventures.com"
          target="_blank"
          rel="noreferrer"
          className="link"
        >
          Kerry.moran@clydeventures.com
        </a>
        <br />
        <a
          href="mailto:Amber.morton@clydeventures.com"
          target="_blank"
          rel="noreferrer"
          className="link"
        >
          Amber.morton@clydeventures.com
        </a>
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
  @media only screen and (max-width: 1170px) {
    .spacer {
      padding-top: 3rem;
    }
    .insight-content-container {
      padding: 2rem 5rem 0 2rem;
    }
  }
`;
