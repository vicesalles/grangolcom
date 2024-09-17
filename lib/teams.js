// /lib/teams.js

const teams = {
    en: [
      { slug: "vapor", name: "CE El Vapor", mainColor: "black", secondColor: "white", description: "English description", mainPlayer: "Fàtima (8)" },
      { slug: "olivera", name: "CF Olivera", mainColor: "green", secondColor: "white", description: "English description", mainPlayer: "Aina (6)" },
      { slug: "miners", name: "Club Atlètic Miner", mainColor: "yellow", secondColor: "black", description: "English description", mainPlayer: "Otger (10)" }
    ],
    ca: [
      { slug: "vapor", name: "CE El Vapor", mainColor: "black", secondColor: "white", description: "Descripció en Català", mainPlayer: "Fàtima (8)" },
      { slug: "olivera", name: "CF Olivera", mainColor: "green", secondColor: "white", description: "Descripció en Català", mainPlayer: "Aina (6)" },
      { slug: "miners", name: "Club Atlètic Miner", mainColor: "yellow", secondColor: "black", description: "English description", mainPlayer: "Otger (10)"}
    ],
    es: [
      { slug: "vapor", name: "CE El Vapor", mainColor: "black", secondColor: "white", description: "Descripción en Español", mainPlayer: "Fàtima (8)" },
      { slug: "olivera", name: "CF Olivera", mainColor: "green", secondColor: "white", description: "Descripción en Español", mainPlayer: "Aina (6)" },
      { slug: "miners", name: "Club Atlètic Miner", mainColor: "yellow", secondColor: "black", description: "English description", mainPlayer: "Otger (10)"}
    ]
  };
  
  // Function to get all teams for a specific locale
  export function getAllTeamsByLocale(locale) {
    return teams[locale] || teams.en; // Default to 'en' if locale is missing
  }
  
  // Function to get a team by slug and locale
  export function getTeamBySlugAndLocale(slug, locale) {
    const teamsForLocale = getAllTeamsByLocale(locale);
    return teamsForLocale.find(team => team.slug === slug);
  }
  