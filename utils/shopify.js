// utils/shopify.js
import { createStorefrontApiClient } from '@shopify/storefront-api-client';

const client = createStorefrontApiClient({
  storeDomain: process.env.SHOPIFY_STORE_DOMAIN,
  apiVersion: '2024-10',
  publicAccessToken: process.env.SHOPIFY_STOREFRONT_ACCESS_TOKEN,
});

export async function getCollectionProducts(handle) {  

  const query = `query getCollectionByHandle($handle: String!) {
  collectionByHandle(handle: $handle) {
    title
    id
    products(first: 2) {
      edges {
        node {
          id
          title
          description
          priceRange {
            minVariantPrice {
              amount
              currencyCode
            }
          }
          images(first: 1) {
            edges {
              node {
                src
                altText
              }
            }
          }
          variants(first: 1) {  # Afegim variants per obtenir l'ID de la variant
            edges {
              node {
                id  # L'ID de la variant és necessari per a afegir al carret
              }
            }
          }
        }
      }
    }
  }
}
`;


  const variables = {handle};
  console.log('Variables que senvien a la consulta:', variables);
  try {
    const response = await fetch(`https://${process.env.SHOPIFY_STORE_DOMAIN}/api/2024-10/graphql.json`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-Shopify-Storefront-Access-Token': process.env.SHOPIFY_STOREFRONT_ACCESS_TOKEN,
        },
        body: JSON.stringify({ query, variables }),
    });

    if (!response.ok) {
        const errorDetails = await response.text();
        throw new Error(`Error Shopify: ${response.status} - ${errorDetails}`);
    }

    const data = await response.json();
    console.log('Resposta de Shopify:', data);

    if (!data || !data.data.collectionByHandle) {
        throw new Error(`Col·lecció no trobada o resposta invàlida de Shopify per a ${handle}`);
    }

    return data.data.collectionByHandle;
} catch (error) {
    console.error('Error recuperant els productes de la col·lecció:', error);
    throw new Error('Shopify API request failed');
}
}

