import React from 'react';

function Header() {
  return (
    <header className={'header'}>
      <div className="content">
        <h1>Nae more boring beer</h1>
        <h2 className={'header-sub'}>Available on <a href="">iOS</a> and <a href="">Android</a></h2>
      </div>
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
            margin-top: -60px;
          }

          .header-sub {
            color: #626262;
            font-size: 20px;
            font-weight: 500;
            margin-bottom: 50px;
          }

          .hero {
            margin-top: 40px;
          }

          .hero-image {
            max-width: 100%;
          }

          .content {
            margin-top: auto;
          }

          @media (min-width: 768px) {
            .hero {
              margin-top: 60px;
            }
          }

      `}
      </style>
    </header>
  );
}

export default Header;
