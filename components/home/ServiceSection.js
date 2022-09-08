import styled from 'styled-components';
import ServiceCards from './ServiceCards';
export default function ServiceSection() {
  return (
    <StyledServiceSection>
      <h1>What we do</h1>
      <p>
        We unlock revenue opportunities for our customers through deep sector
        and technical expertise.
      </p>
      <ServiceCards />
    </StyledServiceSection>
  );
}

const StyledServiceSection = styled.section`
  padding: 5rem;
  max-width: 1800px;
  margin: 0 auto;
  h1 {
    font-size: 2.4rem;
    font-weight: 500;
    margin-bottom: 1.2rem;
    padding-bottom: 0.25rem;
    padding-right: 0.25rem;
    border-bottom: 3px solid var(--yellow2);
    width: fit-content;
  }
  p {
    font-size: 1.2rem;
    max-width: 90ch;
    margin-bottom: 2.5rem;
  }

  @media only screen and (min-width: 1700px) {
    margin: 2rem auto 0 auto;
  }
  @media only screen and (max-width: 1170px) {
    padding: 5rem 2rem 2.5rem 2rem;
    p {
      margin-bottom: 1.2rem;
    }
  }
`;
