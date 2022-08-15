import styled from 'styled-components';
import Nav from './Nav';
import Logo from './Logo';
import ContactButton from './ContactButton';
import Link from 'next/link';
export default function HeaderPrimary() {
  return (
    <StyledHeaderPrimary>
      <Nav />
      <Link href="/">
        <Logo width="11rem" style={{ flex: 1 }} variant={2} />
      </Link>
      <ContactButton />
    </StyledHeaderPrimary>
  );
}

const StyledHeaderPrimary = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  padding: 5rem 3rem;
  height: 8rem;
  position: absolute;
  z-index: 2;
  width: 100%;
  @media only screen and (min-width: 1600px) {
    padding: 0 6rem;
    height: 10rem;
    align-items: center;
  }
`;
