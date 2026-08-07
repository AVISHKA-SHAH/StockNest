import React from 'react';
function Hero() {
    return (
        <div className="container p-5 mb-5">
            <div className="row text-center">
                <div className="col">
                    <img
                        src="media/images/homeHero.png"
                        alt="Hero"
                        className="img-fluid mb-5"
                        style={{ width: "80%", margin: "0 auto", display: "block" }}
                    />                    
                    <h1 className="mt-5">Invest in Everything </h1>
                    <p>Online platform to invest in stocks, derivatives, mutual funds and more.</p>
                    <button className="p-2 btn btn-primary fs-5 mb-5" style={{width:"20%", margin: "0 auto"}}>Signup Now</button>
                </div>
            </div>
        </div>
    );
}

export default Hero; 