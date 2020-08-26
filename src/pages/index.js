import Head from "next/head";
import styles from "../../styles/Home.module.scss";
import { Card } from "../Components/card/Card";

export default function Home() {
    return (
        <>
            <h1 className="text-center">Our Pages</h1>
            <Card />
        </>
    );
}
