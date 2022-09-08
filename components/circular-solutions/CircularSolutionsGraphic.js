import Image from 'next/image';
import styled from 'styled-components';
import CircularSolutionsGraphicImage from '../../public/circular-solutions.png';
export default function CircularSolutionsGraphic() {
  return (
    <StyledGraphic>
      <Image
        src={CircularSolutionsGraphicImage}
        layout="fill"
        objectFit="contain"
      />
    </StyledGraphic>
  );
}

const StyledGraphic = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  aspect-ratio: 1;
  width: 40%;
  @media only screen and (max-width: 1170px) {
    width: 100%;
  }
`;
