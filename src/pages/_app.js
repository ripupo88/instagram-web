import { Navbar } from "../Components/navbar/navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/globals.scss";

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Navbar />
            <Component {...pageProps} />
            <footer>
                <img src="./hotty.svg" alt="logo" alt="logo RPR" />
                <p className="mb-0">
                    Copyright &copy; 2020. All Rights Reserved.
                </p>
            </footer>
            <style jsx>
                {`
                    footer {
                        position: relative;
                        background: #1a1e25;
                        color: #868c96;
                    }

                    footer p {
                        color: #cdcdcd;
                        font-size: 1em;
                        padding: 20px 0;
                        text-align: center;
                    }

                    footer img {
                        margin-left: 10px;
                        position: absolute;
                        top: 50%;
                        -ms-transform: translateY(-50%);
                        transform: translateY(-50%);

                        border-radius: 5px;

                        background-color: white;
                        width: 40px;
                    }
                `}
            </style>
        </>
    );
}

export default MyApp;
