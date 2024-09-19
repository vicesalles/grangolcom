// /pages/api/teams/[slug].js
const teams = {
  en: [
    { slug: "vapor", name: "CE El Vapor", mainColor: "black", secondColor: "white", description: "English description", mainPlayer: "Fàtima (8)" },
    { slug: "olivera", name: "CF Olivera", mainColor: "green", secondColor: "white", description: "English description", mainPlayer: "Aina (6)" },
    { slug: "miners", name: "Club Atlètic Miner", mainColor: "yellow", secondColor: "black", description: "English description", mainPlayer: "Otger (10)" },
    { slug: "victoria", name: "FC Victòria", mainColor: "black", secondColor: "white", description: "English description", mainPlayer: "Martí (3)"}
  ],
  ca: [
    { slug: "vapor", name: "CE El Vapor", mainColor: "black", secondColor: "white", description: "Descripció en Català", mainPlayer: "Fàtima (8)" },
    { slug: "olivera", name: "CF Olivera", mainColor: "green", secondColor: "white", description: "Descripció en Català", mainPlayer: "Aina (6)" },
    { slug: "miners", name: "Club Atlètic Miner", mainColor: "yellow", secondColor: "black", description: "English description", mainPlayer: "Otger (10)"},
    { slug: "victoria", name: "FC Victòria", mainColor: "black", secondColor: "white", description: "English description", mainPlayer: "Martí (3)"}
  ],
  es: [
    { slug: "vapor", name: "CE El Vapor", mainColor: "black", secondColor: "white", description: "Descripción en Español", mainPlayer: "Fàtima (8)" },
    { slug: "olivera", name: "CF Olivera", mainColor: "green", secondColor: "white", description: "Descripción en Español", mainPlayer: "Aina (6)" },
    { slug: "miners", name: "Club Atlètic Miner", mainColor: "yellow", secondColor: "black", description: "English description", mainPlayer: "Otger (10)"},
    { slug: "victoria", name: "FC Victòria", mainColor: "black", secondColor: "white", description: "English description", mainPlayer: "Martí (3)"}
  ]
};

export default function handler(req, res) {
  const { slug } = req.query;  // Get the slug from the query params
  const locale = req.query.locale || 'en';  // Default to English if no locale is provided

  // Select the correct data based on locale
  const data = teams[locale];

  // Find the team by slug in the selected locale
  const team = data.find(item => item.slug === slug);

  if (team) {
    res.status(200).json({ message: team });
  } else {
    res.status(404).json({ message: `Team with slug "${slug}" not found in locale "${locale}"` });
  }
}
