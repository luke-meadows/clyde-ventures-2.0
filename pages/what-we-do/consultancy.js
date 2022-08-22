import Image from 'next/image';
import styled from 'styled-components';
import img from '../../public/consultancy.jpg';
export default function Consultancy() {
  return (
    <StyledService>
      <div className="hero">
        <h1>Consultancy</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
          iusto obcaecati minus magni, vero molestias ab facilis sapiente qui
          officia incidunt cumque deserunt numquam velit?
        </p>
        <div className="grid">
          <p>
            Content Marketing <i className="icon-angle-right" />
          </p>
          <p>
            Lead Generation <i className="icon-angle-right" />
          </p>
          <p>
            Conversion Rate Optimization (CRO){' '}
            <i className="icon-angle-right" />
          </p>
          <p>
            Inbound Marketing <i className="icon-angle-right" />
          </p>
          <p>
            Search Engine Optimization (SEO) <i className="icon-angle-right" />
          </p>
          <p>
            Mobile App Marketing <i className="icon-angle-right" />
          </p>
          <p>
            Search Engine Optimization (SEO) <i className="icon-angle-right" />
          </p>
          <p>
            Inbound Marketing <i className="icon-angle-right" />
          </p>
          <p>
            Mobile App Marketing <i className="icon-angle-right" />
          </p>
        </div>
      </div>
      <div className="lower-section">
        <div className="text">
          <h2>The Process</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
            exercitationem blanditiis deserunt iste! Dolorum voluptatem totam
            tenetur molestiae dolore corporis voluptatum sint cumque quae
            possimus accusantium qui libero, nulla iusto aliquid vitae sunt
            impedit officiis non! Incidunt non amet accusamus vel, est cumque
            fugit voluptas voluptates qui dolores eos nostrum?
          </p>
          <div className="benefits">
            <div className="benefit-container">
              <div className="i-container">
                <i className="icon-check" />
              </div>
              <p>Benefit of the service</p>
            </div>
            <div className="benefit-container">
              <div className="i-container">
                <i className="icon-check" />
              </div>
              <p>Benefit</p>
            </div>
            <div className="benefit-container">
              <div className="i-container">
                <i className="icon-check" />
              </div>
              <p>Benefit</p>
            </div>
            <div className="benefit-container">
              <div className="i-container">
                <i className="icon-check" />
              </div>
              <p>Unique selling point</p>
            </div>
          </div>
        </div>
        <div className="img-container">
          <Image src={img} layout="fill" objectFit="cover" />
        </div>
      </div>
    </StyledService>
  );
}

export const StyledService = styled.section`
  background: var(--white);
  overflow: hidden;
  position: relative;
  width: 100%;
  .hero {
    padding: 6rem 5rem 3rem 5rem;
    position: relative;
    width: 100%;
    max-width: 1800px;
    margin: 6rem auto;
    h1 {
      z-index: 1;
      font-size: 4rem;
      margin-bottom: 2rem;
      font-weight: 500;
      color: var(--dark-grey);
    }
    p {
      font-size: 1.2rem;
      margin-bottom: 0;
      max-width: 90ch;
      color: var(--dark-grey);
      margin-left: 0.2rem;
    }
    .grid {
      margin-top: 6rem;
      width: fit-content;
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 2rem 4rem;
      p {
        color: var(--black);
        font-size: 1rem;
        font-weight: 500;
        border-bottom: 2px solid var(--yellow2);
        padding-bottom: 0.25rem;
        width: fit-content;
      }
    }
  }
  .lower-section {
    display: flex;
    padding: 6rem 0;
    .text,
    .img-container {
      width: 50%;
    }
    .text {
      padding: 0 2.5rem 0 5rem;
      h2 {
        font-weight: 500;
        font-size: 2.4rem;
        margin-bottom: 1.2rem;
      }
      p {
        font-size: 1.2rem;
      }
    }
    .img-container {
      position: relative;
      height: 40rem;
      width: calc(50% - 2.5rem);
      float: right;
      margin-left: 2.5rem;
    }
    .benefits {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      padding: 1rem 0;
    }

    .benefit-container {
      display: flex;
      align-items: center;
      margin: 1rem 4rem 1rem 0;
      .i-container {
        background: var(--yellow2);
        border-radius: 50%;
        /* height: 2rem;
        width: 2rem; */
        height: 1.8rem;
        width: 1.8rem;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-right: 0.75rem;
        i {
          color: var(--dark-grey);
          margin: 0;
          padding: 0;
        }
      }
      p {
        margin-bottom: 0;
        font-weight: 500;
        font-size: 1rem;
      }
    }
  }
  @media only screen and (min-width: 1600px) {
    .lower-section {
      margin-left: 4.1rem;
      padding: 10rem 0;
    }
    .hero {
      padding: 8rem 5rem 3rem 5rem;
    }
  }
`;
