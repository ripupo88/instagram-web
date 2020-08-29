import Head from "next/head";
export const MyApp = ({ Component, pageProps }) => {
    return (
        <div>
            <Head>
                <title>la casa</title>
                <link
                    rel="stylesheet"
                    href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"
                    integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z"
                    crossorigin="anonymous"
                ></link>
            </Head>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="#">
                    Navbar
                </a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarNavAltMarkup"
                    aria-controls="navbarNavAltMarkup"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div
                    className="collapse navbar-collapse"
                    id="navbarNavAltMarkup"
                >
                    <div className="navbar-nav">
                        <a className="nav-link active" href="#">
                            Home <span className="sr-only">(current)</span>
                        </a>
                        <a className="nav-link" href="#">
                            Features
                        </a>
                        <a className="nav-link" href="#">
                            Pricing
                        </a>
                        <a
                            className="nav-link disabled"
                            href="#"
                            tabIndex="-1"
                            aria-disabled="true"
                        >
                            Disabled
                        </a>
                    </div>
                </div>
            </nav>
            <h1>Hola desde app</h1>
            <Component {...pageProps} />
            <h3>footer</h3>
        </div>
    );
};

export default MyApp;
