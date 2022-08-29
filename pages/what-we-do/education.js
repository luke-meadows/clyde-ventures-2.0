import Image from 'next/image';
import styled from 'styled-components';
import img from '../../public/education.jpg';
import { StyledService } from './consultancy';
export default function Education() {
  return (
    <StyledService processGridCols={1}>
      <div className="hero">
        <h1>Education</h1>
        <p>
          We are proud to have supported the university delivering a first of
          it&apos;s kind collaborative executive MBA programme that focuses on
          delivering future leaders equipped to deal with the challenges of
          delivering net zero and reversing global warming.
        </p>
        <br />
        <p>
          We have partnered with industry leaders who are trailblazing new and
          innovative strategies to create a better world, this course is aimed
          at the following professionals:
          <p />
          <br />
          <br />
          <div className="benefit-container">
            <div className="i-container">
              <i className="icon-check" />
            </div>
            <p>
              Entrepreneurs who want to deliver new and interesting products
              that address the climate crisis.
            </p>
          </div>
          <div className="benefit-container">
            <div className="i-container">
              <i className="icon-check" />
            </div>
            <p>
              Those who work in charities, think tanks and government bodies,
              who are responsible for setting regualtion and want to develop
              meaningful dialogue with corporations desgining climate change
              strategies.
            </p>
          </div>
          <div className="benefit-container">
            <div className="i-container">
              <i className="icon-check" />
            </div>
            <p>
              Innovators within large corporations who need the toolkit to
              deliver change.
            </p>
          </div>
        </p>
      </div>
      <div className="lower-section">
        <div className="text">
          <h2>The Qualification</h2>
          <p>
            The programmes is designed to fully engage participants in peer
            to-peer learning and to provide access to relevant and impactful
            guest speakers, case studies and examples from the business world.
          </p>
          <div className="benefits">
            <div className="benefit-container">
              <div className="i-container">
                <i className="icon-check" />
              </div>
              <p>Industry insight</p>
            </div>
            <div className="benefit-container">
              <div className="i-container">
                <i className="icon-check" />
              </div>
              <p>Networking opportunities</p>
            </div>
            <div className="benefit-container">
              <div className="i-container">
                <i className="icon-check" />
              </div>
              <p>Access to industry experts</p>
            </div>
            <div className="benefit-container">
              <div className="i-container">
                <i className="icon-check" />
              </div>
              <p>Skills to tackle climate change</p>
            </div>
            <div className="benefit-container">
              <div className="i-container">
                <i className="icon-check" />
              </div>
              <p>Supports career change and growth.</p>
            </div>
          </div>
          <button>
            Download brochure <i className="icon-angle-down" />{' '}
          </button>
        </div>
        <div className="img-container">
          <Image src={img} layout="fill" objectFit="cover" />
        </div>
      </div>
    </StyledService>
  );
}
