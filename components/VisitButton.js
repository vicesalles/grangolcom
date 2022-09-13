import styles from '../styles/VisitButton.module.scss'
export default function VisitButton(props){
    const {url} = props;
    return(<a className={styles.boto} href={url} target="_blank">Go</a>)
}