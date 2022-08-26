import Image from 'next/image';
import styled from 'styled-components';
import img from '../../public/consultancy.jpg';
export default function Consultancy() {
  return (
    <StyledService>
      <div className="hero">
        <h1>Consultancy</h1>
        <p>
          We don&apos;t believe in career consultants. Born from operations, our
          team are experienced in managing complex P&L&apos;s, delivering multi
          faceted change projects and developing high potential teams often in
          challenging environments.
          <br />
          <br />
          We approach each stage of an engagement with the following values at
          the forefront: Speed, Agility, Authenticity, Empathy.
        </p>
        <div className="grid">
          <p>
            Product Design
            <i className="icon-angle-right" />
          </p>
          <p>
            Regulatory Strategies
            <i className="icon-angle-right" />
          </p>
          <p>
            Debt Management
            <i className="icon-angle-right" />
          </p>

          <p>
            Customer acquisition to profit
            <i className="icon-angle-right" />
          </p>
          <p>
            Short and long term business planning
            <i className="icon-angle-right" />
          </p>
          <p>
            Target operating models
            <i className="icon-angle-right" />
          </p>
          <p>
            OPEX reduction
            <i className="icon-angle-right" />
          </p>

          <p>
            Cashflow management
            <i className="icon-angle-right" />
          </p>
          <p>
            Scaling products globally
            <i className="icon-angle-right" />
          </p>
          <p>
            Entering new markets
            <i className="icon-angle-right" />
          </p>
          <p>
            Fundraising
            <i className="icon-angle-right" />
          </p>
        </div>
      </div>
      <div className="lower-section">
        <div className="text">
          <h2>The Process</h2>
          <p>
            Our team have deep expertise and are accredited across multiple
            domains of tools and methodologies. We don&apos;t believe in a
            cookie cutter approach, but across the team we have certifications
            in the following approaches:
          </p>

          <div className="benefits">
            <div className="benefit-container">
              <div className="i-container">
                <i className="icon-check" />
              </div>
              <p>Agile</p>
            </div>
            <div className="benefit-container">
              <div className="i-container">
                <i className="icon-check" />
              </div>
              <p>AWS</p>
            </div>
            <div className="benefit-container">
              <div className="i-container">
                <i className="icon-check" />
              </div>
              <p>Lean </p>
            </div>

            <div className="benefit-container">
              <div className="i-container">
                <i className="icon-check" />
              </div>
              <p>MSP</p>
            </div>
            <div className="benefit-container">
              <div className="i-container">
                <i className="icon-check" />
              </div>
              <p>Prince II</p>
            </div>
            <div className="benefit-container">
              <div className="i-container">
                <i className="icon-check" />
              </div>
              <p>Six Sigma</p>
            </div>
            <div className="benefit-container">
              <div className="i-container">
                <i className="icon-check" />
              </div>
              <p>Salesforce</p>
            </div>
            <div className="benefit-container">
              <div className="i-container">
                <i className="icon-check" />
              </div>
              <p>Scrum-master</p>
            </div>
          </div>
          <p>
            We are not evangelists in any way. We are happy to blend our
            expertise and tailor an approach that suits the needs and culture of
            your business. Our approach is always geared towards the fastest
            results and the best ROI.
          </p>
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

    .benefit-container {
      display: flex;
      margin: 0rem 4rem 1.2rem 0;
      .i-container {
        background: var(--yellow2);
        border-radius: 50%;
        /* height: 2rem;
        width: 2rem; */
        height: 1.8rem;
        width: 1.8rem;
        display: flex;
        aspect-ratio: 1;
        align-items: center;
        justify-content: center;
        margin-right: 0.75rem;
        i {
          color: var(--dark-grey);
          margin: 0;
          padding: 0;
          font-size: 0.9rem;
        }
      }
      p {
        margin-bottom: 0;
        font-size: 1.2rem;
      }
    }
  }

  .lower-section {
    display: flex;
    align-items: center;
    padding: 0 5rem 5rem 5rem;
    max-width: 1800px;
    margin: 0 auto;
    .text,
    .img-container {
      width: 50%;
    }
    .text {
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
      height: 30rem;
      width: calc(50%);
      margin-left: 5rem;
      border-radius: 1rem;
      overflow: hidden;
    }
    .benefits {
      display: grid;
      /* flex-wrap: wrap; */
      grid-template-columns: repeat(1, 1fr);
      align-items: center;
      padding: 1rem 0;
    }

    .benefit-container {
      display: flex;
      /* align-items: center; */
      margin: 0rem 4rem 1.5rem 0;
      .i-container {
        background: var(--yellow2);
        border-radius: 50%;
        height: 1.8rem;
        width: 1.8rem;
        display: flex;
        aspect-ratio: 1;
        align-items: center;
        justify-content: center;
        margin-right: 0.75rem;
        i {
          color: var(--dark-grey);
          margin: 0;
          padding: 0;
          font-size: 0.9rem;
        }
      }
      p {
        margin-bottom: 0;
        font-weight: 500;
        font-size: 1rem;
      }
    }
    button {
      background: var(--yellow2);
      border: 2px solid var(--yellow2);
      font-size: 1rem;
      box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
      font-size: 0.9rem;
      font-weight: 500;
      margin-top: 1rem;
      i {
        margin-right: -0.6rem;
      }
    }
  }
  @media only screen and (min-width: 1600px) {
    .hero {
      padding: 8rem 5rem 3rem 5rem;
    }
  }
`;
