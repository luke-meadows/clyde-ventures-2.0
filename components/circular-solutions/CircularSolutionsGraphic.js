import Image from 'next/image';
import styled from 'styled-components';
export default function CircularSolutionsGraphic() {
  return (
    <StyledGraphic>
      <div className="box">
        <div className="line one" />
        <div className="line two" />
        <div className="line three" />

        <div className="educate service">
          <i className="icon-graduation-cap" />
          <h5>Educate</h5>
        </div>
        <div className="integrate service">
          <i className="icon-network" />
          <h5>Integrate</h5>
        </div>
        <div className="manufacture service">
          <i className="icon-cog-alt" />
          <h5>Manufacture</h5>
        </div>
        <div className="consult service">
          <i className="icon-chart-line" />
          <h5>Consult</h5>
        </div>
      </div>
    </StyledGraphic>
  );
}

const StyledGraphic = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  .box {
    width: 25rem;
    aspect-ratio: 1;
    border: 3px solid var(--dark-grey);
    border-radius: 50%;
    position: relative;
    transform: translateY(40px);
    @media only screen and (max-width: 1170px) {
      width: 100vw;
      .box {
        width: 100%;
        transform: translateY(0);
      }
    }
  }

  .service {
    position: absolute;
    border-radius: 50%;
    height: 150px;
    width: 150px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    border: 3px solid var(--yellow2);
    background: var(--white);

    i {
      margin: 0rem;
      font-size: 1.5rem;
    }
    h5 {
      text-align: center;
      margin: 0;
      font-size: 1.1rem;
      margin-bottom: 0.8rem;
      font-weight: 500;
    }
  }
  .educate {
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
  .integrate {
    left: 50%;
    top: 0;
    transform: translate(-50%, -50%);
  }
  .manufacture {
    left: 30px;
    top: 75.2%;
    transform: translate(-50%, -50%);
  }
  .consult {
    right: -7px;
    top: 75.2%;
    transform: translate(25%, -50%);
  }

  .line {
    position: absolute;
    height: 36.5%;
    width: 3px;
    background: var(--dark-grey);
    left: 50%;
    top: 50%;
    transform-origin: 50% 100%;
  }
  .one {
    transform: translate(-50%, -100%) rotate(0deg);
  }
  .two {
    transform: translate(-50%, -100%) rotate(120deg);
  }
  .three {
    transform: translate(-50%, -100%) rotate(240deg);
  }
  .text-container {
    position: relative;
    border: 1px solid black;
    z-index: 20;
    path {
      fill: transparent;
    }

    text {
      fill: #ff9800;
      border: 1px solid black;
    }
  }
`;
