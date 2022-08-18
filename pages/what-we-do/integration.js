import Image from 'next/image';
import styled from 'styled-components';
import img from '../../public/pexels-alexander-suhorucov-6457490.jpg';
export default function Integration() {
  return (
    <StyledService>
      <div className="hero">
        <h1>Integration</h1>
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
      <div className="img-container">
        <Image src={img} layout="fill" objectFit="cover" />
      </div>
    </StyledService>
  );
}

const StyledService = styled.section`
  background: var(--white);
  overflow: hidden;
  position: relative;
  width: 100%;
  .hero {
    padding: 6rem 5rem 3rem 5rem;
    position: relative;
    width: 100%;
    max-width: 1600px;
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

  .img-container {
    position: relative;
    height: 45rem;
    width: 100%;
    opacity: 0.6;
  }
  @media only screen and (min-width: 1600px) {
    .hero {
      padding: 8rem 0rem 3rem 0rem;
    }
  }
`;
