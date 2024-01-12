import styled from 'styled-components';
import ContactSection from '../../components/contact/ContactSection';
import InsightBackgroundImage from '../../public/case-study-background.jpg';
import HeroWithBackgroundImg from '../../components/global/HeroWithBackgroundImg';
import Image from 'next/image';
import Link from 'next/link';
import KerryAvatar from '../../public/kerry-avatar.png';
import CaseStudyGrid from '../../components/CaseStudyGrid';
export default function InsightPage() {
  return (
    <StyledInsightsPage>
      <div className="spacer"></div>
      <HeroWithBackgroundImg
        image={InsightBackgroundImage}
        header="Implemented operational excellence and developed a new Target
        Operating Model to reduce headcount by 25%"
        bg={true}
        smallOnPhone={true}
        transparent={true}
      />
      <div className="insight-content-container">
        <div className="author-and-date">
          <div className="avatar-container">
            <Image src={KerryAvatar} layout="fill" objectFit="cover" />
          </div>
          <p>Kerry Moran</p>
        </div>
        <br />
        <h3>Background</h3>
        <p>
          Our client, a U.K wide fuel distributor, was running an inefficient
          operation which was top heavy with management and laden with disparate
          processes and unnecessarily high operating costs. This was a factor in
          an underperforming sales operation and dissatisfied customers and
          staff. We were engaged to assess the current design operation with the
          view of designing an optimal target operating model to facilitate
          growth while reducing Opex.
        </p>

        <br />
        <h3>What did we do?</h3>
        <ul>
          <li>
            We conducted discovery to establish the clients business strategy,
            &lsquo;as-is&rsquo; operating model and used this to shape
            recommendations on what the target operating model should look like
            To examine the current operating model, we divided it into 4 main
            sections:
          </li>
          <ul className="left-indent">
            <li>
              <strong>Process</strong> What processes and activities are
              currently in place and how do they operate?
            </li>
            <li>
              <strong> Organisation </strong>
              How does the business currently organise its employees and how do
              those employees collaborate and work together?
            </li>
            <li>
              <strong>Technology </strong>
              What technology does the business currently rely in order to carry
              out its processes? How does the use of these technologies impact
              the business?
            </li>
            <li>
              <strong>Data & Information </strong>What Data and Information does
              the business have access to? How can that data be used to draw
              insights and improve visibility of operations?
            </li>
          </ul>
          <li>
            Our team used a range of techniques to gather the required
            information of the current operating model such as Stakeholder maps,
            manager Interviews, advisor Interviews, Workshops, business data
            analysis, site visits and call listening. We then synthesised this
            information and insight to determine the key pain points in the
            operation.
          </li>
          <li>
            We designed innovative solutions to these pain points and made our
            recommendations based on impact assessment vs ease of
            implementation.
          </li>
        </ul>
        {/* BREAK */}
        <br />
        <h3>Benefits Realised</h3>
        <ul>
          <li>
            Standardisation across teams and the wider operation, creating
            efficiencies that contributed to a reduction in failure demand by
            20%.
          </li>
          <li>An equivalent of 8 FTE released through capacity creation.</li>
          <li>
            Advisor influenced performance improvement in key metrics such as15%
            increased FCR with no increase to AHT, due to a blend of process
            improvement, increased autonomy and robust spans of control with
            management team restructuring.
          </li>
        </ul>
      </div>
      <div className="button-container">
        <CaseStudyGrid />
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
  .left-indent {
    margin-left: 2rem;
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
