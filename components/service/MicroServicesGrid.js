import styled from 'styled-components';
export default function MicroServicesGrid({ options }) {
  return (
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
  );
}

const StyledGrid = styled.div`
  padding: 0rem 5rem 3rem 5rem;
  max-width: 1800px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem 4rem;

  p {
    color: var(--black);
    font-size: 1rem;
    font-weight: 500;
    border-bottom: 2px solid var(--yellow2);
    padding-bottom: 0.25rem;
    width: fit-content;
  }
`;
