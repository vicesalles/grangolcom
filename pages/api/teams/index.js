// /pages/api/teams/index.js
const teams = [
  { slug: "vapor", name: "CE El Vapor" },
  { slug: "olivera", name: "CF Olivera" },
  { slug: "miner", name: "Atl. Miner" },
  { slug: "victoria", name: "FC Victòria" },
  { slug: "pescador", name: "CF Pescador" },
  { slug: "nautic", name: "Club Nàutic"},
  { slug: "nou_vapor", name: "CE Nou Vapor"},
  { slug: "guilla", name: "La Guilla Club de Futbol"},
  { slug: "politecnic", name: "Club Esportiu de l'Institut Politècnic"},
  { slug: "dos_fars", name: "Dos Fars Club Esportiu"},
];

export default function handler(req, res) {
  // Return both slug and name for each team
  res.status(200).json(teams);
}
