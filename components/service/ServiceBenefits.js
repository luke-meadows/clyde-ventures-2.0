import styled from 'styled-components';
export default function ServiceBenefits({ options, benefitGridCols }) {
  return (
    <StyledBenefits benefitGridCols={benefitGridCols}>
      {options.map((option) => {
        return (
          <div key={option} className="benefit">
            <div className="i-container">
              <i className="icon-check" />
            </div>
            <p>{option}</p>
          </div>
        );
      })}
    </StyledBenefits>
  );
}

const StyledBenefits = styled.div`
  display: grid;
  grid-template-columns: ${(props) =>
    'repeat(' + props.benefitGridCols + ', 1fr)'};
  align-items: center;
  padding: 1rem 0;
  margin-bottom: 0.75rem;
  gap: 1.6rem;
  p {
    margin-bottom: 0;
    font-weight: 500;
    font-size: 1.1rem !important;
  }
  .benefit {
    display: flex;
    align-items: center;
  }
  .i-container {
    background: var(--yellow2);
    border-radius: 50%;
    height: 1.8rem;
    width: 1.8rem;
    display: flex;
    aspect-ratio: 1;
    align-items: center;
    justify-content: center;
    margin-right: 0.75rem;
    i {
      color: var(--dark-grey);
      margin: 0;
      padding: 0;
      font-size: 0.9rem;
    }
  }
  @media only screen and (max-width: 1170px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
