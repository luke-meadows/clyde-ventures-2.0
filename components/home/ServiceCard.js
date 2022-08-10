import Link from 'next/link';
import styled from 'styled-components';
export default function ServiceCard({ icon, title, blurb }) {
  return (
    <StyledServiceCard>
      <i className={icon} />
      <h4>{title}</h4>
      <p>{blurb}</p>
      <Link href="/">
        <a className="learn">Learn More</a>
      </Link>
    </StyledServiceCard>
  );
}

const StyledServiceCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem 1.5rem 2rem 1.5rem;
  background: var(--white);
  border-radius: 0.5rem;
  box-shadow: 0px 10px 15px -3px rgba(0, 0, 0, 0.1);

  i {
    color: var(--yellow2);
    font-size: 3rem;
  }
  h4 {
    margin: 0 0.75rem 0.75rem 0.75rem;
    font-weight: 500;
  }
  p {
    text-align: center;
    font-size: 0.9rem;
  }
  a {
    color: var(--dark-grey);
    font-size: 0.8rem;
    border: 1px solid var(--yellow2);
    padding: 0.3rem 1.2rem;
    border-radius: 2rem;
  }
  @media only screen and (min-width: 1600px) {
    i {
      font-size: 4rem;
    }
    h4 {
      margin: 0 0.75rem 0.75rem 0.75rem;
      font-size: 1.5rem;
    }
    p {
      text-align: center;
      font-size: 1rem;
    }
  }
`;
