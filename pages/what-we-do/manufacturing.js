import SEO from '@bradgarropy/next-seo';
import ContactSection from '../../components/contact/ContactSection';
import ServicePage from '../../components/service/ServicePage';
import Head from 'next/head';
export default function Manufacturing() {
  return (
    <ServicePage>
      <SEO
        title="Clyde Ventures - Manufacturing"
        description="Learn about exciting new FRP products we are developing."
      />
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
    </ServicePage>
  );
}
