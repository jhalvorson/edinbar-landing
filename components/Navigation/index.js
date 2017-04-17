import React from 'react';

function Navigation() {
  return (
    <nav className={'nav'}>
      <span className={'logo'}>
        Edinbar
        <span className="subline">
          Let&#39;s get drunk together
        </span>
      </span>

      <span className="beta">
        Beta
      </span>

      <style jsx>
        {`

          .nav {
            padding: 20px 40px 0 40px;
            display: flex;
            flex: 1;
            justify-content: space-between;
          }

          .beta {
            color: #507ED7;
            font-weight: 600;
          }

          .logo {
            font-weight: 600;
            font-size: 22px;
          }

          .subline {
            padding-left: 10px;
            font-weight: 300;
            font-size: 18px;
            color: #969696;
          }
        `}
      </style>
    </nav>
  );
}

export default Navigation;
