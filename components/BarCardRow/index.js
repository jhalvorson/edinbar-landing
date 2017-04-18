import React from 'react';

function BarCardRow() {
  return (
    <section className="card-row">
      <div className="cards">
        <div className="cards-inner">
          <img
            src="/static/img/card-demo.png"
            alt={'Three shots of the App'}
            />
        </div>
      </div>

      <div className="content">
        <div className="content-inner">
          <h2>Navigate around the best<br /> spots in Edinburgh</h2>

          <p>Bored of the same pint of T over and over again? So you should be.</p>

          <p>Why not let us recommend new bars to your depending on what you like?
            We’ll even make sure your stumbling distance away from them.</p>
        </div>
      </div>

      <style jsx>
        {`
          .card-row {
            min-height: 600px;
            display: flex;
            flex-direction: row;
            flex: 1 0 auto;
            flex-wrap: wrap;
          }

          img {
            width: 100%;
            height: auto;
          }

          .cards {
            display: flex;
            flex: 0 1 100%;
            order: 2;
          }

          .cards-inner {
            margin: auto;
          }

          .content {
            display: flex;
            flex: 0 1 100%;
            padding: 60px 45px;
            order: 1;
          }

          h2 {
            font-size: 34px;
            font-weight: 500;
            padding-bottom: 30px;
            margin-top: auto;
          }

          .content-inner {
            margin: auto;
          }

          @media (min-width: 768px) {

            .card-row {
              height: 100vh;
              flex-wrap: nowrap;
            }

            .cards {
              display: flex;
              flex: 0 1 50%;
              order: 1;
            }

            .content {
              display: flex;
              flex: 0 1 50%;
              padding: 90px 120px;
              order: 2;
            }
          }

        `}
      </style>
    </section>
  );
}

export default BarCardRow;
