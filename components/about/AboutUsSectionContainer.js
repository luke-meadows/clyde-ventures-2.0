import styled from 'styled-components';
export default function AboutUsSectionContainer({
  background = 'var(--white);',
  children,
}) {
  return (
    <Container background={background}>
      <div className="inner">{children}</div>
    </Container>
  );
}

const Container = styled.div`
  background: ${(props) => props.background};
  .inner {
    max-width: 1800px;
    margin: 0 auto;
    padding: 5rem;
  }
  h4 {
    font-size: 2.074rem;
    font-weight: 500;
    margin-bottom: 1.2rem;
    padding-bottom: 0.25rem;
    padding-right: 0.25rem;
    border-bottom: 3px solid var(--yellow2);
    width: fit-content;
  }
  p {
    max-width: 100ch;
    font-size: 1.2rem;
  }
  .our-story-section-2 {
    display: flex;
    align-items: center;
    gap: 5rem;
    .space {
      height: 2.5rem;
    }
    .image-container {
      width: 50%;
      position: relative;
      height: 60vh;
      overflow: hidden;
      border-radius: 0.3rem;
      max-width: 30rem;
      max-height: 25rem;
    }
  }
  ul {
    list-style-position: inside;
    li {
      font-size: 1.2rem;
    }
  }
  .our-story-section-3 {
    display: flex;
    align-items: center;
  }
  @media only screen and (min-width: 1800px) {
    .inner {
      padding: 7.5rem 5rem;
    }
  }
  @media only screen and (max-width: 1170px) {
    .inner {
      padding: 5rem 2rem;
    }
    .image-container {
      display: none;
    }
  }
`;
