import '../styles/globals.css';
import '../public/fontello/css/fontello.css';
import Header from '../components/global/Header';
import styled from 'styled-components';
import Footer from '../components/global/Footer';
import SideBar from '../components/global/SideBar';
import { AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import SEO from '@bradgarropy/next-seo';

function MyApp({ Component, pageProps }) {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <Page>
      <SEO
        title="Clyde Ventures"
        description="Circular solutions for the world. Consult, Integrate, Educate, Manufacture"
        keywords={[
          'consultancy',
          'consult',
          'consultation',
          'manufacture',
          'manufacturing',
          'manufacturer',
          'FRP',
          'Fibre reinforced polymers',
          'Fire doors',
          'Fire panels',
          'Fire cladding',
          'integration',
          'systems integration',
          'automation',
          'CRM',
          'Education',
          'Educate',
          'Sustainability MBA',
          'Diversity recruitment',
          'Glasgow consultancy',
          'Glasgow systems integrations',
          'Salesforce, energy consultancy',
          'regulatory consultancy',
          'salesforce consultancy',
          'Digital transformation',
          'Price cap',
          'Net Zero',
          'Price Control',
          'Digital transformation',
        ]}
        icon="/favicon.ico"
        themeColor="#f9c156"
        colorScheme="light"
        facebook={{
          image: '/og-logo.png',
          url: 'https://clydeventures.com',
          type: 'website',
        }}
        twitter={{
          image: '/1.png',
          site: '@clydeventures',
          card: 'summary',
        }}
      />
      <Header setShowSidebar={setShowSidebar} showSidebar={showSidebar} />
      <AnimatePresence initial={false}>
        {showSidebar && (
          <SideBar key="sidebar" setShowSidebar={setShowSidebar} />
        )}
      </AnimatePresence>
      <div className="main-content">
        <InnerPage>
          <Component {...pageProps} />
        </InnerPage>
        <Footer />
      </div>
    </Page>
  );
}

export default MyApp;

const Page = styled.div`
  position: relative;
`;

const InnerPage = styled.div``;
