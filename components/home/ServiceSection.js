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
  margin-top: 5rem;
  padding: 5rem;
  max-width: 1800px;

  margin: 2rem auto 0 auto;
  h1 {
    font-size: 4rem;
    font-weight: 500;
    margin-bottom: 2rem;
  }
  p {
    font-size: 1.2rem;
    max-width: 90ch;
    margin-bottom: 2rem;
  }

  @media only screen and (min-width: 1600px) {
    margin: 5rem auto 0 auto;
  }
`;
