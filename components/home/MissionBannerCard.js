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
    color: var(--dar-grey);
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
  width: 50px;
  margin-bottom: 1rem;
  i {
    font-size: 1.2rem;
    background: var(--yellow2);
    border-radius: 10rem;
    padding: 0.5rem;
    margin-bottom: 1rem;
  }
  @media only screen and (min-width: 1600px) {
    margin-bottom: 1.5rem;
  }
`;
