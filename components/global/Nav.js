import Link from 'next/link';
import { useState } from 'react';
import styled from 'styled-components';
import SubNav from './SubNav';
export default function Nav() {
  const [subNavActive, setSubNavActive] = useState(true);
  return (
    <NavOuter
      subNavActive={subNavActive}
      onMouseLeave={() => setSubNavActive(false)}
    >
      <StyledNav subNavActive={subNavActive}>
        <div
          className="services-dropdown"
          onMouseEnter={() => setSubNavActive(true)}
        >
          What we do <i className="icon-angle-down" />
        </div>
        <Link href="/">About us</Link>
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
  /* padding: 0.8rem 1rem; */
  border-radius: ${(props) => (props.subNavActive ? '' : '2rem')};
  border-top-left-radius: 2rem;
  border-top-right-radius: 2rem;
  border-radius: 2rem;
  height: fit-content;
  width: fit-content;
  /* background: var(--sky-blue); */
  /* box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px; */

  a,
  .services-dropdown {
    margin-right: 2rem;
    font-size: 0.9rem;
    color: var(--black);
    font-weight: 500;
  }

  .services-dropdown {
    cursor: default;
    display: flex;
    align-items: center;
    i {
      color: ${(props) =>
        props.subNavActive ? 'var(--white)' : 'var(--black)'};
      margin-right: -10px;
    }
  }

  /* .underlay {
    position: absolute;
    left: 0;
    bottom: 0;
    height: 50%;
    width: 2rem;
    background: var(--sky-blue);
  } */
`;
