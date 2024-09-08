import Link from 'next/link'
import styles from '../styles/PageHeader.module.scss'
import {IoMdFootball} from '@react-icons/all-files/io/IoMdFootball';

export default function PageHeader(props) {
    const {title,description} = props;
    return (
        <div className={styles.PageHeader}>
            <div className={styles.TitleLine}><h1><span className={styles.pilota}><Link href="/">
            <IoMdFootball fontSize={30}/>
            </Link></span>{title}</h1></div>
            <h2>{description}</h2>
        </div>
    )
}