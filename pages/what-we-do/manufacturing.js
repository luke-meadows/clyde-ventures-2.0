import Image from 'next/image';
import MicroServicesGrid from '../../components/service/MicroServicesGrid';
import ServiceBenefits from '../../components/service/ServiceBenefits';
import img from '../../public/manufacturing.jpg';
import ContactSection from '../../components/contact/ContactSection';
import ServicePage from '../../components/service/ServicePage';
import Head from 'next/head';
export default function Manufacturing() {
  return (
    <ServicePage>
      <Head>
        <title>Clyde Ventures - Manufacturing</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="hero">
        <h1>Manufacturing</h1>
        <p>
          We are working on several sustainable and innovative products for the
          transport and construction industry. We will be testing these products
          against British Standards in early October. We are excited about
          sharing more in due course.
        </p>
      </div>
      <ContactSection />
      {/* 
      <MicroServicesGrid
        options={[
          'Design Process',
          'The Science',
          'Placeholder',
          'Placeholder',
          'Placeholder',
          'Placeholder',
          'Placeholder',
          'Placeholder',
          'Placeholder',
        ]}
      />

      <div className="lower-section">
        <div className="text">
          <h2>The Process</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
            perspiciatis sunt explicabo. Fugit ipsam minus eveniet magni
            asperiores nostrum tempore voluptate mollitia. Ad, repellat nostrum
            voluptatum maiores minus consectetur magni.
          </p>
          <ServiceBenefits
            benefitGridCols={3}
            options={['Benefit', 'Benefit', 'Unique selling point', 'Benefit']}
          />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
            nostrum iusto ea possimus eveniet inventore quo deserunt, vero esse
            eum.
          </p>
        </div>
        <div className="img-container">
          <Image src={img} layout="fill" objectFit="cover" />
        </div>
      </div> */}
    </ServicePage>
  );
}
