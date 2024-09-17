// /pages/teams/[slug].js
import { useRouter } from 'next/router';

export default function TeamPage({ data, locale }) {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{data.name} ({locale.toUpperCase()})</h1>
      <p>Main Color: {data.mainColor}</p>
      <p>Second Color: {data.secondColor}</p>
      <p>Main Player: {data.mainPlayer}</p>
    </div>
  );
}

// Fetch team data from the API route during build or request
export async function getStaticProps({ params, locale }) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/teams/${params.slug}?locale=${locale}`);
  const data = await res.json();

  if (!data.message) {
    return { notFound: true };
  }

  return {
    props: {
      data: data.message,  // Pass the team data to the page
      locale,              // Pass the current locale
    },
    revalidate: 10,  // Revalidate the page every 10 seconds
  };
}


// Generate paths for all slugs and locales
export async function getStaticPaths() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/teams`);
  const slugs = await res.json();

  const locales = ['ca', 'en', 'es'];
  const paths = slugs.flatMap((slugObj) =>
    locales.map((locale) => ({
      params: { slug: slugObj.slug },
      locale,
    }))
  );

  return {
    paths,
    fallback: 'blocking',
  };
}
