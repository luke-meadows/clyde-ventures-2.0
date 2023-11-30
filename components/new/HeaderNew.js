import styled from 'styled-components';
export default function HeaderNew() {
  return <StyledHeader></StyledHeader>;
}
const StyledHeader = styled.header`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`;
