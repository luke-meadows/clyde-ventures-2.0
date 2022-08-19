import styled from 'styled-components';

import ServiceCard from './ServiceCard';
export default function ServiceCards() {
  return (
    <StyledServiceCards>
      <ServiceCard
        icon="icon-chart-line"
        title="Consult"
        blurb="Collaboratively opening new markets to create untapped revenue streams"
        link="/what-we-do/consultancy"
      />
      <ServiceCard
        icon="icon-graduation-cap"
        title="Educate"
        blurb="Bringing research led institutions and global brands together to develop tomorrow's leaders"
        link="/what-we-do/education"
      />
      <ServiceCard
        icon="icon-network"
        title="Integrate"
        blurb="Architecting technology solutions to reduce costs, improve service and deliver growth"
        link="/what-we-do/integration"
      />
      <ServiceCard
        icon="icon-cog-alt"
        title="Manufacture"
        blurb="Producing lightweight solutions for a cleaner future in the construction industry"
        link="/what-we-do/manufacturing"
      />
    </StyledServiceCards>
  );
}

const StyledServiceCards = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 3rem;
  @media only screen and (min-width: 1600px) {
    gap: 4rem;
  }
`;
