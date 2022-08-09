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
  @media only screen and (min-width: 1600px) {
    padding: 0 10rem;
  }
`;
