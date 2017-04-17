import React from 'react';

function Map() {
  return (
    <section className="map-row">
      <div className="content">
        <div className="content-inner">
          <h2>Navigate around the best spots in Edinburgh</h2>

          <p>Bored of the same pint of T over and over again? So you should be.</p>

          <p>Why not let us recommend new bars to your depending on what you like?
            We’ll even make sure your stumbling distance away from them.</p>
        </div>
      </div>

      <div className="map">

      </div>

      <style jsx>
      {`
        .map-row {
          height: 100vh;
          min-height: 600px;
          display: flex;
          flex-direction: row;
          flex: 1 0 auto;
        }

        .content {
          display: flex;
          flex: 0 1 60%;
        }

        .content-inner {
          margin: auto;
        }

        .content {
          padding: 90px 120px;
        }

        h2 {
          font-size: 34px;
          font-weight: 600;
          padding-bottom: 30px;
          margin-top: auto;
        }

        .map {
          background-color: red;
          flex: 1 0 40%;
        }
      `}
      </style>
    </section>
  );
}

export default Map;
