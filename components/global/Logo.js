import Image from 'next/image';
import styled from 'styled-components';
import logo from '../../public/logo.png';
import logo2 from '../../public/logo2.png';
export default function Logo({ width, variant = 1 }) {
  return (
    <StyledLogo>
      <ImageContainer width={width}>
        <Image
          src={variant === 1 ? logo : logo2}
          layout="responsive"
          objectFit="contain"
        />
      </ImageContainer>
    </StyledLogo>
  );
}

const StyledLogo = styled.div`
  /* flex: 1; */
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
