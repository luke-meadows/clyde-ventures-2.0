import Image from 'next/image';
import styled from 'styled-components';

import OurStoryImage from '../../public/our-story2.jpg';
import AboutUsSectionContainer from './AboutUsSectionContainer';
export default function OurStory() {
  return (
    <div>
      <AboutUsSectionContainer background="var(--white2)">
        <h4>Our Story</h4>
        <p>
          We recruit 90% of our staff from the most deprived 10% of postcodes
          and train them with the necessary skills and behaviours to work as
          professional management consultants. Many of our staff begin with no
          formal education but we are adept at identifying capability and
          developing potential.
        </p>
        <p className="last-paragraph">
          All of our staff own shares in the business. Consequently, we have a
          team that are engaged, loyal and keen to show our clients that our
          recruitment model works. We are on a mission to encourage all
          businesses to assess, build and develop talent like we do.
        </p>
      </AboutUsSectionContainer>

      <AboutUsSectionContainer background="var(--grey)">
        <div className="our-story-section-2">
          <div>
            <h4>Our Mission</h4>
            <p>
              Creating social mobility by delivering top line growth for our
              clients. We teach people how to fish in new waters.
            </p>
            <div className="space" />
            <h4>Our Vision</h4>
            <p>
              Our Vision is to be the world&apos;s go-to consultancy for top
              line growth. We design and deliver propositions that connect the
              essence of a business with new markets, people and investors. Our
              circular propositions will take your business into new markets and
              attract the brightest people.
            </p>
          </div>
          <div className="image-container">
            <Image src={OurStoryImage} layout="fill" objectFit="cover" />
          </div>
        </div>
      </AboutUsSectionContainer>

      <AboutUsSectionContainer background="var(--white2)">
        <div className="our-story-section-3">
          <div>
            <h4>A Brief History</h4>
            <p>
              We believe that hard work and honest endeavours always create
              value - our story is testimony to that. Clyde Ventures core team
              came together in 2021 just as the global energy crisis began to
              bite. Our leadership team were concerned about how businesses
              would respond and began to develop propositions to companies that
              would be impacted.
            </p>
            <p>
              We have grown quickly and are now delivering solutions into the
              energy and water utility sectors, tech sector, charitable sector
              and professional services. We take the best values and practices
              that our clients have and enable them to utilise and open new
              markets.
            </p>

            <ul>
              <li>
                We have developed a digital solution for a professional services
                firm to double their growth within 6 months.{' '}
              </li>
              <li>
                We have delivered a global route to market strategy for a major
                tier 1 technology company.{' '}
              </li>

              <li>
                We have opened up new sectors and delivered new customers in new
                continents within 6 months.
              </li>
              <li>
                We are digitising charities and supporting them in growing their
                revenues.
              </li>
            </ul>
          </div>
        </div>
      </AboutUsSectionContainer>
    </div>
  );
}
