import Image from 'next/image';
import MicroServicesGrid from '../../components/service/MicroServicesGrid';
import ServiceBenefits from '../../components/service/ServiceBenefits';
import ServicePage from '../../components/service/ServicePage';
import img from '../../public/consultancy.jpg';

export default function Consultancy() {
  return (
    <ServicePage processGridCols={3}>
      <div className="hero">
        <h1>Consultancy</h1>
        <p>
          We don&apos;t believe in career consultants. Born from operations, our
          team are experienced in managing complex P&L&apos;s, delivering multi
          faceted change projects and developing high potential teams often in
          challenging environments.
        </p>
        <p>
          We approach each stage of an engagement with the following values at
          the forefront: Speed, Agility, Authenticity, Empathy.
        </p>
      </div>
      <MicroServicesGrid
        options={[
          'Product Design',
          'Regulatory Strategies',
          'Debt Management',
          'Customer acquisition to profit',
          'Short and long term business planning',
          'Target operating models',
          'OPEX reduction',
          'Cashflow management',
          'Scaling products globally',
          'Entering new markets',
          'Fundraising',
        ]}
      />

      <div className="lower-section">
        <div className="text">
          <h2>The Process</h2>
          <p>
            Our team have deep expertise and are accredited across multiple
            domains of tools and methodologies. We don&apos;t believe in a
            cookie cutter approach, but across the team we have certifications
            in the following approaches:
          </p>
          <ServiceBenefits
            benefitGridCols={3}
            options={[
              'Agile',
              'AWS',
              'Lean',
              'MSP',
              'Prince II',
              'Scrum-master',
              'Six Sigma',
            ]}
          />
          <p>
            We are not evangelists in any way. We are happy to blend our
            expertise and tailor an approach that suits the needs and culture of
            your business. Our approach is always geared towards the fastest
            results and the best ROI.
          </p>
        </div>
        <div className="img-container">
          <Image src={img} layout="fill" objectFit="cover" />
        </div>
      </div>
    </ServicePage>
  );
}
