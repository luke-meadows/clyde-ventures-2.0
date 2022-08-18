import Link from 'next/link';
import styled from 'styled-components';
export default function GetToKnowOurPeople() {
  return (
    <StyledBanner>
      <h2>Get to know our people</h2>
      <Link href="/people">
        <a className="link-container">
          Meet us <i className="icon-angle-right" />
        </a>
      </Link>
    </StyledBanner>
  );
}

const StyledBanner = styled.div`
  background: var(--dark-grey);
  color: var(--grey);
  display: flex;
  align-items: flex-end;
  justify-content: center;
  flex-direction: column;
  padding: 5rem;
  h2 {
    font-size: 2.488rem;
  }
  .link-container {
    margin-top: 1rem;
    font-size: 1.44rem;
    cursor: pointer;
    display: flex;
    align-items: center;

    i {
      color: var(--yellow2);
    }
    &:hover {
      color: var(--yellow2);
    }
  }
`;
