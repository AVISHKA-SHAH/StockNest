import React from "react";
function Team() {
  return (
    <div className="container">
      <div className="row p-5 mb-4 border-top">
        <h1 className=" text-center">
            Built for Investors
        </h1>
      </div>
      <div
        className="row p-5 mt-4 border-top text-muted"
      >
        <div className="col-6 p-5 text-center">
            <img
            src="media/images/cardimage.png"
            style={{ width: "100%", height: "90%", borderRadius: "10px" }}
            alt="Logo"
            className="img-fluid"
          />
        </div>
        <div className="col-6 p-5" style={{ fontSize: "1.2em", lineHeight: "1.8" }}>
          <p>StockNest is built around a simple belief: technology can make investing easier to understand and more accessible.</p>
          <p>
            We focus on creating a clean and intuitive experience where users can explore stocks, monitor their portfolios, and manage their investments without unnecessary complexity.
          </p>
          <p>
            From market exploration to portfolio management, every feature is designed with simplicity and usability in mind.
          </p>
          <p>
            Our vision is to build a reliable digital investing experience that puts clarity and control in the hands of every investor.
          </p>
          <p>Simple interface. Better insights. Smarter investing.</p>
        </div>
      </div>
    </div>
  );
}

export default Team;
