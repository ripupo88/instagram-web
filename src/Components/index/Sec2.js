import { PaypalBasic } from "../paypal/PaypalBasic";

export const Sec2 = () => {
    return (
        <section className="pricing-table">
            <div className="container">
                <div className="block-heading">
                    <h2>Pricing Table</h2>
                    <p>The best promo you could buy for your IG account</p>
                </div>
                <div className="row justify-content-md-center">
                    <div className="col-md-5 col-lg-4">
                        <div className="item">
                            <div className="heading">
                                <h3>BASIC</h3>
                            </div>
                            <p>Basic plan for getting lots of followers</p>
                            <div className="features">
                                <h4>
                                    <span className="feature">
                                        Full Support
                                    </span>{" "}
                                    : <span className="value">No</span>
                                </h4>
                                <h4>
                                    <span className="feature">Duration</span> :{" "}
                                    <span className="value">7 Days</span>
                                </h4>
                                <h4>
                                    <span className="feature">Posts</span> :{" "}
                                    <span className="value">3</span>
                                </h4>
                            </div>
                            <div className="price">
                                <h4>
                                    $14<small>.99</small>
                                </h4>
                            </div>
                            <PaypalBasic />
                        </div>
                    </div>
                    <div className="col-md-5 col-lg-4">
                        <div className="item">
                            <div className="ribbon">Best Option</div>
                            <div className="heading">
                                <h3>PRO</h3>
                            </div>
                            <p>
                                With this plan you will get the most followers
                                posible
                            </p>
                            <div className="features">
                                <h4>
                                    <span className="feature">
                                        Full Support
                                    </span>{" "}
                                    : <span className="value">Yes</span>
                                </h4>
                                <h4>
                                    <span className="feature">Duration</span> :{" "}
                                    <span className="value">30 Days</span>
                                </h4>
                                <h4>
                                    <span className="feature">Posts</span> :{" "}
                                    <span className="value">10</span>
                                </h4>
                            </div>
                            <div className="price">
                                <h4>
                                    $39<small>.99</small>
                                </h4>
                            </div>
                            <button
                                className="btn btn-block btn-primary"
                                type="submit"
                            >
                                BUY NOW
                            </button>
                        </div>
                    </div>
                    <div className="col-md-5 col-lg-4">
                        <div className="item">
                            <div className="heading">
                                <h3>PREMIUM</h3>
                            </div>
                            <p>
                                This plan is thought for share or resell posts.
                            </p>
                            <div className="features">
                                <h4>
                                    <span className="feature">
                                        Full Support
                                    </span>{" "}
                                    : <span className="value">Yes</span>
                                </h4>
                                <h4>
                                    <span className="feature">Duration</span> :{" "}
                                    <span className="value">120 Days</span>
                                </h4>
                                <h4>
                                    <span className="feature">Posts</span> :{" "}
                                    <span className="value">30</span>
                                </h4>
                            </div>
                            <div className="price">
                                <h4>
                                    $89<small>.99</small>
                                </h4>
                            </div>
                            <button
                                className="btn btn-block btn-outline-primary"
                                type="submit"
                            >
                                BUY NOW
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <style jsx>{`
                @import url("https://fonts.googleapis.com/css?family=Montserrat");

                .pricing-table {
                    background-color: #eee;
                    font-family: "Montserrat", sans-serif;
                }

                .pricing-table .block-heading {
                    padding-top: 50px;
                    margin-bottom: 40px;
                    text-align: center;
                }

                .pricing-table .block-heading h2 {
                    color: #3b99e0;
                }

                .pricing-table .block-heading p {
                    text-align: center;
                    max-width: 420px;
                    margin: auto;
                    opacity: 0.7;
                }

                .pricing-table .heading {
                    text-align: center;
                    padding-bottom: 10px;
                    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
                }

                .pricing-table .item {
                    background-color: #ffffff;
                    box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.075);
                    border-top: 2px solid #5ea4f3;
                    padding: 30px;
                    overflow: hidden;
                    position: relative;
                }

                .pricing-table .col-md-5:not(:last-child) .item {
                    margin-bottom: 30px;
                }

                .pricing-table .item button {
                    font-weight: 600;
                }

                .pricing-table .ribbon {
                    width: 160px;
                    height: 32px;
                    font-size: 12px;
                    text-align: center;
                    color: #fff;
                    font-weight: bold;
                    box-shadow: 0px 2px 3px rgba(136, 136, 136, 0.25);
                    background: #4dbe3b;
                    transform: rotate(45deg);
                    position: absolute;
                    right: -42px;
                    top: 20px;
                    padding-top: 7px;
                }

                .pricing-table .item p {
                    text-align: center;
                    margin-top: 20px;
                    opacity: 0.7;
                }

                .pricing-table .features .feature {
                    font-weight: 600;
                }

                .pricing-table .features h4 {
                    text-align: center;
                    font-size: 18px;
                    padding: 5px;
                }

                .pricing-table .price h4 {
                    margin: 15px 0;
                    font-size: 45px;
                    text-align: center;
                    color: #2288f9;
                }

                .pricing-table .buy-now button {
                    text-align: center;
                    margin: auto;
                    font-weight: 600;
                    padding: 9px 0;
                }
            `}</style>
        </section>
    );
};
