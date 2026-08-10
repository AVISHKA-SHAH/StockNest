import React from "react";

function NotFound() {
  return (
    <div className="container text-center mt-5">
      <div className="row">
        <div className="col">
          <h1>404 - Page Not Found</h1>
          <p>
            Sorry, the page you are looking for does not exist.
            Please check the URL or return to the homepage.
          </p>
        </div>
      </div>
    </div>
  );
}

export default NotFound;