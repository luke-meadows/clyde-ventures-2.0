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
  padding: 3rem 5rem;

  p {
    text-align: center;
    margin: 0rem 0 0 0;
    color: var(--dark-grey);
  }
  @media only screen and (min-width: 1600px) {
    padding: 3rem 10rem 4rem 10rem;
    p {
      font-size: 1.2rem;
    }
  }
`;

const TickContainer = styled.div`
  position: relative;
  margin-bottom: 0.5rem;
  background: var(--yellow2);
  border-radius: 50%;
  height: 2.25rem;
  width: 2.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
  i {
    font-size: 1rem;
    color: var(--dark-grey);
  }
  @media only screen and (min-width: 1600px) {
    margin-bottom: 0.75rem;
  }
`;
