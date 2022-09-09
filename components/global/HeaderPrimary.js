import styled from 'styled-components';
import Nav from './Nav';
import Logo from './Logo';
import ContactButton from './ContactButton';
import NavIcon from './NavIcon';
export default function HeaderPrimary({ setShowSidebar, showSidebar }) {
  return (
    <StyledHeaderPrimary showSidebar={showSidebar}>
      <div className="header-inner">
        <div className="nav">
          <Nav />
        </div>

        <Logo width="11rem" style={{ flex: 1 }} variant={2} />

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
      </div>
    </StyledHeaderPrimary>
  );
}

const StyledHeaderPrimary = styled.header`
  align-items: center;
  position: absolute;
  left: 0;
  z-index: 2;
  width: 100%;
  padding: 0 5rem;

  .header-inner {
    margin: 0 auto;
    max-width: 1600px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 8rem;
    padding: 4rem 0;
  }
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
