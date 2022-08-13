import Image from 'next/image';
import styled from 'styled-components';
import logo from '../../public/logo.png';
export default function Logo({ width }) {
  return (
    <StyledLogo>
      <ImageContainer width={width}>
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
  width: ${(props) => props.width};

  @media only screen and (min-width: 1600px) {
    width: ${(props) => props.width * 1.15};
  }
`;
