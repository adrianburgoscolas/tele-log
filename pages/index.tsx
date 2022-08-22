import type { NextPage } from 'next'
import Head from 'next/head'
import Layout from '../components/Layout'
import styles from '../styles/utils.module.css'
import { palette } from "../utils/vars";
import Image from "next/image";

const Home: NextPage = () => {
  return (
    <Layout>
      <Head>
        <meta name="description" content="Tele Log Web App, send your server/process logs to a telegram chat, by Adrian Burgos" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="layout">
        <header>
          <h1 className={`${styles.heading2xl}`}>Tele Log</h1>
          <Image 
            priority
            src="/images/log-16.svg"
            alt="wood logs"
            width={60}
            height={60}
            className="img"
          />
          <p className={styles.description}>Take your logs to your Telegram</p>
        </header>
        <section className={styles.card}>
          <div className={styles.svg}>
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="1em" 
              height="1em" 
              preserveAspectRatio="xMidYMid meet" 
              viewBox="0 0 15 15"
            >
              <path 
                fill="none" 
                stroke="currentColor" 
                d="M13.5 5.5h-12m12 0a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1h-12a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1m12 0a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1m-12-4a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1m12 0h-12m12 0a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-12a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1m.5-6h3m-3 4h3m-3 4h3"
              />
            </svg>          
          </div>
          <div className={styles.content}>
            <h2 className={styles.headinglg}>Register your projects</h2>
            <p className={styles.description}>Send the logs from your projects under development or production to our API.</p>
          </div>
        </section>
        <section className={styles.card}>
          <div className={styles.svg}>
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="1em" height="1em"
              preserveAspectRatio="xMidYMid meet" 
              viewBox="0 0 24 24"
            >
              <g 
                fill="none" 
                stroke="currentColor" 
                stroke-linecap="round" 
                stroke-linejoin="round" 
                stroke-width="1.5"
              >
                <path 
                  d="M18 8L5 12.5L9.5 14M18 8l-8.5 6M18 8l-4 10.5L9.5 14"
                />
                <path 
                  d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10Z"
                />
              </g>
            </svg>
          </div>
          <div>
            <h2 className={styles.headinglg}>Keeps your logs closer</h2>
            <p className={styles.description}>Receive your log on a Telegram chat from our TeleLog bot. Your projects logs as push notification.</p>
          </div>
        </section>
      </main>
      <style jsx>{`
        svg, p {

          color: ${palette.SECONDARY_TEXT_COLOR};
        }

        section h2 {

          color: ${palette.PRIMARY_TEXT_COLOR};
        }

        header {
          padding: 2rem 0;
          background-color: ${palette.DEFAULT_PRIMARY_COLOR};
          background-image: url("/images/wood-logs-pile-stacked.jpg");
          background-blend-mode: multiply;
          background-position: center;
        }

        .img {
          z-index: 0;
        }
        .layout header {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        .layout h1 {
          color: ${palette.LIGHT_PRIMARY_COLOR};
          text-align: center;
          margin: 0.5rem 0;
        }

        header p {
          color: ${palette.LIGHT_PRIMARY_COLOR};
          text-align: center;
          margin: 0.5rem 0;
        }
      `}</style>
    </Layout>
  );
}

export default Home;
