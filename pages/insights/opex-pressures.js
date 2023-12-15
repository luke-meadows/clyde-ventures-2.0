import styled from 'styled-components';
import ContactSection from '../../components/contact/ContactSection';
import InsightBackgroundImage from '../../public/blog-energy-retailers/opex-background.jpg';
import HeroWithBackgroundImg from '../../components/global/HeroWithBackgroundImg';
import KerryAvatar from '../../public/kerry-avatar.png';
import Graphic1 from '../../public/blog-energy-retailers/graphic1.png';
import Graphic2 from '../../public/blog-energy-retailers/graphic2.png';
import Graphic3 from '../../public/blog-energy-retailers/graphic3.png';
import Image from 'next/image';
export default function InsightPage() {
  return (
    <StyledInsightsPage>
      <div className="spacer"></div>
      <HeroWithBackgroundImg
        image={InsightBackgroundImage}
        header="Energy Retailers: OPEX pressures"
        bg={true}
        smallOnPhone={true}
      />
      <div className="insight-content-container">
        <div className="author-and-date">
          <div className="avatar-container">
            <Image src={KerryAvatar} layout="fill" objectFit="cover" />
          </div>
          <p>Kerry Moran - 15/12/2023</p>
        </div>
        <br />
        <h2>
          Energy Retailers: Delivering a trusted service whilst managing OPEX
          pressures.
        </h2>
        <br />
        <h4>
          Exploring how to deliver for consumers whilst managing the operating
          cost cap and mitigating downside pressures to margin.
        </h4>
        <p>
          The first of a series of blogs that seeks to support suppliers in
          answering this question, this blog sets out the context and the
          headline challenge.
        </p>
        <br />
        <h4>Background</h4>
        <p>
          In 2014, almost 90% of the U.K was supplied by the traditional
          &lsquo;big 6&rsquo; energy suppliers triggering a referral to the
          Competitions and Markert Authority. Against a backdrop of
          profitability concerns and deteriorating customer service levels, the
          findings and recommendations ultimately culminated in the 2018 Ofgem
          decision to introduce what we all know as &lsquo;The Price Cap&rsquo;.
          For consumers, the price cap was designed to encourage engagement in
          the market and protect from over-charging while providing suppliers
          the means to finance their license activities whilst remaining
          modestly profitable. Since inception, the price cap has contained an
          operating costs allowance (OPEX) based on an &lsquo;efficient
          supplier&rsquo; and the market conditions at the time, in this blog we
          will explore existing and emerging downside pressures to margin and if
          the allowance within the price cap is realistic for suppliers to
          remain profitable while servicing retail customers.
        </p>
        <br />
        <h4>The &lsquo;Efficient&rsquo; Supplier </h4>
        <p>
          The original 2018 price cap methodology&#185; centred largely around
          the premise of the &lsquo;efficient supplier&rsquo;. For each
          component of a customer&apos;s bill, an allowance was set that was
          deemed reflective of supplying energy in an efficient manner to
          consumers. Arguably, within these bill components OPEX is the main
          thing that suppliers are in control of with retailers now incentivised
          to cut costs and encourage efficiencies to protect their operating
          profit (EBIT allowance of 1.9% included in the cap). While the price
          cap includes headroom for risk and uncertainty, is the OPEX allowance
          reflective of the current landscape of servicing customers as a retail
          supplier? A review of the elements that are included in the allowance,
          the unlimited downside risks, and the requirement for substantial
          improvement in customer experience (the industry was voted the lowest
          performing sector in the U.K for customer satisfaction levels in
          2023&#178;) would suggest that this is a real challenge for even the
          most &lsquo;efficient&rsquo; supplier.
        </p>
        <br />
        <h4>Margin Analysis</h4>
        <p>
          Table 1.1 outlines the current (11a) and next (11b) price cap
          allocations by bill competent, OPEX and EBIT combined is £263
          currently, rising to £264 in the next period.
        </p>
        <div className="graphic-one-container">
          <Image
            src={Graphic1}
            layout="responsive"
            objectFit="cover"
            objectPosition="center"
          />
        </div>
        <p>Table 1.1 &#179;</p>
        <br />
        <table>
          <tbody>
            <tr>
              <th>What is included in OPEX Allowance</th>
              <th>Downside Risks</th>
            </tr>
            <tr>
              <td>
                <li>
                  <strong>Customer contact</strong>: Costs associated with
                  operation of contact centres and other customer relations
                </li>
              </td>
              <td>
                <li>
                  <strong>Cost to serve</strong>: Repeat contacts, complaints
                  and external events driving contact
                </li>
              </td>
            </tr>
            <tr>
              <td>
                <li>
                  <strong>Billing and payment collections</strong>: Billing,
                  collections, payment processing and bad debt costs.
                </li>
              </td>
              <td>
                <li>
                  <strong>Complaints</strong>: Ombudsman fees c. £340 per
                  escalated complaint.
                </li>
              </td>
            </tr>
            <tr>
              <td>
                <li>
                  <strong>Metering</strong>: Meter rental, installation,
                  maintenance, reading (including smart metering).
                </li>
              </td>
              <td>
                <li>
                  <strong>Goodwill</strong>: Average £30.
                </li>
              </td>
            </tr>
            <tr>
              <td>
                <li>
                  <strong>Sales and marketing</strong>: Meter rental,
                  installation, maintenance, reading (including smart metering).
                </li>
              </td>
              <td>
                <li>
                  <strong>Guaranteed Standards</strong>: Switching, ETs, Final
                  Bills, Switch on time, Refunds on time (£30 per failure -
                  additional £30 if not paid on time).
                </li>
              </td>
            </tr>
            <tr>
              <td>
                <li>
                  <strong>Central overhead</strong>: Telecoms, IT, property, HR,
                  regulation, corporate recharges.
                </li>
              </td>
              <td>
                <li>
                  <strong>Guaranteed Standards metering</strong>: e.g. failed
                  appointment (£30 per failure - additional £30 if not paid on
                  time).
                </li>
              </td>
            </tr>
            <tr>
              <td>
                <li>
                  <strong>Depreciation and amortisation</strong>: Depreciation
                  and amortisation, largely relating to investment in metering,
                  IT and billing systems, and property.
                </li>
              </td>
              <td>
                <li>
                  <strong>Back billing</strong>: Unable to charge for charges
                  over 12 months.
                </li>
              </td>
            </tr>
            <tr>
              <td>
                <li>
                  <strong>Industry charges</strong>: Charges from Elexon,
                  Xoserve, and the smart metering industry bodies.
                </li>
              </td>
              <td>
                <li>
                  <strong>Meter Reads</strong>: DR costs if customers do not
                  give meter reads.
                </li>
              </td>
            </tr>
            <tr>
              <td className="no-border"></td>
              <td>
                <li>
                  <strong>PPM</strong>: Wind on costs, emergency credits.
                </li>
              </td>
            </tr>
            <tr>
              <td className="no-border"></td>
              <td>
                <li>
                  <strong>Ofgem fines</strong>: For non-compliance e.g. treating
                  customers fairly.
                </li>
              </td>
            </tr>
            <tr>
              <td className="no-border"></td>
              <td>
                <li>
                  <strong>Energy Theft</strong>: Penalties.
                </li>
              </td>
            </tr>
          </tbody>
        </table>
        <p>Table 1.2</p>
        <p>
          The downside risk is unlimited, table 1.2 details what is included in
          the OPEX allowance and what other potential costs a supplier may
          incur, whether this is for service penalties or the cost of providing
          services for consumer groups it puts pressure on the £43 per dual fuel
          EBIT allowance per customer in the cap (period 11b).
        </p>
        <p>
          We have conducted analysis (table 1.3), that demonstrates that with
          the current OPEX allowance, even a high performing supplier, operating
          efficiently and achieving all external and typical internal metrics,
          will have margin erosion of approximately 20%. We have been
          conservative in our approach, given this is what would be considered a
          model supplier, not all downside risks have been incorporated:{' '}
        </p>
        <div className="graphic-one-container">
          <Image
            src={Graphic2}
            layout="responsive"
            objectFit="cover"
            objectPosition="center"
          />
        </div>
        <br />
        <p>
          It is worthwhile noting, that the original design of the opex cost cap
          presents a challenge to suppliers achieving the maximum 1.9% EBIT. The
          methodology included taking the costs of a lower quartile performer,
          hence benchmarking the opex costs below 75% of the market at that
          time- and then deducted a further £5 per duel fuel customer. The graph
          below illustrates the reality of the maximum margin that can be
          retained for a supplier who is not only high performing in terms of
          efficiencies in operating costs but is also a model supplier in the
          provision of service.
        </p>
        <div className="spacer2"></div>
        <div className="graphic-three-container">
          <Image
            src={Graphic3}
            layout="responsive"
            objectFit="contain"
            objectPosition="center"
          />
        </div>
        <br />
        <h4>Consumer Standards Reform - Additional Margin Pressure? </h4>
        <p>
          The September 2023 Citizens&apos; Advice supplier ratings scored 89%
          of suppliers less than 3.5/5 for overall service and more than half of
          suppliers rated 1/5 for complaints, coupled with a sharp decline in
          consumer trust in the industry to &lsquo;do the right thing&rsquo;
          &#8308;, this reform is welcome. There is no denying there is a need
          for a shake up in the level of service given to consumers as we look
          to rebuild trust in the industry, although it could be argued that a
          review of current CAB bandings is needed against a backdrop of
          tumultuous market conditions, customer anxiety and the cost-of-living
          crisis.
        </p>
        <p>
          During the original 2018 consultation some suppliers highlighted
          concerns that under the price cap there could be a decline in customer
          service. Driven in part by constrained Opex, increasing risks,
          increased demands driven by the wholesale market crisis and covid, and
          declining external performance ratings, it could be said this has come
          to fruition. The new Consumer Standards Reform launching this month
          will place additional expectations on suppliers around customer
          service to deliver reduced wait times, extended opening hours and more
          proactive support of vulnerable customers with no increase in OPEX
          allowance. Concerns were raised during the reforms however the
          regulator declined to review OPEX allowance in line with the new
          licencing conditions.
        </p>
        <br />
        <h4>Controlling Your Downside Risk</h4>
        <p>
          While there is discussion to be had around whether policy makers need
          to assess their recommendations on additional services, increased
          commercial exposure and an expectation of increased investment within
          the context of a sustainable market, our upcoming blog series will
          share our operational expertise to provide insight into how to survive
          current industry conditions. We will share insights on how to reduce
          OPEX and control downside risk, protecting margin from being decimated
          at the same time as committing to delivering a great customer
          experience.
        </p>
        <p>
          Clyde Ventures has recognised these areas as key levers suppliers can
          pull to minimise margin erosion and we will explore each challenge
          with tactical and strategic recommendations in a dedicated series over
          the coming weeks:
        </p>
        <ul>
          <li>The Debt Challenge.</li>
          <li>Cost to Serve challenge: Service and Complaints.</li>
          <li>Cost to Serve challenge: Metering and Settlement. </li>
          <li>Cost to Serve challenge: Billing & Back Billing.</li>
          <li>Cost to Serve challenge: Vulnerable Customers.</li>
        </ul>
        <p>
          For more information on how we can help you reduce your cost while
          transforming your customer operations for excellence, contact Kerry
          Moran or Amber Morton.
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
        <br />
        <br />
        <h4>References</h4>
        <a
          href="https://www.ofgem.gov.uk/sites/default/files/docs/2018/11/decision_-_default_tariff_cap_-_overview_document_0.pdf"
          target="_blank"
          rel="noreferrer"
          className="link"
        >
          &#185; Default Tariff Cap - Overview Document (ofgem.gov.uk)
        </a>
        <br />
        <a
          href="https://www.instituteofcustomerservice.com/product/ukcsi-the-state-of-customer-satisfaction-uk-jul-23/"
          target="_blank"
          rel="noreferrer"
          className="link"
        >
          &#178; UKCSI - The state of customer satisfaction in the UK - July
          2023 ⋆ Institute of Customer Service
        </a>
        <br />
        <a
          href="https://www.ofgem.gov.uk/sites/default/files/2023-11/Default%20Tariff%20Cap%20Letter%20for%201%20January%202024.pdf"
          target="_blank"
          rel="noreferrer"
          className="link"
        >
          &#179; Default Tariff Cap update (ofgem.gov.uk)
        </a>
        <br />
        <a
          href="https://www.instituteofcustomerservice.com/product/ukcsi-the-state-of-customer-satisfaction-uk-jul-23/"
          target="_blank"
          rel="noreferrer"
          className="link"
        >
          &#8308; UKCSI - The state of customer satisfaction in the UK - July
          2023 ⋆ Institute of Customer Service
        </a>
        <div className="spacer"></div>
      </div>
      <ContactSection />
    </StyledInsightsPage>
  );
}
const StyledInsightsPage = styled.section`
  .spacer {
    padding-top: 7.5rem;
  }
  .spacer2 {
    padding-top: 1.5rem;
  }
  .insight-content-container {
    padding: 3rem 5rem 0 3rem;
    max-width: 1000px;
    margin: 0 auto;
  }
  h2 {
    font-weight: 500;
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
  .graphic-one-container {
    margin-top: 3rem;
    position: relative;
    border-radius: 0.3rem;
    overflow: hidden;
    margin-bottom: 0.5rem;
  }
  .graphic-three-container {
    position: relative;
    border-radius: 0.3rem;
    overflow: hidden;
    margin-bottom: 0.5rem;
    width: 50%;
    /* margin: 0 auto; */
  }
  table {
    width: 100%;
  }

  th,
  td {
    border: 1px solid black;
  }
  th,
  td {
    text-align: left;
    padding: 0.5rem;
    width: 50%;
  }
  th {
    font-size: 1.2rem;
    padding: 0.5rem;
    text-align: center;
  }
  td {
    vertical-align: top;
  }

  @media only screen and (max-width: 1170px) {
    .spacer {
      padding-top: 3rem;
    }
    .insight-content-container {
      padding: 2rem 5rem 0 2rem;
    }
    .graphic-three-container {
      width: 100%;
    }
  }
`;
