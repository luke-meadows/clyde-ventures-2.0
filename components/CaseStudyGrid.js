import Link from 'next/link';
import styled from 'styled-components';
export default function CaseStudyGrid() {
  return (
    <StyledCaseStudyGrid>
      <h1>Case Studies</h1>
      <div className="case-studies-grid">
        <div className="row">
          <div className="column-header row-left">Client Requirement</div>
          <div className="column-header row-right">Why Clyde Ventures?</div>
        </div>
        {/* BREAK */}
        <div className="row">
          <div className="row-left">
            Improve data quality and optimise debt recovery.
          </div>
          <div className="row-right">
            Reduced unbilled debt resulting in collections uplift of £20m over
            18 months{' '}
            <Link href="/insights/data-cleanse">
              <a href="">Case Study</a>
            </Link>
          </div>
        </div>
        <div className="row">
          <div className="row-left">
            Analyse a portfolio of legacy accounts to optimise the returns on a
            proposed debt sale.
          </div>
          <div className="row-right">
            Confirmed the level of debt associated with leakage and segmented
            the cleansed portfolio to deliver a £2m upside.{' '}
            <Link href="/insights/debt-value">
              <a href="">Case Study</a>
            </Link>
          </div>
        </div>
        <div className="row">
          <div className="row-left">
            Improve operational controls and enhance exceptions management.
          </div>
          <div className="row-right">
            Developed a process control and exceptions management framework to
            facilitate the collection of over £13M in debt{' '}
            <Link href="/insights/controls-and-exception-management">
              <a href="">Case Study</a>
            </Link>
          </div>
        </div>
        <div className="row">
          <div className="row-left">
            Improve operational resilience during peak demand.
          </div>
          <div className="row-right">
            Conducted a LEAN review across a client&apos;s operations to deliver
            £1.95M in benefits{' '}
            <Link href="/insights/domestic-sales">
              <a href="">Case Study</a>
            </Link>
          </div>
        </div>
        <div className="row">
          <div className="row-left">
            Develop a value proposition to facilitate market entry.
          </div>
          <div className="row-right">
            Developed a value model linking operational activities to optimise
            regulatory outcome delivery incentives{' '}
            <Link href="/insights/integration-platform">
              <a href="">Case Study</a>
            </Link>
          </div>
        </div>
        <div className="row">
          <div className="row-left">Develop Target Operating Model.</div>
          <div className="row-right">
            Implemented operational excellence and developed a new Target
            Operating Model to reduce headcount by 25%{' '}
            <Link href="/insights/operating-model">
              <a href="">Case Study</a>
            </Link>
          </div>
        </div>
        <div className="row">
          <div className="row-left">
            Assess the viability of investing in a Technology start up.
          </div>
          <div className="row-right">
            Conducted financial and operational due diligence on a technology
            led, energy retailer to provide assurance to support our
            client&apos;s proposed $20m investment{' '}
            <Link href="/insights/due-diligence">
              <a href="">Case Study</a>
            </Link>
          </div>
        </div>
      </div>
    </StyledCaseStudyGrid>
  );
}
const StyledCaseStudyGrid = styled.div`
  max-width: 1800px;
  padding: 3rem 5rem;
  margin: 0 auto;
  h1 {
    margin-bottom: 1rem;
    font-weight: 500;
  }
  .case-studies-grid {
    border: 1px solid black;
    .row {
      display: flex;
      div {
        padding: 0.5rem 1rem;
        flex: 1;
        border: 1px solid black;
      }
      .column-header {
        font-weight: 600;
        font-size: 1.4rem;
      }
    }
    .row-left {
      background: var(--yellow2);
    }
    .row-right {
      background: var(--grey2);
    }
    a {
      text-decoration: underline;
      color: blue;
    }
  }
  @media only screen and (max-width: 900px) {
    padding: 3rem 1.5rem 3rem 1.5rem;
  }
`;
