
import Head from 'next/head'
import Link from 'next/link'
import Footer from '../components/Footer'
import NavBar from '../components/NavBar'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
     <Head>
        <title>Ninja | Home</title>
        <meta name="keywords" content="ninjas"/>
      </Head>
    <div>
     <h1 className={styles.title}>Home page</h1>
        <p className={styles.text}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever.</p>
        <p className={styles.text}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever.</p>
        <Link href="ninjas">
        <a className={styles.btn}>See Ninjas Listing</a>
        </Link>
    </div>
    </>
  )
}
