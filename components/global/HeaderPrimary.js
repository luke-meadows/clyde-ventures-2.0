import styled from 'styled-components';
import Nav from './Nav';
import Logo from './Logo';
import StrathclydeLogo from './StrathclydeLogo';
import ContactButton from './ContactButton';
import NavIcon from './NavIcon';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
export default function HeaderPrimary({ setShowSidebar, showSidebar }) {
  const [showStrath, setShowStrath] = useState(false);
  const router = useRouter();
  useEffect(() => {
    if (router.asPath === '/what-we-do/education') setShowStrath(true);
    return () => setShowStrath(false);
  });
  return (
    <StyledHeaderPrimary showSidebar={showSidebar}>
      <div className="header-inner">
        <div className="nav">
          <Nav />
        </div>

        <div className="logo-container">
          <Logo width="11rem" style={{ flex: 1 }} variant={2} />
          {showStrath && <StrathclydeLogo width="6.5rem" style={{ flex: 1 }} />}
        </div>

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
  z-index: 2;
  width: 100%;
  padding: 0 5rem;

  .header-inner {
    margin: 0 auto;
    max-width: 1610px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 8rem;
    padding: 4rem 0;
  }
  .logo-container {
    display: flex;
    align-items: flex-end;
    gap: 2rem;
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
