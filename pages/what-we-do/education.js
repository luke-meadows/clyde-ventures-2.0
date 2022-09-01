import Image from 'next/image';
import MicroServiceTicks from '../../components/service/MicroServiceTick';
import ServiceBenefits from '../../components/service/ServiceBenefits';
import { StyledServicePage } from '../../components/service/ServicePage';
import img from '../../public/education.jpg';
export default function Education() {
  return (
    <StyledServicePage processGridCols={1}>
      <div className="hero">
        <h1>Education</h1>
        <p>
          We are proud to have supported the university delivering a first of
          it&apos;s kind collaborative executive MBA programme that focuses on
          delivering future leaders equipped to deal with the challenges of
          delivering net zero and reversing global warming.
        </p>
        <p>
          We have partnered with industry leaders who are trailblazing new and
          innovative strategies to create a better world, this course is aimed
          at the following professionals:
        </p>
        <div style={{ padding: ' 1rem 0' }} />
        <MicroServiceTicks
          withPadding={false}
          options={[
            {
              title: 'Entrepreneurs',
              text: 'Entrepreneurs who want to deliver new and interesting products that address the climate crisis.',
            },
            {
              title: 'Non-profit',
              text: 'Those who work in charities, think tanks and government bodies, who are responsible for setting regualtion and want to develop meaningful dialogue with corporations desgining climate change strategies.',
            },
            {
              title: 'Innovators',
              text: 'Innovators within large corporations who need the toolkit to deliver change.',
            },
          ]}
        />
      </div>

      <div className="lower-section">
        <div className="text">
          <h2>The Qualification</h2>
          <p>
            The programmes is designed to fully engage participants in peer
            to-peer learning and to provide access to relevant and impactful
            guest speakers, case studies and examples from the business world.
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
          <button>
            Download brochure <i className="icon-angle-down" />{' '}
          </button>
        </div>
        <div className="img-container">
          <Image src={img} layout="fill" objectFit="cover" />
        </div>
      </div>
    </StyledServicePage>
  );
}
