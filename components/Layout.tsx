import Head from "next/head";
import React from "react";
import styles from "../styles/utils.module.css"
import Nav from "./Nav";
import { SCALE } from "../utils/vars"

export default function Layout({children}: {children: React.ReactNode}) {
  return (
    <div>
      <Head>
        <title>Tele Log</title>
      </Head>
      <div className="nav">
        <Nav />
      </div>
      <div className={`const ${ styles.container }`}>
        {children}
        <footer>
          footer
        </footer>
      </div>
      <style jsx>{`
        .nav {
          position: fixed;
          top: 0;
          width: 100%;
          z-index: 1;
        }
        .const {
          positio: relative;
          margin: ${SCALE}rem 0 0 0;
        }
        `}</style>
    </div>
  );
}
