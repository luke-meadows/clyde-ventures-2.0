import styled from 'styled-components';
export default function ServiceCard({ icon, title, blurb }) {
  return (
    <StyledServiceCard>
      <i className={icon} />
      <h4>{title}</h4>
      <p>{blurb}</p>
    </StyledServiceCard>
  );
}

const StyledServiceCard = styled.div`
  aspect-ratio: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1.5rem;
  background: var(--grey);
  border-radius: 0.5rem;
  i {
    color: var(--yellow2);
    font-size: 3rem;
  }
  h4 {
    margin: 0.5rem;
    font-weight: 500;
  }
  p {
    text-align: center;
    font-size: 0.9rem;
    color: var(--black);
  }
  @media only screen and (min-width: 1600px) {
    i {
      font-size: 4rem;
    }
    h4 {
      margin: 1rem;
      font-size: 1.5rem;
    }
    p {
      text-align: center;
      font-size: 1rem;
      color: var(--black);
    }
  }
`;
