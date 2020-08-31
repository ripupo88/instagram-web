import Link from "next/link";
import "./navbar.module.scss";

export const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light  shadow-sm ">
            <a href="#" className="navbar-brand">
                <img
                    src="./assets/img/azlogo.svg"
                    width="35"
                    alt="logo rpr"
                    className="d-inline-block align-middle mr-2"
                />

                <span className="font-weight-bold">Hotty Zone</span>
            </a>

            <button
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
                className="navbar-toggler"
            >
                <span className="navbar-toggler-icon"></span>
            </button>

            <div
                id="navbarSupportedContent"
                className="collapse navbar-collapse"
            >
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item active">
                        <Link href="/">
                            <a className="nav-link">
                                Home <span className="sr-only">(current)</span>
                            </a>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link href="/vehiculos">
                            <a className="nav-link">Exposición</a>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link href="#">
                            <a className="nav-link">Services</a>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link href="#">
                            <a className="nav-link">Contact</a>
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};
