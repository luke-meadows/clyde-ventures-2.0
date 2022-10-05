import '../styles/globals.css';
import '../public/fontello/css/fontello.css';
import Header from '../components/global/Header';
import styled from 'styled-components';
import Footer from '../components/global/Footer';
import SideBar from '../components/global/SideBar';
import { AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import SEO from '@bradgarropy/next-seo';
import { nextSeoConfig } from '../seo/config';
import Script from 'next/script';

function MyApp({ Component, pageProps }) {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <Page>
      <SEO {...nextSeoConfig} />
      <Script id="google-tag-manager" strategy="afterInteractive">
        {`
        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-T43JJP9');
      `}
      </Script>
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
