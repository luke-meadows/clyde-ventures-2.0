import styled from 'styled-components';
import Container from '../global/Container';
import ServiceCard from './ServiceCard';
export default function ServiceCards() {
  return (
    <Container>
      <StyledServiceCards>
        <ServiceCard
          icon="icon-chart-line"
          title="Consult"
          blurb="Collaboratively opening new markets to create untapped revenue streams"
        />
        <ServiceCard
          icon="icon-network"
          title="Integrate"
          blurb="Architecting technology solutions to reduce costs, improve service and deliver growth"
        />
        <ServiceCard
          icon="icon-cog-alt"
          title="Manufacture"
          blurb="Producing lightweight solutions for a cleaner future in the construction industry"
        />
        <ServiceCard
          icon="icon-graduation-cap"
          title="Educate"
          blurb="Bringing research led institutions and global brands together to develop tomorrow's leaders"
        />
      </StyledServiceCards>
    </Container>
  );
}

const StyledServiceCards = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2.5rem;
  @media only screen and (min-width: 1600px) {
    gap: 4rem;
  }
`;
