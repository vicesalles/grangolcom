import Head from 'next/head'
import Link from 'next/link'
import styles from '../../styles/General.module.scss'
import Footer from '../../components/Footer';
import PageHeader from '../../components/PageHeader';
import TopNavbar from '../../components/TopNavbar';
import { IoMdFootball } from '@react-icons/all-files/io/IoMdFootball';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'react-i18next';
import Image from 'next/image';

export default function Games() {
    const { t, ready } = useTranslation('common');

    // Wait until translations are ready
    if (!ready) {
        return <div><IoMdFootball fontSize={12} /></div>;
    }


    return (
        <div>
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
            
            <main className={styles.main}>
                <TopNavbar />
                <PageHeader
                    title="GRAN GOL DEVLOG "
                    description="11 d'octubre de 2024 > Estic parint un joc de futbol " />


                <div className={styles.article}>    
                    <h3>Estic fent un joc de futbol</h3>                    
                  <p>Estic molt content amb el sistema de joc. El nucli és bo. Sóc un apassionat del futbol i no ha estat gens fàcil arribar a una abstracció que, pretenc, faci vibrar a d'altres amants del futbol com ho fa amb mi.</p>
                  <p>Ara bé, d'un sistema de joc bo a una experiència de joc bona, hi ha tot un món de feina. D'una experiència de joc bona a un bon producte hi ha un altre món de feina. I d'un bon producte a una massa d'usuaris que l'apreciaran també hi ha un món de distància.</p>
                    <p>Així doncs, amb un bon sistema de joc entre mans, em trobo a tres mons de distància de llançar un producte exitós. Si ens ho mirem com una aventura intergalàctica, poden sortir moltes coses malament. Això, i el pensament persistent, de si és bona idea fer un viatge com aquest tot sol.
                    </p>
                    <p>A falta de companys de viatge permanents, l'ànim d'aquest registre és intercanviar idees amb el principal interessat en que aquest projecte resulti en un producte d'èxit. Si, a més, aquestes reflexions poden interessar a algú altre, estaré molt content.
                    </p>
                    <p>He validat el sistema amb cartes pintades a mà, daus i alguns elements que he imprès per anar donant forma a l'experiència. De moment, he jugat amb dues persones i el sistema s'ha mostrat fàcil d'explicar i les persones que han jugat amb mi no han fugit corrent. Valoro molt que la nostra amiga Cristina, entrenadora de futbol, em digués que, efectivament, el sistema de joc captava les essències del futbol. Detesto els jocs on la temàtica és una capa pintada al damunt del sistema. No volia, de cap manera, que Gran Gol fos això. Gran Gol és un joc de futbol i no un sistema de joc que va de futbol. Això, crec que ho tinc.
                    </p>
                    <p>Desitjo jugar amb més gent i aprendre més. Alhora, però, estic destinant molta energia mental en el meu punt dèbil, en allò contra el que m'he estrellat en cada projecte que he iniciat des de que tenia 15 anys i vaig fer L'emmascarat justicier (EJ), una aventura gràfica no apta per a tots els públics: Arribar al públic.
                    </p>
                    <p>He llegit alguna cosa des de que l'EJ es va quedar mort de riure en un disc dur. He llegit i també he tingut temps d'estrellar altres projectes. El que tinc clar és que el Marketing comença ara. Amb el build que tinc avui, no pots acabar un partit sencer. Es para al primer quart. Però sí, el marketing és una prioritat per mi. Dur el producte al mercat és l'objectiu final, la resta de coses, les he de donar per descomptades. No per descomptades vull dir fàcils o poc laborioses, però les he de donar per fetes (Em sents, jo del futur?). On no puc tornar a fallar és en el de sempre: Arribar a la gent a qui li agradarà Gran Gol.
                    </p>
                    <p>Vicenç Sallés</p>
                </div>

            </main>
            <div className={styles.textMenu}>
            <div className={styles.textMenu}><Link href="/">{t('home')}</Link> |  <Link href="./ggx">GGx</Link> </div>
            </div>
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