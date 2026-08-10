import React from "react";
function Hero() {
  return (
    <div className="container mt-4">
      <div className="row p-5 mt-4 mb-4">
        <h1 className=" fs-2 text-center">
          Making investing simpler, smarter, and more accessible.
        </h1>
      </div>
      <div className="row p-5 mt-4 border-top text-muted" style={{ fontSize: "1.2em", lineHeight: "1.8" }}>
        <div className="col-6 p-5">
          <p>Built with a simple idea — investing shouldn't be complicated.</p>
          <p>
            StockNest was created to provide a seamless and user-friendly
            experience for exploring the stock market, tracking investments, and
            managing trades from one place.
          </p>
          <p>
            Our platform brings together essential trading tools, market
            information, and portfolio insights in a clean and intuitive
            environment, making it easier for users to understand their
            investments and stay connected with the market.
          </p>
          <p>
            Whether you're exploring the market for the first time or actively
            managing your portfolio, StockNest is designed to make every step of
            the investing journey simpler.
          </p>
        </div>
        <div className="col-6 p-5">
          <p>
            Everything you need, all in one place. 
          </p>
          <p>  
            StockNest combines stock
            discovery, portfolio tracking, trading functionality, and market
            insights into a single platform.
          </p>
          <p>  
            Our goal is to reduce unnecessary
            complexity and give users the tools they need to monitor their
            investments and make informed decisions. 
          </p>
          <p>  
            From keeping an eye on
            market movements to reviewing your portfolio, StockNest puts the
            essentials right at your fingertips.
          </p>
          <p>  
            Simple interface. Better
            insights. Smarter investing.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
