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
        header="Reduced Unbilled resulting in collections uplift of £20m over 18 months"
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
          Our client a mid-sized, multi brand Utility company supplying energy
          to 170,000 customers, UK wide, required support to significantly
          decrease the unbilled position across both brand portfolios; an issue
          created by data quality issues and limitations within the CRM and
          billing systems which differed for each brand.
        </p>

        <br />
        <h3>What did we do?</h3>
        <ul>
          <li>
            Carried out data reconciliation work to ensure an accurate position
            and to support the accurate categorisation and segmentation of
            customers.
          </li>
          <li>
            Utilised this segmentation to target pots of customers with the most
            appropriate resolution for their root cause.{' '}
          </li>
          <li>
            Full diagnostic conducted using payment, metering, billing, debt and
            complaints data, and subsequent relational assessment to understand
            barriers to billing{' '}
          </li>
          <li>
            Categorisation, segmentation and root cause analysis of entire
            unbilled portfolio, using bulk and individual testing to validate
            findings or support further segmentation.{' '}
          </li>
          <li>
            Implementation of a process for the handling of unbilled with a
            reprioritisation by volumes and values of these segmented pots of
            customers.{' '}
          </li>
          <li>
            Assessment of all systemic rules across both CRMs to see where
            actions can be taken to amend certain parameters, if applicable.{' '}
          </li>
          <li>
            Improved reporting and analytics built out to ensure accountability
            and tracking of progress.{' '}
          </li>
          <li>
            Identification of other areas impacting unbilled position to create
            multiple cross-departmental workstreams (e.g., Erroneous EAC/AQ for
            meter reads, no DD set-up).
          </li>
          <li>
            Management of all related billing concerns and activity with a new
            strategic approach, reprioritising how complaints were handled to
            maximise impact of this approach.{' '}
          </li>
        </ul>
        <br />
        <h3>Benefits Realised</h3>
        <ul>
          <li>
            The clearance of £23.3m of unbilled, ensuring the number of accounts
            classed as overdue was less than 7% of the portfolio.
          </li>

          <li>
            The relevant actions that impacted other departments also led to a
            £9.7m increase in revenue through optimisation of direct debit
            reviews (£4.8m), final payment collection processes (£1.9m) and a
            more refined and aligned approach to revenue collection between our
            billing and revenue assurance teams (£2.8m).
          </li>
          <li>
            Improved data quality control framework and portfolio reporting
            providing insight on a plethora of items including billing status,
            COT status, metering detail and debt risk.
          </li>

          <li>
            A more efficient set of parameters and rules within the systems
            aligned to the business values and risk appetite
          </li>
        </ul>
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
