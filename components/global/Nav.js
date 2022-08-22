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
    if (router.asPath === '/') {
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
        <Link href="/">Blog</Link>
        <Link href="/people">People</Link>
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
    margin-right: 1.6rem;
    font-size: 0.9rem;
    font-weight: 500;
    color: var(--white);
    color: var(--dark-grey);
    color: ${(props) =>
      props.isOnHomepage ? 'var(--black)' : 'var(--dark-grey)'};
    @media only screen and (min-width: 1600px) {
      font-size: 0.9rem;
      margin-right: 1.5rem;
    }
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
