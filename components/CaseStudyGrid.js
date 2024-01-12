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
            Analyse a portfolio of legacy accounts to optimise the returns on a
            proposed debt sale.
          </div>
          <div className="row-right">
            Confirmed the level of debt associated with leakage and segmented
            the cleansed portfolio to deliver a £2m upside.
            <Link href="/insights/data-cleanse">
              <a href="">Case Study</a>
            </Link>
          </div>
        </div>
        <div className="row">
          <div className="row-left">
            Analyse a portfolio of legacy accounts to optimise
          </div>
          <div className="row-right">
            Created a data quality framework to facilitate Account Maintenance
            and reduce Debt write off{' '}
            <Link href="/insights/debt-value">
              <a href="">Case Study</a>
            </Link>
          </div>
        </div>
        <div className="row">
          <div className="row-left">Controls and Exception Management</div>
          <div className="row-right">
            Developed a process control and exceptions management framework{' '}
            <Link href="/insights/controls-and-exception-management">
              <a href="">Case Study</a>
            </Link>
          </div>
        </div>
        <div className="row">
          <div className="row-left">Single Customer View</div>
          <div className="row-right">
            Qualified Lean practitioners and adept customer customer centric
            service design{' '}
            <Link href="/insights/domestic-sales">
              <a href="">Case Study</a>
            </Link>
          </div>
        </div>

        <div className="row">
          <div className="row-left">Operational Excellence</div>
          <div className="row-right">
            Experienced consultants uniquely positioned to deliver value from
            ODI activity alignment{' '}
            <Link href="/insights/integration-platform">
              <a href="">Case Study</a>
            </Link>
          </div>
        </div>
        <div className="row">
          <div className="row-left">Operating Model Design</div>
          <div className="row-right">
            Operational experts skilled in TOM optimisation{' '}
            <Link href="/insights/operating-model">
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
    padding: 0rem 1.5rem 2rem 1.5rem;
  }
`;
