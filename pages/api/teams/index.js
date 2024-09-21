// /pages/api/teams/index.js
const teams = [
  { slug: "vapor", name: "CE El Vapor" },
  { slug: "olivera", name: "CF Olivera" },
  { slug: "miners", name: "Atl. Miner" },
  { slug: "victoria", name: "FC Victòria" },
  { slug: "pescador", name: "CF Pescador" }
];

export default function handler(req, res) {
  // Return both slug and name for each team
  res.status(200).json(teams);
}
