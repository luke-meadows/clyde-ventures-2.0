import Image from 'next/image';
import img from '../../public/integration.jpg';
import { StyledService } from './consultancy';
import ContactSection from '../../components/contact/ContactSection';

export default function Integration() {
  return (
    <StyledService>
      <div className="hero">
        <h1>Integration</h1>
        <p>
          We're an accredited salesforce partner, we will deliver quick and
          meaningful results that will expedite the roi in your strategic
          decision to use the salesforce platform. We operate in the following
          sectors: Professional and legal service, energy utilities and water,
          third sector.
        </p>
        <div className="grid">
          <p>
            Content Marketing <i className="icon-angle-right" />
          </p>
          <p>
            Lead Generation <i className="icon-angle-right" />
          </p>
          <p>
            Conversion Rate Optimization (CRO){' '}
            <i className="icon-angle-right" />
          </p>
          <p>
            Inbound Marketing <i className="icon-angle-right" />
          </p>
          <p>
            Search Engine Optimization (SEO) <i className="icon-angle-right" />
          </p>
          <p>
            Mobile App Marketing <i className="icon-angle-right" />
          </p>
          <p>
            Search Engine Optimization (SEO) <i className="icon-angle-right" />
          </p>
          <p>
            Inbound Marketing <i className="icon-angle-right" />
          </p>
          <p>
            Mobile App Marketing <i className="icon-angle-right" />
          </p>
        </div>
      </div>
      {/* <GetToKnowOurPeople /> */}
      <div className="lower-section">
        <div className="text">
          <h2>The Process</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
            exercitationem blanditiis deserunt iste! Dolorum voluptatem totam
            tenetur molestiae dolore corporis voluptatum sint cumque quae
            possimus accusantium qui libero, nulla iusto aliquid vitae sunt
            impedit officiis non! Incidunt non amet accusamus vel, est cumque
            fugit voluptas voluptates qui dolores eos nostrum?
          </p>
          <div className="benefits">
            <div className="benefit-container">
              <div className="i-container">
                <i className="icon-check" />
              </div>
              <p>Benefit of the service</p>
            </div>
            <div className="benefit-container">
              <div className="i-container">
                <i className="icon-check" />
              </div>
              <p>Benefit</p>
            </div>
            <div className="benefit-container">
              <div className="i-container">
                <i className="icon-check" />
              </div>
              <p>Benefit</p>
            </div>
            <div className="benefit-container">
              <div className="i-container">
                <i className="icon-check" />
              </div>
              <p>Unique selling point</p>
            </div>
          </div>
        </div>
        <div className="img-container">
          <Image src={img} layout="fill" objectFit="cover" />
        </div>
      </div>
      <ContactSection />
    </StyledService>
  );
}
