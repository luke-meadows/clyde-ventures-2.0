import Link from 'next/link';
import styled from 'styled-components';
export default function SubNav() {
  return (
    <StyledSubNav>
      <nav>
        <Link href="/people">
          <a href="">
            Consultancy <i className="icon-angle-right" />
          </a>
        </Link>
        <Link href="/">
          <a href="">
            Integration <i className="icon-angle-right" />
          </a>
        </Link>
        <Link href="/">
          <a href="">
            Manufacturing <i className="icon-angle-right" />
          </a>
        </Link>
        <Link href="/">
          <a href="">
            Education <i className="icon-angle-right" />
          </a>
        </Link>
      </nav>
    </StyledSubNav>
  );
}

const StyledSubNav = styled.div`
  position: absolute;
  width: fit-content;
  height: 1px;

  left: 0;
  bottom: 0;
  transform: translateY(100%);
  nav {
    display: flex;
    flex-direction: column;
    background: var(--sky-blue);
    border-bottom-left-radius: 1rem;
    border-bottom-right-radius: 1rem;
    padding: 0.5rem 0 1rem 1rem;
    box-shadow: 0px 10px 15px -3px rgba(0, 0, 0, 0.1);
    a {
      margin: 0.25rem 1rem;
      padding: 0rem 0;
      color: var(--black);
      font-weight: 400;
      i {
        margin-left: -3px;
      }
      &:hover {
        color: var(--yellow);
      }
    }
  }
`;
