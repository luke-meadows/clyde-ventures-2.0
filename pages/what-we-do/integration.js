import Image from 'next/image';
import img from '../../public/integration.jpg';
import MicroServicesGrid from '../../components/service/MicroServicesGrid';
import ServiceBenefits from '../../components/service/ServiceBenefits';
import { StyledServicePage } from '../../components/service/ServicePage';
import MicroServiceTicks from '../../components/service/MicroServiceTick';

export default function Integration() {
  return (
    <StyledServicePage processGridCols={1}>
      <div className="hero">
        <h1>Integration</h1>
        <p>
          We integrate your business processes into modern technology platforms
          in order to maximise customer engagement. Clyde Ventures will deliver
          quick and meaningful results that will expedite the ROI in your
          strategic decision to use a CRM platform.
        </p>
        <p>We are specialists of implementation in the following domains: </p>
      </div>

      <MicroServicesGrid
        options={[
          'Implementation',
          ' Migration',
          'Automation',
          'Consulting',
          'Support',
        ]}
      />

      <div className="lower-section">
        <div className="text">
          <h2>The Process</h2>
          <p>
            We deliver custom solutions to manage the flow of data across your
            business. Born from operations our implementation team all have user
            experience of market leading platforms in both Business to Business
            and customer service roles.
          </p>
          <ServiceBenefits
            benefitGridCols={2}
            options={[
              'C-suite reporting',
              'Efficiency tracking',
              'Front line staff delivery',
              'Empathetic roll out',
              'ROI Focused',
              'Business process reviews',
            ]}
          />

          <p>
            Our proven delivery approach will have you benefitting from your CRM
            within weeks. Our existing clients score us highly in the following
            domains of delivery:
          </p>

          <MicroServiceTicks
            options={[
              {
                title: 'Energy, utilities and water',
                text: 'Our integration services can impact your sector in these ways. Our integration services can impact your sector in these ways. Our integration services can impact your sector in these ways.',
              },
              {
                title: 'Professional and legal services',
                text: 'Our integration services can impact your sector in these ways. Our integration services can impact your sector in these ways. Our integration services can impact your sector in these ways.',
              },
              {
                title: 'Third sector',
                text: 'Our integration services can impact your sector in these ways. Our integration services can impact your sector in these ways. Our integration services can impact your sector in these ways.',
              },
            ]}
          />
        </div>

        <div className="img-container">
          <Image src={img} layout="fill" objectFit="cover" />
        </div>
      </div>
    </StyledServicePage>
  );
}
