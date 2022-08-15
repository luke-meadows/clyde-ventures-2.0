import Link from 'next/link';
import styled from 'styled-components';
export default function SubNav() {
  return (
    <StyledSubNav>
      <nav>
        <Link href="/people">
          <a href="">
            Consultancy
            {/* <i className="icon-angle-right" /> */}
          </a>
        </Link>
        <Link href="/">
          <a href="">
            Integration
            {/* <i className="icon-angle-right" /> */}
          </a>
        </Link>
        <Link href="/">
          <a href="">
            Manufacturing
            {/* <i className="icon-angle-right" /> */}
          </a>
        </Link>
        <Link href="/">
          <a href="">
            Education
            {/* <i className="icon-angle-right" /> */}
          </a>
        </Link>
      </nav>
    </StyledSubNav>
  );
}

const StyledSubNav = styled.div`
  position: absolute;
  width: fit-content;
  height: fit-content;
  left: 0;
  bottom: 0;
  transform: translateY(100%);
  nav {
    padding: 1rem 0;
    display: flex;
    width: fit-content;
    a {
      margin: 0;
      width: fit-content;
      display: flex;
      align-items: center;
      margin-right: 0.8rem;
      color: var(--white);
      border: 1px solid var(--white);
      padding: 0.1rem 1rem;
      font-weight: 500;
      font-size: 0.8rem;
      border-radius: 2rem;
      i {
      }
      &:hover {
        color: var(--white);
      }
    }
  }
`;
