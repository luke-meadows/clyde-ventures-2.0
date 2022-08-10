import Link from 'next/link';
import styled from 'styled-components';
export default function Nav() {
  return (
    <NavOuter>
      <StyledNav>
        <div className="services-dropdown">
          Services <i className="icon-angle-down" />
        </div>
        <Link href="/">About us</Link>
        <Link href="/">Careers</Link>
        <Link href="/">People</Link>
      </StyledNav>
    </NavOuter>
  );
}

const NavOuter = styled.div`
  flex: 2;
`;

const StyledNav = styled.nav`
  display: flex;
  align-items: center;
  padding: 0.8rem 2rem;
  border-radius: 2rem;
  height: fit-content;
  width: fit-content;
  background: var(--white-transparent2);
  border: 1px solid var(--white-transparent2);

  a,
  .services-dropdown {
    margin: 0 1rem;
    font-size: 0.9rem;
    color: var(--black);
  }
  .services-dropdown {
    cursor: default;
    display: flex;
    align-items: center;
    i {
      margin-right: -10px;
    }
  }
`;
