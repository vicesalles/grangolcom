import styles from '../styles/Books.module.scss'
export default function Book({data}){
    
    return(<div id={data.slug} key={data.slug} className={styles.Book}>
        <div className={styles.BookInfo}>
          <div className={styles.BookCover}>
            <a href={data.url} target="_blank">
              <img src={data.cover}/>
            </a>
          </div>
          <div className={styles.BookDescription}>
            <h2>{data.title}</h2>
            <h3>{data.author}</h3>
            <p>{data.description}</p>
            <div className={styles.BookBuyContainer}>
              <a className={styles.BookBuyButton} href={data.url} target="_blank">Get it</a>
            </div>
          </div>
        </div>

      </div>)

}