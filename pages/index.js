import React from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import Navigation from '../components/Navigation';
import MapRow from '../components/MapRow';
import BarCardRow from '../components/BarCardRow';
import Footer from '../components/Footer';

function App() {
  return (
    <main className={'edinbar'}>
      <Head>
        <title>Edinbar - Let&#39;s get drunk together</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Navigation />
      <Header />
      <MapRow />
      <BarCardRow />
      <Footer />
      <style jsx global>
        {`
          body {
            background: #fff;
            max-width: 1440px;
            display: block;
            margin: 0 auto;
            color: #393939;
            font-family: -apple-system, BlinkMacSystemFont, "Helvetica Neue", sans-serif;
          }

          html {
            background-color: #f9f9f9;
          }

          h1,
          h2,
          h3,
          h4,
          h5,
          h6 {
            color: #393939;
            font-weight: 400;
            margin: 0;
          }

          p {
            line-height: 1.45;
            font-size: 16px;
          }
        `}
      </style>
    </main>
  );
}

export default App;
