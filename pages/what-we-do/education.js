import SEO from '@bradgarropy/next-seo';
import Image from 'next/image';
import { useState } from 'react';
import MicroServiceTicks from '../../components/service/MicroServiceTick';
import ServiceBenefits from '../../components/service/ServiceBenefits';
import { StyledServicePage } from '../../components/service/ServicePage';
import img from '../../public/education.jpg';
import DownloadBrochureModal from '../../components/service/DownloadBrochureModal';

export default function Education() {
  const [downloadModalActive, setDownloadModalActive] = useState(false);
  return (
    <StyledServicePage>
      <SEO
        title="Clyde Ventures - Education"
        description="Learn about our MBA in sustainability."
      />
      <div className="hero">
        <div className="hero-inner" style={{ marginBottom: '-4rem' }}>
          <div className="header-container-education">
            <h1>Education</h1>
            <button type="button" onClick={() => setDownloadModalActive(true)}>
              Download brochure <i className="icon-angle-down" />{' '}
            </button>
          </div>
          <p>
            We are proud to have supported Strathclyde Business School, a
            leading university, in creating a first-of-its-kind collaborative
            executive MBA program This innovative MBA focuses on equipping
            future leaders with the necessary skills to address the challenges
            of delivering net-zero emissions and reversing global warming.
          </p>
          <p>
            In collaboration with Strathclyde Business School, we have formed
            strategic partnerships with industry leaders who are at the
            forefront of trailblazing new and innovative strategies to create a
            better world. This course is specifically designed for professionals
            who aspire to make a significant impact in their respective fields.
          </p>
          <div style={{ padding: '0.5rem 0' }} />
          <MicroServiceTicks
            withPadding={false}
            options={[
              {
                title: 'Entrepreneurs',
                text: 'Entrepreneurs who want to deliver new and interesting products that address the climate crisis.',
              },
              {
                title: 'Non-profit',
                text: 'Those who work in charities, think tanks and government bodies, who are responsible for setting regulation and want to develop meaningful dialogue with corporations designing climate change strategies.',
              },
              {
                title: 'Innovators',
                text: 'Innovators within large corporations who need the toolkit to deliver change.',
              },
            ]}
          />
        </div>
      </div>

      <div className="lower-section">
        <div className="text">
          <h2>The Qualification</h2>
          <p>
            The programme is designed to fully engage participants in peer to
            peer learning and to provide access to relevant and impactful guest
            speakers, case studies and examples from the business world.
          </p>
          <ServiceBenefits
            benefitGridCols={2}
            options={[
              'Industry insight',
              'Networking opportunities',
              'Skills to tackle climate change',
              'Supports career growth',
            ]}
          />
          <button type="button" onClick={() => setDownloadModalActive(true)}>
            Download brochure <i className="icon-angle-down" />{' '}
          </button>
          {downloadModalActive && (
            <DownloadBrochureModal
              setDownloadModalActive={setDownloadModalActive}
            />
          )}
        </div>
        <div className="img-container">
          <Image src={img} layout="fill" objectFit="cover" />
        </div>
      </div>
    </StyledServicePage>
  );
}
