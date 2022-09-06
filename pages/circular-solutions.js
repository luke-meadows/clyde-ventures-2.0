import styled from 'styled-components';
import CircularSolutionsGraphic from '../components/circular-solutions/CircularSolutionsGraphic';
import CircularSolutionsGrid from '../components/circular-solutions/CircularSolutionsGrid';
export default function CircularSolutions() {
  return (
    <CircularSolutionsPage>
      <Container>
        <h1>Circular Solutions</h1>
        <p>Sustainability is at the heart of everything we do.</p>
        <MainContainer>
          <CircularSolutionsGrid />
          <div className="graphic">
            <CircularSolutionsGraphic />
          </div>
        </MainContainer>
      </Container>
    </CircularSolutionsPage>
  );
}

const CircularSolutionsPage = styled.section`
  padding: 9.5rem 5rem 5rem 5rem;
`;

const Container = styled.section`
  padding: 0;
  max-width: 1600px;
  margin: 2.5rem auto 0 auto;
  h1 {
    margin: 0 auto;
    font-size: 4rem;
    font-weight: 500;
    margin-bottom: 1rem;
  }
  p {
    font-size: 1.2rem;
  }
`;

const MainContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 5rem;
  margin-top: 5rem;
  .graphic {
    width: 55rem;
  }
`;
