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
  padding: 2rem 5rem;
`;
