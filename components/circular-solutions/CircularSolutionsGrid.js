import styled from 'styled-components';
import ServiceCard from '../home/ServiceCard';
export default function CircularSolutionsGrid() {
  return (
    <StyledGrid>
      <ServiceCard
        title="Consult"
        blurb="Collaboratively opening new markets to create untapped revenue streams"
        link="/what-we-do/consultancy"
      />
      <ServiceCard
        title="Educate"
        blurb="Bringing research led institutions and global brands together to develop tomorrow's leaders"
        link="/what-we-do/education"
      />
      <ServiceCard
        title="Integrate"
        blurb="Architecting technology solutions to reduce costs, improve service and deliver growth"
        link="/what-we-do/integration"
      />
      <ServiceCard
        title="Manufacture"
        blurb="Producing lightweight solutions for a cleaner future in the construction industry"
        link="/what-we-do/manufacturing"
      />
    </StyledGrid>
  );
}

const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2.5rem;
`;
