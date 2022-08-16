import styled from 'styled-components';
import TeamGrid from '../components/people/TeamGrid';
export default function People() {
  return (
    <PageContainer>
      <div className="hero">
        <h1>
          Meet <br /> The Team
        </h1>
        <p>
          Get to know us and learn what we're about. We are serious about our
          work and love to get stuck into a challenge.
        </p>
      </div>
      <TeamGrid />
    </PageContainer>
  );
}

const PageContainer = styled.main`
  padding: 12rem 5rem;
  background: var(--white);
  .hero {
    padding: 0 0 0 21rem;
    h1 {
      font-size: 5rem;
      margin-bottom: 1rem;
      font-weight: 500;
    }
    p {
      font-size: 1.2rem;
      margin-bottom: 0;
      max-width: 45ch;
      color: var(--dark-grey);
      margin-left: 0.2rem;
    }
  }
`;
