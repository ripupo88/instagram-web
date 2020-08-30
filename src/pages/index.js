import Head from "next/head";
import styles from "../styles/Home.module.scss";
import { Card } from "../Components/card/Card";
import { Sec1 } from "../Components/index/Sec1";
import { Sec2 } from "../Components/index/Sec2";

export default function Home() {
    return (
        <div>
            <Sec1 />
            <Sec2 />
            <h1 className="text-center mt-4 mb-4">Our Page</h1>
            <div className="mt-5 mb-5">
                <Card />
            </div>
            <style jsx>{`
                section.pricing {
                    background: #007bff;
                    background: linear-gradient(to right, #0062e6, #33aeff);
                }

                .pricing .card {
                    border: none;
                    border-radius: 1rem;
                    transition: all 0.2s;
                    box-shadow: 0 0.5rem 1rem 0 rgba(0, 0, 0, 0.1);
                }

                .pricing hr {
                    margin: 1.5rem 0;
                }

                .pricing .card-title {
                    margin: 0.5rem 0;
                    font-size: 0.9rem;
                    letter-spacing: 0.1rem;
                    font-weight: bold;
                }

                .pricing .card-price {
                    font-size: 3rem;
                    margin: 0;
                }

                .pricing .card-price .period {
                    font-size: 0.8rem;
                }

                .pricing ul li {
                    margin-bottom: 1rem;
                }

                .pricing .text-muted {
                    opacity: 0.7;
                }

                .pricing .btn {
                    font-size: 80%;
                    border-radius: 5rem;
                    letter-spacing: 0.1rem;
                    font-weight: bold;
                    padding: 1rem;
                    opacity: 0.7;
                    transition: all 0.2s;
                }

                /* Hover Effects on Card */

                @media (min-width: 992px) {
                    .pricing .card:hover {
                        margin-top: -0.25rem;
                        margin-bottom: 0.25rem;
                        box-shadow: 0 0.5rem 1rem 0 rgba(0, 0, 0, 0.3);
                    }
                    .pricing .card:hover .btn {
                        opacity: 1;
                    }
                }
            `}</style>
        </div>
    );
}
