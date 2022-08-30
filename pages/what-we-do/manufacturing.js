import Image from 'next/image';
import MicroServicesGrid from '../../components/service/MicroServicesGrid';
import ServiceBenefits from '../../components/service/ServiceBenefits';
import ServicePage from '../../components/service/ServicePage';
import img from '../../public/manufacturing.jpg';
export default function Manufacturing() {
  return (
    <ServicePage>
      <div className="hero">
        <h1>Manufacturing</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit
          perspiciatis facere cupiditate ut, nam enim recusandae ex molestiae
          doloribus quod voluptatum nesciunt maxime. Cum odit blanditiis quas
          voluptas saepe cumque.
        </p>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius
          laboriosam voluptatibus quod sapiente temporibus fuga velit ipsum
          omnis nam corporis!
        </p>
      </div>

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
      </div>
    </ServicePage>
  );
}
