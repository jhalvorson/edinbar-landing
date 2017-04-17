import React from 'react';

function Header() {
  return (
    <header className={'header'}>
      <h1>Nae more boring beer</h1>
      <h2 className={'header-sub'}>Available on iOS and Android</h2>
      <div className="hero">
        <img
          className={'hero-image'}
          src="/static/img/hero.png"
          alt={'Three shots of the App'}
        />
      </div>

      <style jsx>
        {`
          h1 {
            font-size: 49px;
            text-align: center;
            margin-top: 150px;
            margin-bottom: 15px;
            font-weight: 200;
          }

          .header {
            text-align: center;
            height: 100vh;
            min-height: 600px;
            display: flex;
            flex-direction: column;
            flex: 1 0 auto;
            margin-top: -45px;
          }

          .header-sub {
            color: #626262;
            font-size: 20px;
            font-weight: 500;
            margin-bottom: 50px;
          }

          .hero {
            margin-top: auto;
          }

          .hero-image {
            max-width: 100%;
          }
      `}
      </style>
    </header>
  );
}

export default Header;
