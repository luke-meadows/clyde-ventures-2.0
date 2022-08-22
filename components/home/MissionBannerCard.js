import Image from 'next/image';
import styled from 'styled-components';

export default function MissionBannerCard({ blurb }) {
  return (
    <StyledBannerCard>
      <TickContainer>
        <i className="icon-check" />
      </TickContainer>
      <p>{blurb}</p>
    </StyledBannerCard>
  );
}

const StyledBannerCard = styled.div`
  flex: 1;
  display: inline-block;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem 5rem;
  p {
    margin: 0rem;
    color: var(--dark-grey);
    font-weight: 500;
    text-align: center;
  }
  @media only screen and (min-width: 1600px) {
    padding: 3rem 5rem;
    p {
      font-size: 1.2rem;
    }
  }
`;

const TickContainer = styled.div`
  background: var(--yellow2);
  border-radius: 50%;
  height: 2.25rem;
  min-width: 2.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 0.75rem;

  i {
    font-size: 1rem;
    color: var(--dark-grey);
  }
`;
