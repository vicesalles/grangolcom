import styles from '../styles/Home.module.css'
import {FaTwitter} from '@react-icons/all-files/fa/FaTwitter'
import {FaInstagram} from '@react-icons/all-files/fa/FaInstagram'
import {SiTiktok} from '@react-icons/all-files/si/SiTiktok';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <a
                href="https://twitter.com/grangol11"
                target="_blank"
                style={{
                marginRight: 15
            }}><FaTwitter fontSize={25} color={"white"}/></a>            
           
        </footer>
    )
}


/* <a
href="https://www.tiktok.com/@grangol11"
target="_blank"
style={{
marginRight: 15
}}><SiTiktok fontSize={25} color={"white"}/></a>

<a
                href="https://www.instagram.com/grangol11/"
                target="_blank"
                style={{
                marginRight: 15
            }}><FaInstagram fontSize={25} color={"white"}/></a>

*/