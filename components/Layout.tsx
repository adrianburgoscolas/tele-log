import Head from "next/head";
import React from "react";
import styles from "../styles/utils.module.css"
import Nav from "./Nav";

export default function Layout({children}: {children: React.ReactNode}) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Tele Log</title>
      </Head>
      <header>
        <Nav />
      </header>
      <main>
        <h1 className={styles.heading2xl}>Tele Log</h1>
        {children}
      </main>
      <footer>
        footer
      </footer>
    </div>
  );
}
