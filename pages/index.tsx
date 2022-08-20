import type { NextPage } from 'next'
import Head from 'next/head'
import Layout from '../components/Layout'
import styles from '../styles/utils.module.css'

const Home: NextPage = () => {
  return (
    <Layout>
      <Head>
        <meta name="description" content="Tele Log Web App, send your server/process logs to a telegram chat, by Adrian Burgos" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section>
        <h2 className={styles.headingxl}>Home</h2>
      </section>
    </Layout>
  );
}

export default Home;
