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
      margin-right: 1rem;
      width: fit-content;
      display: flex;
      align-items: center;
      color: var(--white);
      /* border: 2px solid var(--white); */
      /* padding: 0.2rem 1.5rem; */
      font-weight: 500;
      font-size: 1rem;
      border-radius: 2rem;
      i {
      }
      &:hover {
        color: var(--yellow);
        /* border: 2px solid var(--black); */
      }
    }
  }
`;
