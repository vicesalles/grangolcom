import Link from 'next/link';
import useSWR from 'swr'
import styles from '../styles/Books.module.scss'
import gStyles from '../styles/Home.module.css';
import Footer from '../components/Footer';
import Book from '../components/Book';
import PageHeader from '../components/PageHeader';
import SeoHead from '../components/SeoHead';
import TopNavbar from '../components/TopNavbar';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'react-i18next';
import { buildBreadcrumbJsonLd, getAbsoluteUrl } from '../lib/seo';

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
  const { t } = useTranslation(['common', 'seo']);
  const breadcrumbs = buildBreadcrumbJsonLd([
    { name: t('common:home'), url: getAbsoluteUrl('/') },
    { name: t('common:footballBooks'), url: getAbsoluteUrl('/books') },
  ]);
 
  const {data, error} = useSWR('/api/books', fetcher)

  if (!data) 
    return <div>Loading the best football books...</div>

  return (
    <div className={styles.container}>
      <SeoHead
        title={t('seo:booksTitle')}
        description={t('seo:booksDescription')}
        path="/books"
        breadcrumbs={breadcrumbs}
      />
      
      <main className={styles.main}>
        <TopNavbar/>
        <PageHeader title={t('topFootballBooks')}
          description={t('seo:booksDescription')}
        />
        {data.map((bookData) => <Book key={bookData.slug} data={bookData}/>)}
      </main>

      <div className={gStyles.botoneraContainer}>        
        <Link className={gStyles.newsletter} href="/">{t('home')}</Link>  <Link className={gStyles.newsletter} href="./ggx">GGx</Link>  <Link className={gStyles.newsletter} href="/stats">{t('footballStats')}</Link>  
      </div>   
      
     
      <Footer/>
    </div>
  )

}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'seo'])),
    },
  };
}
