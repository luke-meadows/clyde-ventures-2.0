import styled from 'styled-components';
export default function ServicePage({ children, processGridCols }) {
  return (
    <StyledServicePage processGridCols={processGridCols}>
      {children}
    </StyledServicePage>
  );
}

export const StyledServicePage = styled.section`
  background: var(--white);
  overflow: hidden;
  position: relative;
  width: 100%;
  .hero {
    padding: 6rem 5rem 5rem 5rem;
    position: relative;
    width: 100%;
    max-width: 1800px;
    margin: 6rem auto 0 auto;
    h1 {
      z-index: 1;
      font-size: 4rem;
      margin-bottom: 1rem;
      font-weight: 500;
      color: var(--dark-grey);
    }
    p {
      font-size: 1.1rem;
      margin: 1rem 0 0.5rem 0.2rem;
      max-width: 100ch;
      color: var(--dark-grey);
    }

    .benefit-container {
      display: flex;
      margin: 0rem 4rem 1.2rem 0;
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
        font-size: 1.1rem;
      }
    }
  }

  .lower-section {
    display: flex;
    align-items: center;
    padding: 5rem;
    max-width: 1800px;
    margin: 0 auto;
    .text {
      width: 60%;
    }
    .text {
      h2 {
        font-weight: 500;
        font-size: 2.4rem;
        margin-bottom: 1.2rem;
      }
      p {
        font-size: 1.1rem;
      }
    }
    .img-container {
      position: relative;
      height: 22rem;
      width: 40%;
      margin-left: 5rem;
      border-radius: 0.3rem;
      overflow: hidden;
    }
    .benefits {
      display: grid;

      grid-template-columns: ${(props) =>
        'repeat(' + props.processGridCols + ', 1fr)'};
      align-items: center;
      padding: 1rem 0;
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
      margin-top: 8rem;
    }
  }
`;
