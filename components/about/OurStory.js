import Image from 'next/image';
import styled from 'styled-components';
import OurStoryImage from '../../public/our-story.jpg';
import OurStoryImage2 from '../../public/our-story2.jpg';
import SalesforceLogo from '../../public/salesforce.png';
export default function OurStory() {
  return (
    <StyledOurStory>
      <div className="inner-our-story">
        <h4>Our story</h4>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime hic
          aspernatur quas doloremque a impedit, ipsa ipsum aut soluta sunt
          aperiam at molestiae omnis rerum vitae! Lorem ipsum dolor sit amet,
          consectetur adipisicing elit. Maxime hic aspernatur quas doloremque a
          impedit, ipsa ipsum aut soluta sunt aperiam at molestiae omnis rerum
          vitae!
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime hic
          aspernatur quas doloremque a impedit, ipsa ipsum aut soluta sunt
          aperiam at molestiae omnis rerum vitae! Lorem ipsum dolor sit amet,
          consectetur adipisicing elit. Maxime hic aspernatur quas doloremque a
          impedit, ipsa ipsum aut soluta sunt aperiam at molestiae omnis rerum
          vitae!
        </p>
        <div className="our-story-section-2">
          <div>
            <h4>Subtitle explaining values</h4>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore
              dignissimos adipisci cum assumenda unde velit fuga! Temporibus
              repudiandae cum, porro sunt voluptatibus totam facere sequi
              molestias corporis eum minima hic commodi et dolore at quibusdam
              iste consectetur? Ab vitae asperiores temporibus laborum veritatis
              aspernatur in, quis explicabo? Rerum, eaque temporibus.
            </p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore
              dignissimos adipisci cum assumenda unde velit fuga! Temporibus
              repudiandae cum, porro sunt voluptatibus totam facere sequi
              molestias corporis eum minima hic commodi et dolore at quibusdam
              iste consectetur? Ab vitae asperiores temporibus laborum veritatis
              aspernatur in, quis explicabo? Rerum, eaque temporibus.
            </p>
          </div>
          <div className="image-container">
            <Image src={OurStoryImage2} layout="fill" objectFit="cover" />
          </div>
        </div>
        <div className="our-story-section-3">
          <div>
            <h4>Salesforce accredited administrator</h4>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore
              dignissimos adipisci cum assumenda unde velit fuga! Temporibus
              repudiandae cum, porro sunt voluptatibus totam facere sequi
              molestias corporis eum minima hic commodi et dolore at quibusdam
              iste consectetur? Ab vitae asperiores temporibus laborum veritatis
              aspernatur in, quis explicabo? Rerum, eaque temporibus.
            </p>
          </div>
          <div className="image-container">
            <Image src={SalesforceLogo} layout="responsive" objectFit="cover" />
          </div>
        </div>
      </div>
    </StyledOurStory>
  );
}

const StyledOurStory = styled.section`
  background: var(--grey);
  padding: 5rem 5rem 5rem 5rem;
  .inner-our-story {
    max-width: 1600px;
    margin: 0 auto;
  }
  h4 {
    font-size: 2.488rem;
    font-weight: 500;
    margin-bottom: 1rem;
  }
  p {
    max-width: 100ch;
    margin-bottom: 1.2rem;
    font-size: 1.2rem;
  }
  .image-container {
    position: relative;
    height: 60vh;
    width: 100%;
  }
  .our-story-section-2 {
    max-width: 1600px;
    margin: 12rem auto 0 auto;
    display: flex;
    p {
      font-size: 1.1rem;
      margin-right: 2.5rem;
    }
    .image-container {
      margin-left: 2.5rem;
    }

    .image-container {
      width: 50%;
    }
  }
  .our-story-section-3 {
    max-width: 1600px;
    margin: 12rem auto 4rem auto;
    display: flex;
    align-items: center;
    p {
      max-width: 100%;
      font-size: 1.2rem;
      margin-right: 2.5rem;
    }
    .image-container {
      margin: 0 auto;
      height: fit-content;
      max-width: 15rem;
    }
  }
`;
