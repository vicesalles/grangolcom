// /lib/teams.js
const teams = {
  en: [
    { slug: "vapor", name: "CE El Vapor", short_name: "", nickname: "", mainColor: "black", secondColor: "white", shortsColor:"black", pattern: "stripes", description: "English description", mainPlayer: "Fàtima (8)" },
    { slug: "olivera", name: "CF Olivera", short_name: "", nickname: "", mainColor: "green", secondColor: "white", shortsColor:"black", description: "English description", mainPlayer: "Aina (6)" },
    { slug: "miner", name: "Club Atlètic Miner", short_name: "", nickname: "", mainColor: "yellow", secondColor: "black", shortsColor:"black", description: "English description", mainPlayer: "Otger (10)" },
    { slug: "victoria", name: "FC Victòria", short_name: "", nickname: "", mainColor: "black", secondColor: "white", shortsColor:"white", description: "English description", mainPlayer: "Martí (3)"},
    { slug: "nautic", name: "Club Nàutic", short_name: "", nickname: "", mainColor: "blue", secondColor: "white", shortsColor:"black", description: "English description", mainPlayer: "Ot (8)"},
    { slug: "dos_fars", name: "Dos Fars Club Esportiu", short_name: "", nickname: "", mainColor: "blue", secondColor: "yellow", shortsColor:"black", description: "English description", mainPlayer: "Narcís (2)"},
    { slug: "pescador", name: "CF Pescador", short_name: "", nickname: "", mainColor: "white", secondColor: "blue", shortsColor:"black", description: "English description", mainPlayer: "Marina (1)"},
    { slug: "nou_vapor", name: "CE Nou Vapor", short_name: "", nickname: "", mainColor: "blue", secondColor: "white", shortsColor:"black", description: "English description", mainPlayer: "Marina (1)"},
    { slug: "politecnic", name: "CE Institut Politècnic", short_name: "", nickname: "", mainColor: "red", secondColor: "black", shortsColor:"black", description: "English description", mainPlayer: "Marina (1)"},
    { slug: "guilla", name: "La Guilla CF", short_name: "", nickname: "", mainColor: "orange", secondColor: "white", shortsColor:"white", description: "English description", mainPlayer: "Marina (1)"}
  ],
  ca: [
    { slug: "vapor", name: "CE El Vapor", short_name: "", nickname: "", mainColor: "black", secondColor: "white", shortsColor:"black", pattern: "stripes", description: "English description", mainPlayer: "Fàtima (8)" },
    { slug: "olivera", name: "CF Olivera", short_name: "", nickname: "", mainColor: "green", secondColor: "white", shortsColor:"black", description: "English description", mainPlayer: "Aina (6)" },
    { slug: "miner", name: "Club Atlètic Miner", short_name: "", nickname: "", mainColor: "yellow", secondColor: "black", shortsColor:"black", description: "English description", mainPlayer: "Otger (10)" },
    { slug: "victoria", name: "FC Victòria", short_name: "", nickname: "", mainColor: "black", secondColor: "white", shortsColor:"white", description: "English description", mainPlayer: "Martí (3)"},
    { slug: "nautic", name: "Club Nàutic", short_name: "", nickname: "", mainColor: "blue", secondColor: "white", shortsColor:"black", description: "English description", mainPlayer: "Ot (8)"},
    { slug: "dos_fars", name: "Dos Fars Club Esportiu", short_name: "", nickname: "", mainColor: "blue", secondColor: "yellow", shortsColor:"black", description: "English description", mainPlayer: "Narcís (2)"},
    { slug: "pescador", name: "CF Pescador", short_name: "", nickname: "", mainColor: "white", secondColor: "blue", shortsColor:"black", description: "English description", mainPlayer: "Marina (1)"},
    { slug: "nou_vapor", name: "CE Nou Vapor", short_name: "", nickname: "", mainColor: "blue", secondColor: "white", shortsColor:"black", description: "English description", mainPlayer: "Marina (1)"},
    { slug: "politecnic", name: "CE Institut Politècnic", short_name: "", nickname: "", mainColor: "red", secondColor: "black", shortsColor:"black", description: "English description", mainPlayer: "Marina (1)"},
    { slug: "guilla", name: "La Guilla CF", short_name: "", nickname: "", mainColor: "orange", secondColor: "white", shortsColor:"white", description: "English description", mainPlayer: "Marina (1)"}
  ],
  es: [
    { slug: "vapor", name: "CE El Vapor", short_name: "", nickname: "", mainColor: "black", secondColor: "white", shortsColor:"black", pattern: "stripes", description: "English description", mainPlayer: "Fàtima (8)" },
    { slug: "olivera", name: "CF Olivera", short_name: "", nickname: "", mainColor: "green", secondColor: "white", shortsColor:"black", description: "English description", mainPlayer: "Aina (6)" },
    { slug: "miner", name: "Club Atlètic Miner", short_name: "", nickname: "", mainColor: "yellow", secondColor: "black", shortsColor:"black", description: "English description", mainPlayer: "Otger (10)" },
    { slug: "victoria", name: "FC Victòria", short_name: "", nickname: "", mainColor: "black", secondColor: "white", shortsColor:"white", description: "English description", mainPlayer: "Martí (3)"},
    { slug: "nautic", name: "Club Nàutic", short_name: "", nickname: "", mainColor: "blue", secondColor: "white", shortsColor:"black", description: "English description", mainPlayer: "Ot (8)"},
    { slug: "dos_fars", name: "Dos Fars Club Esportiu", short_name: "", nickname: "", mainColor: "blue", secondColor: "yellow", shortsColor:"black", description: "English description", mainPlayer: "Narcís (2)"},
    { slug: "pescador", name: "CF Pescador", short_name: "", nickname: "", mainColor: "white", secondColor: "blue", shortsColor:"black", description: "English description", mainPlayer: "Marina (1)"},
    { slug: "nou_vapor", name: "CE Nou Vapor", short_name: "", nickname: "", mainColor: "blue", secondColor: "white", shortsColor:"black", description: "English description", mainPlayer: "Marina (1)"},
    { slug: "politecnic", name: "CE Institut Politècnic", short_name: "", nickname: "", mainColor: "red", secondColor: "black", shortsColor:"black", description: "English description", mainPlayer: "Marina (1)"},
    { slug: "guilla", name: "La Guilla CF", short_name: "", nickname: "", mainColor: "orange", secondColor: "white", shortsColor:"white", description: "English description", mainPlayer: "Marina (1)"}
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
  