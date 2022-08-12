import Link from 'next/link';
import styled from 'styled-components';
export default function SubNav() {
  return (
    <StyledSubNav>
      <nav>
        <Link href="/">Consultancy</Link>
        <Link href="/">Integration</Link>
        <Link href="/">Manufacturing</Link>
        <Link href="/">Education</Link>
      </nav>
    </StyledSubNav>
  );
}

const StyledSubNav = styled.div`
  position: absolute;
  width: fit-content;
  height: 5rem;
  left: 0;
  bottom: 0;
  transform: translateY(100%);
  nav {
    border-top: 1px solid var(--white-transparent);
    padding: 1rem 0;
    display: flex;
    flex-direction: column;
    background: var(--sky-blue);
    border-bottom-left-radius: 1rem;
    border-bottom-right-radius: 1rem;
    padding: 0.5rem 1rem 0.5rem 1rem;
    box-shadow: 0px 10px 15px -3px rgba(0, 0, 0, 0.1);

    /* border-right: 2px solid var(--white-transparent2);
    border-bottom: 2px solid var(--white-transparent2);
    border-left: 2px solid var(--white-transparent2); */
    a {
      margin: 0rem 1rem;
      padding: 0rem 0;
      color: var(--black);
      font-size: 0.8rem;
      &:hover {
        color: var(--yellow);
      }
    }
  }
`;
