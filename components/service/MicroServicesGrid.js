import styled from 'styled-components';
export default function MicroServicesGrid({ options }) {
  return (
    <Container>
      <div className="inner">
        <h3>Scope</h3>
        <StyledGrid>
          {options.map((option, i) => {
            return (
              <p key={i}>
                {option}
                <i className="icon-angle-right" />
              </p>
            );
          })}
        </StyledGrid>
      </div>
    </Container>
  );
}

const Container = styled.div`
  background: var(--white2);
  padding: 5rem;
  .inner {
    max-width: 1600px;
    margin: 0 auto;
    h3 {
      padding-bottom: 2rem;
      font-weight: 500;
    }
  }
  @media only screen and (max-width: 1170px) {
    padding: 3rem 2rem;
  }
`;
const StyledGrid = styled.div`
  width: fit-content;
  display: grid;
  grid-template-columns: repeat(4, auto);
  gap: 1.2rem 5rem;

  p {
    color: var(--black);
    font-size: 0.9rem;
    font-weight: 500;
    border-bottom: 2px solid var(--yellow2);
    padding-bottom: 0.25rem;
    width: fit-content;

    i {
      margin-right: -0.5rem;
    }
  }
  @media only screen and (max-width: 1170px) {
    /* grid-template-columns: repeat(1, auto); */
    gap: 2rem 2rem;
    display: flex;
    flex-wrap: wrap;
  }
`;
