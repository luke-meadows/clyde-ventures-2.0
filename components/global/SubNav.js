import Link from 'next/link';
import styled from 'styled-components';
export default function SubNav() {
  return (
    <StyledSubNav>
      <nav>
        <Link href="/what-we-do/consultancy">
          <a href="">
            Consultancy
            <i className="icon-angle-right" />
          </a>
        </Link>
        <Link href="/what-we-do/integration">
          <a href="">
            Integration
            <i className="icon-angle-right" />
          </a>
        </Link>
        <Link href="/what-we-do/manufacturing">
          <a href="">
            Manufacturing
            <i className="icon-angle-right" />
          </a>
        </Link>
        <Link href="/what-we-do/education">
          <a href="">
            Education
            <i className="icon-angle-right" />
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
    padding: 0.5rem 0 2rem 0;
    display: flex;
    width: fit-content;
    flex-direction: column;
    a {
      margin: 0 1.2rem 0.2rem 0.2rem;
      width: fit-content;
      display: flex;
      align-items: center;
      color: var(--black);
      font-weight: 500;
      font-size: 0.8rem;
      &:hover {
        font-weight: 600;
      }
    }
  }
`;
