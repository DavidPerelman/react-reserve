import App from 'next/app';
import Layout from '../components/_App/Layout';
import '/static/styles.css';
import '/static/nprogress.css';
class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    console.log(Component);
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps: pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;
    return (
      <Layout>
        <Component {...pageProps} />
      </Layout>
    );
  }
}

export default MyApp;
