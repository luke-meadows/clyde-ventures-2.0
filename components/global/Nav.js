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
  font-size: 0.9rem;
  a,
  .services-dropdown {
    margin-right: 2.5rem;
    cursor: pointer;
  }
  .services-dropdown {
    display: flex;
    align-items: center;
    i {
      margin-right: -10px;
    }
  }
`;
