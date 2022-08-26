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
          {/* We&apos;re an accredited salesforce partner;  */}
          We will deliver quick and meaningful results that will expedite the
          ROI in your strategic decision to use the salesforce platform. We
          operate in the following sectors: Professional and legal service,
          energy utilities and water, third sector.
        </p>
        <div className="grid">
          <p>
            Sales Cloud <i className="icon-angle-right" />
          </p>
          <p>
            Lead Generation <i className="icon-angle-right" />
          </p>
          <p>
            Service Cloud
            <i className="icon-angle-right" />
          </p>
          <p>
            Pardot <i className="icon-angle-right" />
          </p>
        </div>
      </div>
      {/* <GetToKnowOurPeople /> */}
      <div className="lower-section">
        <div className="text">
          <h2>The Process</h2>
          <p>
            Born from operations our Salesforce team all have user experience of
            the platform in both Business to Business and customer service
            roles.
          </p>
          <p>
            Our proven delivery approach will have you benefitting from the
            platform within weeks. Our existing clients score us highly in the
            following domains of delivery
          </p>
          <div className="benefits">
            <div className="benefit-container">
              <div className="i-container">
                <i className="icon-check" />
              </div>
              <p>C-suite reporting and efficiency tracking</p>
            </div>
            <div className="benefit-container">
              <div className="i-container">
                <i className="icon-check" />
              </div>
              <p>Delivering the system to front line staff</p>
            </div>
            <div className="benefit-container">
              <div className="i-container">
                <i className="icon-check" />
              </div>
              <p>
                Business process reviews and ensuring we aren&apos;t designing
                inefficient processes into your tech solution
              </p>
            </div>
            <div className="benefit-container">
              <div className="i-container">
                <i className="icon-check" />
              </div>
              <p>
                Authentic and empathetic roll out to staff who struggle with
                change
              </p>
            </div>
            <div className="benefit-container">
              <div className="i-container">
                <i className="icon-check" />
              </div>
              <p>
                Ensuring your roll out plan is scoped in a frugal and cost
                effective manner
              </p>
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
