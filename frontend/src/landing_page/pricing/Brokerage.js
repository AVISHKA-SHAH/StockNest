import React from "react";
function Brokerage() {
  return (
    <div className="container ">
      <div className="row p-5 mt-4 text-center border-top">
        <div className="col-8 p-4">
            <a href="#" style={{ textDecoration: "none" }} ><h3 className="fs-5">Brokerage calculator</h3></a>
            <ul style={{ textAlign: "left", lineHeight: "2.5", fontSize: "14px" }} className="text-muted mt-3">
                <li>Call & Trade and RMS auto squareoff: Additional charges of &#8377;50 + GST per order.</li>
                <li>Digital contract notes will be sent via email.</li>
                <li>Physical contract notes, if required, will be sent via courier at &#8377;25 + GST per contract note.</li>
                <li>For NRI accounts(non-PIS), 0.5% + &#8377;100 per executed order for equity(whichever is lower).</li>
                <li>For NRI accounts(PIS), 0.5% + &#8377;200 per executed order for equity(whichever is lower).</li>
                <li>If the account is in debit balance, any order placed will be charged &#8377;40 per executed order instead of the standard charge.</li>
            </ul>
        </div>
        <div className="col-4 p-4">
            <a href="#" style={{ textDecoration: "none" }}><h3  className="fs-5">List of charges</h3></a>
        </div>
      </div>
    </div>
  );
}

export default Brokerage;
