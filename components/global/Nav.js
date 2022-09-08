import Link from 'next/link';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import SubNav from './SubNav';
import { useRouter } from 'next/router';
export default function Nav() {
  const [subNavActive, setSubNavActive] = useState(false);
  const [isOnHomepage, setIsOnHomepage] = useState();
  const router = useRouter();
  useEffect(() => {
    if (router.asPath === '/' || router.asPath === '/contact') {
      setIsOnHomepage(true);
    } else {
      setIsOnHomepage(false);
    }
  });
  useEffect(() => {
    setSubNavActive(false);
  }, [router.asPath]);

  return (
    <NavOuter
      subNavActive={subNavActive}
      onMouseLeave={() => setSubNavActive(false)}
    >
      <StyledNav isOnHomepage={isOnHomepage} subNavActive={subNavActive}>
        <div
          className="services-dropdown"
          onMouseEnter={() => setSubNavActive(true)}
        >
          What we do <i className="icon-angle-down" />
        </div>
        <Link href="/about">About us</Link>
        <Link href="/people">People</Link>
        {/* <Link href="/people">Community</Link> */}
        {subNavActive && (
          <>
            <SubNav />
          </>
        )}
      </StyledNav>
    </NavOuter>
  );
}

const NavOuter = styled.div`
  flex: 2;
  display: flex;
  align-items: center;
`;

const StyledNav = styled.nav`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: fit-content;
  width: fit-content;

  a,
  .services-dropdown {
    margin-right: 1.5rem;
    font-size: 0.9rem;
    font-weight: 500;
    color: ${(props) =>
      props.isOnHomepage ? 'var(--black)' : 'var(--dark-grey)'};
  }

  .services-dropdown {
    cursor: default;
    display: flex;
    align-items: center;
    i {
      color: ${(props) =>
        props.subNavActive ? 'var(--medium-grey)' : 'var(--black)'};
      margin-right: -10px;
    }
  }
`;
