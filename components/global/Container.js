import styled from 'styled-components';
export default function Container({ children }) {
  return <StyledContainer>{children}</StyledContainer>;
}

const StyledContainer = styled.section`
  padding: 5rem;
  @media only screen and (min-width: 1600px) {
    padding: 5rem 10rem;
  }
`;
