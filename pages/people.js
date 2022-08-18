import styled from 'styled-components';
import TeamGrid from '../components/people/TeamGrid';
export default function People() {
  return (
    <PageContainer>
      <div className="hero">
        <h1>Meet The Team</h1>
        <p>
          Get to know us and learn what we&apos;re about. We are serious about
          our work and love to get stuck into a challenge.
        </p>
      </div>
      <TeamGrid />
    </PageContainer>
  );
}

const PageContainer = styled.main`
  padding: 6rem 5rem;
  background: var(--white);
  .hero {
    margin: 0 auto;
    max-width: 1600px;
    padding: 6rem 0 4.5rem;
    h1 {
      font-size: 4rem;
      margin-bottom: 1rem;
      font-weight: 500;
    }
    p {
      font-size: 1.2rem;
      margin-bottom: 0;
      max-width: 60ch;
      color: var(--dark-grey);
      margin-left: 0.2rem;
    }
  }
  @media only screen and (min-width: 1600px) {
    .hero {
      padding: 8rem 0 6rem 0;
    }
  }
`;
