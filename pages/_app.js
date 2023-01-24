import App from 'next/app';
import Layout from '../components/_App/Layout';
import '../static/styles.css';
import '../static/nprogress.css';

// class MyApp extends App {
//   render() {
//     const { Component } = this.props;
//     return (
//       <Layout>
//         <Component />
//       </Layout>
//     );
//   }
// }
export default function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

// export default MyApp;
