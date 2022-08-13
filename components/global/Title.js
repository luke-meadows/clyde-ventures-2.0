import styled from 'styled-components';
export default function Title({ children }) {
  return (
    <StyledTitle>
      {children}
      <div className="underline" />
    </StyledTitle>
  );
}

const StyledTitle = styled.h1`
  display: flex;
  flex-direction: column;
  align-items: center;
  .underline {
    background-color: var(--yellow2);
    height: 2px;
    width: 8rem;
    margin-top: 0.5rem;
  }
`;
