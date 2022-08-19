import Link from 'next/link';
import styled from 'styled-components';
export default function GetToKnowOurPeople() {
  return (
    <StyledBanner>
      <div className="inner">
        <h2>Get to know our people</h2>
        <Link href="/people">
          <a className="link-container">
            Meet us <i className="icon-angle-right" />
          </a>
        </Link>
      </div>
    </StyledBanner>
  );
}

const StyledBanner = styled.div`
  background: var(--dark-grey-transparent);
  color: var(--grey);
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 5rem;
  h2 {
    font-size: 2.488rem;
  }
  .inner {
    max-width: 1800px;
    margin: 0 auto;
    width: 100%;
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
  @media only screen and (min-width: 1600px) {
    padding: 5rem 8.8rem;
  }
`;
