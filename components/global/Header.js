import styled from 'styled-components';
import Nav from './Nav';
import Logo from './Logo';
import ContactButton from './ContactButton';
export default function Header() {
  return (
    <StyledHeader>
      <Nav />
      <Logo />
      <ContactButton />
    </StyledHeader>
  );
}

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5rem 3rem;
  height: 8rem;
  position: absolute;
  z-index: 2;
  width: 100%;
  @media only screen and (min-width: 1600px) {
    padding: 0 6rem;
    height: 10rem;
  }
`;
