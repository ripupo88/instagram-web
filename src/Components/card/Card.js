import React from "react";
import Link from "next/Link";

export const Card = () => {
    return (
        <div className="row">
            <div className="col-md-8 m-auto">
                <div className="card m-auto col-md-4">
                    <img
                        className="card-img-top ml-auto mr-auto imgprof"
                        src="./assets/img/ig-profile.jpg"
                        alt="Card image cap"
                    />
                    <div className="card-body">
                        <h5 className="card-title">@hotmodelsgallery_</h5>
                        <p className="card-text">
                            <img
                                className="soivhdeuhrf"
                                src="./assets/icons/person.svg"
                            />
                            <b> (204.165)</b>
                        </p>
                    </div>
                    <div className="card-body ">
                        <Link href="/post">
                            <a className="btn btn-primary float-right w-100">
                                Post
                            </a>
                        </Link>
                    </div>
                </div>
            </div>

            <style jsx>{`
                .col-md-8 {
                    display: flex;
                    text-align: left;
                }
                .card {
                    max-width: 17rem;
                }
                .imgprof {
                    margin-top: 20px;
                    width: 60%;
                    border-radius: 50%;
                }
                .soivhdeuhrf {
                    margin-top: -6px;
                    width: 25px;
                }
            `}</style>
        </div>
    );
};
