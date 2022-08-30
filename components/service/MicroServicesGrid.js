import styled from 'styled-components';
export default function MicroServicesGrid({ options }) {
  return (
    <Container>
      <h3
        style={{
          paddingBottom: '2rem',
          fontWeight: '500',
        }}
      >
        Quick links
      </h3>
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
    </Container>
  );
}

const Container = styled.div`
  padding: 2.5rem 5rem;
`;
const StyledGrid = styled.div`
  max-width: 1800px;
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
`;
