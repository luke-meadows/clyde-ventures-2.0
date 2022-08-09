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
  background: var(--grey);
  display: flex;
  justify-content: space-between;
  align-content: center;
  padding: 0 5rem;
  height: 10rem;
  /* position: fixed;
  top: 0;
  left: 0;
  z-index: 2;
  width: 100%; */
`;
