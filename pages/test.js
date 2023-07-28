import styled from 'styled-components';
import Img from '../public/Email_Logo.png';
export default function test() {
  return (
    <StyledTest>
      <ImageContainer width={200}>
        <Image src={Img} layout="responsive" objectFit="contain" alt="logo" />
      </ImageContainer>
    </StyledTest>
  );
}
const StyledTest = styled.div`
  margin-top: 6rem;
`;
const ImageContainer = styled.div`
  position: relative;
  width: ${(props) => props.width};

  @media only screen and (min-width: 1600px) {
    width: ${(props) => props.width * 1.15};
  }
`;
