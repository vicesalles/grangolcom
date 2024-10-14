import Head from "next/head";

export default function PageHeader(props) {
    const {locale} = props;


    if(locale=="ES"){
        return (
            <Head>
                <title>Gran Gol: GGx</title>
            <meta name="description" content="GGx ❤️⚽" />  
    
                <link rel="icon" href="/futbol.ico?v=2"/>
                <meta property="og:title" content="Gran Gol GGx"/>
                <meta property="og:description" content="❤️⚽"/>
                <meta property="og:image" content="https://grangol.com/GGxFons.jpg"/>
                <meta property="og:url" content="https://grangol.com/ggx"></meta>
    
                <meta name="twitter:title" content="Gran Gol GGx"/>
                <meta name="twitter:description" content="❤️⚽"/>
                <meta name="twitter:image" content="https://grangol.com/GGxFons.jpg"/>
                <meta name="twitter:card" content="summary_large_image"></meta>
                <meta name="robots" content="index, follow"/>    
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <link rel="canonical" href="https://www.grangol.com/ggx" />
                <link rel="sitemap" type="application/xml" title="Sitemap" href="https://www.grangol.com/sitemap.xml" />
            </Head>
        )

    }else if(locale="EN"){

        return (
            <Head>
                <title>Gran Gol: GGx</title>
            <meta name="description" content="GGx ❤️⚽" />  
    
                <link rel="icon" href="/futbol.ico?v=2"/>
                <meta property="og:title" content="Gran Gol GGx"/>
                <meta property="og:description" content="❤️⚽"/>
                <meta property="og:image" content="https://grangol.com/GGxFons.jpg"/>
                <meta property="og:url" content="https://grangol.com/ggx"></meta>
    
                <meta name="twitter:title" content="Gran Gol GGx"/>
                <meta name="twitter:description" content="❤️⚽"/>
                <meta name="twitter:image" content="https://grangol.com/GGxFons.jpg"/>
                <meta name="twitter:card" content="summary_large_image"></meta>
                <meta name="robots" content="index, follow"/>    
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <link rel="canonical" href="https://www.grangol.com/ggx" />
                <link rel="sitemap" type="application/xml" title="Sitemap" href="https://www.grangol.com/sitemap.xml" />
            </Head>
        )

    }else{

        return (
            <Head>
                <title>Gran Gol: GGx</title>
            <meta name="description" content="GGx ❤️⚽" />  
    
                <link rel="icon" href="/futbol.ico?v=2"/>
                <meta property="og:title" content="Gran Gol GGx"/>
                <meta property="og:description" content="❤️⚽"/>
                <meta property="og:image" content="https://grangol.com/GGxFons.jpg"/>
                <meta property="og:url" content="https://grangol.com/ggx"></meta>
    
                <meta name="twitter:title" content="Gran Gol GGx"/>
                <meta name="twitter:description" content="❤️⚽"/>
                <meta name="twitter:image" content="https://grangol.com/GGxFons.jpg"/>
                <meta name="twitter:card" content="summary_large_image"></meta>
                <meta name="robots" content="index, follow"/>    
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <link rel="canonical" href="https://www.grangol.com/ggx" />
                <link rel="sitemap" type="application/xml" title="Sitemap" href="https://www.grangol.com/sitemap.xml" />
            </Head>
        )

    }

    
}