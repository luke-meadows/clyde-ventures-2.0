import Image from 'next/image';
import styled from 'styled-components';
import tick from '../../public/output-onlinepngtools.png';
export default function MissionBannerCard({ blurb }) {
  return (
    <StyledBannerCard>
      <TickContainer>
        <Image src={tick} layout="responsive" objectFit="contain" />
      </TickContainer>
      <p>{blurb}</p>
    </StyledBannerCard>
  );
}

const StyledBannerCard = styled.div`
  flex: 1;
  text-align: center;
  display: inline-block;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2.5rem 4rem;

  i {
    color: var(--yellow);
    font-size: 3rem;
  }
  p {
    text-align: center;
  }
`;

const TickContainer = styled.div`
  position: relative;
  width: 40px;
  margin-bottom: 1.5rem;
`;
