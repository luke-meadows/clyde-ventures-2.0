import styled from 'styled-components';
export default function MicroServiceTicks({
  options,
  text = null,
  withPadding = true,
}) {
  return (
    <Container withPadding={withPadding}>
      {text && <p>{text}</p>}
      <div className="cards">
        {options.map((option, i) => {
          return (
            <StyledMicroServiceTick key={i}>
              <div className="top">
                <i className="icon-check" />
                <h4>{option.title}</h4>
              </div>
              {option.lineBreak && <br />}
              <p>{option.text}</p>
            </StyledMicroServiceTick>
          );
        })}
      </div>
    </Container>
  );
}

const Container = styled.div`
  padding: ${(props) => (props.withPadding ? '5rem 5rem' : '')};
  width: 100%;
  max-width: 1800px;
  margin: 2rem auto 0rem auto;
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
  @media only screen and (max-width: 1170px) {
    .cards {
      grid-template-columns: repeat(1, 1fr);
      gap: 2rem;
    }
  }
`;
const StyledMicroServiceTick = styled.div`
  border: 2px solid var(--light-grey);
  display: flex;
  flex-direction: column;
  padding: 1.8rem;
  border-radius: 0.4rem;
  .top {
    display: flex;
    margin-bottom: 0.5rem;
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
    /* color: white !important; */

    /* color: var(--dark-grey); */
    margin-bottom: 0;
  }
  h4 {
    font-weight: 500;
  }
  @media only screen and (max-width: 1170px) {
    .top {
      margin-bottom: 0rem;
    }
  }
`;
