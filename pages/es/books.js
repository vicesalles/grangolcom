import Head from 'next/head'
import Link from 'next/link';
import useSWR from 'swr'
import styles from '../../styles/Books.module.scss'
import Footer from '../../components/Footer';
import Book from '../../components/Book';
import PageHeader from '../../components/PageHeader';


const hackers = {
  slug: "hackers",
  url: "https://amzn.to/3B9DQ67",
  title: "Gran Llibre",
  author: "Vice Sallés",
  description: "molt bo.",
  cover: "https://images-na.ssl-images-amazon.com/images/I/41uA7e3BXnL._SX323_BO1,204,203," +
      "200_.jpg"
}
const fetcher = (url) => fetch(url).then((res) => res.json())
export default function Books() {

 
  const {data, error} = useSWR('/api/books', fetcher)

  if (!data) 
    return <div>Loading the best football books...</div>

  return (
    <div className={styles.container}>
      <Head>
        <title>Gran Gol: Best books about modern Football</title>
        <link rel="icon" href="/futbol.ico?v=2"/>
        <meta property="og:title" content="Gran Gol"/>
        <meta property="og:description" content="Best books about modern football."/>
        <meta property="og:image" content="https://grangol.com/grangol.jpg"/>
        <meta property="og:url" content="https://grangol.com"></meta>

        <meta name="twitter:title" content="Gran Gol"/>
        <meta name="twitter:description" content="Best books about modern football"/>
        <meta name="twitter:image" content="https://grangol.com/grangol.jpg"/>
        <meta name="twitter:card" content="summary_large_image"></meta>
      </Head>

      <main className={styles.main}>
        <PageHeader title="Best Books about modern Football"
          description="Everything is going digital. Football is no excepcion. Those books are a great aproach to the new way football is understood. The digital transformation of football."
        />
        {data.map((bookData) => <Book data={bookData}/>)}
      </main>
      <div className={styles.textMenu}><Link href="/">home</Link> | <Link href="/en/european-football-official-stats">football stats</Link></div>
      <Footer/>
    </div>
  )

}