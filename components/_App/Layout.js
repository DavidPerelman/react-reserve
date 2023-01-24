import Head from 'next/head';
import { Container } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
// import styles from '../../static/styles.module.css';
// import nprogress from '../../static/nprogress.module.css';
import Header from './Header';
import HeadContent from './HeadContent';

function Layout({ children }) {
  return (
    <>
      <Head>
        <HeadContent />
        {/* Stylesheets */}
        {/* <link rel='stylesheet' type='text/css' href='/static/styles.css' />
        <link rel='stylesheet' type='text/css' href='/static/nprogress.css' /> */}
        {/* <link
          rel='stylesheet'
          href='//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.2/semantic.min.css'
        /> */}

        <title>ReactReserve</title>
      </Head>
      <Header />
      <Container text style={{ paddingTop: '1em' }}>
        {children}
      </Container>
    </>
  );
}

export default Layout;
