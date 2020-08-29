import Head from "next/head";
import styles from "../styles/Home.module.scss";
import { Card } from "../Components/card/Card";

export default function Home() {
    return (
        <div>
            <h1 className="text-center mt-4 mb-4">Our Pages</h1>
            <div className="mt-5 mb-5">
                <Card />
            </div>
        </div>
    );
}
