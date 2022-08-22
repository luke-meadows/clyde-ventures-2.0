import Image from 'next/image';
import img from '../../public/manufacturing.jpg';
import { StyledService } from './consultancy';
export default function Manufacturing() {
  return (
    <StyledService>
      <div className="hero">
        <h1>Manufacturing</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
          iusto obcaecati minus magni, vero molestias ab facilis sapiente qui
          officia incidunt cumque deserunt numquam velit?
        </p>
        <div className="grid">
          <p>Content Marketing</p>
          <p>Lead Generation</p>
          <p>Conversion Rate Optimization (CRO) </p>
          <p>Inbound Marketing</p>
          <p>Search Engine Optimization (SEO)</p>
          <p>Mobile App Marketing</p>
          <p>Search Engine Optimization (SEO)</p>
          <p>Inbound Marketing</p>
          <p>Mobile App Marketing</p>
        </div>
      </div>
      <div className="lower-section">
        <div className="text">
          <h2>The Product</h2>
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
              <p>Benefit of the product</p>
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
              <p>Product Fact</p>
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
    </StyledService>
  );
}
