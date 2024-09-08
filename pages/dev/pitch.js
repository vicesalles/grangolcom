import Head from 'next/head'
import Link from 'next/link'
import styles from '../../styles/OfficialStats.module.scss'
import Footer from '../../components/Footer';
import PageHeader from '../../components/PageHeader';
import TopNavbar from '../../components/TopNavbar';
import { IoMdFootball } from '@react-icons/all-files/io/IoMdFootball';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'react-i18next';
import { GoogleTagManager } from '@next/third-parties/google';
import Image from 'next/image';

export default function Games() {
    const { t, ready } = useTranslation('common');

    // Wait until translations are ready
    if (!ready) {
        return <div><IoMdFootball fontSize={12} /></div>;
    }


    return (
        <div className={styles.container}>
            <Head>
                <title>Gran Gol: Les mides del camp de futbol</title>
                <link rel="icon" href="/futbol.ico?v=2" />
                <meta property="og:title" content="Gran Gol" />
                <meta property="og:description" content="Gran Gol: Les mides del camp de futbol" />
                <meta property="og:image" content="https://grangol.com/grangol.jpg" />
                <meta property="og:url" content="https://grangol.com"></meta>

                <meta name="twitter:title" content="Gran Gol" />
                <meta name="twitter:description" content="Gran Gol: Les mides del camp de futbol" />
                <meta name="twitter:image" content="https://grangol.com/grangol.jpg" />
                <meta name="twitter:card" content="summary_large_image"></meta>
            </Head>
            <GoogleTagManager gtmId="G-WSSRG343P3" />
            <main className={styles.main}>
                <TopNavbar />
                <PageHeader
                    title="El terreny de joc"
                    description="Les dimensions d’un camp de futbol i les categories d’estadis de la UEFA" />

                <div>
                    <p>
                        El futbol és un dels esports més populars del món, i a part de tenir un munt de regles emocionants, també és important conèixer el lloc on es juga: el camp de futbol. Aquest lloc no és igual a tot arreu, però la majoria segueixen unes normes establertes. T’has preguntat mai quines són les dimensions d’un camp de futbol o quins tipus d’estadis hi ha segons la UEFA? Aquí t'ho explico d'una manera fàcil de comprendre!
                    </p>
                    <h3>Dimensions del camp de futbol</h3>
                    <p>
                        El camp de futbol és un espai rectangular on es juga el partit, però la seva mida pot variar una mica, tot i que sempre dins d’uns límits. Aquí tens les mides bàsiques:
                    </p>
                    <ul>
                        <li>Longitud (de la línia de banda):** Pot tenir entre 90 i 120 metres.</li>
                        <li>Amplada (de la línia de fons):** Pot variar entre 45 i 90 metres.</li>
                    </ul>
                    <p>
                        Tanmateix, per als partits oficials, com els que veus a la tele quan juga el Barça o el Madrid, les mides són més específiques:
                    </p>
                    <ul><li>Longitud (de la línia de banda): Entre 100 i 110 metres.</li><li>Amplada (de la línia de fons): Entre 64 i 75 metres.</li></ul>

                    <h3>Parts del camp</h3>
                    <p>
                        Un camp de futbol té diferents parts molt importants:
                    </p>
                    <ol>
                        <li>La porteria: És el lloc on s’ha de marcar el gol. Té una amplada de 7,32 metres i una alçada de 2,44 metres.</li>
                        <li>L’àrea de penal: Aquesta és la zona on el porter pot utilitzar les mans i on es llancen els penals si es comet una falta dins d’aquesta àrea. Té una mida de 16,5 metres des de la línia de gol cap al camp.</li>
                        <li>El cercle central: Aquest és el cercle que hi ha al mig del camp i té un radi de 9,15 metres. Aquí és on es col·loca la pilota al començament de cada part del partit.</li>
                    </ol>

                    <h3>Les categories d’estadis de la UEFA</h3>
                    <p>
                        La UEFA (Unió de Federacions Europees de Futbol) és l'organització que regula el futbol a Europa. Per assegurar-se que els estadis on es juguen els partits importants estiguin en bones condicions, ha creat un sistema de classificació. Els estadis es divideixen en diferents **categories**, i aquestes determinen la qualitat de les instal·lacions.
                    </p><p>
                        Les categories van de la <b>1 a la 5</b>, sent la categoria 5 la més alta. Un estadi de categoria 5 pot acollir grans competicions com la final de la Champions League o la final de l’Eurocopa.
                    </p>
                    <h3>Estadis de categoria 5</h3>
                    <p>
                        Els estadis de categoria 5 han de complir unes normes molt estrictes. Aquests són alguns dels requisits principals:
                    </p>
                    <ol>

                        <li>z<b>Capacitat:</b> L’estadi ha de tenir almenys 60.000 seients per als espectadors.</li>
                        <li>z<b>Il·luminació:</b> La il·luminació ha de ser molt bona, amb almenys 1.400 lux, perquè els partits es puguin veure clarament tant al camp com a la televisió.</li>
                        <li>z<b>Cabines de premsa i televisió:</b> Han de tenir prou espai perquè els periodistes puguin treballar còmodament, i les càmeres de televisió han de poder captar bé el joc des de diferents angles.</li>
                        <li>z<b>Vestidors:</b> Els jugadors han de tenir vestidors espaiosos i còmodes, amb totes les instal·lacions necessàries.</li>
                        <li>z<b>Mides del camp:</b> El camp en estadis de categoria 5 ha de tenir unes dimensions més específiques:</li>
                        <li><ul>
                            <li>z<b>Longitud:</b> Entre 105 metres.</li>
                            <li>z<b>Amplada:</b> 68 metres.</li>
                        </ul></li>

                    </ol>


                    <p>
                        Aquestes mides són les que també s’utilitzen per a les finals de grans competicions.
                    </p>
                    <h3>Conclusió</h3>
                    <p>
                        Ara ja coneixes les dimensions d’un camp de futbol i com es classifiquen els estadis segons la UEFA. Així que, la propera vegada que vegis un partit a la televisió o vagis a un estadi, podràs entendre millor tot el que envolta un partit de futbol, des de les mides del camp fins a les categories dels estadis on es juguen els partits més importants del món.
                    </p>   </div>

                <Image
                    src="/img/articles/campFutbol.png"
                    width={1200}
                    height={803}
                    alt="Esquema de les dimensions d'un camp de futbol"
                />

            </main>
            <div className={styles.textMenu}><Link href="/">{t('home')}</Link> | <Link href="/stats">{t('footballStats')}</Link> | <Link href="/books">{t('footballBooks')}</Link></div>

            <Footer />
        </div>
    )

}

export async function getStaticProps({ locale }) {
    return {
        props: {
            ...(await serverSideTranslations(locale, ['common'])),
        },
    };
}