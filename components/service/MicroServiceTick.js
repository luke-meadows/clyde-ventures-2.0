import styled from 'styled-components';
export default function MicroServiceTicks({ options, text = null }) {
  return (
    <Container>
      {text && <p>{text}</p>}
      <div className="cards">
        {options.map((option, i) => {
          return (
            <StyledMicroServiceTick key={i}>
              <div className="top">
                <i className="icon-check" />
                <h4>{option.title}</h4>
              </div>
              <p>{option.text}</p>
            </StyledMicroServiceTick>
          );
        })}
      </div>
    </Container>
  );
}

const Container = styled.div`
  padding: 5rem 5rem;

  width: 100%;
  max-width: 1800px;
  margin: 0 auto 0rem auto;
  p {
    font-size: 1.2rem;
    max-width: 100ch;
    margin-bottom: 2.5rem;
  }
  .cards {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 3rem;
  }
  @media only screen and (min-width: 1600px) {
    gap: 3rem;
  }
`;
const StyledMicroServiceTick = styled.div`
  border: 2px solid var(--yellow);
  background: var(--white2);
  display: flex;
  flex-direction: column;
  padding: 2.5rem 2rem;
  border-radius: 0.4rem;
  .top {
    display: flex;
    margin-bottom: 1rem;
  }
  i {
    color: var(--dark-grey);
    background: var(--yellow2);
    border-radius: 50%;
    height: 2rem;
    width: 2rem;
    display: flex;
    aspect-ratio: 1;
    align-items: center;
    justify-content: center;
    padding: 1rem;
    margin-right: 1.2rem;
    font-size: 1.2rem;
  }
  p {
    font-size: 1rem !important;

    color: var(--dark-grey);
    margin-bottom: 0;
  }
  h4 {
    color: var(--dark-grey);

    font-weight: 500;
  }
`;
