import Image from 'next/image';
import img from '../../public/integration.jpg';
import { StyledService } from './consultancy';
import ContactSection from '../../components/contact/ContactSection';

export default function Integration() {
  return (
    <StyledService processGridCols={1}>
      <div className="hero">
        <h1>Integration</h1>
        <p>
          We integrate your business processes into modern technology platforms
          in order to maximise customer engagement. Clyde Ventures will deliver
          quick and meaningful results that will expedite the ROI in your
          strategic decision to use a CRM platform. We are specialists of
          implementation in the following domains:
        </p>

        <br />
        <br />
        <div className="benefit-container">
          <div className="i-container">
            <i className="icon-check" />
          </div>
          <p>Professional and legal service</p>
        </div>
        <div className="benefit-container">
          <div className="i-container">
            <i className="icon-check" />
          </div>
          <p>Energy, utilities and water</p>
        </div>
        <div className="benefit-container">
          <div className="i-container">
            <i className="icon-check" />
          </div>
          <p>Third sector</p>
        </div>
        <div className="grid">
          <div>
            <p>
              Implementation <i className="icon-angle-right" />
            </p>
          </div>
          <div>
            <p>
              Migration
              <i className="icon-angle-right" />
            </p>
          </div>
          <div>
            <p>
              Automation <i className="icon-angle-right" />
            </p>
          </div>
          <div>
            <p>
              Consulting <i className="icon-angle-right" />
            </p>
          </div>
          <div>
            <p>
              Support <i className="icon-angle-right" />
            </p>
          </div>
        </div>
      </div>
      {/* <GetToKnowOurPeople /> */}
      <div className="lower-section">
        <div className="text">
          <h2>The Process</h2>
          <p>
            We deliver custom solutions to manage the flow of data across your
            business. Born from operations our implementation team all have user
            experience of market leading platforms in both Business to Business
            and customer service roles.
          </p>
          <p>
            Our proven delivery approach will have you benefitting from your CRM
            within weeks. Our existing clients score us highly in the following
            domains of delivery
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
                Business process reviews ensuring we aren&apos;t designing
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
