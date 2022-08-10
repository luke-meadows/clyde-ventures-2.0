import styled from 'styled-components';
export default function ContactButton() {
  return (
    <StyledContactButton>
      <button>Contact us</button>
    </StyledContactButton>
  );
}

const StyledContactButton = styled.div`
  flex: 2;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  button {
    background: var(--yellow2);
    border: 1px solid var(--yellow2);
    font-size: 1rem;
  }
`;
