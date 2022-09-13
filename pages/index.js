import Head from 'next/head';
import ContactSection from '../components/contact/ContactSection';
import GetToKnowOurPeople from '../components/home/GetToKnowOurPeople';

import Hero from '../components/home/Hero';
import ServiceSection from '../components/home/ServiceSection';

export default function Home() {
  return (
    <div>
      {/* <Head>
        <title>Clyde Ventures</title>
        <meta name="description" content="Circular solutions for the world" />
        <link rel="icon" href="/favicon.ico" />
      </Head> */}
      <Hero />
      <ServiceSection />
      {/* <GetToKnowOurPeople /> */}
      <ContactSection />
    </div>
  );
}
