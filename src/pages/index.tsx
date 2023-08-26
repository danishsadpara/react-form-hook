import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import ReactForm from './reactform'


export default function Home() {
  return (
    <>
      <Head>
        <title>React form Hook</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
  <ReactForm/>
      </main>
   
    </>
  )
}
