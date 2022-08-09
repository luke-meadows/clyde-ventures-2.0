import Image from 'next/image';
import styled from 'styled-components';
import logo from '../../public/logo.png';
export default function Logo() {
  return (
    <StyledLogo>
      <ImageContainer>
        <Image src={logo} layout="responsive" objectFit="contain" />
      </ImageContainer>
    </StyledLogo>
  );
}

const StyledLogo = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ImageContainer = styled.div`
  position: relative;
  width: 7rem;
`;
