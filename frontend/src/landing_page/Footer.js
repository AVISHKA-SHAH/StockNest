import React from "react";
function Footer() {
  return (
    <footer style={{backgroundColor: "rgb(250, 250, 250)"}}>
    <div className="container border-top mt-5" >
      <div className="row mt-5">
        <div className="col">
          <img
            src="media/images/logo.svg"
            style={{ width: "70%" }}
            alt="Logo"
            className="img-fluid"
          />
          <p>
            &copy; 2025-2026 Not StockNest Broking Ltd. All rights reserved.
          </p>
        </div>
        <div className="col">
          <p>Company</p>
          <a href="#" className="text-decoration-none text-muted" style={{ color: "black" }}>
            About
          </a>
          <br />
          <a href="#" className="text-decoration-none text-muted" style={{ color: "black" }}>
            Products
          </a>
          <br />
          <a href="#" className="text-decoration-none text-muted" style={{ color: "black" }}>
            Pricing
            </a>
          <br />
          <a href="#" className="text-decoration-none text-muted" style={{ color: "black" }}>
            Referral programme
          </a>
          <br />
          <a href="#" className="text-decoration-none text-muted" style={{ color: "black" }}>
            Careers
          </a>
          <br />
          <a href="#" className="text-decoration-none text-muted" style={{ color: "black" }}>
            StockNest.tech
          </a>
          <br />
          <a href="#" className="text-decoration-none text-muted" style={{ color: "black" }}>
            Press & media
          </a>
          <br />
          <a href="#" className="text-decoration-none text-muted" style={{ color: "black" }}>
            StockNest cares (CSR)
          </a>
          <br />
        </div>
        <div className="col">
          <p>Support</p>
          <a href="#" className="text-decoration-none text-muted" style={{ color: "black" }}>
            Contact
          </a>
          <br />
          <a href="#" className="text-decoration-none text-muted" style={{ color: "black" }}>
            Support portal
          </a>
          <br />
          <a href="#" className="text-decoration-none text-muted" style={{ color: "black" }}>
            S-Connect blog
          </a>
          <br />
          <a href="#" className="text-decoration-none text-muted" style={{ color: "black" }}>
            List of charges
          </a>
          <br />
          <a href="#" className="text-decoration-none text-muted" style={{ color: "black" }}>
            Downloads & resources
          </a>
          <br />
        </div>
        <div className="col">
          <p>Account</p>
          <a href="#" className="text-decoration-none text-muted" style={{ color: "black" }}>
            Open an account
          </a>
          <br />
          <a href="#" className="text-decoration-none text-muted" style={{ color: "black" }}>
            Fund transfer
          </a>
          <br />
          <a href="#" className="text-decoration-none text-muted" style={{ color: "black" }}>
            60-day challenge
        </a>
          <br />
        </div>
      </div>
      <div className="mt-5 text-muted" style={{ fontSize: "14px" }}>
      <p>
        StockNest Broking Ltd. is a student-built stock trading platform created for
        educational and demonstration purposes. Market data and information
        displayed on the platform may be simulated or provided through
        third-party APIs.
      </p>
      <p>
        Investments are subject to market risks. Past performance does not
        guarantee future results. Please make informed investment decisions and
        understand the risks involved before investing.
      </p>
      <p>
        Prevent unauthorised transactions in your account. Update your mobile
        numbers/email IDs with your stock brokers. Receive information of your
        transactions directly from Exchange on your mobile/email at the end of
        the day. Issued in the interest of investors.
      </p>
      </div>
    </div>
    </footer>
  );
}

export default Footer;
