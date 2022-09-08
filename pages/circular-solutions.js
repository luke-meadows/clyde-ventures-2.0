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
          <CircularSolutionsGraphic />
          <CircularSolutionsGrid />
        </MainContainer>
      </Container>
    </CircularSolutionsPage>
  );
}

const CircularSolutionsPage = styled.section`
  padding: 9.5rem 5rem 5rem 5rem;
  overflow-x: hidden;
  @media only screen and (max-width: 1170px) {
    padding: 7.5rem 2rem 2.5rem 2rem;
  }
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
  @media only screen and (max-width: 1170px) {
    h1 {
      font-size: 3.3rem;
    }
  }
`;

const MainContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 2.5rem;
  @media only screen and (max-width: 1170px) {
    flex-direction: column;
  }
`;
