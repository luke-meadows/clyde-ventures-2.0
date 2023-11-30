import styled from 'styled-components';
import Nav from './Nav';
import Logo from './Logo';
import StrathclydeLogo from './StrathclydeLogo';
import ContactButton from './ContactButton';
import NavIcon from './NavIcon';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import SubNav from './SubNav';
import { AnimatePresence } from 'framer-motion';
export default function HeaderPrimary({ setShowSidebar, showSidebar }) {
  const [showStrath, setShowStrath] = useState(false);
  const router = useRouter();
  useEffect(() => {
    if (router.asPath === '/what-we-do/education') setShowStrath(true);
    return () => setShowStrath(false);
  });
  useEffect(() => {
    setShowServices(false);
  }, [router.asPath]);
  const [showServices, setShowServices] = useState(false);
  return (
    <StyledHeaderPrimary
      showSidebar={showSidebar}
      onMouseLeave={() => setShowServices(false)}
    >
      <AnimatePresence>
        <div className="header-inner">
          <div className="nav">
            <Nav setShowServices={setShowServices} />
          </div>
          <div
            className="logo-container"
            onMouseDown={() => setShowServices(false)}
          >
            <Logo width="11rem" style={{ flex: 1 }} variant={2} />
            {showStrath && (
              <StrathclydeLogo width="6.5rem" style={{ flex: 1 }} />
            )}
          </div>

          <div className="contact-button">
            <ContactButton onMouseDown={() => setShowServices(false)} />
          </div>

          <div className="menu-icon">
            <NavIcon
              setShowSidebar={setShowSidebar}
              showSidebar={showSidebar}
              bgColor="var(--black)"
            />
          </div>
        </div>
        {showServices && <SubNav setShowServices={setShowServices} />}
      </AnimatePresence>
    </StyledHeaderPrimary>
  );
}

const StyledHeaderPrimary = styled.header`
  align-items: center;
  position: fixed;
  z-index: 2;
  width: 100%;
  padding: 0 5rem;
  background: white;

  .header-inner {
    margin: 0 auto;
    max-width: 1610px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    min-height: 8rem;
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
