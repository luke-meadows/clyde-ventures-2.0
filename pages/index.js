import Head from 'next/head';
import Hero from '../components/home/Hero';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Clyde Ventures</title>
        <meta name="description" content="Circular solutions for the world" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
    </div>
  );
}
