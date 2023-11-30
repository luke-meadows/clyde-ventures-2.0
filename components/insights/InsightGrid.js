import styled from 'styled-components';
import InsightGridItem from './InsightGridItem';
import ConsumerImage from '../../public/consumer-standards-thumbnail.jpg';
import DomesticImage from '../../public/domestic-sales-thumbnail.jpg';
export default function InsightGrid() {
  return (
    <StyledInsightGrid>
      <div className="grid">
        <InsightGridItem
          insightId="1"
          thumbnail={ConsumerImage}
          heading="Energy: How suppliers can improve customer experience"
          date="29/11/2023"
          author="Kerry Moran"
          url="insights/consumer-standards-reform"
          tags={['Energy', 'Consumer Standards', 'Customer Experience']}
        />
        <InsightGridItem
          insightId="2"
          thumbnail={DomesticImage}
          heading="£1.95M in domestic sales benefits without the need for technology investment"
          date="29/11/2023"
          author="Amber Morton"
          url="insights/domestic-sales"
          tags={['Revenue Generation', 'Customer Experience']}
        />
      </div>
    </StyledInsightGrid>
  );
}
const StyledInsightGrid = styled.div`
  padding: 5rem 5rem 0rem 5rem;
  max-width: 1800px;
  margin: 0 auto;
  .grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
  }
  @media only screen and (max-width: 1170px) {
    padding: 2rem;

    .grid {
      grid-template-columns: repeat(1, 1fr);
    }
  }
`;
