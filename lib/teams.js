// /lib/teams.js
// Re-exports team data enriched with translation keys.
// Language-dependent text lives in public/locales/<lang>/teams.json.

import { teamsData } from './teamsData';

function enrichTeam(team) {
  return {
    slug: team.id,
    key: team.key,
    colors: team.colors,
    pattern: team.pattern,
    nameKey: `teams:${team.id}_name`,
    shortNameKey: `teams:${team.id}_shortName`,
    nicknameKey: `teams:${team.id}_nickname`,
    descriptionKey: `teams:${team.id}_description`,
    rivalsKey: `teams:${team.id}_rivals`,
    stadiumKey: `teams:${team.id}_stadium`,
    players: team.players.map((p) => ({
      id: p.id,
      name: p.name,
      number: p.number,
      isMainPlayer: p.isMainPlayer,
      role: p.role,
      roleKey: `teams:role_${p.role}`,
      model3d: p.model3d,
    })),
  };
}

export function getAllTeamsByLocale(locale) {
  // Locale is kept in the signature for backward compatibility,
  // but team data is now language-independent.
  return teamsData.map(enrichTeam);
}

export function getTeamBySlugAndLocale(slug, locale) {
  const allTeams = getAllTeamsByLocale(locale);
  return allTeams.find((team) => team.slug === slug) || null;
}
