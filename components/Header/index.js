import React from 'react';

function Header() {
  return (
    <header className={'header'}>
      <h1>Nae more boring beer</h1>
      <h2>Available on iOS and Android</h2>
      <img src="/static/img/hero.png" alt={'Three shots of the App'} />

      <style jsx>
      {`
        h1 {
          font-size: 44px;
          text-align: center
        }
        .header {
          padding-top: 90px;
          text-align: center;
        }
      `}
      </style>
    </header>
  );
}

export default Header;
