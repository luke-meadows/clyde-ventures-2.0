import styled from 'styled-components';
export default function ServicePage({ children, processGridCols }) {
  return (
    <StyledServicePage processGridCols={processGridCols}>
      {children}
    </StyledServicePage>
  );
}

export const StyledServicePage = styled.section`
  background: var(--white2);
  overflow: hidden;
  position: relative;
  width: 100%;
  .hero {
    background: var(--white);
    color: var(--dark-grey);
    padding: 12rem 5rem 10rem 5rem;
    position: relative;
    .hero-inner {
      max-width: 1600px;
      margin: 0 auto;
    }
    h1 {
      z-index: 1;
      font-size: 4rem;
      margin-bottom: 1rem;
      font-weight: 500;
    }
    p {
      font-size: 1.2rem;

      margin: 1rem 0 1rem 0.2rem;
      max-width: 100ch;
    }
    li {
      list-style-position: inside;
      font-size: 1.2rem;
      font-weight: 500;
    }
    .header-container-education {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    button {
      background: var(--yellow2);
      border: 2px solid var(--yellow2);
      font-size: 1rem;
      box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
      font-size: 0.9rem;
      font-weight: 500;
      i {
        margin-right: -0.6rem;
      }
    }
  }

  .lower-section {
    display: flex;
    gap: 2.5rem;
    padding-left: 5rem;
    max-width: 1800px;
    margin: 0 auto;
    .text {
      width: calc(50% - 5rem);
    }
    .text {
      padding: 5rem 0;
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
      width: calc(50% + 5rem);

      min-height: 100%;
      margin-left: 5rem;
      overflow: hidden;
      margin: 0;
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
  @media only screen and (max-width: 1170px) {
    .hero {
      padding: 10rem 2rem 8rem 2rem;
      h1 {
        font-size: 3.3rem;
      }
    }
    .lower-section {
      padding: 2.5rem 2rem;
      .img-container {
        display: none;
      }
      .text {
        width: 100%;
      }
    }
    .header-container-education {
      gap: 1rem;
      flex-direction: column;
      padding-bottom: 1rem;
      align-items: flex-start !important;
    }
  }
`;
