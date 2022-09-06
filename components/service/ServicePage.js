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
  margin-bottom: 3rem;
  .hero {
    padding: 12rem 5rem 5rem 5rem;
    position: relative;
    width: 100%;
    max-width: 1800px;
    margin: 0 auto 0 auto;
    h1 {
      z-index: 1;
      font-size: 4rem;
      margin-bottom: 1rem;
      font-weight: 500;
      color: var(--dark-grey);
    }
    p {
      font-size: 1.2rem;

      margin: 1rem 0 1rem 0.2rem;
      max-width: 100ch;
      color: var(--dark-grey);
    }
    li {
      list-style-position: inside;
      font-size: 1.2rem;
      font-weight: 500;
    }
  }

  .lower-section {
    display: flex;
    align-items: center;
    padding: 5rem 5rem;
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
        font-size: 1.2rem;
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
      padding: 10rem 2rem 2.5rem 2rem;
      h1 {
        font-size: 3rem;
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
  }
`;
