import ContactSection from '../components/contact/ContactSection';
import Hero from '../components/home/Hero';
import SalesforceBanner from '../components/home/SalesforceBanner';
import ServiceSection from '../components/home/ServiceSection';

export default function Home() {
  return (
    <div>
      <Hero />
      <ServiceSection />

      <ContactSection />
    </div>
  );
}
