import '../styles/globals.css';
import '../public/fontello/css/fontello.css';
import Header from '../components/global/Header';

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Header />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
