import React from "react";

function Universe() {
  return (
    <div className="container mt-4">
      <div className="row text-center">
        <h1>The StockNest Universe</h1>
        <p>
          Extend your trading and investment experiences even further with our
          partner platforms
        </p>
        <div className="col-4 p-3 mt-5">
          <img src="media/images/smallcaseLogo.png"  className="img-fluid universe-logo"  alt="Smallcase"/>
          <p className="text-small text-muted">Thematic investment platform</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="media/images/streakLogo.png"  className="img-fluid universe-logo" alt="Streak"/>
          <p className="text-small text-muted">
            Algo & Strategy platform
          </p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="media/images/sensibullLogo.svg"  className="img-fluid universe-logo"  alt="Sensibull"/>
          <p className="text-small text-muted">Options trading platform</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="media/images/zerodhaFundhouse.png"  className="img-fluid universe-logo"  alt="Zerodha Fundhouse"/>
          <p className="text-small text-muted">Asset management</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="media/images/goldenpiLogo.png"  className="img-fluid universe-logo"  alt="GoldenPi" />
          <p className="text-small text-muted">
            Bonds trading platform
          </p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="media/images/dittoLogo.png"  className="img-fluid universe-logo"  alt="Ditto"/>
          <p className="text-small text-muted">Insurance platform</p>
        </div>
        <button className="p-2 btn btn-primary fs-5 mt-5 mb-5" style={{width:"20%", margin: "0 auto"}}>Signup Now</button>
      </div>
    </div>
  );
}

export default Universe;
