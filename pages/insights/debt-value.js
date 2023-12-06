import styled from 'styled-components';
import ContactSection from '../../components/contact/ContactSection';
import InsightBackgroundImage from '../../public/debt-value-background.jpg';
import HeroWithBackgroundImg from '../../components/global/HeroWithBackgroundImg';
import RossAvatar from '../../public/ross-avatar.png';
import Image from 'next/image';
import Link from 'next/link';
export default function InsightPage() {
  return (
    <StyledInsightsPage>
      <div className="spacer"></div>
      <HeroWithBackgroundImg
        image={InsightBackgroundImage}
        header="For Utility companies, understanding the value of your debt is key"
        bg={true}
        smallOnPhone={true}
      />
      <div className="insight-content-container">
        <div className="author-and-date">
          <div className="avatar-container">
            <Image src={RossAvatar} layout="fill" objectFit="cover" />
          </div>
          <p>Ross Bern - 06/12/2023</p>
        </div>
        <br />
        <h2>
          For Utility companies, understanding the value of your debt is key.
        </h2>

        <p>
          Do you know the value of your Debt? Although debt is an asset on the
          balance sheet, too much customer debt is a serious indicator of
          technical and operational challenges.{' '}
        </p>
        <p>
          Utility companies face the further challenge of driving debt
          collection in a sector that is known to have data issues, exacerbated
          by historical billing system migrations and poor collection rates
          relating to aged debt.
        </p>
        <p>
          We supported a client to unlock the potential in their debt book using
          our data skills and industry knowledge.
        </p>
        <br />
        <h4>Background</h4>
        <p>
          In August 2023, our data analysts were engaged by a UK Water retailer
          to estimate the amount of debt related to leakage, to segment their
          aged debt portfolio by debt age, and to suggest an enduring method of
          dealing with suspected leakage. At the start of the engagement, our
          client was intending to proceed with a pence-in-the-pound debt sale
          for its entire aged debt portfolio; the best offer on the table at
          that time was not attractive.
        </p>
        <p>
          Using our data modelling expertise alongside our deep industry
          knowledge of the retail and wholesale arrangements in the UK water
          market, the Clyde Ventures team was able to devise a new strategy for
          the aged portfolio which would maximise returns.
        </p>
        <br />
        <h4>We quickly identified that:</h4>
        <ul>
          <li>
            Although the value of debt due to leakage had been overstated, the
            overstatement was not as large as our client had initially feared
            &#8211; the Clyde Ventures team was able to give a confident
            estimate of 6% overstatement, a considerable reduction of our
            client&apos;s own initial in-house estimate of 30%.
          </li>
          <br />
          <li>
            20% of closed accounts were linked to active customer accounts.{' '}
          </li>
          <br />
          <li>
            The current thresholds used to detect high consumption / potential
            leakage had been set too high &#8211; leading to opportunities for
            early investigation being missed.
          </li>
        </ul>
        <br />
        <h4>What did we do?</h4>
        <p>
          Based on our findings we delivered in three main areas for our client:
          our revised segmentation of the debt file recommended new debt
          collection strategies; our leakage detection algorithm reduced the
          amount of debt that would need to be written off as potentially due to
          leakage; and, our leak validation analysis suggested that high
          consumption / potential leakage thresholds should be revised downwards
          by 20%.
        </p>
        <p>In our 8-week engagement we: </p>
        <ul>
          <li>
            Improved historical data by splicing reading data into invoice data
            - information which had been lost during migration.
          </li>
          <br />
          <li>
            Improved the data quality of the debt file with the aim of reducing
            customer queries and improving collection rates.
          </li>
          <br />
          <li>
            Revised the leak detection / high consumption thresholds implemented
            in the new billing software to allow earlier detection of leakage.
          </li>
          <br />
          <li>
            Re-segmented the accounts allowing an additional 18% of the
            portfolio to undergo collection activity.{' '}
          </li>
          <br />
          <li>
            Delivered a fully segmented debt portfolio with distinct collection
            approaches recommended for each segment.
          </li>
        </ul>
        <p>
          From our approach it emerged that an uplift of potentially £2.3m was
          available to our client, representing a potential £2m improvement on
          their initial strategy of proceeding with a pence-in-the-pound sale.
          Our client has a much better understanding of the value of its debt.{' '}
        </p>
        <p>
          With our combination of data expertise, very thorough understanding of
          utilities customer and billing data gained over many years, and our
          operational experience of managing collections and recoveries, Clyde
          Ventures can help you to unlock the potential of your debt: with Clyde
          Ventures, you&apos;ll know the value of your debt.{' '}
        </p>
        <br />
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
  @media only screen and (max-width: 1170px) {
    .spacer {
      padding-top: 3rem;
    }
    .insight-content-container {
      padding: 2rem 5rem 0 2rem;
    }
  }
`;
