import Link from 'next/link';
import styled from 'styled-components';
export default function ServiceCard({ icon, title, blurb, link }) {
  return (
    <StyledServiceCard>
      <i className={icon} />
      <h4>{title}</h4>
      <p>{blurb}</p>
      <Link href={link}>
        <a className="learn">Learn More</a>
      </Link>
    </StyledServiceCard>
  );
}

const StyledServiceCard = styled.div`
  display: flex;
  flex-direction: column;

  padding: 1rem 1.5rem 2rem 1.5rem;
  padding: 0;
  /* background: var(--white); */
  border-radius: 0.5rem;
  /* box-shadow: 0px 10px 15px -3px rgba(0, 0, 0, 0.1); */
  color: var(--grey);
  i {
    color: var(--yellow2);
    font-size: 2.4rem;
  }
  h4 {
    margin: 0 0.75rem 0.75rem 0;
    font-weight: 500;
    color: var(--dark-grey);
  }
  p {
    text-align: left;
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
      margin: 0 0.75rem 0.75rem 0;
      font-size: 1.5rem;
    }
    p {
      font-size: 1rem;
    }
  }
`;
