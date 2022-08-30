import styled from 'styled-components';
export default function MicroServiceTicks({ options }) {
  return (
    <TickContainer>
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
    </TickContainer>
  );
}

const TickContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 3rem;
  width: 100%;
  max-width: 1800px;
  margin: 0 auto 1rem auto;
  padding: 0rem 5rem 3rem 5rem;
  @media only screen and (min-width: 1600px) {
    gap: 4rem;
  }
`;
const StyledMicroServiceTick = styled.div`
  background: var(--white2);
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 20px;
  display: flex;
  flex-direction: column;
  padding: 2.5rem 2rem;
  border-radius: 0.4rem;
  .top {
    display: flex;
    align-items: center;
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
  @media only screen and (min-width: 1600px) {
  }
`;
