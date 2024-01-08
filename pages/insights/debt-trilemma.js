import styled from 'styled-components';
import ContactSection from '../../components/contact/ContactSection';
import InsightBackgroundImage from '../../public/blog-debt-trilemma/debt-trilemma-background.jpg';
import HeroWithBackgroundImg from '../../components/global/HeroWithBackgroundImg';
import Graphic2 from '../../public/debt-graphic.png';
import KerryAvatar from '../../public/kerry-avatar.png';
import Image from 'next/image';
import Link from 'next/link';
export default function InsightPage() {
  return (
    <StyledInsightsPage>
      <div className="spacer"></div>
      <HeroWithBackgroundImg
        image={InsightBackgroundImage}
        header="Energy Retailers: Addressing the Debt Trilemma."
        bg={true}
        smallOnPhone={true}
      />
      <div className="insight-content-container">
        <div className="author-and-date">
          <div className="avatar-container">
            <Image src={KerryAvatar} layout="fill" objectFit="cover" />
          </div>
          <p>Kerry Moran - 08/01/2024</p>
        </div>
        <br />
        <h2>
          Can trust be rebuilt in the industry through support of indebted
          customers, while simultaneously managing operating cost constraints
          and enhancing financial resilience?
        </h2>

        <h4>The Challenge</h4>
        <p>
          In the retail energy market, debt collection requires a balanced and
          customer-centric approach. With Clyde Ventures extensive experience in
          improving collections activities in utilities, we have developed
          strategies to improve debt recovery while maintaining positive
          customer relationships by combining effective communication,
          technological solutions and flexibility.
        </p>
        <p>
          The solution sounds simple, so why then have Ofgem released debt and
          arrears data that indicates an industry in the grip of a debt related
          crisis&#185;? Key messages from the report:
        </p>
        <ul>
          <li>
            A 50% increase in debt and arrears for Q3 2023 when compared with Q3
            2022. Rising by £1bn to reach c.£3bn
          </li>

          <li>
            The number of smart-PPM self-disconnections for electricity
            customers rose by 26% in Q2 2023 to 2,074,294 compared to 1,652,501
            in Q1 2022
          </li>

          <li>
            The last year has seen substantial increases in average arrears,
            where there is no arrangement to pay reaching £1,214 for electricity
            and £1,037 for gas in Q3 2023 (up by 31% for electricity, and 51%
            for gas compared to Q3 2022).
          </li>
        </ul>
        <p>
          The pandemic and the immediate impact on some consumers income&#178;,
          coupled with the exceptional circumstances of the gas price crisis and
          nationwide cost of living crisis have contributed to a &lsquo;perfect
          storm&rsquo;, leading to real challenges for consumers in paying their
          energy bills and increasing pressures on suppliers carrying
          significant increased debts. It is estimated that in period 10a (Q2
          2023) debt related costs represented approximately; 6% of typical dual
          fuel standard credit bills, 1% of typical dual fuel direct debit bills
          and 0.4% of typical dual fuel prepayment meter (PPM) bills. Currently
          debt related costs are accounted for within 3 key areas of the price
          cap:
        </p>
        <ul>
          <li>Operating Cost Allowance</li>
          <li>EBIT</li>
          <li>Payment Method Uplift</li>
        </ul>
        <p>
          In recognition of unprecedented debt levels, Ofgem has unveiled
          proposals aimed at safeguarding the energy market and supporting
          consumers at risk of accumulating unmanageable debt, a suggested
          adjustment to the price cap of £16. It is up for debate as to whether
          this cross subsidisation amongst consumers is the correct approach.
        </p>
        <br />
        <h4>The Debt &lsquo;Trilemma&rsquo; </h4>
        <p>
          There is no escaping that debt is a critical problem of today,
          impacting all stakeholders from consumers to regulators and suppliers.
          The energy trilemma in it&apos;s broadest form is often discussed, at
          Clyde Ventures we believe the energy trilemma is experienced by
          consumers in a tangible way through the debt crisis, it is the
          responsibility of the supplier is to take care of this particular
          trilemma in the home.
        </p>
        <p>
          This is intrinsically linked to how suppliers should approach
          developing their strategy for supporting indebted customers while
          ensuring their collection processes are fit for purpose both now, and
          in the future. Approaching debt strategy through the lens of
          affordability, security and sustainability gives suppliers an
          opportunity to demonstrate real skill in their handling of indebted
          customers and it is our belief this can be used as a springboard to
          rebuild consumer trust in the industry, which will be critical as all
          stakeholders drive towards realising Net Zero ambitions. It is key
          that indebted consumers are serviced well and with care, within the
          restraints around operating costs. To allow for the next stage of
          helping to reduce costs for consumers, suppliers will be vital to the
          success of achieving this hence rebuilding trust is crucial. The
          reality of the debt (or home) trilemma is that these areas can support
          and enable the success of each other, or handled poorly can promote
          disablement and ineffectiveness.
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
        <h4>Performance Improvement Strategy </h4>
        <p>
          In the current climate, building a collections strategy in utilities
          must look beyond reminder letters, legal considerations and DCA
          partner selections. To both build consumer trust and maximise recovery
          there are steps that can be taken across all three pillars of the
          trilemma to enhance performance and deliver a positive experience for
          customers in a challenging position.
        </p>
        <br />
        <h4>Affordability</h4>
        <p>
          Utility companies face the challenge of driving debt collection in a
          sector that is known to have data issues, exacerbated by historical
          billing system migrations and poor collection rates relating to aged
          debt. To help customers address debt and affordability, suppliers must
          first understand the true value of their debt books, and the
          distinctions between can&apos;t pay and won&apos;t pay. Data is key to
          devising a successful collections strategy that will maximise returns
          and inspire faith from consumers.
        </p>
        <p>
          With our combination of data expertise, thorough understanding of
          utilities customer and billing data gained over many years, and our
          operational experience of managing collections and recoveries, Clyde
          Ventures can help you to unlock the potential of your debt.{' '}
        </p>
        <p>
          Read about how we helped a utilities client unlock a potential £2.3
          million of collectable debt here:{' '}
          <span>
            <Link href="/insights/debt-value">
              <a href="">
                For Utility companies, understanding the value of your debt is
                key
              </a>
            </Link>
          </span>
        </p>
        <h4>Security</h4>
        <p>
          Ultimately what is important to consumers can be defined as the
          &lsquo;comfortable home principle&rsquo;. The role of the supplier is
          to help consumers feel secure in their homes, able to use the energy
          they need to stay warm. Discussing debt and ability to pay can be a
          real challenge for many people. It is critical that suppliers learn
          how to &lsquo;hear the silence&rsquo; and ensure that there is a level
          of service flexibility in place that allows customers to make contact
          in a way they are comfortable. This may involve the introduction (or
          improvement) of automated payment services or enhanced digital
          offerings.
        </p>
        <p>
          Suppliers must be creative in their endeavour to reduce operational
          costs linked to cost of debt, even when many customers will require
          conversations to help them.{' '}
        </p>
        <p>
          It is vital that collections teams have not only the knowledge and
          technical skills to support customers but also are equipped with the
          skills and freedom to have authentic conversations to get it right -
          first time. Instilling confidence in your advisors in areas such as:{' '}
        </p>
        <ul>
          <li>Conflict management and negotiation </li>
          <li>Demonstrating empathy </li>
          <li>Vulnerability recognition and handling </li>
        </ul>
        <p>
          will empower collections teams to own those challenging conversations
          to support customers and deliver operational cost benefits to the
          business in improved first contact resolution and less &lsquo;bad
          debt&rsquo;.
        </p>
        <p>
          At Clyde Ventures, we provide bespoke conversation design and training
          that is grounded in language theory. Our approach with a recent
          utilities client saw 100% of advisors say that they felt confident the
          training they had received would result in a better experience for
          customers this winter. We can equip your collections teams with the
          confidence to support your customers, in the process unlocking value
          for your business.
        </p>
        <br />
        <h4>Sustainability</h4>
        <p>
          Suppliers will be instrumental in realising future opportunities and
          implementing energy efficiency schemes and incentives to achieve Net
          Zero. Rebuilding consumer trust in the industry is critical if
          suppliers are to engage customers to the required levels. Managing
          indebted customers with empathy and efficiency will go a long way in
          achieving this. We will explore this topic in more detail in a future
          blog in this series, with guidance on how to equip your organisation
          with a vulnerability strategy that utilises data, partnerships and
          people to ensure those who need it most have access to essential
          energy services and are treated with fairness and dignity.
        </p>
        <p>
          Clyde Ventures can help you assess and transform the flexibility of
          your technology, strength of your strategy and quality of your people
          training across operational debt management. To hear more about our
          approach contact Kerry Moran or Amber Morton.{' '}
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
  .graphic-one-container {
    position: relative;
    border-radius: 0.3rem;
    overflow: hidden;
    margin-bottom: 0.5rem;
  }
  @media only screen and (max-width: 1170px) {
    .spacer {
      padding-top: 3rem;
    }
    .insight-content-container {
      padding: 2rem 5rem 0 2rem;
    }
  }
  a {
    color: blue;
    text-decoration: underline;
  }
`;
