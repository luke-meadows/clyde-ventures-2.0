import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';
import SFLOGO from '../../public/salesforce.png';
export default function SalesforceBanner() {
  return (
    <StyledBanner>
      <div className="inner">
        <div>
          <h2>Salesforce Partner</h2>
          <p>
            Our Salesforce integration process is designed to bring you and your
            customers together. Salesforce enables streamlined engagement with
            your customers and provides a unified experience across every
            interaction they have with your business.
          </p>
          <p>
            Clyde Ventures build bespoke applications in the platform that make
            your employees more efficient, we also provide learning
            documentation making up-skilling your workforce effortless. Get the
            facts and figures with in-depth platform analytics ensuring a 360
            all-inclusive understanding of your customers.
          </p>
          <p className="last-paragraph">
            We understand that no two businesses have the same requirements, and
            therefore tailor Salesforce for your business and industry using the
            powerful and synchronised products the platform provides. Learn more
            about our integration process{' '}
            <Link href="/what-we-do/integration">
              <a>here</a>
            </Link>
            .
          </p>
        </div>
        <div className="image-container-background">
          <div className="image-container">
            <Image src={SFLOGO} layout="responsive" />
          </div>
        </div>
      </div>
    </StyledBanner>
  );
}

const StyledBanner = styled.section`
  background: var(--sf-blue);
  color: var(--white2);
  .inner {
    padding: 7.5rem 5rem;
    max-width: 1800px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    gap: 5rem;
    h2 {
      margin-bottom: 1.2rem;
      padding-bottom: 0.25rem;
      padding-right: 0.25rem;
      border-bottom: 3px solid var(--yellow2);
      width: fit-content;
      font-size: 2.4rem;
    }
    p {
      max-width: 90ch;
      font-size: 1.2rem;
      a {
        padding-bottom: 0.1rem;
        padding-right: 0.1rem;

        border-bottom: 2px solid var(--yellow2);
      }
    }

    .image-container-background {
      background: var(--white2);
      padding: 2.5rem;
      border-radius: 0.5rem;
    }
    .image-container {
      position: relative;
      width: 20rem;
    }
  }

  @media only screen and (max-width: 1170px) {
    padding: 4rem 2rem;
    .image-container-background {
      display: none;
    }
  }
`;
