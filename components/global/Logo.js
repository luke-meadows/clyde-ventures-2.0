import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';
import logo from '../../public/logo.png';
import logo3 from '../../public/logo3.png';
export default function Logo({ width, variant = 1 }) {
  return (
    <StyledLogo>
      <Link href="/" alt="logo">
        <a href="">
          <ImageContainer width={width}>
            <Image
              src={variant === 1 ? logo : logo3}
              layout="responsive"
              objectFit="contain"
              alt="logo"
            />
          </ImageContainer>
        </a>
      </Link>
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
