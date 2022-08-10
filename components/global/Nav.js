import Link from 'next/link';
import styled from 'styled-components';
export default function Nav() {
  return (
    <StyledNav>
      <Link href="/">About us</Link>
      <div className="services-dropdown">
        Services <i className="icon-angle-down" />
      </div>
    </StyledNav>
  );
}

const StyledNav = styled.nav`
  display: flex;
  align-items: center;
  flex: 2;

  a,
  .services-dropdown {
    margin-right: 1.2rem;
    cursor: pointer;
    font-size: 0.9rem;
  }
  .services-dropdown {
    display: flex;
    align-items: center;
    i {
      margin-right: -10px;
    }
  }
`;
