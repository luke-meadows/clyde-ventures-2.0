import styled from 'styled-components';
import CircularSolutionsGraphic from '../components/circular-solutions/CircularSolutionsGraphic';
export default function CircularSolutions() {
  return (
    <CircularSolutionsPage>
      <Container>
        <MainContainer>
          <div className="text">
            <h1>Circular Solutions</h1>
            <div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis,
                doloribus atque. Expedita recusandae porro, quis ab fuga
                cupiditate, repellat placeat alias animi assumenda impedit totam
                quam aliquid odio fugit labore?
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis,
                doloribus atque. Expedita recusandae porro, quis ab fuga
                cupiditate, repellat placeat alias animi assumenda impedit totam
                quam aliquid odio fugit labore?
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis,
                doloribus atque. Expedita recusandae porro, quis ab fuga
                cupiditate, repellat placeat alias animi assumenda impedit totam
                quam aliquid odio fugit labore?
              </p>
            </div>
          </div>
          <div className="graphic">
            <CircularSolutionsGraphic />
          </div>
        </MainContainer>
      </Container>
    </CircularSolutionsPage>
  );
}

const CircularSolutionsPage = styled.section`
  padding: 9.5rem 5rem 0 5rem;
`;

const Container = styled.section`
  padding: 0;
  max-width: 1600px;
  margin: 0 auto;

  h1 {
    margin: 0 auto;
    font-size: 4rem;
    margin-bottom: 1rem;
    font-weight: 500;
  }
`;

const MainContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 2.5rem;
  gap: 5rem;
  .graphic {
    width: 65rem;
  }
`;
