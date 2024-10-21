// /pages/api/teams/[slug].js
const teams = {
  en: [
    { slug: "vapor", name: "CE El Vapor", mainColor: "black", secondColor: "white", description: "English description", mainPlayer: "Fàtima (8)" },
    { slug: "olivera", name: "CF Olivera", mainColor: "green", secondColor: "white", description: "English description", mainPlayer: "Aina (6)" },
    { slug: "miner", name: "Club Atlètic Miner", mainColor: "yellow", secondColor: "black", description: "English description", mainPlayer: "Otger (10)" },
    { slug: "victoria", name: "FC Victòria", mainColor: "black", secondColor: "white", description: "English description", mainPlayer: "Martí (3)"},
    { slug: "nautic", name: "Club Nàutic", mainColor: "blue", secondColor: "white", description: "English description", mainPlayer: "Ot (8)"},
    { slug: "dos_fars", name: "Dos Fars Club Esportiu", mainColor: "blue", secondColor: "yellow", description: "English description", mainPlayer: "Narcís (2)"},
    { slug: "pescador", name: "CF Pescador", mainColor: "white", secondColor: "blue", description: "English description", mainPlayer: "Marina (1)"},
    { slug: "nou_vapor", name: "CE Nou Vapor", mainColor: "blue", secondColor: "white", description: "English description", mainPlayer: "Marina (1)"},
    { slug: "politecnic", name: "CE Institut Politècnic", mainColor: "red", secondColor: "black", description: "English description", mainPlayer: "Marina (1)"},
    { slug: "guilla", name: "La Guilla CF", mainColor: "orange", secondColor: "white", description: "English description", mainPlayer: "Marina (1)"}
  ],
  ca: [
    { slug: "vapor", name: "CE El Vapor", mainColor: "black", secondColor: "white", description: "Descripció en Català", mainPlayer: "Fàtima (8)" },
    { slug: "olivera", name: "CF Olivera", mainColor: "green", secondColor: "white", description: "Descripció en Català", mainPlayer: "Aina (6)" },
    { slug: "miner", name: "Club Atlètic Miner", mainColor: "yellow", secondColor: "black", description: "English description", mainPlayer: "Otger (10)"},
    { slug: "victoria", name: "FC Victòria", mainColor: "black", secondColor: "white", description: "English description", mainPlayer: "Martí (3)"},
    { slug: "nautic", name: "Club Nàutic", mainColor: "blue", secondColor: "white", description: "English description", mainPlayer: "Ot (8)"},
    { slug: "dos_fars", name: "Dos Fars Club Esportiu", mainColor: "yellow", secondColor: "blue", description: "English description", mainPlayer: "Narcís (2)"},
    { slug: "pescador", name: "CF Pescador", mainColor: "blue", secondColor: "white", description: "English description", mainPlayer: "Marina (1)"},
    { slug: "nou_vapor", name: "CE Nou Vapor", mainColor: "blue", secondColor: "white", description: "English description", mainPlayer: "Marina (1)"},
    { slug: "politecnic", name: "CE Institut Politècnic", mainColor: "red", secondColor: "black", description: "English description", mainPlayer: "Marina (1)"},
    { slug: "guilla", name: "La Guilla CF", mainColor: "orange", secondColor: "white", description: "English description", mainPlayer: "Marina (1)"}
    
  ],
  es: [
    { slug: "vapor", name: "CE El Vapor", mainColor: "black", secondColor: "white", description: "Descripción en Español", mainPlayer: "Fàtima (8)" },
    { slug: "olivera", name: "CF Olivera", mainColor: "green", secondColor: "white", description: "Descripción en Español", mainPlayer: "Aina (6)" },
    { slug: "miner", name: "Club Atlètic Miner", mainColor: "yellow", secondColor: "black", description: "English description", mainPlayer: "Otger (10)"},
    { slug: "victoria", name: "FC Victòria", mainColor: "black", secondColor: "white", description: "English description", mainPlayer: "Martí (3)"},
    { slug: "nautic", name: "Club Nàutic", mainColor: "blue", secondColor: "white", description: "English description", mainPlayer: "Ot (8)"},
    { slug: "dos_fars", name: "Dos Fars Club Esportiu", mainColor: "blue", secondColor: "yellow", description: "English description", mainPlayer: "Narcís (2)"},
    { slug: "pescador", name: "CF Pescador", mainColor: "blue", secondColor: "white", description: "English description", mainPlayer: "Marina (1)"},
    { slug: "nou_vapor", name: "CE Nou Vapor", mainColor: "blue", secondColor: "white", description: "English description", mainPlayer: "Marina (1)"},
    { slug: "politecnic", name: "CE Institut Politècnic", mainColor: "red", secondColor: "black", description: "English description", mainPlayer: "Marina (1)"},
    { slug: "guilla", name: "La Guilla CF", mainColor: "orange", secondColor: "white", description: "English description", mainPlayer: "Marina (1)"}
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
