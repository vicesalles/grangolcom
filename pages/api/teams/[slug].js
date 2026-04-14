// /pages/api/teams/[slug].js
const teams = {
  en: [
    { id: 1, slug: "millworks", name: "CE El Vapor", mainColor: "black", secondColor: "white", textColor: "red", description: "English description", rivals: "", mainPlayer: "Fàtima (8)" },
    { id: 2, slug: "greendale", name: "CF Olivera", mainColor: "green", secondColor: "white", textColor: "black", description: "English description", rivals: "", mainPlayer: "Aina (6)" },
    { id: 3, slug: "coalvale", name: "Club Atlètic Miner", mainColor: "yellow", secondColor: "black", textColor: "white", description: "English description", rivals: "", mainPlayer: "Otger (10)" },
    { id: 4, slug: "victoria", name: "FC Victòria", mainColor: "black", secondColor: "white", textColor: "white", description: "English description", rivals: "", mainPlayer: "Martí (3)" },
    { id: 5, slug: "whiteshore", name: "Club Nàutic", mainColor: "blue", secondColor: "white", textColor: "white", description: "English description", rivals: "", mainPlayer: "Ot (8)" },
    { id: 6, slug: "two_lights", name: "Dos Fars Club Esportiu", mainColor: "blue", secondColor: "yellow", textColor: "white", description: "English description", rivals: "", mainPlayer: "Narcís (2)" },
    { id: 7, slug: "harbormen", name: "CF Pescador", mainColor: "white", secondColor: "blue", textColor: "red", description: "English description", rivals: "", mainPlayer: "Marina (1)" },
    { id: 8, slug: "new_millworks", name: "CE Nou Vapor", mainColor: "blue", secondColor: "white", textColor: "yellow", description: "English description", rivals: "", mainPlayer: "" },
    { id: 9, slug: "polytechnic", name: "CE Institut Politècnic", mainColor: "orange", secondColor: "black", textColor: "white", description: "English description", rivals: "", mainPlayer: "" },
    { id: 10, slug: "foxwood", name: "La Guilla CF", mainColor: "orange", secondColor: "white", textColor: "white", description: "English description", rivals: "", mainPlayer: "" }
  ],
  ca: [
    { id: 1, slug: "vapor", 
      name: "CE El Vapor", mainColor: "black", secondColor: "white", textColor: "red", description: "El Vapor és un equip d'un poble mitjà situat al costat del riu en una petita plana entre les muntanyes. Antigament havia tingut una forta indústria tèxtil.", 
      rivals: "El principal rival del Vapor és el Miners. També manté rivalitat amb el Nou Vapor que és de la mateixa població.", 
      mainPlayer: "Fàtima (8)" },
    { id: 2, slug: "olivera", 
      name: "CF Olivera", mainColor: "green", secondColor: "white", textColor: "white", 
      description: " El Club Esportiu Olivera se situa en un petit poblet agrícola.", 
      rivals: "El principal rival de l'Olivera és la Guilla. També té rivalitat amb el Nou Vapor.", 
      mainPlayer: "Aina (6)" },
    { id: 3, slug: "miner", 
      name: "Club Atlètic Miner", mainColor: "yellow", secondColor: "black", textColor: "white", 
      description: "El Miners és un club d'un petit poble a la part alta del cicle del riu. Antiga colònia minera, va perdre molta població quan van tancar les mines.", 
      rivals: "El principal rival dels Miners és el Vapor.", 
      mainPlayer: "Otger (10)" },
    { id: 4, slug: "victoria", 
      name: "FC Victòria", mainColor: "black", secondColor: "white", textColor: "white", 
      description: "El Futbol Club Victòria és un prestigiós club de futbol situat en la zona alta de Terradell. El Victòria sempre és candidat al títol.", 
      rivals: "El principal rival del Victòria és el Politècnic. ", 
      mainPlayer: "Martí (3)" },
    { id: 5, slug: "nautic", 
      name: "Club Nàutic", mainColor: "blue", secondColor: "white", textColor: "white", 
      description: "El Club Nàutic és un club multiesportiu situat en una població mitjana a la desembocadura del riu.", 
      rivals: "El principal rival del Nàutic és el Pescadors. També té rivalitat amb el Dos Fars.", 
      mainPlayer: "Ot (8)" },
    { id: 6, slug: "dos_fars", name: "Dos Fars Club Esportiu", mainColor: "blue", secondColor: "yellow", textColor: "white", 
      description: "El Dos Fars se situa en un petit poble situat en un petit golf. Els dos fars que senyalen els extrems del golf als vaixells, dónen nom a l'equip.", 
      rivals: "El principal rival del Dos Fars és el Nàutic. També guarden rivalitat amb el Pescador.", 
      mainPlayer: "Narcís (2)" },
    { id: 7, slug: "pescador", name: "CF Pescador", mainColor: "white", secondColor: "blue", textColor: "blue", 
      description: "El Club de Futbol Pescador està situat en una població mitjana a la desembocadura del riu. El club neix en el barri que històricament havia estat el dels pescadors.", 
      rivals: "El principal rival del Pescador és el Nàutic. També té rivalitat amb el Dos Fars.", 
      mainPlayer: "Marina (1)" },
    { id: 8, slug: "nou_vapor", name: "CE Nou Vapor", mainColor: "blue", secondColor: "white", textColor: "yellow", 
      description: "El Nou Vapor és un equip d'un poble mitjà situat al costat del riu en una petita plana entre les muntanyes. Antigament havia tingut una forta indústria tèxtil. El Club va néixer com una escissió del CE Vapor.", 
      rivals: "", 
      mainPlayer: "Marina (1)" },
    { id: 9, slug: "politecnic", name: "CE Institut Politècnic", mainColor: "red", secondColor: "black", textColor: "white", 
      description: "El Politècnic és l'equip del prestigiós institut tecnològic de Terradell. Famós per l'excel·lència dels seus estudiants, el politècnic compta amb una àmplia secció esportiva. En el futbol solen aconseguir força èxits.", 
      rivals: "El principal rival del Politècnic és el Victoria. També tenen rivalitat amb el comerç", 
      mainPlayer: "Marina (1)" },
    { id: 10, slug: "guilla", name: "La Guilla CF", mainColor: "orange", secondColor: "white", textColor: "white", 
      description: "La Guilla és un club situat en un poblet al mig d'una extensa zona boscosa famosa per les seves fonts d'aigua. La indústria fustera també hi té un pes important.", 
      rivals: "El principal rival de la Guilla és l'Olivera. També guarden rivalitat amb el Nou Vapor i el Victòria.", 
      mainPlayer: "Marina (1)" }
  ],
  es: [
    { id: 1, slug: "vapor", name: "CE El Vapor", mainColor: "black", secondColor: "white", textColor: "red", description: "Descripción en Español", rivals: "", mainPlayer: "Fàtima (8)" },
    { id: 2, slug: "olivera", name: "CF Olivera", mainColor: "green", secondColor: "white", textColor: "white", description: "Descripción en Español", rivals: "", mainPlayer: "Aina (6)" },
    { id: 3, slug: "minero", name: "Club Atlètic Miner", mainColor: "yellow", secondColor: "black", textColor: "white", description: "English description", rivals: "", mainPlayer: "Otger (10)" },
    { id: 4, slug: "victoria", name: "FC Victòria", mainColor: "black", secondColor: "white", textColor: "white", description: "English description", rivals: "", mainPlayer: "Martí (3)" },
    { id: 5, slug: "nautico", name: "Club Nàutic", mainColor: "blue", secondColor: "white", textColor: "white", description: "English description", rivals: "", mainPlayer: "Ot (8)" },
    { id: 6, slug: "dos_faros", name: "Dos Fars Club Esportiu", mainColor: "blue", secondColor: "yellow", textColor: "white", description: "English description", rivals: "", mainPlayer: "Narcís (2)" },
    { id: 7, slug: "pescador", name: "CF Pescador", mainColor: "white", secondColor: "blue", textColor: "blue", description: "English description", rivals: "", mainPlayer: "Marina (1)" },
    { id: 8, slug: "nuevo_vapor", name: "CE Nou Vapor", mainColor: "blue", secondColor: "white", textColor: "yellow", description: "English description", rivals: "", mainPlayer: "Marina (1)" },
    { id: 9, slug: "politecnico", name: "CE Institut Politècnic", mainColor: "red", secondColor: "black", textColor: "white", description: "English description", rivals: "", mainPlayer: "Marina (1)" },
    { id: 10, slug: "zorros", name: "La Guilla CF", mainColor: "orange", secondColor: "white", textColor: "white", description: "English description", rivals: "", mainPlayer: "Marina (1)" }
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
