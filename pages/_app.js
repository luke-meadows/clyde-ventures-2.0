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
        id="googleAnalytics"
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=G-FYR84LJVTR`}
      />
      <Script strategy="lazyOnload" id="googleAnalyticsDataLayer">
        {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', 'G-FYR84LJVTR', {
                    page_path: window.location.pathname,
                    });
                `}
      </Script>{' '}
      */ /*{' '}
      <Script type="text/javascript" id="accountEngagement">
        {` piAId = '1050802'; piCId = ''; piHostname = 'go.clydeventures.com';
                    (function() {
                      function async_load(){
                        var s = document.createElement('script'); s.type = 'text/javascript';
                        s.src = ('https:' == document.location.protocol ? 'https://' : 'http://') + piHostname + '/pd.js';
                        var c = document.getElementsByTagName('script')[0]; c.parentNode.insertBefore(s, c);
                      }
                      if(window.attachEvent) { window.attachEvent('onload', async_load); }
                      else { window.addEventListener('load', async_load, false); }
                    })();`}
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
