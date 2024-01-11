import styled from 'styled-components';
import ContactSection from '../../components/contact/ContactSection';
import InsightBackgroundImage from '../../public/service-standards-background.jpg';
import HeroWithBackgroundImg from '../../components/global/HeroWithBackgroundImg';
import KerryAvatar from '../../public/kerry-avatar.png';
import Graphic1 from '../../public/EBIT blog 2 graphic.png';
import Graphic2 from '../../public/model-supplier-chart.png';
import Graphic3 from '../../public/highest-supplier-chart.png';
import Graphic4 from '../../public/lowest-supplier-chart.png';
import Image from 'next/image';
export default function InsightPage() {
  return (
    <StyledInsightsPage>
      <div className="spacer"></div>
      <HeroWithBackgroundImg
        image={InsightBackgroundImage}
        header="Energy Retailers: Elevating service standards while controlling downside risk to margin"
        bg={true}
        smallOnPhone={true}
      />
      <div className="insight-content-container">
        <div className="author-and-date">
          <div className="avatar-container">
            <Image src={KerryAvatar} layout="fill" objectFit="cover" />
          </div>
          <p>Kerry Moran - 11/01/2024</p>
        </div>
        <br />
        <h2>
          Can suppliers deliver an improved service for consumers while
          remaining profitable in current market conditions?
        </h2>
        <br />
        <h4>The Challenge</h4>
        <p>
          As discussed in an earlier blog in this series, there is an undeniable
          need for marked improvement in the level of service provided across
          the board in the U.K energy sector. Long wait times, substandard
          complaint handling and convoluted processes have all been cited as
          contributing factors to erosion of consumer trust in the sector and
          triggered reform by the regulator. While the customer should be at the
          heart of the drive for improving standards in the provision of service
          there is, or should be, another motivating factor for suppliers to
          transform customer operations – reducing operating costs and in turn
          erosion of already tight margins.
        </p>
        <br />
        <h4>Margin Erosion - The Reality</h4>
        <p>
          In lieu of innovation in the sector and genuine commitment to change,
          the downside risks to margin within customer operations for a supplier
          is truly unlimited. The provision of service is often where the
          largest margin leakage occurs, with operating costs being the main
          controllable within the cost cap for retailers. In our opening blog of
          the series, we presented analysis that demonstrated a
          &lsquo;model&rsquo; supplier both in terms of efficiency and service
          provision would have margin erosion of approximately 20%, this
          encompassed several downside risks such as external complaint costs,
          back billing and guaranteed standards payments and assumed that all
          external complaints incurred an ombudsman fee and the average goodwill
          cost.
        </p>
        <p>
          If we take for example, external complaint costs, the exceptional
          5-star supplier would have 5 complaints per 10,000 customers escalated
          to the ombudsman at a cost of approximately £340 (Full fee) per case,
          naturally this is not accounted for within the operating cost
          methodology and any service failure costs are impacting the bottom
          line- this performance would see 1% margin erosion on external
          complaints management costs alone. The reality is that no supplier is
          currently operating anywhere close to this 5-star performance. Using
          the most recent citizens advice rating we have completed analysis that
          shows, by failing to handle complaints through internal processes:
        </p>
        <ul>
          <li>
            The top performing supplier is potentially losing ~3% of margin
          </li>
          <li>
            The lowest performing supplier is potentially losing ~15% of margin{' '}
          </li>
        </ul>
        <p>
          This does not account for other complaint associated costs such as
          goodwill payments when complaints are closed internally or cost of
          repeat contact, Table 1.1 and 1.2 outlines the methodology.{' '}
        </p>
        <div className="graphic-one-container">
          <Image
            src={Graphic1}
            layout="responsive"
            objectFit="cover"
            objectPosition="center"
          />
        </div>
        <br />
        <h4>External Complaint Margin Erosion</h4>
        <div className="market-erosion-grid">
          <div className="erosion-image-container">
            <Image src={Graphic2} layout="responsive" objectFit="cover" />
          </div>
          <div className="erosion-image-container">
            <Image src={Graphic3} layout="responsive" objectFit="cover" />
          </div>
          <div className="erosion-image-container">
            <Image src={Graphic4} layout="responsive" objectFit="cover" />
          </div>
        </div>
        <br />
        <p>
          The wholesale gas crisis effectively closed the market for switching,
          this further reduced the levers suppliers could pull to recover margin
          leakage- for context to cover the cost of one single ombudsman
          complaint you would need to acquire c.10 customers not accounting for
          the cost of acquisition itself- therefore, the only real option is to
          transform customer operations to be leaner and truly customer centric
          and this will go a long way in inspiring consumer trust in the
          industry and reducing operating costs to protect margin.{' '}
        </p>
        <br />
        <h4>Drivers for Transformation </h4>
        <p>
          With the new consumer standards reform stating that suppliers must now
          publish their quarterly CAB rating, there is likely to be increased
          consumer and media interest in levels of performance suppliers are
          delivering. The reputational risk coupled with the gradual reopening
          of the switching market, means it is likely that there will be an
          enhanced strategic focus on performing well in these metrics. The CAB
          service KPI&apos;s of ease of contact and external complaints
          escalation are a good measurement of provision of service as a
          headline but what they don&apos;t recognise are the disparate
          processes, the nuances of the energy sector and fail to give credit to
          the management of the details that deliver top performance in these
          metrics. That is where Clyde Ventures vast operational experience can
          support your transformation, our teams have borne the scars and
          delivered innovative solutions to your problems of today. We
          specialise in achieving this while delivering cost benefit to the
          business through reducing operating costs.
        </p>
        <p>
          Effective management of CAB is key, we can support your strategic
          approach to achieving top level bandings both from a &lsquo;mind the
          gap&rsquo; perspective and from an operational transformation
          perspective to deliver exceptional service for your customers and
          begin to build trust in the wider industry.{' '}
        </p>
        {/* BREAK */}
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
    padding: 3rem 3rem 0 3rem;
    max-width: 1200px;
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
    margin-top: 2rem;
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

  .market-erosion-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
    .erosion-image-container {
      position: relative;
    }
  }

  @media only screen and (max-width: 1170px) {
    .market-erosion-grid {
      grid-template-columns: repeat(1, 1fr);
    }
    .spacer {
      padding-top: 3rem;
    }
    .insight-content-container {
      padding: 2rem 2rem 0 2rem;
    }
    .graphic-three-container {
      width: 100%;
    }
  }
`;
