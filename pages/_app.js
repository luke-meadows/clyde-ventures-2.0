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
      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=G-FYR84LJVTR`}
      />

      <Script strategy="lazyOnload">
        {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', 'G-FYR84LJVTR', {
                    page_path: window.location.pathname,
                    });
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
