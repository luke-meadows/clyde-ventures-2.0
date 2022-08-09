import '../styles/globals.css';
import '../public/fontello/css/fontello.css';
import Header from '../components/global/Header';
import styled from 'styled-components';

function MyApp({ Component, pageProps }) {
  return (
    <Page>
      <Header />
      <InnerPage>
        <Component {...pageProps} />
      </InnerPage>
    </Page>
  );
}

export default MyApp;

const Page = styled.main`
  position: relative;
`;

const InnerPage = styled.div`
  /* margin-top: 10rem; */
`;
