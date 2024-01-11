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
        header="Experienced with 3rd party integrations within the Salesforce ecosystem, including billing and industry data "
        bg={true}
        smallOnPhone={true}
        transparent={true}
      />
      <div className="insight-content-container">
        {/* <div className="author-and-date">
          <div className="avatar-container">
            <Image src={KerryAvatar} layout="fill" objectFit="cover" />
          </div>
          <p>Kerry Moran - 29/11/2023</p>
        </div>
        <br /> */}
        <h3>Background</h3>
        <p>
          Our client provides leading utilities across the world with innovative
          cleantech solutions. Working with some of the world's biggest energy
          and water companies, as well as innovative challenger brands, they
          help companies reshape what it means to be a utilities business. They
          have been unsuccessful in breaking into the UK water retail market as
          their proposition didn&apos;t resonate with the operational and
          strategic considerations of potential customers by linking the product
          to Outcome Delivery Incentives and PR24 Price Control.
        </p>

        <br />
        <h3>What did we do?</h3>
        <ul>
          <li>
            Water industry and Outcome Delivery Incentive training documentation
            generated with recommendations, referencing as-is CRM functionality,
            and future state roadmap Assessments and recommendations for changes
            to existing processes produced, to align to the operational
            requirement of potential customers.{' '}
          </li>

          <li>
            Workflows and journeys created for key processes in deployable
            modules to support operational processes.{' '}
          </li>

          <li>
            Functionality and sales briefs created for each workflow developed
            to support demonstrations and upskilling of sales resource.{' '}
          </li>

          <li>
            Key stakeholder engagement progressed, highlighting key areas of
            importance in the water industry.{' '}
          </li>
        </ul>
        <br />
        <h3>Benefits Realised</h3>
        <p>
          Greater clarity of the ongoing strategy was created at executive level
          along with improved product development direction. The value risk and
          return model was surfaced to enhance understanding of how to
          communicate product value. The product was enhanced for the current
          market strategy, with components that can be readily modified for
          other markets and utilities. Concurrently, the current and in
          development functionality was tied back to Outcome Delivery Incentives
          and value model in a way that sales strategy can be more easily
          customised for each prospective customer. The value model was
          demonstrated to key stakeholders tied back to the functionality
          created, giving a clearer understanding of how the roadmap can be
          developed to highlight value to prospective customers.{' '}
        </p>
        {/* BREAK */}
        <br />
        <p>
          With our combination of data expertise, thorough understanding of
          utilities customer and billing data gained over many years, Clyde
          Ventures can help you to transform your billing operation unlocking
          potential revenue and minimising regulatory risk.
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
