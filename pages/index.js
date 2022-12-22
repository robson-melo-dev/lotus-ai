import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Chat from './Chat'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>LotusAI</title>
        <meta name="description" content="Automação no ensino da programação" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Bem vindo ao LotusAI!
        </h1>
          <Chat/>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Robson Melo, 2022
        </a>
      </footer>
    </div>
  )
}
