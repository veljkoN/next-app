import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Footer from '../comps/Footer'
import NavBar from '../comps/NavBar'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
    <Head>
      <title>Ninja list | Home</title>
      <meta name="keywords" content="ninjas" />
    </Head>
    <div>
      <h1 className={styles.title}>Homepage</h1>
      <p className={styles.text}>lorem lKJFLKDSLIAHAL LSDAJFLDAJSSLK lkjdalsj lsdfjlkasdjflj asdlfdsfjldskjlk</p>
      <p className={styles.text}>lorem lKJFLsdafsKDSLIAHAL LSDAJFLsfsdDAJSSLK lkjdalsj lsdfjlfgsfgkasdjflj asdlfdsfjldskjlk</p>
      <Link href="/ninjas">
        <a className={styles.btn}>
          See Ninja Listing
        </a>
        </Link>
      </div>
      </>
  )
}
