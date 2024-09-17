// /pages/api/teams/index.js
const teams = [
    { slug: "vapor" },
    { slug: "olivera" },
    { slug: "miners" }
  ];
  
  export default function handler(req, res) {
    const slugs = teams.map(team => ({ slug: team.slug }));
    res.status(200).json(slugs);
  }
  