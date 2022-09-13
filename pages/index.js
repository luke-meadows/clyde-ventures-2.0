import ContactSection from '../components/contact/ContactSection';
import Hero from '../components/home/Hero';
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
