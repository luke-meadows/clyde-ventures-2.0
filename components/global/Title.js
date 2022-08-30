import styled from 'styled-components';
export default function Title({ children }) {
  return <StyledTitle>{children}</StyledTitle>;
}

const StyledTitle = styled.h1`
  font-size: 4rem;
  font-weight: 500;

  .underline {
    background-color: var(--yellow2);
    height: 2px;
    width: 8rem;
    margin-top: 0.5rem;
  }
`;
