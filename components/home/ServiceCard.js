import Link from 'next/link';
import styled from 'styled-components';
export default function ServiceCard({ icon, title, blurb, link }) {
  return (
    <StyledServiceCard>
      <div>
        <i className={icon} />
        <h4>{title}</h4>
        <p>{blurb}</p>
      </div>
      <Link href={link}>
        <a className="learn">Learn More</a>
      </Link>
    </StyledServiceCard>
  );
}

const StyledServiceCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1rem 0;
  i {
    color: var(--dark-grey);
    font-size: 2.4rem;
  }
  h4 {
    margin: 0 0.75rem 0.75rem 0;
    font-weight: 500;
    color: var(--dark-grey);
  }
  p {
    font-size: 0.9rem !important;
    margin-bottom: 1rem;
    color: var(--dark-grey);
  }
  a {
    color: var(--dark-grey);
    font-size: 0.8rem;
    background: var(--yellow2);
    border: 1px solid var(--yellow2);
    padding: 0.3rem 1.2rem;
    border-radius: 2rem;
    font-weight: 500;
    width: fit-content;
  }
  @media only screen and (min-width: 1600px) {
    i {
      font-size: 3rem;
    }
    h4 {
      font-size: 1.5rem;
    }
  }
`;
