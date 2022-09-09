import type { NextPage } from "next";
import Head from "next/head";

import QRCode from "../components/QRCode/QRCode";

import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <QRCode />
    </div>
  );
};

export default Home;
