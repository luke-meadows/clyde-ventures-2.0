import Link from 'next/link';
import styled from 'styled-components';
export default function MicroServicesGrid2() {
  const options = [
    { title: 'Product Design', url: '/insights/integration-platform' },
    { title: 'Due Diligence', url: '/insights/due-diligence' },
    { title: 'Debt Management', url: '/insights/debt-value' },
    { title: 'Cashflow Management', url: '/insights/data-cleanse' },
    { title: 'Target Operating Models', url: '/insights/operating-model' },
    { title: 'OPEX Reduction', url: '/insights/domestic-sales' },
    {
      title: 'Customer Acquisition to Profit',
      url: '/insights/opex-pressures',
    },
    { title: 'Regulatory Strategies', url: '/insights/service-standards' },
  ];
  return (
    <Container>
      <div className="inner">
        <h3>Scope</h3>
        <StyledGrid>
          {options.map((option, i) => {
            return (
              <Link key={i} href={option.url}>
                <a>
                  {option.title}
                  <i className="icon-angle-right" />
                </a>
              </Link>
            );
          })}
        </StyledGrid>
      </div>
    </Container>
  );
}

const Container = styled.div`
  background: var(--white2);
  padding: 5rem;
  .inner {
    max-width: 1600px;
    margin: 0 auto;
    h3 {
      padding-bottom: 2rem;
      font-weight: 500;
    }
  }
  @media only screen and (max-width: 1170px) {
    padding: 3rem 2rem;
  }
`;
const StyledGrid = styled.div`
  width: fit-content;
  display: grid;
  grid-template-columns: repeat(4, auto);
  gap: 1.2rem 5rem;

  a {
    color: var(--black);
    font-size: 0.9rem;
    font-weight: 500;
    border-bottom: 2px solid var(--yellow2);
    padding-bottom: 0.25rem;
    width: fit-content;
    transition: scale 0.2s ease-in-out;
    &:hover {
      scale: 1.05;
    }
    i {
      margin-right: -0.5rem;
    }
  }
  @media only screen and (max-width: 1170px) {
    /* grid-template-columns: repeat(1, auto); */
    gap: 2rem 2rem;
    display: flex;
    flex-wrap: wrap;
  }
`;
