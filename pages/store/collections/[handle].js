
// pages/collection/[handle].js
import { getCollectionProducts } from '../../../utils/shopify';

export default function CollectionPage({ collection }) {
  if (!collection) {
    return <div>Col·lecció no trobada</div>;
  }

  return (
    <div>
      <h1>{collection.title}</h1>
      <div>
        {collection.products.edges.map(({ node }) => (
          <div key={node.id}>
            <h2>{node.title}</h2>
            {node.images.edges.length > 0 && (
              <img
                src={node.images.edges[0].node.src}
                alt={node.images.edges[0].node.altText || node.title}
                width={200}
              />
            )}
            <p>{node.description}</p>
            <p>
              {node.priceRange.minVariantPrice.amount}{' '}
              {node.priceRange.minVariantPrice.currencyCode}
            </p>

            {/* Generar l'enllaç correcte per afegir al carret */}
            {node.variants.edges.length > 0 && (
              <a
                href={`https://${process.env.SHOPIFY_STORE_DOMAIN}/cart/add?id=${node.variants.edges[0].node.id}&quantity=1`}
                className="buy-button"
              >
                Comprar
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}


export async function getStaticPaths() {
  return {
    paths: [
      { params: { handle: "equips-gran-gol" } },
      { params: { handle: "joc-base" } },
      { params: { handle: "frontpage" } },
      { params: { handle: "equips" } },
    ],
    fallback: 'blocking', // Canvia a 'blocking' per generar pàgines dinàmicament
  };
}

export async function getStaticProps({ params }) {
  try {
    console.log(`Pàgina intenta recuperar productes de la colecció: ${params.handle}`);
    const collection = await getCollectionProducts(params.handle);

    return {
      props: {
        collection,
      },
      revalidate: 60, // Torna a generar la pàgina cada 60 segons
    };
  } catch (error) {
    console.error('Error recuperant la col·lecció:', error);
    return {
      props: {
        collection: null,
      },
    };
  }
}