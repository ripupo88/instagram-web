export const Sec1 = () => {
    return (
        <div className="main row shadow-sm pb-5">
            <div className="col-lg-6">
                <div className="m-4">
                    <h1>Grow fast</h1>
                    <p>
                        We will help you to grow your account up more fast than
                        you think. If you are just starting or even if you have
                        a middle sized account (up to 150k) in instagram we can
                        help you growing up fast.
                    </p>
                </div>
            </div>
            <div className="col-lg-6 ">
                <div className="mt-3 asvea">
                    <img className="" src="./assets/img/grow.jpg" />
                </div>
            </div>
            <style jsx>{`
                .main {
                }
                .main img {
                    max-width: 100%;
                }
                .main p {
                    font-size: 20px;
                    color: #24131293;
                }
                .main h1 {
                    font-size: 50px;
                }
                .asvea {
                    max-width: 400px;
                    margin-left: auto;
                    margin-right: auto;
                }
            `}</style>
        </div>
    );
};
