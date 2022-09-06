import styled from 'styled-components';
import Nav from './Nav';
import Logo from './Logo';
import ContactButton from './ContactButton';
import Link from 'next/link';
import NavIcon from './NavIcon';
export default function HeaderPrimary({ setShowSidebar, showSidebar }) {
  return (
    <StyledHeaderPrimary showSidebar={showSidebar}>
      <div className="nav">
        <Nav />
      </div>
      <Link href="/">
        <Logo width="11rem" style={{ flex: 1 }} variant={2} />
      </Link>
      <div className="contact-button">
        <ContactButton />
      </div>
      <div className="menu-icon">
        <NavIcon
          setShowSidebar={setShowSidebar}
          showSidebar={showSidebar}
          bgColor="var(--black)"
        />
      </div>
    </StyledHeaderPrimary>
  );
}

const StyledHeaderPrimary = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 4rem 5rem;
  height: 8rem;
  position: absolute;
  z-index: 2;
  width: 100%;
  .menu-icon {
    display: none;
  }
  .contact-button,
  .nav {
    flex: 2;
  }
  @media only screen and (max-width: 1170px) {
    height: 6rem;
    padding: 0rem 2rem;
    .menu-icon {
      display: initial;
      flex: 4;
      display: flex;
      justify-content: flex-end;
    }
    .contact-button {
      display: none;
    }
    .nav {
      display: none;
    }
  }
`;
